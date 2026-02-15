#!/bin/bash
# Deploy backend to Supabase
# Usage: ./supabase/deploy.sh
# Requires: npx supabase (authenticated via `npx supabase login`)
#
# This script applies migrations and deploys Edge Functions.

set -e

PROJECT_ID="sfrqhzqhmqbgpbmyucph"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "=== Applying migration 004: lifecycle + commission + rate_limit_events ==="
npx supabase db execute --project-ref "$PROJECT_ID" < "$SCRIPT_DIR/migrations/004_add_lifecycle_commission_ratelimit.sql"

echo "=== Applying migration 005: constraints + lifecycle trigger + indexes + RLS ==="
npx supabase db execute --project-ref "$PROJECT_ID" < "$SCRIPT_DIR/migrations/005_constraints_lifecycle_trigger.sql"

echo "=== Deploying Edge Function: submit-estimation ==="
npx supabase functions deploy submit-estimation --project-ref "$PROJECT_ID" --no-verify-jwt

echo "=== Deploying Edge Function: book-appointment ==="
npx supabase functions deploy book-appointment --project-ref "$PROJECT_ID" --no-verify-jwt

echo "=== Deploying Edge Function: admin-photo-links ==="
npx supabase functions deploy admin-photo-links --project-ref "$PROJECT_ID" --verify-jwt

echo ""
echo "=== Done! ==="
echo "Set these secrets in Supabase Dashboard > Edge Functions > Secrets:"
echo "  RESEND_API_KEY = <your Resend API key>"
echo "  RESEND_FROM = Meinautoverkauf <no-reply@meinautoverkauf.de>"
echo "  SUPABASE_ANON_KEY = <same as frontend anon/publishable key>  # If admin-photo-links returns 401/403 with a valid admin JWT, add this."
