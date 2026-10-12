# Base44 Setup Notes

## Project Overview
- **COWRYWISE Investment Platform** — a Next.js 14 app (app router) with TypeScript and Tailwind CSS.
- **Frontend-only**: all data is stored in `window.localStorage` via `lib/cowrywise-data.ts`. No database, no API routes, no server-side auth.
- `package.json` lists `prisma`, `@prisma/client`, and `next-auth` as dependencies, but **none are imported or used** in the codebase. No `schema.prisma` exists.

## Running the App
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
- Node 22 base image, source bind-mounted at `/app`.
- `npm install` runs on container startup (no lockfile committed), then `next dev` on `0.0.0.0:3000`.
- No external secrets or credentials required.

## Default Login
- Admin: `muhammedjamfat@gmail.com` / `Muhammed003` (redirects to `/admin`)
- User: `adaokafor@example.com` / `Password123` (redirects to `/dashboard`)

## Verification
- `curl http://localhost:3000/` should return the landing page HTML.
- Navigate to `/login` and sign in with the credentials above to see the dashboard.
