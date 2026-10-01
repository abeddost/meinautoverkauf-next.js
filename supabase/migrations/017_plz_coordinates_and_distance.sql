-- Migration 017: PLZ coordinates + stored distance from Bodenheim on estimations
-- Powers the admin "Umkreis Bodenheim" filter. Leads only store a PLZ, so the
-- distance is resolved from plz_coordinates (seeded in 018) by a trigger.

-- ============================================================
-- 1. plz_coordinates: one centroid per German postal code
-- ============================================================
CREATE TABLE IF NOT EXISTS public.plz_coordinates (
  plz text PRIMARY KEY,
  lat double precision NOT NULL,
  lng double precision NOT NULL
);

ALTER TABLE public.plz_coordinates ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can read plz_coordinates" ON public.plz_coordinates;
CREATE POLICY "Admins can read plz_coordinates"
  ON public.plz_coordinates
  FOR SELECT
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

-- ============================================================
-- 2. Stored distance on estimations (NULL = unknown/missing PLZ)
-- ============================================================
ALTER TABLE public.estimations
  ADD COLUMN IF NOT EXISTS distance_from_bodenheim_km integer NULL;

CREATE INDEX IF NOT EXISTS idx_estimations_distance_from_bodenheim_km
  ON public.estimations (distance_from_bodenheim_km);

-- ============================================================
-- 3. Trigger: haversine distance to Bodenheim (49.9283, 8.3068),
--    same coordinates as next-app/lib/cityGeo.ts
-- ============================================================
CREATE OR REPLACE FUNCTION public.set_estimation_distance()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  origin_lat constant double precision := radians(49.9283);
  origin_lng constant double precision := radians(8.3068);
  target record;
BEGIN
  SELECT radians(lat) AS lat, radians(lng) AS lng
    INTO target
    FROM public.plz_coordinates
   WHERE plz = trim(NEW.postal_code);

  IF NOT FOUND THEN
    NEW.distance_from_bodenheim_km := NULL;
  ELSE
    NEW.distance_from_bodenheim_km := round(
      2 * 6371 * asin(sqrt(
        power(sin((target.lat - origin_lat) / 2), 2)
        + cos(origin_lat) * cos(target.lat) * power(sin((target.lng - origin_lng) / 2), 2)
      ))
    );
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_estimations_distance ON public.estimations;
CREATE TRIGGER trg_estimations_distance
  BEFORE INSERT OR UPDATE OF postal_code ON public.estimations
  FOR EACH ROW EXECUTE FUNCTION public.set_estimation_distance();
