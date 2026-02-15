import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ── CORS ──────────────────────────────────────────────────────────────
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// ── Helpers ───────────────────────────────────────────────────────────
function jsonResp(body: Record<string, unknown>, status: number, extra?: Record<string, string>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json", ...extra },
  });
}

async function sha256(raw: string): Promise<string> {
  const data = new TextEncoder().encode(raw.toLowerCase().trim());
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function getClientIp(req: Request): string {
  const fwd =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";
  return fwd.split(",")[0].trim();
}

// ── Rate limiter ──────────────────────────────────────────────────────
interface RateWindow {
  scope: "ip" | "email";
  windowSeconds: number;
  limit: number;
  windowLabel: string;
}

const RATE_WINDOWS: RateWindow[] = [
  { scope: "ip", windowSeconds: 600, limit: 5, windowLabel: "10m" },
  { scope: "ip", windowSeconds: 3600, limit: 20, windowLabel: "1h" },
  { scope: "email", windowSeconds: 86400, limit: 3, windowLabel: "24h" },
];

async function checkRateLimit(
  supabase: ReturnType<typeof createClient>,
  endpoint: string,
  ipHash: string,
  emailHash: string | null,
): Promise<{ limited: boolean; window?: RateWindow; retryAfter?: number }> {
  // Opportunistic cleanup (non-blocking best-effort)
  supabase.from("rate_limit_events").delete().lt("expires_at", new Date().toISOString());

  for (const w of RATE_WINDOWS) {
    const keyHash = w.scope === "ip" ? ipHash : emailHash;
    if (!keyHash) continue;

    const since = new Date(Date.now() - w.windowSeconds * 1000).toISOString();
    const { count } = await supabase
      .from("rate_limit_events")
      .select("id", { count: "exact", head: true })
      .eq("endpoint", endpoint)
      .eq("key_type", w.scope)
      .eq("key_hash", keyHash)
      .gte("created_at", since);

    if ((count ?? 0) >= w.limit) {
      return { limited: true, window: w, retryAfter: w.windowSeconds };
    }
  }
  return { limited: false };
}

async function recordRateHits(
  supabase: ReturnType<typeof createClient>,
  endpoint: string,
  ipHash: string,
  emailHash: string | null,
) {
  const rows: Record<string, unknown>[] = [];
  for (const w of RATE_WINDOWS) {
    const keyHash = w.scope === "ip" ? ipHash : emailHash;
    if (!keyHash) continue;
    rows.push({
      endpoint,
      key_type: w.scope,
      key_hash: keyHash,
      window_seconds: w.windowSeconds,
      expires_at: new Date(Date.now() + w.windowSeconds * 1000).toISOString(),
    });
  }
  if (rows.length > 0) {
    await supabase.from("rate_limit_events").insert(rows);
  }
}

// ── Main handler ──────────────────────────────────────────────────────
Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST")
    return jsonResp({ error: "Method not allowed", code: "method_not_allowed" }, 405);

  // Parse body
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return jsonResp({ error: "Invalid JSON", code: "invalid_json" }, 400);
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  // ── Step 0: Rate limiting ─────────────────────────────────────────
  const clientIp = getClientIp(req);
  const ipHash = await sha256(clientIp);
  const customerObj = body.customer as Record<string, unknown> | undefined;
  const emailRaw = (customerObj?.email as string) || "";
  const emailHash = emailRaw ? await sha256(emailRaw) : null;

  const rl = await checkRateLimit(supabase, "submit-estimation", ipHash, emailHash);
  if (rl.limited) {
    return jsonResp(
      {
        error: "Rate limit exceeded",
        code: "rate_limit_exceeded",
        details: {
          endpoint: "submit-estimation",
          scope: rl.window!.scope,
          window: rl.window!.windowLabel,
          limit: rl.window!.limit,
        },
        retryAfterSeconds: rl.retryAfter,
      },
      429,
      { "Retry-After": String(rl.retryAfter) },
    );
  }

  // ── Step 1: Validate payload ──────────────────────────────────────
  const c = customerObj as Record<string, string> | undefined;
  const car = body.car as Record<string, unknown> | undefined;
  const val = body.valuation as Record<string, unknown> | undefined;
  const photos = Array.isArray(body.photos)
    ? (body.photos as Record<string, unknown>[])
    : [];

  if (!c?.firstName || !c?.lastName || !c?.email || !c?.phone)
    return jsonResp({ error: "Missing customer fields", code: "validation_error" }, 400);
  if (
    !car?.brand || !car?.model || !car?.year ||
    !car?.mileage || !car?.fuelType || !car?.transmission ||
    !car?.power || !car?.bodyType || !car?.condition
  )
    return jsonResp({ error: "Missing car fields", code: "validation_error" }, 400);

  const priceRange = val?.priceRange as { min?: number; max?: number } | undefined;
  if (
    !val ||
    typeof val.estimatedPrice !== "number" ||
    !priceRange?.min ||
    !priceRange?.max ||
    !val.explanation ||
    !val.marketTrend
  )
    return jsonResp({ error: "Missing or invalid valuation", code: "validation_error" }, 400);

  // ── Step 2: Insert estimation ─────────────────────────────────────
  const estRow = {
    status: "estimated",
    first_name: c.firstName,
    last_name: c.lastName,
    email: c.email,
    phone: c.phone,
    brand: car.brand,
    model: car.model,
    variant: car.variant ?? null,
    year: car.year,
    mileage: car.mileage,
    fuel_type: car.fuelType,
    transmission: car.transmission,
    power: car.power,
    body_type: car.bodyType,
    condition: car.condition,
    desired_price: car.desiredPrice ?? null,
    vin: car.vin ?? null,
    doors: car.doors ?? null,
    postal_code: car.postalCode ?? null,
    color: car.color ?? null,
    estimated_price: val.estimatedPrice,
    price_min: priceRange.min,
    price_max: priceRange.max,
    explanation: val.explanation,
    market_trend: val.marketTrend,
    sources: val.sources ?? null,
  };

  const { data: estimation, error: insertErr } = await supabase
    .from("estimations")
    .insert(estRow)
    .select("id")
    .single();
  if (insertErr)
    return jsonResp({ error: "Failed to save estimation", code: "db_error" }, 500);

  const estimationId = estimation.id as string;

  // ── Step 3: Insert photos ─────────────────────────────────────────
  for (const p of photos) {
    if (p?.storagePath) {
      await supabase.from("estimation_photos").insert({
        estimation_id: estimationId,
        storage_path: p.storagePath,
        original_filename: p.originalFilename ?? null,
        content_type: p.contentType ?? null,
        size_bytes: p.sizeBytes ?? null,
      });
    }
  }

  // ── Step 4: Send admin email via Resend ───────────────────────────
  const resendKey = Deno.env.get("RESEND_API_KEY");
  const from =
    Deno.env.get("RESEND_FROM") ||
    "Meinautoverkauf <no-reply@meinautoverkauf.de>";
  const adminTo = "abdulqaderdost@yahoo.com";

  if (resendKey) {
    // Generate signed photo URLs (30 days = 2592000 seconds)
    let photoLinksHtml = "";
    if (photos.length > 0) {
      const { data: photoRows } = await supabase
        .from("estimation_photos")
        .select("id, storage_path, original_filename")
        .eq("estimation_id", estimationId);

      if (photoRows && photoRows.length > 0) {
        const links: string[] = [];
        for (const pr of photoRows) {
          const { data: signedData } = await supabase.storage
            .from("car-photos")
            .createSignedUrl(pr.storage_path, 2592000);
          if (signedData?.signedUrl) {
            links.push(
              `<li><a href="${signedData.signedUrl}">${pr.original_filename || pr.storage_path}</a></li>`,
            );
          }
        }
        if (links.length > 0) {
          photoLinksHtml = `<h3>Fotos</h3><ul>${links.join("")}</ul>`;
        }
      }
    }

    const variantLabel = car.variant || "";
    const subject = `Neue Fahrzeugbewertung: ${car.brand} ${car.model}${variantLabel ? " " + variantLabel : ""} (${car.postalCode || car.year})`;
    const html = `
      <h2>Neue Fahrzeugbewertung</h2>
      <h3>Kunde</h3>
      <p><strong>${c.firstName} ${c.lastName}</strong><br/>
      E-Mail: ${c.email}<br/>
      Telefon: ${c.phone}</p>
      <h3>Fahrzeug</h3>
      <table border="1" cellpadding="4" cellspacing="0" style="border-collapse:collapse;">
        <tr><td>Marke</td><td>${car.brand}</td></tr>
        <tr><td>Modell</td><td>${car.model}</td></tr>
        ${car.variant ? `<tr><td>Variante</td><td>${car.variant}</td></tr>` : ""}
        <tr><td>Baujahr</td><td>${car.year}</td></tr>
        <tr><td>Kilometerstand</td><td>${car.mileage}</td></tr>
        <tr><td>Kraftstoff</td><td>${car.fuelType}</td></tr>
        <tr><td>Getriebe</td><td>${car.transmission}</td></tr>
        <tr><td>Leistung</td><td>${car.power}</td></tr>
        <tr><td>Karosserie</td><td>${car.bodyType}</td></tr>
        <tr><td>Zustand</td><td>${car.condition}</td></tr>
        ${car.color ? `<tr><td>Farbe</td><td>${car.color}</td></tr>` : ""}
        ${car.doors ? `<tr><td>Türen</td><td>${car.doors}</td></tr>` : ""}
        ${car.postalCode ? `<tr><td>PLZ</td><td>${car.postalCode}</td></tr>` : ""}
        ${car.vin ? `<tr><td>FIN</td><td>${car.vin}</td></tr>` : ""}
        ${car.desiredPrice ? `<tr><td>Wunschpreis</td><td>${car.desiredPrice}</td></tr>` : ""}
      </table>
      <h3>Bewertung</h3>
      <p><strong>Geschätzter Preis: ${val.estimatedPrice} EUR</strong><br/>
      Preisspanne: ${priceRange.min} – ${priceRange.max} EUR<br/>
      Markttrend: ${val.marketTrend}</p>
      <p>${val.explanation}</p>
      ${photoLinksHtml}
      <hr/>
      <p style="color:#888;font-size:12px;">Estimation ID: ${estimationId}</p>
    `;

    try {
      const resendResp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to: adminTo, subject, html }),
      });

      // Log email
      const resendBody = await resendResp.json().catch(() => null);
      await supabase.from("email_log").insert({
        kind: "estimation_created",
        estimation_id: estimationId,
        recipients: [adminTo],
        resend_message_id: resendBody?.id ?? null,
        error: resendResp.ok ? null : JSON.stringify(resendBody),
      });
    } catch (e) {
      await supabase.from("email_log").insert({
        kind: "estimation_created",
        estimation_id: estimationId,
        recipients: [adminTo],
        error: String(e),
      });
    }
  }

  // Record rate limit hits on success
  await recordRateHits(supabase, "submit-estimation", ipHash, emailHash);

  // ── Step 5: Return response ───────────────────────────────────────
  return jsonResp({ estimationId, status: "estimated" }, 200);
});
