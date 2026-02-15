# Backend Plan (Supabase + Resend) for Car-Selling Platform

This document describes the backend/database design and logic for the existing frontend.

Constraints honored:
- Supabase for database/auth/storage.
- Resend API for emails (server-side only).
- Do not redesign the frontend.
- Do not add availability checking.
- Do not add dealer dashboards.

## 0) Quick Sanity Check of Requirements

Everything is logically consistent with one important implication:
- **Public insert + admin-only read** means users should not rely on reading their data back from Supabase.
  - The frontend can still show the valuation immediately (it already has the AI result).
  - Admin is the only party who reads and manages submissions.

To satisfy **"Send emails server-side"** while allowing **public submissions**, we should use **Supabase Edge Functions** (publicly callable) and keep the database locked down with RLS.

## 1) Data Model (Tables)

### 1.1 `estimations`
Stores every valuation (even without appointments).

Purpose:
- Audit trail of AI price estimations.
- A single source of truth for admin dashboard.

Columns (recommended):
- `id uuid primary key default gen_random_uuid()`
- `created_at timestamptz not null default now()`
- `status text not null default 'estimated'`
  - allowed: `estimated`, `appointment_booked`, `archived`, `rejected`, `sold`, `converted_to_sale`
- Customer contact:
  - `first_name text not null`
  - `last_name text not null`
  - `email text not null`
  - `phone text not null`
- Car details (aligns with `types.ts` CarDetails):
  - `brand text not null`
  - `model text not null`
  - `variant text not null`
  - `year text not null`
  - `mileage text not null`
  - `fuel_type text not null`
  - `transmission text not null`
  - `power text not null`
  - `body_type text not null`
  - `condition text not null` (from: `Excellent|Good|Fair|Poor`)
  - `desired_price text` (optional)
  - `vin text` (optional; never used for pricing per current prompt)
  - `doors text`
  - `postal_code text`
  - `color text`
- AI result:
  - `estimated_price numeric not null`
  - `price_min numeric not null`
  - `price_max numeric not null`
  - `explanation text not null`
  - `market_trend text not null` (allowed: `Up|Down|Stable`)
  - `sources jsonb` (optional; array of `{title, uri}` if you keep it)
  - `ai_model text` (optional; e.g. `gemini-...`)
  - `ai_raw jsonb` (optional; store full model JSON for audit/debug)
- Lifecycle and commission (admin-controlled):
  - `archived_at timestamptz null`
  - `status_updated_at timestamptz not null default now()`
  - `final_sale_price numeric(12,2) null`
  - `commission_percentage numeric(5,2) null`
  - `commission_amount numeric(12,2) generated always as (final_sale_price * commission_percentage / 100.0) stored`
  - `commission_paid boolean not null default false`
  - `commission_paid_at timestamptz null`

Constraints:
- `price_min <= estimated_price <= price_max` (check constraint).
- `status` limited to allowed values (check constraint or enum type preferred).
- `final_sale_price >= 0` when not null.
- `commission_percentage` between 0 and 100 when not null.
- If `status = 'sold'`: require `final_sale_price` and `commission_percentage` not null.
- If `commission_paid = true`: require `commission_paid_at` not null.
- If `commission_paid_at` not null: require `commission_paid = true`.

Indexes:
- `created_at desc` (for admin listing).
- `status`.
- `status_updated_at desc`.
- `email` (optional; support/admin search).
- Partial index for active work queue: `WHERE status IN ('estimated','appointment_booked','converted_to_sale')`.

#### Lifecycle Control (DB-enforced)
State transition matrix (enforced by trigger):
- `estimated` → `appointment_booked` | `rejected` | `archived` | `converted_to_sale`
- `appointment_booked` → `converted_to_sale` | `rejected` | `archived`
- `converted_to_sale` → `sold` | `archived`
- `rejected` → `archived`
- `sold` → `archived`
- `archived` → (terminal; no further transitions)

Rules:
- On any status change: set `status_updated_at = now()`.
- When entering `archived`: set `archived_at = now()` if null.
- Invalid transitions are rejected at DB level.

### 1.2 `estimation_photos`
Links uploaded photos to an estimation.

Columns:
- `id uuid primary key default gen_random_uuid()`
- `created_at timestamptz not null default now()`
- `estimation_id uuid not null references estimations(id) on delete cascade`
- `storage_bucket text not null default 'car-photos'`
- `storage_path text not null` (e.g. `estimations/<estimation_id>/<uuid>.jpg`)
- `public_url text` (optional; only if you decide to store public URLs)
- `original_filename text` (optional)
- `content_type text` (optional)
- `size_bytes bigint` (optional)

Indexes:
- `(estimation_id, created_at)`

### 1.3 `appointments`
Stores appointment intent. **No availability checking**; it’s just preferred date/time.

Columns:
- `id uuid primary key default gen_random_uuid()`
- `created_at timestamptz not null default now()`
- `estimation_id uuid not null references estimations(id) on delete cascade unique`
  - unique keeps 1 appointment per estimation.
- `preferred_date date not null`
- `preferred_time text not null` (free text; store exactly what user typed/selected)
- `delivery_type text not null`
  - allowed: `bring_car`, `pickup`
- `bring_location text`
  - allowed: `bodenheim`, `ruesselsheim`
  - must be `null` unless `delivery_type = bring_car`

Constraints:
- check: if `delivery_type='bring_car'` then `bring_location` is not null.
- check: if `delivery_type='pickup'` then `bring_location` is null.

Indexes:
- `created_at desc`
- `preferred_date`

### 1.4 `admin_users`
Simple allow-list for admin read access via Supabase Auth.

Columns:
- `user_id uuid primary key references auth.users(id) on delete cascade`
- `created_at timestamptz not null default now()`

How it’s used:
- Any logged-in Supabase user whose `auth.uid()` exists in this table is an admin.

Optional:
- `email text` snapshot for convenience.

### 1.5 (Optional) `email_log`
Recommended for debugging email delivery and compliance evidence.

Columns:
- `id uuid primary key default gen_random_uuid()`
- `created_at timestamptz not null default now()`
- `kind text not null` (`estimation_created`, `appointment_booked`)
- `estimation_id uuid references estimations(id)`
- `appointment_id uuid references appointments(id)`
- `recipients jsonb not null`
- `resend_message_id text` (if available)
- `error text` (if send failed)

### 1.6 `rate_limit_events`
Supabase-native rate limiting (no Redis/external service).

Purpose:
- Track rate limit hits for public Edge Functions.
- Rows expire via TTL (`expires_at`).

Columns:
- `id uuid primary key default gen_random_uuid()`
- `created_at timestamptz not null default now()`
- `expires_at timestamptz not null`
- `endpoint text not null` (values: `submit-estimation`, `book-appointment`)
- `key_type text not null` (`ip`, `email`)
- `key_hash text not null` (SHA-256 of IP or email; no raw identifiers stored)
- `window_seconds integer not null`

Indexes:
- `(endpoint, key_type, key_hash, created_at desc)`
- `expires_at`

Retention:
- Opportunistic cleanup in Edge Functions: `DELETE FROM rate_limit_events WHERE expires_at < now()`.
- Optional: pg_cron daily purge for efficiency.

## 2) Storage Setup (Supabase Storage)

### 2.1 Bucket
- Bucket name: `car-photos`
- Visibility: **private** (recommended; contains personal data).
- Path convention:
  - `estimations/<estimation_id>/<photo_id>.<ext>`

### 2.2 Upload approach
Two safe options; pick one based on how the frontend currently uploads.

Option A (recommended): **Signed upload URLs**
- Edge function returns signed upload URLs for each photo.
- Frontend uploads directly to Storage using the signed URLs.
- Pros: no public storage write policies needed.
- Cons: requires frontend to call this function before upload (small integration change, not a redesign).

Option B: **Public uploads with strict Storage policies**
- Allow anonymous uploads only to `estimations/<uuid>/...` paths.
- Pros: simplest for frontend.
- Cons: harder to secure perfectly; still doable but less ideal.

### 2.3 Photo links for admin/emails
- Keep bucket private.
- For emails and admin dashboard, generate **signed download URLs** server-side (Edge Function or server route) and include those links.
- Signed URLs must be valid for **30 days** (expiry: 2 592 000 seconds). Use this expiry when calling the Storage signed-URL API for both email links and admin-photo-links.

## 3) Backend Flow (Server-Side)

Use **Supabase Edge Functions** for all writes + email sending. Calls are public (no auth required), but protected with:
- input validation
- DB-backed rate limiting with structured 429 responses
- optional lightweight bot protection (e.g. Turnstile) if needed later

### 3.0 API Contracts (Exact Payloads + Responses)

All endpoints below are implemented as Supabase Edge Functions and are called by the existing frontend.

How the frontend calls Edge Functions (two equivalent options):
- Using supabase-js: `supabase.functions.invoke('submit-estimation', { body })`
- Using fetch directly: `POST https://<PROJECT_REF>.functions.supabase.co/submit-estimation` with JSON body

Standard error response shape (all endpoints):
- HTTP status: `400` (validation), `404` (not found), `429` (rate limit), `500` (internal)
- JSON:
  ```json
  {
    "error": "Human readable message",
    "code": "optional_machine_code",
    "details": { ... },
    "retryAfterSeconds": 120
  }
  ```
  - `details` is optional (e.g., for 429: includes `endpoint`, `scope`, `window`, `limit`)
  - `retryAfterSeconds` is optional (for 429 responses)

#### 3.0.1 `submit-estimation`
Function name: `submit-estimation`
HTTP: `POST /functions/v1/submit-estimation`

Request JSON (field-by-field mapping)

Top-level:
- `customer.firstName` -> `estimations.first_name`
- `customer.lastName` -> `estimations.last_name`
- `customer.email` -> `estimations.email`
- `customer.phone` -> `estimations.phone`
- `car.brand` -> `estimations.brand`
- `car.model` -> `estimations.model`
- `car.variant` -> `estimations.variant`
- `car.year` -> `estimations.year`
- `car.mileage` -> `estimations.mileage`
- `car.fuelType` -> `estimations.fuel_type`
- `car.transmission` -> `estimations.transmission`
- `car.power` -> `estimations.power`
- `car.bodyType` -> `estimations.body_type`
- `car.condition` -> `estimations.condition`
- `car.desiredPrice` -> `estimations.desired_price` (optional)
- `car.vin` -> `estimations.vin` (optional)
- `car.doors` -> `estimations.doors` (optional)
- `car.postalCode` -> `estimations.postal_code` (optional)
- `car.color` -> `estimations.color` (optional)

Valuation:
- `valuation.estimatedPrice` -> `estimations.estimated_price`
- `valuation.priceRange.min` -> `estimations.price_min`
- `valuation.priceRange.max` -> `estimations.price_max`
- `valuation.explanation` -> `estimations.explanation`
- `valuation.marketTrend` -> `estimations.market_trend`
- `valuation.sources` -> `estimations.sources` (optional)

Photos:
- Each entry in `photos[]` creates one row in `estimation_photos`:
  - `photos[i].storagePath` -> `estimation_photos.storage_path`
  - `photos[i].originalFilename` -> `estimation_photos.original_filename` (optional)
  - `photos[i].contentType` -> `estimation_photos.content_type` (optional)
  - `photos[i].sizeBytes` -> `estimation_photos.size_bytes` (optional)

Request example:
```json
{
  "customer": {
    "firstName": "Max",
    "lastName": "Mustermann",
    "email": "max@example.com",
    "phone": "+49 170 1234567"
  },
  "car": {
    "brand": "BMW",
    "model": "3er",
    "variant": "320d",
    "year": "2020",
    "mileage": "120000",
    "fuelType": "Diesel",
    "transmission": "Automatik",
    "power": "140-180 PS",
    "bodyType": "Limousine",
    "condition": "Good",
    "desiredPrice": "",
    "vin": "",
    "doors": "4",
    "postalCode": "55294",
    "color": "Schwarz"
  },
  "valuation": {
    "estimatedPrice": 18200,
    "priceRange": { "min": 16380, "max": 20020 },
    "explanation": "Unser Angebot basiert auf aktuellen Marktdaten ...",
    "marketTrend": "Stable",
    "sources": [
      { "title": "mobile.de Vergleich", "uri": "https://..." }
    ]
  },
  "photos": [
    {
      "storagePath": "estimations/<estimation_id>/front.jpg",
      "originalFilename": "front.jpg",
      "contentType": "image/jpeg",
      "sizeBytes": 234567
    }
  ]
}
```

Response JSON:
- HTTP `200`
```json
{
  "estimationId": "uuid",
  "status": "estimated"
}
```

Notes:
- This endpoint must be called **after** the frontend has the AI result (existing flow) and after photos are uploaded to Storage.
- This endpoint sends the mandatory admin email "estimation created" including signed photo links.

#### 3.0.2 `book-appointment`
Function name: `book-appointment`
HTTP: `POST /functions/v1/book-appointment`

Request JSON:
- `estimationId` (required)
- `preferredDate` (required; `YYYY-MM-DD`)
- `preferredTime` (required; free text)
- `deliveryType` (required): `bring_car` or `pickup`
- `bringLocation` (required only if `bring_car`): `bodenheim` or `ruesselsheim`

Request example (bring_car):
```json
{
  "estimationId": "uuid",
  "preferredDate": "2026-02-11",
  "preferredTime": "10:00",
  "deliveryType": "bring_car",
  "bringLocation": "bodenheim"
}
```

Request example (pickup):
```json
{
  "estimationId": "uuid",
  "preferredDate": "2026-02-11",
  "preferredTime": "Nachmittags zwischen 14 und 16 Uhr",
  "deliveryType": "pickup"
}
```

Response JSON:
- HTTP `200`
```json
{
  "appointmentId": "uuid",
  "estimationId": "uuid",
  "status": "appointment_booked"
}
```

Notes:
- This endpoint updates `estimations.status` to `appointment_booked`.
- This endpoint sends the mandatory admin email "appointment booked" including signed photo links and delivery routing recipients.

#### 3.0.3 (Optional) `admin-photo-links`
Function name: `admin-photo-links`
HTTP: `POST /functions/v1/admin-photo-links`

Purpose:
- For the admin dashboard to request signed download URLs (bucket is private). Each `signedUrl` is valid for 30 days.

Auth:
- Requires a valid Supabase Auth session for an admin user.

Request JSON:
```json
{ "estimationId": "uuid" }
```

Response JSON:
```json
{
  "photos": [
    {
      "id": "uuid",
      "storagePath": "estimations/<estimation_id>/front.jpg",
      "signedUrl": "https://..."
    }
  ]
}
```

### 3.1 Flow A: Create estimation (store AI result + photos)
Endpoint: `POST /functions/v1/submit-estimation`

Input payload (high-level):
- `customer`: `firstName,lastName,email,phone`
- `car`: matches `CarDetails` (brand/model/variant/year/mileage/fuelType/transmission/power/bodyType/condition/desiredPrice/vin?/doors?/postalCode?/color?)
- `valuation`: matches `ValuationResult` (estimatedPrice, priceRange, explanation, marketTrend, sources?)
- `photos`: array of `{ storagePath, originalFilename?, contentType?, sizeBytes? }`

Steps:
0. Apply rate-limit checks (IP + email); reject with 429 if exceeded.
1. Validate payload.
2. Insert into `estimations` with `status='estimated'`.
3. Insert into `estimation_photos` for each photo.
4. Send admin email (Resend) with all required details and photo links (signed URLs).
5. Return `{ estimationId }`.

Guarantee:
- Every AI valuation becomes a row in `estimations`, regardless of appointment booking later.

### 3.2 Flow B: Book appointment (optional)
Endpoint: `POST /functions/v1/book-appointment`

Input payload:
- `estimationId`
- `preferredDate`
- `preferredTime` (free text)
- `deliveryType`: `bring_car` or `pickup`
- `bringLocation`: `bodenheim|ruesselsheim` only if `bring_car`

Steps:
0. Apply rate-limit checks (IP); reject with 429 if exceeded.
1. Validate payload + ensure estimation exists.
2. Insert `appointments` row.
3. Update `estimations.status = 'appointment_booked'`.
4. Send emails (Resend) per routing rules (below), including all required information + photo links.
5. Return `{ appointmentId }`.

### 3.3 Rate Limiting Strategy (DB-backed, MVP-safe)

Scope: public functions only
- `submit-estimation`
- `book-appointment`

Limits:
- **submit-estimation:**
  - 5 requests per IP per 10 minutes
  - 20 requests per IP per 1 hour
  - 3 requests per email per 24 hours
- **book-appointment:**
  - 3 requests per IP per 1 hour

Key extraction:
- **IP:** Extract from forwarded headers (first client IP), normalized
- **Email:** Lowercase + trimmed (submit-estimation only)
- **Storage:** SHA-256 hash only (no raw IP/email stored in DB)

Enforcement:
1. Check all applicable windows for the endpoint/key combination
2. If any window limit exceeded → return 429
3. On success: insert row(s) into `rate_limit_events` with appropriate `expires_at`
4. Use transaction-safe logic (single RPC/function recommended to reduce race conditions)

Response on rate limit (429):
- HTTP status: `429`
- Header: `Retry-After: <seconds>`
- JSON body:
  ```json
  {
    "error": "Rate limit exceeded",
    "code": "rate_limit_exceeded",
    "details": {
      "endpoint": "submit-estimation",
      "scope": "ip",
      "window": "10m",
      "limit": 5
    },
    "retryAfterSeconds": 120
  }
  ```

## 4) Email Logic (Resend) (MANDATORY)

All emails are sent server-side only.

Rate-limited requests (429) do not trigger email sends.

### 4.1 Recipients
Always email admin:
- `abdulqaderdost@yahoo.com`

Conditional routing:
- If `delivery_type = bring_car`:
  - `bodenheim` -> `abdulqaderdost@gmail.com`
  - `ruesselsheim` -> `abdulqader.abed.dost@gmail.com`

Implementation recommendation:
- Compute a `to` set:
  - always include `abdulqaderdost@yahoo.com`
  - if bring_car, add the location-specific address
- Send one email to all recipients (or two separate sends; either is acceptable as long as admin always receives).

### 4.2 Email content requirements
Both “estimation created” and “appointment booked” emails must include:
- customer contact info
- car details
- estimated price range
- appointment info (if booked)
- photo links

Recommended structure:
- Subject:
  - Estimation: `Neue Fahrzeugbewertung: <Brand> <Model> (<PostalCode or Year>)`
  - Appointment: `Neuer Übergabetermin: <Brand> <Model> am <Date> (<bring_car|pickup>)`
- Body sections:
  - Customer
  - Car details
  - Valuation result
  - Appointment (if any)
  - Photo links (signed URLs, valid 30 days)

### 4.3 Resend configuration
Env vars (Supabase project / Vercel):
- `RESEND_API_KEY`
- `RESEND_FROM` (verified sender, e.g. `Meinautoverkauf <no-reply@meinautoverkauf.de>`)

## 5) Admin Dashboard Access

Route exists: `/admin456987` (hidden).

Backend expectation:
- Admin must be authenticated with Supabase Auth.
- Only admins can read estimations/appointments/photos.

Lifecycle and commission updates:
- Admin-controlled backend operations (not public endpoints).
- Future: optional admin-only Edge Function for controlled updates (no UI redesign required).
- Public submit/book flows cannot set commission fields or control lifecycle beyond `estimated` → `appointment_booked`.

Minimal approach (no UI redesign):
- The existing admin dashboard page should:
  - require auth session
  - read from Supabase tables directly (client-side) if the user is an admin per RLS
  - show photo links by calling a small Edge Function that returns signed URLs (or store public URLs if you choose that route).

### 5.1 Admin Authentication (Supabase Auth)

Auth method (recommended):
- Supabase Auth email/password (or magic link), using the existing Supabase project.

Flow for `/admin456987`:
1. Admin visits `/admin456987`.
2. If no session exists, show the existing admin login UI (or minimal login form if already present).
3. On successful login, the admin dashboard reads:
   - `estimations` (list + detail)
   - `appointments` (joined by `estimation_id`)
   - `estimation_photos` (or via `admin-photo-links` for signed URLs)

RLS enforcement:
- Reads only succeed if `auth.uid()` exists in `admin_users`.

### 5.2 Seeding and Managing `admin_users` (Explicit)

How to create an admin:
1. Create a Supabase Auth user for the admin (Supabase Dashboard -> Authentication -> Users -> Add user), or let the user sign up once.
2. Add the user's UUID to `admin_users`.

Example SQL (run in Supabase SQL Editor):
```sql
-- Replace with the admin auth.users.id UUID
insert into public.admin_users (user_id)
values ('00000000-0000-0000-0000-000000000000')
on conflict (user_id) do nothing;
```

How to remove admin access:
```sql
delete from public.admin_users
where user_id = '00000000-0000-0000-0000-000000000000';
```

Notes:
- Do not store secrets in the client; RLS is the access gate.
- The admin dashboard must never use service-role credentials in the browser.

## 6) Security (RLS Policies)

### 6.1 General principle
- Public submissions allowed via Edge Functions (public HTTP).
- Database access via anon key should be locked down to prevent scraping/leaks.

### 6.2 RLS
Enable RLS on:
- `estimations`
- `estimation_photos`
- `appointments`
- `admin_users`

Policies (recommended):
- `estimations`:
  - `SELECT`: admin only (`exists (select 1 from admin_users where user_id = auth.uid())`)
  - `INSERT/UPDATE/DELETE`: no direct client writes (Edge Functions use service role and bypass RLS)
- `estimation_photos`:
  - `SELECT`: admin only
  - `INSERT/UPDATE/DELETE`: no direct client writes
- `appointments`:
  - `SELECT`: admin only
  - `INSERT/UPDATE/DELETE`: no direct client writes
- `admin_users`:
  - `SELECT`: admin only (or only service role)
  - `INSERT/DELETE`: service role only (manage admins manually in Supabase SQL editor)

If you must allow direct public inserts from the frontend (no Edge Function write):
- Allow `INSERT` to `estimations`, `estimation_photos`, `appointments` for anon.
- Still keep `SELECT` admin-only.
- Add strict check constraints and default values to prevent setting admin-only fields.
- Use a database webhook or trigger-driven HTTP call to a server endpoint to send emails (Resend) since emails must be server-side.

### 6.3 `rate_limit_events` RLS
- No anon/authenticated client access.
- Service role / Edge Functions only (insert/select/delete for limiter internals).
- Keys stored as SHA-256 hashes for privacy (no raw IP/email in DB).

## 7) Implementation Notes / Order of Work

1. **Create/alter tables:**
   - `estimations`: add lifecycle + commission columns
   - `rate_limit_events`: create new table
2. **Add constraints:**
   - Status transition trigger (enforce lifecycle matrix)
   - Commission constraints (sold requires price/percentage, etc.)
   - Generated `commission_amount` column
3. **Add indexes:** `status`, `status_updated_at`, rate limiter composite indexes
4. **Add RLS policies:** `rate_limit_events` (service role only)
5. **Create `car-photos` bucket** (private)
6. **Update Edge Functions:**
   - Add rate limiter checks (Step 0 in both functions)
   - Return structured 429 responses
   - Keep existing Resend flow unchanged
7. **Configure Resend env vars:** `RESEND_API_KEY`, `RESEND_FROM`
8. **Configure admin auth users:** create Supabase Auth users and insert into `admin_users`
9. **Wire frontend:** unchanged (same endpoints/payloads)

## 8) Non-Goals (Explicitly Not Included)
- No appointment availability system.
- No dealer dashboards.
- No UI redesign; only backend wiring is expected.
