# CLAUDE.md — digitaljalpa

## What it does

Marketing and personal site for Jalpa Turakhia, positioned as an "AI Tools Expert" offering consultation, implementation, and mentoring on AI tools for businesses and individuals. It serves the landing page, about / portfolio / contact / consultation pages, a blog, and a contact form that sends email through Resend. Deployed at https://digitaljalpa.com.

## Tech stack & architecture

- **Framework:** Next.js 16 (App Router) + React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Fonts:** `next/font/google` — Playfair Display (display) + Inter (body)
- **Animation:** framer-motion
- **Visual fx:** simplex-noise (used by the StarField background)
- **Email:** resend (contact form backend)
- **Deployment:** Vercel
- **Credentials:** `.env.local` at project root (Resend API key etc.)

Site is content-light, no CMS — blog posts live as TS files in `src/lib/blog/posts/`.

## Key directories and files

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts + global metadata/OG
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Tailwind v4 entry + theme tokens
│   ├── about/
│   ├── portfolio/
│   ├── consultation/
│   ├── contact/
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/         # Dynamic blog post route
│   └── api/
│       └── contact/        # Resend-powered contact form handler
├── components/
│   ├── Navbar.tsx
│   ├── Logo.tsx
│   ├── JalpaAvatar.tsx
│   └── StarField.tsx       # Animated background (simplex-noise)
└── lib/
    └── blog/
        ├── index.ts        # Exports allPosts
        ├── types.ts        # BlogPost type
        └── posts/          # One .ts file per blog post
            └── chatgpt-vs-claude-vs-gemini.ts
```

Top-level:
- `next.config.ts` — sets `images.formats = ['image/webp']`
- `eslint.config.mjs` — flat ESLint config
- `LICENSE`, `README.md` — default create-next-app README (not authoritative)

## Common commands

```bash
npm install
npm run dev       # next dev — http://localhost:3000
npm run build     # next build — run before committing
npm start         # next start (prod)
npm run lint      # eslint
```

Deploy: pushed to Vercel.

## Known issues / gotchas

- **Blog posts are TS files, not markdown.** To add a post, create `src/lib/blog/posts/<slug>.ts` and wire it into `src/lib/blog/index.ts`. When injecting into the posts array, target the `= [` assignment, not the `BlogPost[]` type annotation.
- **Template literal escaping in post files:** escape backticks as `` \` `` and `${` as `\${` so TypeScript doesn't interpolate.
- **Tailwind v4** — no `tailwind.config.js`. Theme tokens live in `globals.css` via `@theme`. Don't add v3-style config.
- **Resend contact form** requires a valid `RESEND_API_KEY` in `.env.local`. Without it, `/api/contact` will 500 — check env before debugging the form.
- **README.md is the default create-next-app template.** Don't trust it for project-specific info — use this file instead.
- **StarField** runs client-side animation with simplex-noise; keep it inside a client component and avoid importing it into server components directly.
- **Global metadata is already set** in `app/layout.tsx` (title, description, OG, Twitter). Per-page metadata should override via `export const metadata` in each route — don't duplicate at the layout level.

## Darshan's preferences

- **Server components by default.** Mark `"use client"` only when you actually need state, effects, refs, browser APIs, or framer-motion hooks.
- **TypeScript everywhere.**
- **SEO-first Next.js.**
  - Meaningful per-page `<title>` and description (`export const metadata` / `generateMetadata`).
  - Canonical URL on every page (omit `page=1` for paginated routes).
  - OG + Twitter metadata on every public page.
  - Use `<Link>` for navigation — never `<button>` + `router.push`.
  - `prefetch={false}` on paginated / filter links.
  - Don't `noindex` legitimate content pages.
- **Simplicity first.** Minimal change surface, find root causes, no hacky temporary fixes.
- **Always `npm run build` before committing.** Don't hand back a broken build.
- **Commits:** descriptive messages, push to `main` unless told otherwise.
- **Content tone:** follow a "Discovery Hook" frame for blog posts, not incident/war-story framing. Plain ASCII post titles, no backticks in titles.
- **Never create docs (`*.md`) proactively.** Only on explicit request.
