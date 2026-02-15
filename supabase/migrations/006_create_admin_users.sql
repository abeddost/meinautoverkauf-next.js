-- Migration 006: Create admin_users table
-- This table stores admin user IDs for access control

-- Create admin_users table if not exists
CREATE TABLE IF NOT EXISTS public.admin_users (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  email text
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read their own admin status
CREATE POLICY "Users can read own admin status"
  ON public.admin_users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Add comments
COMMENT ON TABLE public.admin_users IS 'Admin users allow-list for dashboard access';
COMMENT ON COLUMN public.admin_users.user_id IS 'References auth.users(id)';
COMMENT ON COLUMN public.admin_users.email IS 'Email snapshot for convenience';
