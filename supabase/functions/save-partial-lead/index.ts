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
async function checkRateLimit(
  supabase: ReturnType<typeof createClient>,
  endpoint: string,
  ipHash: string,
): Promise<{ limited: boolean; retryAfter?: number }> {
  supabase.from("rate_limit_events").delete().lt("expires_at", new Date().toISOString());

  const windowSeconds = 600;
  const limit = 5;
  const since = new Date(Date.now() - windowSeconds * 1000).toISOString();
  const { count } = await supabase
    .from("rate_limit_events")
    .select("id", { count: "exact", head: true })
    .eq("endpoint", endpoint)
    .eq("key_type", "ip")
    .eq("key_hash", ipHash)
    .gte("created_at", since);

  if ((count ?? 0) >= limit) {
    return { limited: true, retryAfter: windowSeconds };
  }
  return { limited: false };
}

async function recordRateHit(
  supabase: ReturnType<typeof createClient>,
  endpoint: string,
  ipHash: string,
) {
  const windowSeconds = 600;
  await supabase.from("rate_limit_events").insert({
    endpoint,
    key_type: "ip",
    key_hash: ipHash,
    window_seconds: windowSeconds,
    expires_at: new Date(Date.now() + windowSeconds * 1000).toISOString(),
  });
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

  // ── Rate limiting ─────────────────────────────────────────────────
  const clientIp = getClientIp(req);
  const ipHash = await sha256(clientIp);

  const rl = await checkRateLimit(supabase, "save-partial-lead", ipHash);
  if (rl.limited) {
    return jsonResp(
      { error: "Rate limit exceeded", code: "rate_limit_exceeded", retryAfterSeconds: rl.retryAfter },
      429,
      { "Retry-After": String(rl.retryAfter) },
    );
  }

  // ── Validate payload ──────────────────────────────────────────────
  const c = body.customer as Record<string, string> | undefined;
  const car = body.car as Record<string, unknown> | undefined;
  const photos = Array.isArray(body.photos)
    ? (body.photos as Record<string, unknown>[])
    : [];

  if (!c?.firstName || !c?.lastName || !c?.email || !c?.phone)
    return jsonResp({ error: "Missing customer fields", code: "validation_error" }, 400);
  if (!car?.brand || !car?.model || !car?.year || !car?.mileage)
    return jsonResp({ error: "Missing required car fields", code: "validation_error" }, 400);

  // ── Insert partial estimation ─────────────────────────────────────
  const estRow = {
    status: "incomplete",
    first_name: c.firstName,
    last_name: c.lastName,
    email: c.email,
    phone: c.phone,
    brand: car.brand,
    model: car.model,
    variant: (car.variant as string) || '',
    year: car.year,
    mileage: car.mileage,
    fuel_type: (car.fuelType as string) || '',
    transmission: (car.transmission as string) || '',
    power: (car.power as string) || '',
    body_type: (car.bodyType as string) || '',
    condition: (car.condition as string) || '',
    desired_price: car.desiredPrice ?? null,
    vin: car.vin ?? null,
    doors: car.doors ?? null,
    postal_code: car.postalCode ?? null,
    color: car.color ?? null,
    // AI fields intentionally null — will be filled by submit-estimation later
    estimated_price: null,
    price_min: null,
    price_max: null,
    explanation: null,
    market_trend: null,
    sources: null,
  };

  const { data: estimation, error: insertErr } = await supabase
    .from("estimations")
    .insert(estRow)
    .select("id")
    .single();

  if (insertErr || !estimation) {
    console.error('[save-partial-lead] DB insert error:', JSON.stringify(insertErr), 'row keys:', Object.keys(estRow).join(','));
    return jsonResp({ error: "Failed to save partial lead", code: "db_error", details: { message: insertErr?.message, code: insertErr?.code } }, 500);
  }

  const estimationId = estimation.id as string;

  // ── Process photos ────────────────────────────────────────────────
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

  await recordRateHit(supabase, "save-partial-lead", ipHash);
  return jsonResp({ estimationId, status: "incomplete" }, 200);
});
