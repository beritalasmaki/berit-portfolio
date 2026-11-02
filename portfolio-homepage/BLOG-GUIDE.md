# Blog guide

How to write, add and publish a blog post on the portfolio site. Written for Berit and for a coding agent turning a Markdown draft into a post. Follow it top to bottom for a new post.

The blog lives at `/blog`. Each post is one TypeScript data file. The layout, table of contents, reading time, tags, share buttons, progress bar and series navigation all come from that data, so adding a post is a content task, not a layout task.

---

## 1. Quick start

1. **Write the draft** in Markdown using the template in [§2](#2-draft-format-markdown).
2. **Create the post file** `src/data/blog/<slug>.ts` from the template in [§4](#4-post-file-template), converting the draft with the table in [§3](#3-draft--post-mapping).
3. **Register it**: import it in `src/data/blog/index.ts` and add it to `registry`.
4. **Check it locally**: `npm run typecheck && npm run lint && npm run build`, then `npm run dev` and open `/blog/<slug>`.
5. **Push the branch.** Vercel builds a preview automatically. Review it there, then merge to publish.

---

## 2. Draft format (Markdown)

Write drafts in this shape. It's the one the first two posts used, and every part of it maps directly to the site.

```markdown
# Post title

*Part 1 of 2: Short subtitle*            ← only for a series; leave out otherwise

**Summary:** One to three sentences on what the post covers and why it matters.

---

Opening paragraph: a concrete moment from a real project.

Second paragraph: what that moment says about the bigger topic.

## First section heading

Paragraph.

### A smaller subheading

Paragraph with **bold**, *italic* and a [link](/blog/other-post-slug).

- **Bold lead-in.** The explanation after it.
- **Another lead-in.** Its explanation.

> **The one-line takeaway, if the post builds to one.**

![Alt text describing what the image shows](image-file-name.png)

## Closing section

Final paragraph, linking the next part: [Part 2](/blog/next-post-slug).
```

Notes:
- Link other posts with their real path (`/blog/<slug>`), not `#`. Links to other sites are fine and open in a new tab.
- If the draft has a diagram or chart image, see [§6](#6-visuals): it's rebuilt as a component, not pasted in.

---

## 3. Draft → post mapping

| In the draft | In the post file | Notes |
| --- | --- | --- |
| `# Title` | `title` | The `<h1>`, card headline and tab title |
| `*Part 1 of 2: Subtitle*` | `series: { name, part, subtitle }` | Same `name` on every part. "of 2" is counted automatically |
| `**Summary:** …` | `excerpt` | Plain text. Shown in the hero, on cards and as the meta description |
| Paragraph | `{ type: "paragraph", text }` | |
| `## Heading` | `{ type: "heading", id, text, navLabel? }` | Becomes a table-of-contents entry. `id` must be unique in the post |
| `### Subheading` | `{ type: "subheading", text }` | Not listed in the table of contents |
| `- item` list | `{ type: "list", items: [...] }` | Add `ordered: true` for a numbered list |
| `> quote` | `{ type: "quote", text, cite? }` | Drop the `**…**` around a quote: the quote style is already bold |
| `![alt](file)` photo/screenshot | `{ type: "image", src, alt, caption?, width, height }` | See [§6](#6-visuals) |
| Numbered "claim + explanation" set | `{ type: "findings", items: [{ title, body }] }` | Same look as the case studies' findings |
| OKR example | `{ type: "okr", ... }` | The diagram component, see `ai-adoption-starts-with-strategy.ts` |
| `---` separator | (nothing) | The page layout separates the hero from the body |

**Inline formatting** inside any text field: `**bold**`, `*italic*`, `[label](/path)` or `[label](https://…)`. These can't be nested (no italic inside bold). Handled by `src/components/blog/InlineText.tsx`.

---

## 4. Post file template

`src/data/blog/<slug>.ts`:

```ts
import type { BlogPost } from "./types";

export const myNewPost: BlogPost = {
  slug: "my-new-post",                       // URL: /blog/my-new-post — never change once published
  title: "My new post",
  excerpt: "One to three plain sentences: what the post covers and why it matters.",
  date: "2026-11-15",                        // ISO, publication date
  // updated: "2026-12-01",                  // only after a real content edit
  tags: ["AI adoption", "Strategy"],         // 2–4, reuse existing tags first
  // series: { name: "AI adoption", part: 3, subtitle: "Short subtitle" },
  body: [
    { type: "paragraph", text: "Opening anecdote from a real project." },

    {
      type: "heading",
      id: "first-section",
      text: "A longer heading that would wrap badly in the sidebar",
      navLabel: "Shorter sidebar label",     // when the heading is over ~30 characters
    },
    { type: "paragraph", text: "Text with **bold** and a [link](/blog/other-slug)." },
    { type: "subheading", text: "A smaller subheading" },
    {
      type: "list",
      items: [
        "**Lead-in.** Explanation.",
        "**Lead-in.** Explanation.",
      ],
    },
    { type: "quote", text: "The one-line takeaway." },
  ],
};
```

Then in `src/data/blog/index.ts`:

```ts
import { myNewPost } from "./my-new-post";
// …
const registry: BlogPost[] = [aiAdoptionStrategy, aiPilotToEverydayPractice, myNewPost];
```

Order in `registry` doesn't matter: posts are sorted newest first by `date`, and on the same day a series' later part comes first.

---

## 5. Field rules

- **slug**: lowercase words joined with hyphens, usually the title. It's the URL, so don't change it after publishing.
- **date**: the publication day as `YYYY-MM-DD`. Set `updated` only when the content meaningfully changes, not for typo fixes.
- **tags**:
  - 2–4 per post. The blog index builds its filter from all tags, so every new tag adds a filter button.
  - Reuse existing tags before adding a new one: *AI adoption*, *Strategy*, *Scaling*, *Change management*.
  - Capitalize like a sentence ("Change management", not "Change Management").
- **excerpt**: 1–3 sentences, no Markdown. It's also what search engines and LinkedIn show.
- **heading ids**: lowercase-hyphenated and unique within the post (`phase-1`, `five-ways`, `summary`).
- **navLabel**: the sidebar is 280px wide. Give any heading longer than about 30 characters a shorter label, e.g. "Phase 1: Define the direction before choosing the technology" → "Phase 1: Define the direction".
- **series**:
  - Every part uses the same `name` and the next `part` number.
  - Link the parts to each other in the text: earlier parts point forward ("I'll cover that in [Part 2](/blog/…)") and later parts point back.
  - The series box at the end of each post is added automatically.
- **Reading time** is calculated from the text (~200 words a minute). Don't add it by hand.

---

## 6. Visuals

**Diagrams and charts are rebuilt in the design system, not pasted as images.** A screenshot of a diagram brings in someone else's colors and fonts, doesn't reflow on a phone, and screen readers can't read it. The OKR diagram in Part 1 is the model: `src/components/blog/OkrDiagram.tsx`.

- Use only the existing tokens from `tailwind.config.ts` (see `project/DESIGN-SYSTEM.md`). Don't add new colors or font sizes.
  - **ink** for the strongest emphasis
  - **accent orange** (`accent`, with `accent-hero` / `accent-dark` for orange text) for highlights and figures
  - **cream glass panes** (`glass`, `bg-cream/60`) for surfaces
  - **mono eyebrow labels** (`font-mono-label`)
- Tell levels apart by how much orange they carry, not by introducing blue, green or other hues.
- White text never goes on the orange: it's under 3:1 contrast. Use ink on orange.
- Keep all text as real text, stacking to one column on phones.

**Adding a new kind of visual** (a new block type) means three small changes:
1. Add the type to `BlogBlock` in `src/data/blog/types.ts`.
2. Count its words in `blockText()` in `src/data/blog/index.ts`, for reading time.
3. Render it in `src/components/blog/BlogBody.tsx`, usually through its own component in `src/components/blog/`.

**Photos and screenshots** (real images, not diagrams):
- Put them in `public/blog/<slug>/` and reference them as `src: "/blog/<slug>/file.png"`.
- Give the real pixel `width` and `height`, so the page doesn't jump while loading.
- Write `alt` text that says what the image shows, not "image of…". Add a `caption` when it needs context.
- Crop out personal or customer data before adding them.

---

## 7. Writing style

Drawn from the first two posts; keep new ones consistent.

- **Open with a real moment from a project**: a problem, a decision, something that went differently than planned. Then say what it shows about the bigger topic.
- **First person, plain English.** Short sentences and short paragraphs (2–4 sentences). Write for a smart reader outside your field.
- **One idea per section.** Section headings should say the point, not just the topic ("Phase 2: Experiment on a small scale and show results early").
- **Lists with bold lead-ins** for sets of practices: the lead-in is the claim and the sentence after it explains.
- **Be honest about hindsight.** One or two lines on what you'd do differently make the advice credible.
- **End with a takeaway.** One sentence the reader remembers, optionally set as a quote.
- **No hype or buzzwords.** Don't write "revolutionary", "game-changing" or "unlock". Explain a term the first time it appears (MLOps, OKR).
- **Length**: 4–7 minutes, about 800–1,400 words. Split anything longer into a series.
- **Language**: posts are in English, like the rest of the site.

---

## 8. Publishing checklist

Before pushing:
- [ ] `npm run typecheck`, `npm run lint` and `npm run build` pass (the existing Footer lint warning is known).
- [ ] `/blog` shows the new card with the right date, reading time and tags, and the tag filter includes its tags.
- [ ] On the post page:
  - [ ] every sidebar entry jumps to its section
  - [ ] links between posts work
  - [ ] the series box lists all parts
- [ ] Phone width (~375px): no sideways scrolling, diagrams stack to one column.
- [ ] Copy link works and the LinkedIn share opens.

Publishing:
1. Push the branch. Vercel posts a preview at `https://portfolio-homepage-git-<branch>-bebe18.vercel.app/blog` (also linked in the pull request's Vercel comment).
2. Review the preview on desktop and phone.
3. Merge the pull request into `main`. The live site updates automatically.

---

## 9. Where things live

| Path | What it is |
| --- | --- |
| `src/data/blog/<slug>.ts` | One post's content |
| `src/data/blog/index.ts` | Post registry, sorting, tags, related posts, reading time, date format |
| `src/data/blog/types.ts` | `BlogPost` and `BlogBlock` types |
| `src/app/blog/page.tsx` | Blog index: headline, intro, filter and cards |
| `src/app/blog/[slug]/page.tsx` | Post page layout and metadata |
| `src/components/blog/BlogBody.tsx` | Renders body blocks |
| `src/components/blog/InlineText.tsx` | Inline bold / italic / links |
| `src/components/blog/OkrDiagram.tsx` | OKR diagram, the model for future diagrams |
| `src/components/blog/PostCard.tsx`, `PostList.tsx` | Cards and the topic filter |
| `src/components/blog/PostMeta.tsx`, `TagPill.tsx`, `ShareLinks.tsx`, `ReadingProgress.tsx` | Date and reading time, tags, share buttons, progress bar |
| `src/data/site.ts` | Header nav (the Blog link) and `siteUrl` (set `NEXT_PUBLIC_SITE_URL` in Vercel if needed) |
