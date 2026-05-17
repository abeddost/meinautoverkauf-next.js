-- Migration 014: Allow authenticated admins to insert appointments directly

CREATE POLICY "Admins can insert appointments"
  ON public.appointments
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
  );
