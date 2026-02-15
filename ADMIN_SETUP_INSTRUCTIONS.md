# Admin Dashboard - Setup Instructions

**IMPORTANT:** Follow these steps to enable admin access.

## Quick Setup (5 minutes)

### 1. Apply Database Migration
```bash
cd supabase
npx supabase db execute --project-ref sfrqhzqhmqbgpbmyucph < migrations/006_create_admin_users.sql
```

### 2. Create Admin User
- Go to: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/auth/users
- Click "Add user" → "Create new user"
- Email: `admin@meinautoverkauf.de`
- Password: `[create strong password]`
- Copy the user UUID

### 3. Grant Admin Access
Go to: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/sql/new

```sql
INSERT INTO public.admin_users (user_id, email)
VALUES ('PASTE_UUID_HERE', 'admin@meinautoverkauf.de');
```

### 4. Login
- Visit: http://localhost:5174/admin/login
- Enter your credentials
- You're in! 🎉

---

## URLs
- Login: `/admin/login`
- Dashboard: `/admin`

## Features
✅ View all estimations
✅ View all appointments  
✅ See customer details
✅ View car photos
✅ Secure authentication

## Need Help?
See `ADMIN_DASHBOARD_SETUP.md` for detailed guide.
