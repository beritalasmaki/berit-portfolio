# Portfolio homepage

My personal UX/product design portfolio, rebuilt as a real coded site instead of Webflow. Next.js (App Router) + TypeScript + Tailwind CSS, with the visual design driven from `project/DESIGN-SYSTEM.md`.

- `/` — homepage
- `/usecases/industrial-tool` — Kemira industrial data platform (full case study)
- `/usecases/university-ai-tool`, `/usecases/education-platform`, `/usecases/environmental-data-tool` — case studies in progress (render a minimal template until their content is written)
- `/blog`, `/blog/<slug>` — blog index and posts; how to write and add a post: [`BLOG-GUIDE.md`](BLOG-GUIDE.md)

## Stack

- Next.js 15 (App Router), TypeScript, Tailwind CSS
- Case study content lives in `src/data/case-studies/` — one file per project, so adding a new case study is a content change, not a layout change
- Blog posts live in `src/data/blog/` — one file per post, same pattern (see `BLOG-GUIDE.md`)
- Accessible by default: real semantic HTML, a working scroll-spy table of contents, a keyboard-navigable lightbox with focus trapping, and WCAG AA color contrast (a couple of values were nudged darker from `DESIGN-SYSTEM.md`'s literal hex codes where the original failed contrast — see git history on `src/components/Hero.tsx` and `tailwind.config.ts` for specifics)

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint
npm run typecheck
```

## Design provenance

This started as a design canvas in Claude Design. `HANDOFF.md`, `chats/`, and `project/` are the original handoff bundle (design prototypes, chat transcript, design system doc, source assets) — kept for reference, not part of the running app. The actual implementation is everything under `src/` and `public/`.
