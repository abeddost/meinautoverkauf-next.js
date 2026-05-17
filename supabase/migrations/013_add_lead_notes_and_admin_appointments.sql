-- Migration 013: Add lead_notes table and admin-created flag on appointments

-- ============================================================
-- 1. lead_notes: one internal note per lead (estimation)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.lead_notes (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  estimation_id uuid NOT NULL REFERENCES public.estimations(id) ON DELETE CASCADE,
  content       text NOT NULL DEFAULT '',
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT lead_notes_estimation_id_unique UNIQUE (estimation_id)
);

CREATE INDEX IF NOT EXISTS idx_lead_notes_estimation_id
  ON public.lead_notes (estimation_id);

CREATE OR REPLACE FUNCTION public.set_lead_notes_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_lead_notes_updated_at
  BEFORE UPDATE ON public.lead_notes
  FOR EACH ROW EXECUTE FUNCTION public.set_lead_notes_updated_at();

ALTER TABLE public.lead_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage lead_notes"
  ON public.lead_notes
  FOR ALL
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

-- ============================================================
-- 2. Admin-created flag on appointments
-- ============================================================
ALTER TABLE public.appointments
  ADD COLUMN IF NOT EXISTS created_by_admin boolean NOT NULL DEFAULT false;

COMMENT ON COLUMN public.appointments.created_by_admin
  IS 'True when the appointment was manually created by an admin, not booked by the customer';

COMMENT ON TABLE public.lead_notes
  IS 'One internal note per lead (estimation), created and edited by admins only';
