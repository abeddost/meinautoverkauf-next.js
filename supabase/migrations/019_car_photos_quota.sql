-- Storage cap for car-photos: returns the oldest objects that must be deleted so the bucket's
-- total size is at most max_bytes. Newest files are kept first, so in-flight pending/ uploads
-- are never selected. Called by the Edge Functions via _shared/photoQuota.ts.

CREATE OR REPLACE FUNCTION public.car_photos_over_quota(max_bytes bigint)
RETURNS TABLE (name text, size_bytes bigint)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT t.name, t.size_bytes
  FROM (
    SELECT
      o.name,
      COALESCE((o.metadata->>'size')::bigint, 0) AS size_bytes,
      SUM(COALESCE((o.metadata->>'size')::bigint, 0))
        OVER (ORDER BY o.created_at DESC, o.name ROWS UNBOUNDED PRECEDING) AS running_total
    FROM storage.objects o
    WHERE o.bucket_id = 'car-photos'
  ) t
  WHERE t.running_total > max_bytes
  ORDER BY t.running_total;
$$;

REVOKE ALL ON FUNCTION public.car_photos_over_quota(bigint) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.car_photos_over_quota(bigint) TO service_role;
