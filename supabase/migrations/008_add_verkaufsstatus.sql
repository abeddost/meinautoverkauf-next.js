-- Migration 008: Add verkaufsstatus field to estimations
-- Adds a sales status field to track whether offers are pending/accepted/rejected

ALTER TABLE public.estimations
ADD COLUMN IF NOT EXISTS verkaufsstatus text NOT NULL DEFAULT 'Pending';

-- Add check constraint to ensure only valid values
ALTER TABLE public.estimations
ADD CONSTRAINT estimations_verkaufsstatus_check 
CHECK (verkaufsstatus IN ('Pending', 'Accepted', 'Rejected'));

-- Create index for filtering by verkaufsstatus
CREATE INDEX IF NOT EXISTS idx_estimations_verkaufsstatus 
ON public.estimations(verkaufsstatus);

COMMENT ON COLUMN public.estimations.verkaufsstatus IS 'Sales status: Pending (default), Accepted, or Rejected';
