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
  scope: "ip";
  windowSeconds: number;
  limit: number;
  windowLabel: string;
}

const RATE_WINDOWS: RateWindow[] = [
  { scope: "ip", windowSeconds: 3600, limit: 3, windowLabel: "1h" },
];

async function checkRateLimit(
  supabase: ReturnType<typeof createClient>,
  endpoint: string,
  ipHash: string,
): Promise<{ limited: boolean; window?: RateWindow; retryAfter?: number }> {
  // Opportunistic cleanup
  supabase.from("rate_limit_events").delete().lt("expires_at", new Date().toISOString());

  for (const w of RATE_WINDOWS) {
    const since = new Date(Date.now() - w.windowSeconds * 1000).toISOString();
    const { count } = await supabase
      .from("rate_limit_events")
      .select("id", { count: "exact", head: true })
      .eq("endpoint", endpoint)
      .eq("key_type", w.scope)
      .eq("key_hash", ipHash)
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
) {
  const rows = RATE_WINDOWS.map((w) => ({
    endpoint,
    key_type: w.scope,
    key_hash: ipHash,
    window_seconds: w.windowSeconds,
    expires_at: new Date(Date.now() + w.windowSeconds * 1000).toISOString(),
  }));
  await supabase.from("rate_limit_events").insert(rows);
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

  // ── Step 0: Rate limiting (IP only) ───────────────────────────────
  const clientIp = getClientIp(req);
  const ipHash = await sha256(clientIp);

  const rl = await checkRateLimit(supabase, "book-appointment", ipHash);
  if (rl.limited) {
    return jsonResp(
      {
        error: "Rate limit exceeded",
        code: "rate_limit_exceeded",
        details: {
          endpoint: "book-appointment",
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
  const estimationId = body.estimationId as string | undefined;
  const preferredDate = body.preferredDate as string | undefined;
  const preferredTime = body.preferredTime as string | undefined;
  const deliveryType = body.deliveryType as string | undefined;
  const bringLocation = body.bringLocation as string | undefined;

  if (!estimationId)
    return jsonResp({ error: "Missing estimationId", code: "validation_error" }, 400);
  if (!preferredDate || !preferredTime)
    return jsonResp({ error: "Missing preferredDate or preferredTime", code: "validation_error" }, 400);
  if (!deliveryType || !["bring_car", "pickup"].includes(deliveryType))
    return jsonResp({ error: "Invalid deliveryType", code: "validation_error" }, 400);
  if (deliveryType === "bring_car") {
    if (!bringLocation || !["bodenheim", "ruesselsheim"].includes(bringLocation))
      return jsonResp({
        error: "bring_car requires bringLocation bodenheim or ruesselsheim",
        code: "validation_error",
      }, 400);
  } else if (bringLocation) {
    return jsonResp({ error: "bringLocation must be null for pickup", code: "validation_error" }, 400);
  }

  // Verify estimation exists
  const { data: est, error: estErr } = await supabase
    .from("estimations")
    .select("id, first_name, last_name, email, phone, brand, model, variant, year, mileage, fuel_type, transmission, power, body_type, condition, postal_code, color, doors, vin, desired_price, estimated_price, price_min, price_max, market_trend, explanation")
    .eq("id", estimationId)
    .single();
  if (estErr || !est)
    return jsonResp({ error: "Estimation not found", code: "not_found" }, 404);

  // ── Step 2: Insert appointment ────────────────────────────────────
  const { data: appt, error: apptErr } = await supabase
    .from("appointments")
    .insert({
      estimation_id: estimationId,
      preferred_date: preferredDate,
      preferred_time: preferredTime,
      delivery_type: deliveryType,
      bring_location: deliveryType === "bring_car" ? bringLocation : null,
    })
    .select("id")
    .single();
  if (apptErr)
    return jsonResp({
      error: "Failed to create appointment (estimation may already have one)",
      code: "db_error",
    }, 400);

  // ── Step 3: Update estimation status ──────────────────────────────
  await supabase
    .from("estimations")
    .update({ status: "appointment_booked" })
    .eq("id", estimationId);

  // ── Step 4: Send email via Resend ─────────────────────────────────
  const resendKey = Deno.env.get("RESEND_API_KEY");
  const from =
    Deno.env.get("RESEND_FROM") ||
    "Meinautoverkauf <no-reply@meinautoverkauf.de>";

  if (resendKey) {
    // Build recipient list
    const toList: string[] = ["abdulqaderdost@yahoo.com"];
    if (deliveryType === "bring_car" && bringLocation === "bodenheim")
      toList.push("abdulqaderdost@gmail.com");
    if (deliveryType === "bring_car" && bringLocation === "ruesselsheim")
      toList.push("abdulqader.abed.dost@gmail.com");

    // Generate signed photo URLs (30 days)
    let photoLinksHtml = "";
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

    const deliveryLabel = deliveryType === "bring_car"
      ? `Auto bringen (${bringLocation})`
      : "Abholung";

    const subject = `Neuer Übergabetermin: ${est.brand} ${est.model} am ${preferredDate} (${deliveryType})`;
    const html = `
      <h2>Neuer Übergabetermin</h2>
      <h3>Termin</h3>
      <p><strong>Datum:</strong> ${preferredDate}<br/>
      <strong>Uhrzeit:</strong> ${preferredTime}<br/>
      <strong>Übergabe:</strong> ${deliveryLabel}</p>
      <h3>Kunde</h3>
      <p><strong>${est.first_name} ${est.last_name}</strong><br/>
      E-Mail: ${est.email}<br/>
      Telefon: ${est.phone}</p>
      <h3>Fahrzeug</h3>
      <table border="1" cellpadding="4" cellspacing="0" style="border-collapse:collapse;">
        <tr><td>Marke</td><td>${est.brand}</td></tr>
        <tr><td>Modell</td><td>${est.model}</td></tr>
        <tr><td>Variante</td><td>${est.variant}</td></tr>
        <tr><td>Baujahr</td><td>${est.year}</td></tr>
        <tr><td>Kilometerstand</td><td>${est.mileage}</td></tr>
        <tr><td>Kraftstoff</td><td>${est.fuel_type}</td></tr>
        <tr><td>Getriebe</td><td>${est.transmission}</td></tr>
        <tr><td>Leistung</td><td>${est.power}</td></tr>
        <tr><td>Karosserie</td><td>${est.body_type}</td></tr>
        <tr><td>Zustand</td><td>${est.condition}</td></tr>
        ${est.color ? `<tr><td>Farbe</td><td>${est.color}</td></tr>` : ""}
        ${est.doors ? `<tr><td>Türen</td><td>${est.doors}</td></tr>` : ""}
        ${est.postal_code ? `<tr><td>PLZ</td><td>${est.postal_code}</td></tr>` : ""}
        ${est.vin ? `<tr><td>FIN</td><td>${est.vin}</td></tr>` : ""}
        ${est.desired_price ? `<tr><td>Wunschpreis</td><td>${est.desired_price}</td></tr>` : ""}
      </table>
      <h3>Bewertung</h3>
      <p><strong>Geschätzter Preis: ${est.estimated_price} EUR</strong><br/>
      Preisspanne: ${est.price_min} – ${est.price_max} EUR<br/>
      Markttrend: ${est.market_trend}</p>
      <p>${est.explanation}</p>
      ${photoLinksHtml}
      <hr/>
      <p style="color:#888;font-size:12px;">Estimation ID: ${estimationId} | Appointment ID: ${appt.id}</p>
    `;

    try {
      const resendResp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to: toList, subject, html }),
      });

      const resendBody = await resendResp.json().catch(() => null);
      await supabase.from("email_log").insert({
        kind: "appointment_booked",
        estimation_id: estimationId,
        appointment_id: appt.id,
        recipients: toList,
        resend_message_id: resendBody?.id ?? null,
        error: resendResp.ok ? null : JSON.stringify(resendBody),
      });
    } catch (e) {
      await supabase.from("email_log").insert({
        kind: "appointment_booked",
        estimation_id: estimationId,
        appointment_id: appt.id,
        recipients: toList,
        error: String(e),
      });
    }
  }

  // Record rate limit hits
  await recordRateHits(supabase, "book-appointment", ipHash);

  // ── Step 5: Return response ───────────────────────────────────────
  return jsonResp(
    { appointmentId: appt.id, estimationId, status: "appointment_booked" },
    200,
  );
});
