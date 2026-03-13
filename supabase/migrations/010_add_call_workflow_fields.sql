-- Migration 010: Add call-team workflow fields to estimations
-- Adds assigned_to and call_status for the small call-team assignment workflow

ALTER TABLE public.estimations
  ADD COLUMN IF NOT EXISTS assigned_to text,
  ADD COLUMN IF NOT EXISTS call_status text NOT NULL DEFAULT 'Neu';

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'estimations_call_status_check'
  ) THEN
    ALTER TABLE public.estimations
      ADD CONSTRAINT estimations_call_status_check
      CHECK (call_status IN (
        'Neu', 'Zugewiesen', 'Angerufen', 'Keine Antwort',
        'Interessiert', 'Nicht interessiert', 'Gekauft'
      ));
  END IF;
END;
$$;

CREATE INDEX IF NOT EXISTS idx_estimations_call_status ON public.estimations(call_status);
CREATE INDEX IF NOT EXISTS idx_estimations_assigned_to ON public.estimations(assigned_to);

COMMENT ON COLUMN public.estimations.assigned_to IS 'Display name of the worker assigned to this lead';
COMMENT ON COLUMN public.estimations.call_status  IS 'Call workflow status: Neu (default), Zugewiesen, Angerufen, Keine Antwort, Interessiert, Nicht interessiert, Gekauft';
