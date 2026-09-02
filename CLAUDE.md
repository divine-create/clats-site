# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

CLATS is the marketing/waitlist website for an EdTech platform (AI, cybersecurity, digital citizenship skills for ages 2–18). It's a single-page React app — no backend logic of its own beyond a static Express file server for production hosting and a Supabase database for form submissions.

## Commands

```bash
npm run dev      # Vite dev server on 0.0.0.0:5173
npm run build    # Production build to dist/
npm run start    # Serve dist/ via server.js (Express) — run after build
npm run preview  # Vite's own preview of the build
npm run lint     # tsc --noEmit (there is no separate test suite or linter config)
```

There are no test files or a test runner in this repo.

## Architecture

**Routing is hand-rolled, not a router library.** `src/App.tsx` owns a `currentPath` state, calls `window.history.pushState`/listens to `popstate`, and switches on the path to pick a page component. To add a route: add a `case` in `getRenderedPage()` in `App.tsx` and (if it should appear in the nav) add it to the `menuItems` array in the same file. The `/waitlist` and `/get-started` paths both render `WaitlistPage` in a stripped layout (no header/footer chrome) — that branch lives above the normal header/main/footer return in `App.tsx`.

**Every page component takes `onNavigate` (and often a no-op `awardXP`) as props** rather than reading router context — `awardXP` is vestigial (always passed as `() => {}`) from an earlier gamification concept and can be ignored/removed if you touch a call site.

**Orphaned components exist in `src/components/`**: `PathwaysPage.tsx` and `PartnershipsPage.tsx` are not imported by `App.tsx` or anything else (left over from a page that was removed from navigation/routing — see git history). Don't assume a component under `src/components/` is reachable; check `App.tsx` first.

**Data layer is Supabase, with a graceful no-op fallback.** `src/lib/supabase.ts` exports `isSupabaseConfigured` (true only if `VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY` are set) plus `insertWaitlistRecord`/`insertInquiryRecord`. Every form (`WaitlistForm.tsx`, `AskKobeChibi.tsx`'s contact form, etc.) follows the same pattern: check `isSupabaseConfigured`, insert if true, otherwise `console.warn` and simulate a delay so the UI still demos correctly without credentials configured. Follow this pattern for any new form rather than making Supabase a hard dependency. `contact_inquiries` inserts also handle a `PGRST204` (missing `phone` column) error by retrying without that field — the live Supabase schema may lag behind the TS interface shapes in `supabase.ts`.

`supabase_referral_migration.sql` is a one-off migration script for partner/referral tables (`clats_partners`, `clats_referrals`, `clats_commissions_ledger`) — it's not wired into any app code yet.

**Styling: Tailwind v4** via `@tailwindcss/vite` (no `tailwind.config.js` — theme tokens are declared in `src/index.css` under `@theme` as CSS custom properties: `--color-turquoise`, `--color-purple`, `--color-yellow`, `--color-dark`, `--color-dark-light`, `--color-soft`, plus `--font-sans`/`--font-display` set to Montserrat). Components inconsistently mix the generated theme classes (`bg-turquoise`, `text-purple`) with raw hex literals (`#2EC4B6`, `#30D5C8`, `#B8A0FF` — note some of these hexes don't exactly match the theme token values). When matching existing brand color, prefer reusing the exact hex already used nearby in the same file over introducing a new close-but-different shade.

**Path alias**: `@/*` maps to the repo root (configured in both `tsconfig.json` and `vite.config.ts`), not to `src/`.

**Unused/legacy dependencies**: `@google/genai` and `@emailjs/browser` are in `package.json` but not imported anywhere in `src/` — this project originated from a Google AI Studio template (see `metadata.json`) and the AI/email integrations were never built out or were removed. Don't assume Gemini or EmailJS are wired up; check before using them.

## Deployment

Two independent deploy paths exist — check which one applies before changing routing/rewrite config:
- **Vercel**: `vercel.json` rewrites all paths to `/index.html` (static SPA hosting, no `server.js` involved).
- **Node/Express**: `npm run build && npm start` runs `server.js`, which serves `dist/` and falls back all routes to `index.html` for the SPA.

## Environment variables

Copy `.env.example` to `.env`. Required for form persistence: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`. `GEMINI_API_KEY` and `APP_URL` are present from the AI Studio template but currently unused by app code.
