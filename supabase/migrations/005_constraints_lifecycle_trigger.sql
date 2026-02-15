-- Migration 005: Constraints, lifecycle trigger, indexes
-- Per backend-plan.md §1.1 Constraints, Lifecycle Control, Indexes

-- ============================================================
-- 1. Drop old status constraint if exists, add new one
-- ============================================================

DO $$
BEGIN
  -- Drop existing status constraint (may have old name)
  ALTER TABLE public.estimations DROP CONSTRAINT IF EXISTS estimations_status_check;
  ALTER TABLE public.estimations DROP CONSTRAINT IF EXISTS chk_status;
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

ALTER TABLE public.estimations
  ADD CONSTRAINT chk_status CHECK (
    status IN ('estimated', 'appointment_booked', 'archived', 'rejected', 'sold', 'converted_to_sale')
  );

-- ============================================================
-- 2. Commission / sale constraints
-- ============================================================

-- final_sale_price >= 0
ALTER TABLE public.estimations DROP CONSTRAINT IF EXISTS chk_final_sale_price_positive;
ALTER TABLE public.estimations
  ADD CONSTRAINT chk_final_sale_price_positive CHECK (
    final_sale_price IS NULL OR final_sale_price >= 0
  );

-- commission_percentage between 0 and 100
ALTER TABLE public.estimations DROP CONSTRAINT IF EXISTS chk_commission_percentage_range;
ALTER TABLE public.estimations
  ADD CONSTRAINT chk_commission_percentage_range CHECK (
    commission_percentage IS NULL OR (commission_percentage >= 0 AND commission_percentage <= 100)
  );

-- If status = 'sold', require final_sale_price and commission_percentage
ALTER TABLE public.estimations DROP CONSTRAINT IF EXISTS chk_sold_requires_financials;
ALTER TABLE public.estimations
  ADD CONSTRAINT chk_sold_requires_financials CHECK (
    status <> 'sold' OR (final_sale_price IS NOT NULL AND commission_percentage IS NOT NULL)
  );

-- If commission_paid = true, require commission_paid_at
ALTER TABLE public.estimations DROP CONSTRAINT IF EXISTS chk_commission_paid_requires_date;
ALTER TABLE public.estimations
  ADD CONSTRAINT chk_commission_paid_requires_date CHECK (
    commission_paid = false OR commission_paid_at IS NOT NULL
  );

-- If commission_paid_at not null, require commission_paid = true
ALTER TABLE public.estimations DROP CONSTRAINT IF EXISTS chk_commission_date_requires_paid;
ALTER TABLE public.estimations
  ADD CONSTRAINT chk_commission_date_requires_paid CHECK (
    commission_paid_at IS NULL OR commission_paid = true
  );

-- ============================================================
-- 3. Lifecycle transition trigger
-- ============================================================

CREATE OR REPLACE FUNCTION public.enforce_estimation_lifecycle()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  valid boolean := false;
BEGIN
  -- If status hasn't changed, allow update
  IF OLD.status = NEW.status THEN
    RETURN NEW;
  END IF;

  -- Check allowed transitions
  CASE OLD.status
    WHEN 'estimated' THEN
      valid := NEW.status IN ('appointment_booked', 'rejected', 'archived', 'converted_to_sale');
    WHEN 'appointment_booked' THEN
      valid := NEW.status IN ('converted_to_sale', 'rejected', 'archived');
    WHEN 'converted_to_sale' THEN
      valid := NEW.status IN ('sold', 'archived');
    WHEN 'rejected' THEN
      valid := NEW.status IN ('archived');
    WHEN 'sold' THEN
      valid := NEW.status IN ('archived');
    WHEN 'archived' THEN
      valid := false; -- terminal state
    ELSE
      valid := false;
  END CASE;

  IF NOT valid THEN
    RAISE EXCEPTION 'Invalid status transition: % → %', OLD.status, NEW.status;
  END IF;

  -- Set status_updated_at
  NEW.status_updated_at := now();

  -- Set archived_at when entering archived
  IF NEW.status = 'archived' AND NEW.archived_at IS NULL THEN
    NEW.archived_at := now();
  END IF;

  RETURN NEW;
END;
$$;

-- Drop and recreate trigger
DROP TRIGGER IF EXISTS trg_enforce_estimation_lifecycle ON public.estimations;
CREATE TRIGGER trg_enforce_estimation_lifecycle
  BEFORE UPDATE ON public.estimations
  FOR EACH ROW
  EXECUTE FUNCTION public.enforce_estimation_lifecycle();

-- ============================================================
-- 4. Indexes
-- ============================================================

-- estimations indexes
CREATE INDEX IF NOT EXISTS idx_estimations_created_at ON public.estimations (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_estimations_status ON public.estimations (status);
CREATE INDEX IF NOT EXISTS idx_estimations_status_updated_at ON public.estimations (status_updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_estimations_email ON public.estimations (email);
CREATE INDEX IF NOT EXISTS idx_estimations_active_queue ON public.estimations (status)
  WHERE status IN ('estimated', 'appointment_booked', 'converted_to_sale');

-- estimation_photos indexes
CREATE INDEX IF NOT EXISTS idx_estimation_photos_estimation_created ON public.estimation_photos (estimation_id, created_at);

-- appointments indexes
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON public.appointments (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_appointments_preferred_date ON public.appointments (preferred_date);

-- rate_limit_events indexes
CREATE INDEX IF NOT EXISTS idx_rate_limit_composite ON public.rate_limit_events (endpoint, key_type, key_hash, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_rate_limit_expires ON public.rate_limit_events (expires_at);

-- ============================================================
-- 5. RLS for rate_limit_events
-- ============================================================

ALTER TABLE public.rate_limit_events ENABLE ROW LEVEL SECURITY;

-- No policies = no anon/authenticated access. Only service role (Edge Functions) can access.
-- Explicitly revoke to be safe
REVOKE ALL ON public.rate_limit_events FROM anon, authenticated;
