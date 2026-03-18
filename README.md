<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# MeinAutoPreis24 Monorepo

## Primary App

The default app is now **Next.js** in `next-app/`.

Root npm commands are wired to Next.js:

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run type-check`

## Legacy Vite App (temporary rollback)

The former Vite React app remains in the repo for short-term rollback only.

Legacy commands:

- `npm run vite:dev`
- `npm run vite:build`
- `npm run vite:build:analyze`
- `npm run vite:preview`

## Local Setup (Next.js)

1. Install dependencies for both roots if needed:
   - `npm install`
   - `cd next-app && npm install`
2. Copy `next-app/.env.example` to `next-app/.env.local` and fill values.
3. Run Next.js from repo root:
   - `npm run dev`

## Deployment

Deploy `next-app` on Vercel with:

- Root Directory: `next-app`
- Production branch: `main`

See the full checklist in `next-app/DEPLOYMENT.md`.
