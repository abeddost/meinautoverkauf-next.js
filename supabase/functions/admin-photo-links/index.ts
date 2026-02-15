import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ── CORS ──────────────────────────────────────────────────────────────
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

function jsonResp(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

// ── Main handler ──────────────────────────────────────────────────────
Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST")
    return jsonResp({ error: "Method not allowed", code: "method_not_allowed" }, 405);

  // ── Auth: Verify admin ────────────────────────────────────────────
  const authHeader = req.headers.get("authorization") || "";
  const token = authHeader.replace("Bearer ", "");

  if (!token) {
    return jsonResp({ error: "Missing authorization", code: "unauthorized" }, 401);
  }

  // Create client with user's JWT to check admin status
  const supabaseUser = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY") || Deno.env.get("SUPABASE_URL")!.replace("https://", "sb_publishable_"),
    { global: { headers: { Authorization: `Bearer ${token}` } } },
  );

  const { data: { user }, error: authErr } = await supabaseUser.auth.getUser(token);
  if (authErr || !user) {
    return jsonResp({ error: "Invalid or expired session", code: "unauthorized" }, 401);
  }

  // Check admin_users with service role
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { data: adminRow } = await supabase
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .single();

  if (!adminRow) {
    return jsonResp({ error: "Not an admin", code: "forbidden" }, 403);
  }

  // ── Parse body ────────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return jsonResp({ error: "Invalid JSON", code: "invalid_json" }, 400);
  }

  const estimationId = body.estimationId as string | undefined;
  if (!estimationId) {
    return jsonResp({ error: "Missing estimationId", code: "validation_error" }, 400);
  }

  // ── Get photos and generate signed URLs (30 days) ─────────────────
  const { data: photoRows, error: photoErr } = await supabase
    .from("estimation_photos")
    .select("id, storage_path, original_filename")
    .eq("estimation_id", estimationId)
    .order("created_at", { ascending: true });

  if (photoErr) {
    return jsonResp({ error: "Failed to fetch photos", code: "db_error" }, 500);
  }

  const photos: { id: string; storagePath: string; signedUrl: string }[] = [];
  for (const pr of photoRows || []) {
    const { data: signedData } = await supabase.storage
      .from("car-photos")
      .createSignedUrl(pr.storage_path, 2592000); // 30 days

    photos.push({
      id: pr.id,
      storagePath: pr.storage_path,
      signedUrl: signedData?.signedUrl || "",
    });
  }

  return jsonResp({ photos }, 200);
});
