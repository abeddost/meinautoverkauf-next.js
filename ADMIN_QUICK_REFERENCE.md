# Admin Dashboard - Quick Reference

## 🚀 Quick Start

### Access URLs
- **Login:** `/admin/login`
- **Dashboard:** `/admin`

### Default Credentials Setup
1. Create user in Supabase Auth Dashboard
2. Add to `admin_users` table:
   ```sql
   INSERT INTO admin_users (user_id, email) 
   VALUES ('USER_UUID', 'admin@meinautoverkauf.de');
   ```

---

## 📁 Files Created

### Frontend Components
- **`lib/supabase.ts`** - Supabase client configuration
- **`contexts/AuthContext.tsx`** - Authentication context and hooks
- **`pages/AdminLoginPage.tsx`** - Admin login page
- **`pages/AdminDashboard.tsx`** - Main dashboard with estimations & appointments

### Database
- **`supabase/migrations/006_create_admin_users.sql`** - Creates admin_users table

### Documentation
- **`ADMIN_DASHBOARD_SETUP.md`** - Complete setup guide

---

## 🔐 Authentication Flow

```
User visits /admin 
  → Redirects to /admin/login (if not authenticated)
  → User enters email/password
  → AuthContext calls supabase.auth.signInWithPassword()
  → Checks if user_id exists in admin_users table
  → Sets isAdmin = true
  → Redirects to /admin dashboard
```

---

## 📊 Dashboard Features

### Estimations Tab
- Lists all car valuation requests
- Displays: date, status, customer, vehicle, price
- Click "Details" button opens modal with:
  - Customer information (name, email, phone)
  - Full vehicle details
  - Valuation breakdown
  - Car photos (via admin-photo-links Edge Function)

### Appointments Tab
- Lists all booked appointments
- Shows: creation date, appointment date/time, delivery type, location

---

## 🔧 Technical Implementation

### Authentication
- Uses `@supabase/supabase-js` client
- JWT-based authentication
- Row Level Security (RLS) on admin_users table
- Only authenticated users can read their own admin status

### Data Loading
```typescript
// Fetch estimations
const { data } = await supabase
  .from('estimations')
  .select('*')
  .order('created_at', { ascending: false });

// Check admin status
const { data } = await supabase
  .from('admin_users')
  .select('user_id')
  .eq('user_id', userId)
  .single();
```

### Photo Loading
```typescript
// Calls admin-photo-links Edge Function
const { data } = await supabase.functions.invoke('admin-photo-links', {
  body: { estimationId }
});
// Returns: { photos: [{ url, filename }, ...] }
```

---

## 🎨 UI/UX Features

- ✅ Mobile-responsive design
- ✅ Tab-based navigation (Estimations / Appointments)
- ✅ Modal detail view for estimations
- ✅ Status badges with color coding
- ✅ Loading states with spinners
- ✅ Error handling with user-friendly messages
- ✅ Secure sign-out functionality

---

## 🛡️ Security

### What's Protected
- Admin routes require authentication
- Only users in `admin_users` table can access
- Photos accessed via signed URLs (30-day expiry)
- Service role key never exposed to frontend

### RLS Policies
```sql
-- admin_users table
CREATE POLICY "Users can read own admin status"
  ON admin_users FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
```

---

## 📦 Dependencies Added

```json
{
  "@supabase/supabase-js": "^2.x"
}
```

---

## 🔄 Integration Points

### With Existing System
- Reads from `estimations` table (created by submit-estimation)
- Reads from `appointments` table (created by book-appointment)
- Reads from `estimation_photos` table
- Calls `admin-photo-links` Edge Function

### Environment Variables Used
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY`

---

## 📝 Common Tasks

### Add New Admin
```sql
-- 1. Create user in Supabase Auth Dashboard
-- 2. Run this query:
INSERT INTO admin_users (user_id, email)
VALUES ('NEW_USER_UUID', 'newadmin@example.com');
```

### Remove Admin
```sql
DELETE FROM admin_users WHERE user_id = 'USER_UUID';
```

### Check Current Admins
```sql
SELECT 
  au.user_id,
  au.email,
  au.created_at,
  u.email as auth_email
FROM admin_users au
LEFT JOIN auth.users u ON au.user_id = u.id;
```

---

## 🐛 Debugging

### Cannot Login
1. Check browser console for errors
2. Verify user exists: `SELECT * FROM auth.users WHERE email = 'admin@example.com';`
3. Check admin_users: `SELECT * FROM admin_users WHERE user_id = 'UUID';`

### Photos Not Loading
1. Check browser console for Edge Function errors
2. Verify `SUPABASE_ANON_KEY` is set in Edge Function secrets
3. Test Edge Function: 
   ```bash
   curl -X POST https://sfrqhzqhmqbgpbmyucph.supabase.co/functions/v1/admin-photo-links \
     -H "Authorization: Bearer YOUR_JWT" \
     -H "Content-Type: application/json" \
     -d '{"estimationId": "UUID"}'
   ```

### "Not Authenticated" Error
- Session expired - user needs to re-login
- Check cookies/localStorage for auth token
- Try clearing browser cache

---

## 🚢 Deployment Checklist

- [ ] Apply migration 006 to production database
- [ ] Create admin user in production Supabase Auth
- [ ] Add user to admin_users table in production
- [ ] Verify environment variables in hosting platform
- [ ] Test login in production
- [ ] Test data loading
- [ ] Test photo viewing
- [ ] Configure CORS if needed for Edge Functions

---

## 💡 Tips

- **Session Persistence:** Auth tokens are stored in localStorage, users stay logged in
- **Auto Refresh:** Tokens automatically refresh before expiry
- **Multiple Tabs:** Auth state syncs across browser tabs
- **Mobile Support:** Dashboard fully responsive on all devices
- **Direct Access:** Users can bookmark `/admin` and will be prompted to login if needed

---

## 📞 Support

For issues or questions:
1. Check `ADMIN_DASHBOARD_SETUP.md` for detailed setup
2. Review browser console for errors
3. Check Supabase Dashboard logs
4. Verify RLS policies and Edge Function status
