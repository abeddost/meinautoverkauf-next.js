# 🔍 Email Sending Debug Guide

## Problem
You filled out the form but didn't receive any emails.

## Root Causes & Solutions

### 1. Edge Functions Not Deployed ⚠️

**Most likely issue!** The Edge Functions (`submit-estimation`, `book-appointment`) that send emails need to be deployed to Supabase.

**Solution:**
```bash
cd supabase
npx supabase login
./deploy.sh
```

**Verify they're deployed:**
- Go to: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/functions
- You should see: `submit-estimation`, `book-appointment`, `admin-photo-links`

---

### 2. Missing RESEND_API_KEY 🔑

Even if functions are deployed, emails won't send without a Resend API key.

**Solution:**
1. **Get Resend API Key:**
   - Go to: https://resend.com/api-keys
   - Sign up (free: 100 emails/day, 3,000/month)
   - Create an API key
   - Copy the key

2. **Set as Edge Function Secret:**
   - Go to: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/settings/functions
   - Add secrets:
     ```
     RESEND_API_KEY = re_xxxxxxxxxxxxxxxxxxxxx
     RESEND_FROM = Meinautoverkauf <no-reply@meinautoverkauf.de>
     SUPABASE_ANON_KEY = sb_publishable_qJclYwBBKbLKd1fKk4wbsA_OOzReNCE
     ```

---

### 3. Migrations Not Applied 📊

The database tables might not exist yet.

**Solution:**
```bash
cd supabase
npx supabase db execute --project-ref sfrqhzqhmqbgpbmyucph < migrations/004_add_lifecycle_commission_ratelimit.sql
npx supabase db execute --project-ref sfrqhzqhmqbgpbmyucph < migrations/005_constraints_lifecycle_trigger.sql
npx supabase db execute --project-ref sfrqhzqhmqbgpbmyucph < migrations/006_create_admin_users.sql
```

**Verify:**
- Go to: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/editor
- Check that these tables exist:
  - `estimations`
  - `appointments`
  - `email_log`
  - `admin_users`
  - `estimation_photos`

---

## 🧪 Debug Tools

### Tool 1: Interactive Debug Page
Open in browser: http://localhost:3000/debug-email.html

This page lets you:
- Test Edge Functions directly
- Check database tables
- View email logs
- See error messages

### Tool 2: Browser Console
1. Open DevTools (F12)
2. Go to Console tab
3. Submit a form
4. Look for errors (red text)
5. Look for API calls

### Tool 3: Check Logs in Supabase
Go to: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/logs/edge-functions

Look for:
- Errors in `submit-estimation`
- Errors in `book-appointment`

---

## 📋 Step-by-Step Checklist

Run through this checklist to fix the issue:

### ☐ Step 1: Deploy Edge Functions
```bash
cd supabase
npx supabase login
./deploy.sh
```

### ☐ Step 2: Apply Database Migrations
```bash
cd supabase
npx supabase db execute --project-ref sfrqhzqhmqbgpbmyucph < migrations/004_add_lifecycle_commission_ratelimit.sql
npx supabase db execute --project-ref sfrqhzqhmqbgpbmyucph < migrations/005_constraints_lifecycle_trigger.sql
npx supabase db execute --project-ref sfrqhzqhmqbgpbmyucph < migrations/006_create_admin_users.sql
```

### ☐ Step 3: Get Resend API Key
1. Visit: https://resend.com/api-keys
2. Sign up or log in
3. Create new API key
4. Copy the key (starts with `re_`)

### ☐ Step 4: Set Edge Function Secrets
1. Go to: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/settings/functions
2. Add these secrets:
   - `RESEND_API_KEY` = your API key from step 3
   - `RESEND_FROM` = `Meinautoverkauf <no-reply@meinautoverkauf.de>`
   - `SUPABASE_ANON_KEY` = `sb_publishable_qJclYwBBKbLKd1fKk4wbsA_OOzReNCE`

### ☐ Step 5: Test the Form
1. Go to: http://localhost:3000/
2. Fill out the valuation form
3. Submit
4. Check browser console for errors

### ☐ Step 6: Check if Data Was Saved
1. Go to: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/editor
2. Open `estimations` table
3. Look for your submitted data

### ☐ Step 7: Check Email Logs
1. Go to: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/editor
2. Open `email_log` table
3. Look for entries
4. Check the `error` column for problems

### ☐ Step 8: Check Edge Function Logs
1. Go to: https://app.supabase.com/project/sfrqhzqhmqbgpbmyucph/logs/edge-functions
2. Select `submit-estimation` function
3. Look for recent logs and errors

---

## 🎯 Quick Test

After completing the checklist, run this quick test:

1. Open: http://localhost:3000/debug-email.html
2. Click "Test submit-estimation Function"
3. Check the result:
   - ✅ Success = Everything works!
   - ❌ Error = Read the error message for clues

---

## 💡 Where Emails Go

When working correctly, emails are sent to:

### After Form Submission (submit-estimation):
- **To:** `abdulqaderdost@yahoo.com` (admin)
- **Subject:** "Neue Fahrzeugbewertung: [Brand] [Model]"
- **Contains:** Customer info, vehicle details, valuation, photos

### After Appointment Booking (book-appointment):
- **To:** 
  - `abdulqaderdost@yahoo.com` (always)
  - `abdulqaderdost@gmail.com` (if Bodenheim location)
  - `abdulqader.abed.dost@gmail.com` (if Rüsselsheim location)
- **Subject:** "Neuer Übergabetermin: [Brand] [Model] am [Date]"
- **Contains:** Customer info, vehicle details, appointment details, photos

---

## 🔧 Common Errors & Fixes

### Error: "Failed to fetch"
**Cause:** Edge Functions not deployed  
**Fix:** Run `./supabase/deploy.sh`

### Error: "Invalid API key"
**Cause:** RESEND_API_KEY not set or wrong  
**Fix:** Check Edge Function secrets

### Error: "Table doesn't exist"
**Cause:** Migrations not applied  
**Fix:** Run migration commands

### No error, but no email
**Cause:** RESEND_API_KEY not set  
**Fix:** Set secrets in Supabase Dashboard

### Data saved, no email, email_log shows error
**Cause:** Invalid Resend API key or rate limit  
**Fix:** Check email_log error column for details

---

## 🎯 Expected Behavior

When everything works:

1. User submits form → Frontend calls `submit-estimation`
2. Edge Function saves to `estimations` table
3. Edge Function calls Resend API to send email
4. Edge Function logs to `email_log` table
5. Returns `estimationId` to frontend
6. User books appointment → Frontend calls `book-appointment`
7. Edge Function saves to `appointments` table
8. Edge Function sends appointment email
9. Edge Function logs to `email_log` table
10. Returns `appointmentId` to frontend
11. Admin dashboard shows all data

---

## 📞 Next Steps

1. **Complete the checklist above** (Steps 1-8)
2. **Test with debug-email.html** at http://localhost:3000/debug-email.html
3. **Check email_log table** for error messages
4. **If still stuck,** check Edge Function logs in Supabase Dashboard

---

## ✅ Success Indicators

You'll know it's working when:
- ✅ Debug page test returns success with estimationId
- ✅ Data appears in `estimations` table
- ✅ Entry appears in `email_log` with no error
- ✅ Email arrives at `abdulqaderdost@yahoo.com`
- ✅ Admin dashboard shows the submission
