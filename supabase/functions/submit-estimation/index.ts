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

// ── Email helpers ─────────────────────────────────────────────────────

function emailShell(bodyContent: string): string {
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meinautoverkauf.de</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.10);">

          <!-- Header -->
          <tr>
            <td style="background:#0f172a;padding:28px 36px;border-bottom:3px solid #f97316;">
              <img src="https://www.meinautoverkauf.de/logo-white.webp"
                   alt="Meinautoverkauf.de"
                   width="200"
                   style="display:block;height:auto;max-width:200px;" />
            </td>
          </tr>

          <!-- Orange accent line -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#f97316,#fb923c);"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 36px 28px;">
              ${bodyContent}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f172a;padding:24px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="color:#94a3b8;font-size:13px;line-height:1.8;">
                    <strong style="color:#ffffff;font-size:14px;">Meinautoverkauf.de</strong><br/>
                    <a href="https://www.meinautoverkauf.de" style="color:#f97316;text-decoration:none;">www.meinautoverkauf.de</a><br/>
                    Tel: <a href="tel:+4917662878366" style="color:#f97316;text-decoration:none;">0176 62878366</a><br/>
                    E-Mail: <a href="mailto:info@meinautoverkauf.de" style="color:#f97316;text-decoration:none;">info@meinautoverkauf.de</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:16px;border-top:1px solid #1e293b;margin-top:16px;">
                    <p style="color:#475569;font-size:11px;margin:0;line-height:1.6;">
                      Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht direkt auf diese Nachricht.
                      Meinautoverkauf.de ist ein Dienst für den Ankauf von Kraftfahrzeugen in Deutschland.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function infoRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:10px 14px;font-size:13px;font-weight:bold;color:#475569;background:#f8fafc;border-bottom:1px solid #e2e8f0;width:40%;">${label}</td>
    <td style="padding:10px 14px;font-size:13px;color:#0f172a;background:#ffffff;border-bottom:1px solid #e2e8f0;">${value}</td>
  </tr>`;
}

function buildCustomerEstimationEmail(params: {
  firstName: string;
  lastName: string;
  brand: string;
  model: string;
  year: string;
  mileage: string;
  estimatedPrice: number;
  priceMin: number;
  priceMax: number;
  estimationId: string;
}): string {
  const { firstName, lastName, brand, model, year, mileage, estimatedPrice, priceMin, priceMax } = params;

  const bodyContent = `
    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">Ihre Fahrzeugbewertung wurde erfasst. Wir melden uns in Kürze.</div>

    <h1 style="font-size:22px;font-weight:900;color:#0f172a;margin:0 0 8px;">Ihre Anfrage ist eingegangen</h1>
    <p style="font-size:15px;color:#f97316;font-weight:700;margin:0 0 24px;letter-spacing:0.02em;">Fahrzeugbewertung erhalten</p>

    <p style="font-size:15px;color:#334155;margin:0 0 8px;">
      Sehr geehrte(r) ${firstName} ${lastName},
    </p>
    <p style="font-size:15px;color:#334155;line-height:1.7;margin:0 0 28px;">
      vielen Dank für Ihre Anfrage. Wir haben die Bewertung Ihres Fahrzeugs erhalten und werden uns in Kürze bei Ihnen melden.
    </p>

    <!-- Info card -->
    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:28px;">
      <tr>
        <td colspan="2" style="background:#f97316;padding:10px 14px;">
          <span style="color:#ffffff;font-size:13px;font-weight:900;letter-spacing:0.08em;text-transform:uppercase;">Ihr Fahrzeug</span>
        </td>
      </tr>
      ${infoRow("Marke", brand)}
      ${infoRow("Modell", model)}
      ${infoRow("Baujahr", year)}
      ${infoRow("Kilometerstand", mileage + " km")}
      ${infoRow("Geschätzter Preis", estimatedPrice.toLocaleString("de-DE") + " EUR")}
      ${infoRow("Preisspanne", priceMin.toLocaleString("de-DE") + " – " + priceMax.toLocaleString("de-DE") + " EUR")}
    </table>

    <p style="font-size:14px;color:#64748b;line-height:1.7;margin:0;">
      Unser Team prüft Ihre Anfrage und kontaktiert Sie telefonisch oder per E-Mail, um die nächsten Schritte zu besprechen.
      Bei Fragen erreichen Sie uns unter <a href="mailto:info@meinautoverkauf.de" style="color:#f97316;font-weight:bold;">info@meinautoverkauf.de</a> oder
      <a href="tel:+4917662878366" style="color:#f97316;font-weight:bold;">0176 62878366</a>.
    </p>
  `;

  return emailShell(bodyContent);
}

function buildAdminEstimationEmail(params: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  brand: string;
  model: string;
  variant: string;
  year: string;
  mileage: string;
  fuelType: string;
  transmission: string;
  power: string;
  bodyType: string;
  condition: string;
  color: string;
  doors: string;
  postalCode: string;
  vin: string;
  desiredPrice: string;
  estimatedPrice: number;
  priceMin: number;
  priceMax: number;
  marketTrend: string;
  explanation: string;
  photoLinksHtml: string;
  estimationId: string;
}): string {
  const p = params;
  const bodyContent = `
    <h1 style="font-size:20px;font-weight:900;color:#0f172a;margin:0 0 6px;">Neue Fahrzeugbewertung</h1>
    <p style="font-size:13px;color:#64748b;margin:0 0 24px;">Estimation ID: ${p.estimationId}</p>

    <!-- Kunde -->
    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:20px;">
      <tr><td colspan="2" style="background:#0f172a;padding:8px 14px;"><span style="color:#f97316;font-size:12px;font-weight:900;letter-spacing:0.08em;text-transform:uppercase;">Kunde</span></td></tr>
      ${infoRow("Name", p.firstName + " " + p.lastName)}
      ${infoRow("E-Mail", p.email)}
      ${infoRow("Telefon", p.phone)}
    </table>

    <!-- Fahrzeug -->
    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:20px;">
      <tr><td colspan="2" style="background:#0f172a;padding:8px 14px;"><span style="color:#f97316;font-size:12px;font-weight:900;letter-spacing:0.08em;text-transform:uppercase;">Fahrzeug</span></td></tr>
      ${infoRow("Marke", p.brand)}
      ${infoRow("Modell", p.model)}
      ${p.variant ? infoRow("Variante", p.variant) : ""}
      ${infoRow("Baujahr", p.year)}
      ${infoRow("Kilometerstand", p.mileage)}
      ${infoRow("Kraftstoff", p.fuelType)}
      ${infoRow("Getriebe", p.transmission)}
      ${infoRow("Leistung", p.power)}
      ${infoRow("Karosserie", p.bodyType)}
      ${infoRow("Zustand", p.condition)}
      ${p.color ? infoRow("Farbe", p.color) : ""}
      ${p.doors ? infoRow("Türen", p.doors) : ""}
      ${p.postalCode ? infoRow("PLZ", p.postalCode) : ""}
      ${p.vin ? infoRow("FIN", p.vin) : ""}
      ${p.desiredPrice ? infoRow("Wunschpreis", p.desiredPrice) : ""}
    </table>

    <!-- Bewertung -->
    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:20px;">
      <tr><td colspan="2" style="background:#0f172a;padding:8px 14px;"><span style="color:#f97316;font-size:12px;font-weight:900;letter-spacing:0.08em;text-transform:uppercase;">Bewertung</span></td></tr>
      ${infoRow("Geschätzter Preis", p.estimatedPrice.toLocaleString("de-DE") + " EUR")}
      ${infoRow("Preisspanne", p.priceMin.toLocaleString("de-DE") + " – " + p.priceMax.toLocaleString("de-DE") + " EUR")}
      ${infoRow("Markttrend", p.marketTrend)}
    </table>

    <p style="font-size:13px;color:#334155;line-height:1.6;margin:0 0 20px;">${p.explanation}</p>

    ${p.photoLinksHtml}
  `;

  return emailShell(bodyContent);
}

// ── Main handler ──────────────────────────────────────────────────────
Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST")
    return jsonResp({ error: "Method not allowed", code: "method_not_allowed" }, 405);

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

  // ── Step 3: Process photos ────────────────────────────────────────
  const bucket = "car-photos";
  for (const p of photos) {
    const storagePath = p?.storagePath as string | undefined;
    if (!storagePath) continue;

    let finalPath = storagePath;
    if (storagePath.startsWith("pending/")) {
      const segments = storagePath.split("/");
      const filename = segments[segments.length - 1] || `photo_${Date.now()}.jpg`;
      finalPath = `${estimationId}/${filename}`;

      const { data: blob, error: downloadErr } = await supabase.storage.from(bucket).download(storagePath);
      if (downloadErr || !blob) continue;
      const { error: uploadErr } = await supabase.storage.from(bucket).upload(finalPath, blob, {
        contentType: (p.contentType as string) || "image/jpeg",
        upsert: true,
      });
      if (uploadErr) continue;
      await supabase.storage.from(bucket).remove([storagePath]);
    }

    await supabase.from("estimation_photos").insert({
      estimation_id: estimationId,
      storage_path: finalPath,
      original_filename: (p.originalFilename as string) ?? null,
      content_type: (p.contentType as string) ?? null,
      size_bytes: (p.sizeBytes as number) ?? null,
    });
  }

  // ── Step 4: Send emails ───────────────────────────────────────────
  const resendKey = Deno.env.get("RESEND_API_KEY");
  const adminEmail = Deno.env.get("ADMIN_EMAIL") || "info@meinautoverkauf.de";
  const from = `Meinautoverkauf.de <${adminEmail}>`;

  if (resendKey) {
    // Build signed photo URLs for admin email
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
              `<li><a href="${signedData.signedUrl}" style="color:#f97316;">${pr.original_filename || pr.storage_path}</a></li>`,
            );
          }
        }
        if (links.length > 0) {
          photoLinksHtml = `
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:20px;">
              <tr><td style="background:#0f172a;padding:8px 14px;"><span style="color:#f97316;font-size:12px;font-weight:900;letter-spacing:0.08em;text-transform:uppercase;">Fotos</span></td></tr>
              <tr><td style="padding:14px;background:#ffffff;"><ul style="margin:0;padding-left:20px;">${links.join("")}</ul></td></tr>
            </table>`;
        }
      }
    }

    // ── Admin notification ────────────────────────────────────────
    const adminSubject = `${car.brand} ${car.model}, Bj. ${car.year}, ${String(car.mileage).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} km, ${car.power}`;
    const adminHtml = buildAdminEstimationEmail({
      firstName: c.firstName,
      lastName: c.lastName,
      email: c.email,
      phone: c.phone,
      brand: String(car.brand),
      model: String(car.model),
      variant: String(car.variant || ""),
      year: String(car.year),
      mileage: String(car.mileage),
      fuelType: String(car.fuelType),
      transmission: String(car.transmission),
      power: String(car.power),
      bodyType: String(car.bodyType),
      condition: String(car.condition),
      color: String(car.color || ""),
      doors: String(car.doors || ""),
      postalCode: String(car.postalCode || ""),
      vin: String(car.vin || ""),
      desiredPrice: String(car.desiredPrice || ""),
      estimatedPrice: val.estimatedPrice as number,
      priceMin: priceRange.min as number,
      priceMax: priceRange.max as number,
      marketTrend: String(val.marketTrend),
      explanation: String(val.explanation),
      photoLinksHtml,
      estimationId,
    });

    try {
      const adminResp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, to: adminEmail, subject: adminSubject, html: adminHtml }),
      });
      const adminBody = await adminResp.json().catch(() => null);
      await supabase.from("email_log").insert({
        kind: "admin_notification",
        estimation_id: estimationId,
        recipients: [adminEmail],
        resend_message_id: adminBody?.id ?? null,
        error: adminResp.ok ? null : JSON.stringify(adminBody),
      });
    } catch (e) {
      await supabase.from("email_log").insert({
        kind: "admin_notification",
        estimation_id: estimationId,
        recipients: [adminEmail],
        error: String(e),
      });
    }

    // ── Customer confirmation ─────────────────────────────────────
    const customerSubject = "Ihre Bewertung ist da – Meinautoverkauf.de";
    const customerHtml = buildCustomerEstimationEmail({
      firstName: c.firstName,
      lastName: c.lastName,
      brand: String(car.brand),
      model: String(car.model),
      year: String(car.year),
      mileage: String(car.mileage),
      estimatedPrice: val.estimatedPrice as number,
      priceMin: priceRange.min as number,
      priceMax: priceRange.max as number,
      estimationId,
    });

    try {
      const custResp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, to: c.email, subject: customerSubject, html: customerHtml }),
      });
      const custBody = await custResp.json().catch(() => null);
      await supabase.from("email_log").insert({
        kind: "customer_confirmation",
        estimation_id: estimationId,
        recipients: [c.email],
        resend_message_id: custBody?.id ?? null,
        error: custResp.ok ? null : JSON.stringify(custBody),
      });
    } catch (e) {
      await supabase.from("email_log").insert({
        kind: "customer_confirmation",
        estimation_id: estimationId,
        recipients: [c.email],
        error: String(e),
      });
    }
  }

  // ── Step 5: Rate limit record + return ────────────────────────────
  await recordRateHits(supabase, "submit-estimation", ipHash, emailHash);
  return jsonResp({ estimationId, status: "estimated" }, 200);
});
