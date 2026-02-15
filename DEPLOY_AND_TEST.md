# 🚀 Complete Deployment & Testing Script

**This script will deploy everything and test the email system end-to-end.**

## Quick Deploy (5 minutes)

Run these commands in order:

```bash
# 1. Login to Supabase CLI
cd supabase
npx supabase login

# 2. Apply all migrations
echo "Applying migrations..."
npx supabase db execute --project-ref sfrqhzqhmqbgpbmyucph < migrations/004_add_lifecycle_commission_ratelimit.sql
npx supabase db execute --project-ref sfrqhzqhmqbgpbmyucph < migrations/005_constraints_lifecycle_trigger.sql
npx supabase db execute --project-ref sfrqhzqhmqbgpbmyucph < migrations/006_create_admin_users.sql

# 3. Deploy Edge Functions
echo "Deploying Edge Functions..."
./deploy.sh

# 4. Done!
echo "✅ Deployment complete!"
```

##  Set Secrets in Supabase Dashboard

**CRITICAL:** You MUST set these secrets or emails won't work!

1. Go to: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/settings/functions

2. Click "Add new secret" and add:

```
Name: RESEND_API_KEY
Value: [Get from https://resend.com/api-keys]

Name: RESEND_FROM
Value: Meinautoverkauf <no-reply@meinautoverkauf.de>

Name: SUPABASE_ANON_KEY
Value: sb_publishable_qJclYwBBKbLKd1fKk4wbsA_OOzReNCE
```

## 🧪 Test Everything

After deployment, test using the debug page:

1. Open: http://localhost:5174/debug-email.html
2. Click "Check Database Tables" - should show all tables exist
3. Click "Test submit-estimation Function" - should return success
4. Click "Fetch Email Logs" - should show email was sent
5. Check inbox at `abdulqaderdost@yahoo.com`

## 🎯 Create Admin User

To use the admin dashboard:

```bash
# 1. Create user in Supabase Auth Dashboard
# Go to: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/auth/users
# Click "Add user" and create with email/password
# Copy the user UUID

# 2. Add to admin_users table
# Go to: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/sql/new
# Run:
INSERT INTO admin_users (user_id, email) 
VALUES ('PASTE_UUID_HERE', 'admin@meinautoverkauf.de');
```

## ✅ Success Checklist

After running all steps, verify:

- [ ] Edge Functions visible at: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/functions
- [ ] Tables exist at: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/editor
- [ ] Secrets set at: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/settings/functions
- [ ] Debug page tests pass: http://localhost:5174/debug-email.html
- [ ] Email received at admin inbox
- [ ] Admin dashboard works: http://localhost:5174/admin/login
- [ ] Dashboard shows submitted data

## 🔍 Troubleshooting

If something doesn't work:

1. **Check Edge Function Logs:**
   https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/logs/edge-functions

2. **Check email_log table:**
   https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/editor
   Look at `error` column for issues

3. **Verify Resend API Key:**
   https://resend.com/api-keys
   Test the key works

4. **Check browser console:**
   F12 → Console tab
   Look for errors when submitting form

## 📞 Support

For detailed troubleshooting, see:
- `EMAIL_DEBUG_GUIDE.md` - Complete debug guide
- `ADMIN_DASHBOARD_SETUP.md` - Admin setup
- http://localhost:5174/debug-email.html - Interactive testing
