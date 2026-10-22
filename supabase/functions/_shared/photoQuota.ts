import type { SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2";

// Keep the car-photos bucket under this size by deleting the oldest photos.
export const PHOTO_QUOTA_BYTES = 950 * 1024 * 1024;

/** Deletes the oldest car-photos (and their estimation_photos rows) until the bucket fits the quota. */
export async function enforcePhotoQuota(supabase: SupabaseClient): Promise<void> {
  const { data, error } = await supabase.rpc("car_photos_over_quota", { max_bytes: PHOTO_QUOTA_BYTES });
  if (error) {
    console.error("photo quota check failed:", error.message);
    return;
  }
  const paths = (data ?? []).map((r: { name: string }) => r.name);
  if (paths.length === 0) return;

  for (let i = 0; i < paths.length; i += 100) {
    const chunk = paths.slice(i, i + 100);
    const { data: removed, error: removeErr } = await supabase.storage.from("car-photos").remove(chunk);
    if (removeErr) {
      console.error("photo quota delete failed:", removeErr.message);
      return;
    }
    const removedPaths = (removed ?? []).map((o) => o.name);
    if (removedPaths.length > 0) {
      await supabase.from("estimation_photos").delete().in("storage_path", removedPaths);
    }
  }
  console.log(`photo quota: deleted ${paths.length} oldest photos`);
}
