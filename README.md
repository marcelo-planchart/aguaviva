# Aguaviva

Marketing site for **Aguaviva** — a boutique culture & growth studio.
_Living water. Made properly._

Built as a "white-wall gallery": warm off-white canvas, near-black ink,
editorial serif (Fraunces) + clean sans (Inter), the jellyfish mark as the
recurring motif, and a single dark band for the contact moment.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) · React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (tokens in `src/app/globals.css`)
- Static — no backend

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Editing content

All copy and data live in **`src/content/site.ts`** — nav, hero, projects,
services, team, and contact. Edit there; the section components read from it.

- Add or reorder portfolio pieces in the `projects` array. Each project has an
  `accent`/`accentSoft` pair used for its gallery plate; drop in real imagery
  later by replacing the gradient plate in `src/components/work.tsx`.
- Brand tokens (colors, fonts) live in the `@theme` block of
  `src/app/globals.css`.

## Structure

```
src/
  app/
    layout.tsx      # fonts, metadata, <body> shell
    page.tsx        # section assembly
    globals.css     # design tokens + base styles
  components/        # section components (hero, work, approach, studio, contact…)
  content/site.ts    # ← all editable copy & data
public/brand/        # jellyfish logo
```

## Notes / open items

- Working tagline is _"A culture & growth studio"_ — no locked tagline yet.
- Client roster is featured by name (Zapatero, Suelo, Veloce, E19, Rainado).
  Confirm public-facing scope and canonical spellings before launch.
- Real project imagery still to be added (plates are intentional placeholders).
- Bilingual (EN/ES) toggle is a possible future addition.
