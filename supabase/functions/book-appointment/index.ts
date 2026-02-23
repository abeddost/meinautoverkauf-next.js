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

const BRANCH_LOCATIONS = {
  bodenheim: {
    name: "Bodenheim",
    address: "Am Kümmerling 41a, 55294 Bodenheim",
  },
  ruesselsheim: {
    name: "Rüsselsheim",
    address: "Wormser Str. 8b, 65428 Rüsselsheim am Main",
  },
} as const;

type BranchLocationId = keyof typeof BRANCH_LOCATIONS;

const BRANCH_LOCATION_IDS = Object.keys(BRANCH_LOCATIONS) as BranchLocationId[];

function formatMileageDisplay(rawMileage: string): string {
  const value = String(rawMileage || "").trim();
  if (!value) return "-";

  if (/^\d+$/.test(value)) {
    return `${Number(value).toLocaleString("de-DE")} km`;
  }

  if (/^\d{1,3}(?:\.\d{3})*–\d{1,3}(?:\.\d{3})*$/.test(value) || /^Mehr als \d{1,3}(?:\.\d{3})*$/.test(value)) {
    return `${value} km`;
  }

  return value;
}

function buildCustomerAppointmentEmail(params: {
  firstName: string;
  lastName: string;
  brand: string;
  model: string;
  year: string;
  mileage: string;
  estimatedPrice: number;
  priceMin: number;
  priceMax: number;
  preferredDate: string;
  preferredTime: string;
  deliveryLabel: string;
  appointmentAddress?: string;
  estimationId: string;
  appointmentId: string;
}): string {
  const {
    firstName, lastName, brand, model, year, mileage,
    estimatedPrice, priceMin, priceMax,
    preferredDate, preferredTime, deliveryLabel, appointmentAddress,
  } = params;

  const bodyContent = `
    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">Am ${preferredDate} um ${preferredTime} – ${deliveryLabel}.</div>

    <h1 style="font-size:22px;font-weight:900;color:#0f172a;margin:0 0 8px;">Ihr Termin ist bestätigt</h1>
    <p style="font-size:15px;color:#f97316;font-weight:700;margin:0 0 24px;letter-spacing:0.02em;">Übergabetermin gebucht</p>

    <p style="font-size:15px;color:#334155;margin:0 0 8px;">
      Sehr geehrte(r) ${firstName} ${lastName},
    </p>
    <p style="font-size:15px;color:#334155;line-height:1.7;margin:0 0 28px;">
      Ihr Übergabetermin wurde erfolgreich gebucht. Wir freuen uns auf Sie und stehen für Fragen jederzeit zur Verfügung.
    </p>

    <!-- Appointment highlight box -->
    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:2px solid #f97316;margin-bottom:28px;background:#fff7ed;">
      <tr>
        <td style="padding:16px 20px;">
          <p style="margin:0 0 6px;font-size:12px;font-weight:900;color:#f97316;letter-spacing:0.1em;text-transform:uppercase;">Ihr Termin</p>
          <p style="margin:0;font-size:20px;font-weight:900;color:#0f172a;">${preferredDate} um ${preferredTime} Uhr</p>
          <p style="margin:6px 0 0;font-size:14px;color:#64748b;">${deliveryLabel}</p>
          ${appointmentAddress ? `<p style="margin:6px 0 0;font-size:14px;color:#334155;"><strong>Adresse:</strong> ${appointmentAddress}</p>` : ""}
        </td>
      </tr>
    </table>

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
      ${infoRow("Kilometerstand", formatMileageDisplay(mileage))}
      ${infoRow("Geschätzter Preis", estimatedPrice.toLocaleString("de-DE") + " EUR")}
      ${infoRow("Preisspanne", priceMin.toLocaleString("de-DE") + " – " + priceMax.toLocaleString("de-DE") + " EUR")}
    </table>

    <!-- CTA -->
    <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      <tr>
        <td style="background:#f97316;border-radius:50px;padding:0;">
          <a href="https://www.meinautoverkauf.de"
             style="display:inline-block;padding:14px 32px;font-size:14px;font-weight:900;color:#ffffff;text-decoration:none;letter-spacing:0.03em;border-radius:50px;">
            Zur Website
          </a>
        </td>
      </tr>
    </table>

    <p style="font-size:14px;color:#64748b;line-height:1.7;margin:0;">
      Bei Fragen erreichen Sie uns unter <a href="mailto:info@meinautoverkauf.de" style="color:#f97316;font-weight:bold;">info@meinautoverkauf.de</a> oder
      <a href="tel:+4917662878366" style="color:#f97316;font-weight:bold;">0176 62878366</a>.
    </p>
  `;

  return emailShell(bodyContent);
}

function buildAdminAppointmentEmail(params: {
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
  preferredDate: string;
  preferredTime: string;
  deliveryLabel: string;
  photoLinksHtml: string;
  estimationId: string;
  appointmentId: string;
}): string {
  const p = params;

  const bodyContent = `
    <h1 style="font-size:20px;font-weight:900;color:#0f172a;margin:0 0 6px;">Neuer Übergabetermin</h1>
    <p style="font-size:13px;color:#64748b;margin:0 0 24px;">Estimation ID: ${p.estimationId} | Appointment ID: ${p.appointmentId}</p>

    <!-- Termin -->
    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:2px solid #f97316;margin-bottom:20px;background:#fff7ed;">
      <tr>
        <td style="padding:16px 20px;">
          <p style="margin:0 0 4px;font-size:12px;font-weight:900;color:#f97316;letter-spacing:0.1em;text-transform:uppercase;">Termin</p>
          <p style="margin:0;font-size:18px;font-weight:900;color:#0f172a;">${p.preferredDate} um ${p.preferredTime} Uhr</p>
          <p style="margin:4px 0 0;font-size:14px;color:#64748b;">${p.deliveryLabel}</p>
        </td>
      </tr>
    </table>

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
      ${infoRow("Kilometerstand", formatMileageDisplay(p.mileage))}
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
    if (!bringLocation || !BRANCH_LOCATION_IDS.includes(bringLocation as BranchLocationId))
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

  // ── Step 4: Send emails ───────────────────────────────────────────
  const resendKey = Deno.env.get("RESEND_API_KEY");
  const adminEmail = Deno.env.get("ADMIN_EMAIL") || "info@meinautoverkauf.de";
  const from = `Meinautoverkauf.de <${adminEmail}>`;

  if (resendKey) {
    const locationInfo =
      deliveryType === "bring_car" && bringLocation
        ? BRANCH_LOCATIONS[bringLocation as BranchLocationId]
        : null;

    // Delivery label for both emails
    const deliveryLabel = locationInfo
      ? `Filial-Abgabe – ${locationInfo.name}`
      : "Abholung (wir kommen zu Ihnen)";
    const appointmentAddress = locationInfo?.address;

    // Signed photo URLs for admin email
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

    // ── Admin notification ────────────────────────────────────────
    const adminSubject = `Neuer Übergabetermin: ${est.brand} ${est.model}, Bj. ${est.year}, ${formatMileageDisplay(String(est.mileage))}, ${est.power} – ${preferredDate}`;
    const adminHtml = buildAdminAppointmentEmail({
      firstName: est.first_name,
      lastName: est.last_name,
      email: est.email,
      phone: est.phone,
      brand: est.brand,
      model: est.model,
      variant: est.variant || "",
      year: est.year,
      mileage: est.mileage,
      fuelType: est.fuel_type,
      transmission: est.transmission,
      power: est.power,
      bodyType: est.body_type,
      condition: est.condition,
      color: est.color || "",
      doors: est.doors || "",
      postalCode: est.postal_code || "",
      vin: est.vin || "",
      desiredPrice: est.desired_price || "",
      estimatedPrice: est.estimated_price,
      priceMin: est.price_min,
      priceMax: est.price_max,
      marketTrend: est.market_trend,
      explanation: est.explanation,
      preferredDate,
      preferredTime,
      deliveryLabel,
      photoLinksHtml,
      estimationId,
      appointmentId: appt.id,
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
        appointment_id: appt.id,
        recipients: [adminEmail],
        resend_message_id: adminBody?.id ?? null,
        error: adminResp.ok ? null : JSON.stringify(adminBody),
      });
    } catch (e) {
      await supabase.from("email_log").insert({
        kind: "admin_notification",
        estimation_id: estimationId,
        appointment_id: appt.id,
        recipients: [adminEmail],
        error: String(e),
      });
    }

    // ── Customer confirmation ─────────────────────────────────────
    const customerSubject = "Ihr Termin ist bestätigt – Meinautoverkauf.de";
    const customerHtml = buildCustomerAppointmentEmail({
      firstName: est.first_name,
      lastName: est.last_name,
      brand: est.brand,
      model: est.model,
      year: est.year,
      mileage: est.mileage,
      estimatedPrice: est.estimated_price,
      priceMin: est.price_min,
      priceMax: est.price_max,
      preferredDate,
      preferredTime,
      deliveryLabel,
      appointmentAddress,
      estimationId,
      appointmentId: appt.id,
    });

    try {
      const custResp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, to: est.email, subject: customerSubject, html: customerHtml }),
      });
      const custBody = await custResp.json().catch(() => null);
      await supabase.from("email_log").insert({
        kind: "customer_confirmation",
        estimation_id: estimationId,
        appointment_id: appt.id,
        recipients: [est.email],
        resend_message_id: custBody?.id ?? null,
        error: custResp.ok ? null : JSON.stringify(custBody),
      });
    } catch (e) {
      await supabase.from("email_log").insert({
        kind: "customer_confirmation",
        estimation_id: estimationId,
        appointment_id: appt.id,
        recipients: [est.email],
        error: String(e),
      });
    }
  }

  // ── Step 5: Rate limit record + return ────────────────────────────
  await recordRateHits(supabase, "book-appointment", ipHash);
  return jsonResp(
    { appointmentId: appt.id, estimationId, status: "appointment_booked" },
    200,
  );
});
