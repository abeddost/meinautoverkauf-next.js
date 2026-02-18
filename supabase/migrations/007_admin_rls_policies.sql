-- Migration 007: Admin RLS policies for CRUD operations
-- Allow admin users to update and delete estimations, appointments, and photos

-- ============================================================
-- 1. Admin UPDATE policies for estimations
-- ============================================================

CREATE POLICY "Admins can update estimations"
  ON public.estimations
  FOR UPDATE
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

-- ============================================================
-- 2. Admin DELETE policies for estimations
-- ============================================================

CREATE POLICY "Admins can delete estimations"
  ON public.estimations
  FOR DELETE
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

-- ============================================================
-- 3. Admin INSERT/UPDATE/DELETE policies for estimation_photos
-- ============================================================

CREATE POLICY "Admins can insert photos"
  ON public.estimation_photos
  FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Admins can update photos"
  ON public.estimation_photos
  FOR UPDATE
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Admins can delete photos"
  ON public.estimation_photos
  FOR DELETE
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

-- ============================================================
-- 4. Admin UPDATE/DELETE policies for appointments
-- ============================================================

CREATE POLICY "Admins can update appointments"
  ON public.appointments
  FOR UPDATE
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Admins can delete appointments"
  ON public.appointments
  FOR DELETE
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

-- ============================================================
-- 5. Storage policies for car-photos bucket (if using direct upload)
-- ============================================================

-- Note: These are for Supabase Storage, not table policies
-- Apply via Supabase Dashboard > Storage > car-photos > Policies
-- Or use supabase.storage.from('car-photos').createSignedUploadUrl()

COMMENT ON POLICY "Admins can update estimations" ON public.estimations IS 'Allow admin users to edit estimation data';
COMMENT ON POLICY "Admins can delete estimations" ON public.estimations IS 'Allow admin users to soft/hard delete estimations';
