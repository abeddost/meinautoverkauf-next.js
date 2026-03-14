-- Migration 011: Allow NULL for market_trend
-- The previous constraint blocked NULL, causing save-partial-lead inserts to fail
-- since incomplete rows have no AI-generated market_trend yet.

ALTER TABLE public.estimations
  DROP CONSTRAINT IF EXISTS estimations_market_trend_check;

ALTER TABLE public.estimations
  ADD CONSTRAINT estimations_market_trend_check
  CHECK (market_trend IS NULL OR market_trend = ANY (ARRAY['Up'::text, 'Down'::text, 'Stable'::text]));
