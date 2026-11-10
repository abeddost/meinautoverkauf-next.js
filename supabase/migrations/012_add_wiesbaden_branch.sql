-- Permit the third drop-off branch while retaining pickup/location validation.
BEGIN;
ALTER TABLE public.appointments
  DROP CONSTRAINT appointments_bring_location_check;
ALTER TABLE public.appointments
  ADD CONSTRAINT appointments_bring_location_check CHECK (
    (delivery_type = 'bring_car' AND bring_location IS NOT NULL
      AND bring_location IN ('bodenheim', 'ruesselsheim', 'wiesbaden'))
    OR (delivery_type = 'pickup' AND bring_location IS NULL)
  );
COMMIT;
