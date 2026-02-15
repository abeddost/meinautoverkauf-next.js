-- Migration 004: Add lifecycle/commission columns to estimations + create rate_limit_events
-- Per backend-plan.md §1.1, §1.6

-- ============================================================
-- 1. Expand estimations: lifecycle + commission columns
-- ============================================================

-- Add new status values (update check constraint later)
ALTER TABLE public.estimations
  ADD COLUMN IF NOT EXISTS archived_at timestamptz NULL,
  ADD COLUMN IF NOT EXISTS status_updated_at timestamptz NOT NULL DEFAULT now(),
  ADD COLUMN IF NOT EXISTS final_sale_price numeric(12,2) NULL,
  ADD COLUMN IF NOT EXISTS commission_percentage numeric(5,2) NULL,
  ADD COLUMN IF NOT EXISTS commission_paid boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS commission_paid_at timestamptz NULL;

-- Generated column for commission_amount (must be added separately)
-- Check if column already exists before adding
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'estimations' AND column_name = 'commission_amount'
  ) THEN
    ALTER TABLE public.estimations
      ADD COLUMN commission_amount numeric(12,2) GENERATED ALWAYS AS (final_sale_price * commission_percentage / 100.0) STORED;
  END IF;
END $$;

-- ============================================================
-- 2. Create rate_limit_events table
-- ============================================================

CREATE TABLE IF NOT EXISTS public.rate_limit_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz NOT NULL,
  endpoint text NOT NULL,
  key_type text NOT NULL,
  key_hash text NOT NULL,
  window_seconds integer NOT NULL
);

-- Add comments
COMMENT ON TABLE public.rate_limit_events IS 'DB-backed rate limiting for public Edge Functions (no Redis)';
COMMENT ON COLUMN public.rate_limit_events.key_hash IS 'SHA-256 hash of IP or email; no raw identifiers stored';
