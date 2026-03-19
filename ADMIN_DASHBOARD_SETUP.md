# Admin Dashboard Setup Guide

## Overview
The admin dashboard allows you to view and manage car estimations and appointments submitted through the website. It includes authentication and photo viewing capabilities.

## Features
- ✅ Secure login with Supabase Auth
- ✅ View all estimations with full details
- ✅ View all appointments
- ✅ Load and view car photos via signed URLs
- ✅ Real-time data from Supabase
- ✅ Mobile-responsive design

## Setup Steps

### 1. Apply Database Migration
First, create the `admin_users` table by running the migration:

```bash
cd supabase
npx supabase db execute --project-ref sfrqhzqhmqbgpbmyucph < migrations/006_create_admin_users.sql
```

### 2. Create Admin User in Supabase

1. Go to [Supabase Dashboard → Authentication → Users](https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/auth/users)
2. Click "Add user" → "Create new user"
3. Enter email and password (e.g., `admin@meinautoverkauf.de` / strong password)
4. Click "Create user"
5. Copy the user's UUID from the users list

### 3. Add User to admin_users Table

Go to [SQL Editor](https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/sql/new) and run:

```sql
INSERT INTO public.admin_users (user_id, email)
VALUES ('PASTE_USER_UUID_HERE', 'admin@meinautoverkauf.de');
```

Replace `PASTE_USER_UUID_HERE` with the UUID from step 2.

### 4. Verify Environment Variables

Ensure `.env.local` has:
```
NEXT_PUBLIC_SUPABASE_URL=https://sfrqhzqhmqbgpbmyucph.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_qJclYwBBKbLKd1fKk4wbsA_OOzReNCE
```

### 5. Start Development Server

```bash
npm run dev
```

## Accessing the Dashboard

### URLs
- **Login:** `http://localhost:3000/admin/login`
- **Dashboard:** `http://localhost:3000/admin`

### Login Process
1. Navigate to `/admin/login`
2. Enter the admin email and password you created
3. Click "Anmelden" (Login)
4. You'll be redirected to `/admin` dashboard

### Dashboard Features

#### Estimations Tab
- View all car valuation requests
- See customer details, vehicle info, and estimated prices
- Click "Details" to open a modal with:
  - Full customer information
  - Complete vehicle specifications
  - Valuation breakdown
  - Car photos (via signed URLs from admin-photo-links Edge Function)

#### Appointments Tab
- View all booked appointments
- See preferred date/time and delivery type
- Links to estimation IDs

## Security Notes

- Only users in the `admin_users` table can access the dashboard
- Authentication uses Supabase Auth with JWT tokens
- Photos are accessed via signed URLs with 30-day expiry
- The `admin-photo-links` Edge Function validates admin status before generating URLs
- Frontend uses the publishable key (safe for browser)
- Service role key is never exposed to the frontend

## Troubleshooting

### Cannot Login
- Verify user exists in Supabase Auth
- Check that user UUID is in `admin_users` table
- Ensure password is correct

### Photos Not Loading
- Check that `SUPABASE_ANON_KEY` is set as Edge Function secret if you get 401/403 errors
- Verify photos exist in `estimation_photos` table
- Check `admin-photo-links` Edge Function logs

### "Not an admin" Error
- Run: `SELECT * FROM admin_users WHERE user_id = 'YOUR_USER_UUID';`
- If no row, re-run the INSERT query from step 3

### Dashboard Not Loading Data
- Check browser console for errors
- Verify RLS policies allow authenticated admin users to read data
- Check Supabase logs for Edge Function errors

## Production Deployment

When deploying to production:

1. Create admin user in production Supabase project
2. Add to `admin_users` table in production
3. Update environment variables in Vercel/hosting platform
4. Test login and data access
5. Consider adding MFA for admin accounts

## Adding More Admins

To add additional admin users:

1. Create new user in Supabase Auth Dashboard
2. Get their user UUID
3. Run:
```sql
INSERT INTO public.admin_users (user_id, email)
VALUES ('NEW_USER_UUID', 'newadmin@example.com');
```

## Future Enhancements

Potential improvements:
- Edit estimation status
- Mark commission as paid
- Export data to CSV
- Email customers from dashboard
- Advanced filtering and search
- Analytics and reporting
