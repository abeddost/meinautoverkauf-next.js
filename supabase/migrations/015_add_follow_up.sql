-- Migration 015: Add follow_up flag to estimations for lead follow-up tracking

ALTER TABLE public.estimations
  ADD COLUMN IF NOT EXISTS follow_up boolean NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS idx_estimations_follow_up ON public.estimations(follow_up);
