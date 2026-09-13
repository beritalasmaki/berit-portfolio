# Berit Alasmäki — Portfolio Design System

Single source of truth for the portfolio site. Values originate from the built design
files (`Portfolio Hero.dc.html`, `Case Study - Industrial Data.dc.html`), with two
categories of deliberate departure from them, both called out inline below: WCAG AA
contrast corrections (the Muted, Accent dark and Accent hero tokens), and real interactivity that
those static files explicitly deferred to code (the filmstrip gallery's lightbox,
the sticky TOC's scroll-spy, focus/selection states). Use these exact values — do not
introduce new colors, sizes or radii without adding them here first.

---

## 1. Color

### Core palette

| Token | Hex | Use |
|---|---|---|
| Ink | `#222222` | All primary text, headlines, dark panels, filled buttons. **Never pure black.** |
| Body | `#4a4a4a` | Body copy, secondary paragraphs |
| Muted | `#6b6660` | Mono labels, captions, eyebrows, meta text, copyright line. **Supersedes `#8a8580`** — that value is only 3.65:1 on white, which fails WCAG AA (4.5:1) at the small sizes this token is used for everywhere. `#6b6660` passes at 5.69:1. (Absorbs the old separate "Footer meta" token — same value, one name now.) |
| Accent | `#FC890C` | Orange from the logo flourish. Underlines, markers, dots, borders, the contact block background — **decorative use only.** Never used as text color on a light background: raw accent is ~2.4:1 contrast, which fails WCAG AA even at large-text sizes. |
| Accent dark | `#A45B0B` | Accent-colored **text** at normal (non-large) sizes on light backgrounds — the sticky TOC's active-item text (15px). Passes AA at 5.15:1 (needs 4.5:1 at these sizes). |
| Accent hero | `#D9770C` | Accent-colored **text** at large-bold sizes only — currently just the hero's "forward." (part of an 800-weight, 40–84px heading). WCAG AA only requires 3:1 for large/bold text, so this stays closer to the true brand orange than Accent dark while still passing at ~3.2:1. Not for use at normal text sizes — use Accent dark there instead. |
| Background | `#ffffff` | Page background |
| Panel | `#f5f3ee` | Cards, step cards, quote blocks, tab panes |
| Panel alt | `#f0eee9` | Inactive tabs (slightly darker than white so tabs read against the page); also used as the loading-placeholder background behind case-study thumbnails |
| Soft | `#fbfaf7` | Very light fills (image frames, nested blocks) |
| Rule | `#eeece7` | Hairline dividers, light card borders |
| Rule strong | `#e2ded6` | Medium borders, inner card dividers, pill outlines |
| Ink alt | `#3a3a3a` | Dark-on-dark separators inside the dark tab column; also the body-text color for the highlight-quote callout inside each tab pane |
| Overlay | `rgba(34, 34, 34, 0.8)` | Lightbox backdrop (Ink at 80%) |
| Success | `#3F7A54` | The dot on the header's rotating status badge — and nothing else (the badge's text is `muted` grey; see the Status badge entry). A sage green chosen to sit next to this palette's warm cream/orange rather than a stock Tailwind green. |
| ~~Success bg~~ | ~~`#E9F3EA`~~ | **Retired.** Was the status badge's pill fill; the badge no longer has one (see the Status badge entry for why). Still defined in `tailwind.config.ts` — reuse it if a tinted "available/positive" surface is ever needed again, rather than inventing a second green. |

### Rules
- Two neutral background tones maximum per page (`#ffffff` + `#f5f3ee`).
- Accent orange is used sparingly: markers, underlines, active states, borders, and
  exactly one large closing block (the contact section) — **never as text color on a
  light background** (see Accent dark above).
- Text on the orange contact block is `#222222`, never white.
- Client / customer logos are normalized to `#222222`.

---

## 2. Typography

### Families

```
Headings & UI:  Manrope (400, 500, 600, 700, 800) — Google Fonts
Labels & meta:  'IBM Plex Mono' (400, 500) — Google Fonts
Fallbacks:      Helvetica, Arial, sans-serif / monospace
```

```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type scale (fluid, identical on every page)

| Role | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| Hero H1 | `clamp(40px, 6.2vw, 84px)` | 800 | 1.02 | -0.03em |
| Contact H2 | `clamp(34px, 5vw, 76px)` | 800 | 1.02 | -0.03em |
| Section H2 | `clamp(30px, 3.6vw, 52px)` | 800 | 1.05 | -0.025em |
| Card / pane H3 | `clamp(22px, 2.3vw, 32px)` | 800 | 1.1 | -0.02em |
| Sub-heading H4 | `clamp(19px, 1.7vw, 24px)` | 700 | 1.2 | -0.015em |
| Step numeral | `clamp(30px, 3vw, 42px)` | 800 | 1 | -0.03em |
| Lead paragraph | `clamp(16px, 1.35vw, 19px)` | 400 | 1.55–1.6 | — |
| Body | `clamp(15px, 1.15vw, 17px)` | 400 | 1.6 | — |
| Body emphasis | `clamp(15px, 1.2vw, 17px)` | 600–700 | 1.4 | — |
| Small body | `clamp(14px, 1.1vw, 16px)` | 400 | 1.6 | — |
| Closing banner | `clamp(16px, 1.4vw, 20px)` | 700 | 1.45 | — |
| Nav link | `15px` | 600 (700 in the contact block's closing links) | — | 0.01em |
| Mono label (section) | `11px` | 400 | — | 0.14em, uppercase |
| Mono label (emphasis) | `12px` | 500 | — | 0.14em, uppercase |
| Pill / button label | `13–15px` | 600 | — | 0.01–0.06em |
| Footer meta | `13px` | 400 | — | — |

### Rules
- `text-wrap: pretty` on every heading and paragraph.
- `white-space: nowrap` on all nav items, buttons, pills and captions — except
  the sticky TOC's items, which wrap (see Sticky TOC below).
- Never break words mid-character; no hyphenation.
- Body copy `max-width: 30–36em` — except case-study page body text
  (hero intro, impact intro, text sections, challenges), which reads at a
  fixed `800px`: that layout has a sticky TOC eating into the gutter, so
  the content column has more width to spare than the homepage's simpler
  stacked sections do.
- Mono is used only for labels, eyebrows, captions and numbering — never for body copy.

### Section numbering
Sections carry a mono eyebrow in the pattern `NN / lowercase label`, e.g.
`01 / your next move`, `02 / selected case studies`, `03 / about`.
Emphasized variants (inside tab panes) are **Ink** at 12px/500 — matching the
Mono label (emphasis) row above — preceded by a 24×2px accent rule.

---

## 3. Spacing

8px base scale. Every padding, margin and gap is a multiple of 8.

```
8 · 16 · 24 · 32 · 40 · 48 · 56 · 64 · 72 · 80 · 96 · 120
```

### Standard values

| Purpose | Value |
|---|---|
| Page gutter | `clamp(24px, 5vw, 72px)` |
| Section rhythm (between sections) | `clamp(64px, 9vw, 120px)` |
| Card padding | `clamp(24px, 2.6vw, 32px)` |
| Pane padding (large) | `clamp(24px, 3vw, 40px)` |
| Card footer padding | `clamp(16px, 2vw, 24px) clamp(24px, 2.6vw, 32px)` |
| Grid gap (cards) | `clamp(16px, 2vw, 32px)` |
| Grid gap (columns) | `clamp(24px, 4vw, 64px)` |
| Stack gap (in-card) | `16px` |
| Stack gap (label → value) | `8px` |
| Header / nav gap | `clamp(16px, 2.2vw, 32px)` |
| Contact block padding | `clamp(48px, 7vw, 96px) clamp(24px, 5vw, 72px)` |

### Section rhythm is uniform — every break, no exceptions
Every top-level section on the homepage carries `mt-rhythm`, so all five
section breaks measure identically at a given width (verified 64px at
360/390/414, 92px at 1024, 120px at 1440). `ClientLogos` was the one
offender: it opened with `border-t` + `pt-8` and no top margin, seating its
divider rule flush against the hero — a 0px break where every other section
got the full rhythm. It now takes `mt-rhythm` as well, with `pt-8` kept as
internal space between the rule and its heading.

> **Measuring this correctly:** `Reveal`-wrapped sections start at
> `translateY(28px) scale(0.97)` and only settle once their
> IntersectionObserver fires. Screenshotting or measuring before a section
> has actually been scrolled into view reports its *pre-reveal* box, which
> reads as a phantom 50–80px of extra spacing that grows the further down
> the page you look. Scroll the full page (re-reading `scrollHeight` as you
> go, since it grows as wrappers pop back to full size), then assert
> `getComputedStyle(wrapper).transform === "none"` on every wrapper before
> trusting any vertical measurement.

### Exception
- **Minimum touch target: 44px.** Icon-only interactive controls (e.g. the mobile
  nav toggle) size to 44×44px regardless of the 8px scale — this is the WCAG 2.5.5
  / platform-standard minimum tap target, not a spacing value.

---

## 4. Radii & elevation

| Token | Value | Use |
|---|---|---|
| Pill | `999px` | Buttons, tags, LinkedIn/GitHub pills |
| Card | `20px` | Cards, step cards, quote blocks |
| Frame | `14px` | Screenshot frames |
| Small | `10–12px` | Lightbox chrome, small blocks |
| Image inner | `6px` | Image inside a frame |

| Shadow | Value | Use |
|---|---|---|
| Frame default | `0 8px 22px rgba(34, 34, 34, 0.06)` | Screenshot frames |
| Frame accent | `0 16px 34px rgba(34, 34, 34, 0.16)` | One "clickable example" frame per gallery |
| Lightbox | `0 12px 30px rgba(34, 34, 34, 0.22)` | Expanded image |

Borders are always `1px solid` — `#eeece7` (light) or `#e2ded6` (medium).

---

## 5. Components

### Button — primary (filled)
```
background: #222222; color: #ffffff;
font-size: 15px; font-weight: 600; letter-spacing: 0.01em;
border-radius: 999px; padding: 16px 32px;   /* nav variant: 12px 24px */
white-space: nowrap;
```

### Button — secondary (outlined)
```
border: 1px solid #e2ded6; color: #222222;
font-size: 15px; font-weight: 600;
border-radius: 999px; padding: 16px 32px;
white-space: nowrap;
```

### Pill — tertiary (LinkedIn, GitHub)
```
font-family: 'IBM Plex Mono', monospace;
font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
color: #4a4a4a; border: 1px solid #e2ded6;
border-radius: 999px; padding: 12px 20px;
white-space: nowrap;
gap: 6px; /* between the brand mark and the label */
```
Matches the primary button's height. LinkedIn then GitHub sit 8px apart, then 8px
from the Contact button, separated from the page links by a `1px × 20px` `#e2ded6`
divider. Each pill carries its brand's icon (14×14px, `fill: currentColor` so it
tracks the pill's text color through hover/focus) before the label — purely
reinforcing, since the label text already says where the link goes, so the icon
itself is `aria-hidden`.

### Text link — accent underline
```
font-size: 15px; font-weight: 600; color: #222222;
border-bottom: 1px solid #FC890C; padding-bottom: 8px;
align-self: flex-start; white-space: nowrap;
```
Used for "Explore the case", "See the project behind the answer", "Get to know me on LinkedIn".

### Card (content / step / case study)
```
background: #f5f3ee; border-radius: 20px; overflow: hidden;
display: flex; flex-direction: column;      /* stretch in a grid row */
```
- Body: `padding: clamp(24px, 2.6vw, 32px)`, `gap: 16px`
- Optional footer: `margin-top: auto; border-top: 1px solid #e2ded6;`
  with a mono `Outcome` label + bold value
- Case-study cards: the image sits flush at the top with **no gap** — image and text
  form one seamless card (image `border-radius: 0`, card clips it via `overflow: hidden`)
- Cards in the same grid row are always equal height (`align-items: stretch`)
- **In-progress case study (no screenshot yet):** the thumbnail area renders a
  dashed-border placeholder box (`border: 1px dashed` rule-strong, inset ~16px
  from the image edges) with a centered mono label (e.g. "Currently in
  process") instead of an `<Image>`. A small solid pill (`bg-ink`, white mono
  label, e.g. "Personal project") sits absolute top-left of the thumbnail
  area, independent of the placeholder — a finished project can carry the
  same tag over a real screenshot. Both are data-driven (`placeholderLabel`,
  `tag` on the case study), and shared by the homepage grid and the "Other
  case studies" cross-links via one `CaseStudyThumbnail` component so the two
  don't drift. A case study can also carry a `liveUrl`; when set, the hero
  renders a "Visit live project ↗" secondary-pill link (`target="_blank"
  rel="noopener noreferrer"`) under the description, whether or not the case
  study has full content yet.
- **Isolated last card in a multi-column grid:** both card grids that pull
  from the full case-study registry (`CaseStudyCards` on the homepage,
  `OtherCaseStudies` at the bottom of a case-study page) can end up with a
  count that doesn't divide evenly into the grid's column count at its
  widest breakpoint — currently always true (5 total case studies ÷ 2
  columns on the homepage; 4 "other" studies ÷ 3 columns on a case-study
  page), leaving the last card alone in its row with one or two empty
  card-widths of gap next to it. Rather than leave that gap, that last card
  spans every column in the row and switches to a horizontal layout
  (thumbnail on the left at a fraction of the row's width, text centered on
  the right) instead of stretching its normal stacked layout across the
  full width — the thumbnail's `aspect-[16/13]` box is relative to its own
  (now much narrower) width, so it keeps normal proportions instead of
  becoming a huge stretched image. Computed per-render from the actual
  array length (`items.length % columns === 1`, applied to `index ===
  items.length - 1`), not hardcoded, so it stays correct as case studies
  are added.

### Tabs (homepage "your next move")
- Single joined block, `border-radius: 20px; overflow: hidden`, no gap between column
  and pane
- Tab column: inactive `#f0eee9`, **active `#222222`** with `#ffffff` text
- Tabs stretch to fill the block height equally
- Every question row reserves `min-height: 2.75em` on its own text (em-based,
  so it scales with the row's fluid `clamp()` font-size) regardless of that
  question's actual length — rows read as a uniform list instead of hugging
  each question's own line count, so nothing reflows as the selection moves
  between a one-line and a two-line question
- Pane background matches the tab column tone so the two read as one surface
- React state (`useState`), not CSS-only — selecting a question re-renders the
  shared pane's content directly, no page reload
- Pane content fades in on every selection via `.panel-fade-item` (340ms,
  opacity only — see "Detail-panel cross-fade" below), keyed to the active
  question so React remounts the node and the animation restarts each click
- **Below `md`, this becomes an accordion instead** — two separate markup
  blocks (desktop tablist+pane hidden, mobile accordion shown), not one
  responsive layout. Each question is its own disclosure button (`4px` left
  border, same active-state ink/white treatment as the desktop tab column);
  its answer — same body/highlight/link content as the desktop pane —
  renders directly below that question when expanded, not in a shared panel
  after the full list. One open at a time; the first question's answer is
  open by default (matching the desktop panel, which always shows an active
  answer), the rest start collapsed. `aria-expanded` + `aria-controls` on the
  button, `role="region"` on the panel, panel conditionally rendered (not the
  `hidden` attribute) — each expand is a genuine mount, so the same
  `.panel-fade-item` fade applies with no extra key needed.

### Detail-panel cross-fade (`.panel-fade-item`)
For a detail panel whose content swaps in place on click (MindTabs' answer
pane, WorkingWithMe's expanding rows) rather than appearing once on page load:
```
opacity: 0; animation: panel-fade 340ms cubic-bezier(0.4, 0, 0.2, 1) forwards;  /* opacity only, no translateY */
```
Lighter than `.fade-up-item` (700ms, fades *and* rises) by design — that
class is a once-per-page entrance; this one re-fires on every click, so it's
tuned as an unhurried, relaxed settle (a smooth ease-in-out curve) rather
than a repeated flourish or an instant snap.
Requires the panel to remount per selection (`key={activeIndex}` on desktop;
the mobile accordion's conditional rendering already remounts it) — a prop
change on a persisted DOM node won't restart a CSS animation.

### About Me (About section, "About Me")
Two cards side by side (`md:grid-cols-2`, `items-stretch`), replacing the
section's earlier one-paragraph intro entirely (`AboutMe.tsx`, rendered
before `ProcessTimeline`):
- **Left, bio card** (`bg-panel`): photo (reuses the Hero's `/photo.png`,
  already carrying its own hand-drawn orange-ring treatment — no separate
  "placeholder" asset), an italic greeting line (plain `Manrope` italic, not
  a second typeface — a whole extra web font for one line of copy wasn't
  worth it), three body paragraphs, then a `Connect on LinkedIn` pill button
  in the site's primary filled-pill style (`bg-ink`/`hover:bg-ink-alt`,
  matching Hero's primary CTA and Header's "Contact" button).
- **Right, "Working with me" card** (`bg-white border border-rule` — a subtle
  white-vs-cream distinction from the left card, not the dark/light contrast
  of the reference layout this was built from; DESIGN-SYSTEM.md's "existing
  light theme" always wins over a visual reference's own color choices).
  Five rows (`bg-panel` chips, icon badge + statement + a grey "hover for
  more" label in the standard mono eyebrow style — `font-mono-label
  text-mono-label uppercase text-muted`, matching "03 / ABOUT"; it
  replaced a "⌄" chevron, which said less about what the interaction
  actually is), each
  revealing a short explanation:
  - Desktop (an actual mouse): reveals on **hover**, detected via
    `(hover: hover) and (pointer: fine)` — not a viewport-width guess.
    Touch devices reveal on **tap** instead (tap again to collapse).
  - Every row is a real `<button>`; clicking/Enter/Space **pins** it open
    (persists after blur/mouse-leave) — the same mechanism drives both the
    mouse-hover preview and the keyboard/touch toggle, just OR'd together
    (`pinned || (hoverCapable && hovered)`), rather than two separate code
    paths.
  - **Hover state is local to each row**, not lifted to a shared parent
    index. Hovering row N must never programmatically force row N-1 to
    close — only that row's own real mouseenter/mouseleave should. (Lifting
    it to a single shared index was tried and reverted: closing the
    previous row on every new hover caused *that row's own collapse* to
    still be resizing page content for another ~150-300ms right as the
    cursor arrived at the new row, occasionally shifting the new row's
    hoverable area out from under an otherwise-stationary pointer —
    confirmed with Playwright, not just theoretical.)
  - **The reveal sits directly on top of its own row** (`absolute inset-0`,
    the exact footprint of the row's button), not in the space above or
    below it: hovering/focusing/pinning a row cross-fades its icon +
    statement out and a white detail card in, with a slow, soft transition
    — a blur filter was tried here first and read as fussy/distracting
    rather than calm, so it's gone. Because the detail card never leaves
    its own row's box, it can never encroach on a neighboring row, so every
    row (including the last) behaves identically — no "last row has
    nowhere to open into" special case the way an adjacent-space reveal
    would need. Each row has a `min-h-[124px]` floor so the longer detail
    sentences have room to wrap without the box needing to resize on hover
    (resizing on hover was the thing that caused real, Playwright-confirmed
    hover loss on adjacent rows in an earlier version of this component —
    see the note above).
  - **Only the overlay scales in (`scale-[0.98] -> scale-100`); the button
    itself only fades (`opacity` alone, no transform).** Scaling the button
    too was tried first and broke hover almost immediately — confirmed by
    sampling `aria-expanded` every 50ms after a synthetic hover, it flips
    back to `false` at ~100ms and stays there. Shrinking the very element
    whose `onMouseLeave` drives the hover state shrinks its own
    hit-tested area out from under a perfectly stationary cursor, firing
    that `onMouseLeave` before the transition even finishes — a
    self-inflicted version of the exact "element moves out from under the
    cursor" bug class this component was already built to avoid (see the
    note above on lifted hover state). The overlay has no such risk since
    it's `pointer-events-none` (below), so it's free to scale.
  - The overlay is `pointer-events-none` in **every** state, not just while
    collapsed. It sits precisely on top of the button that controls it, so
    if it ever accepted pointer events, the instant it faded in the cursor
    would be "over" the overlay instead of the button beneath — firing that
    button's `mouseleave`, hiding the overlay, handing hover back to the
    button, re-firing `mouseenter`... a flicker loop. Passing every pointer
    event through to the button underneath avoids it outright.
  - Deliberately relaxed transition: `duration-500 ease-out` on both
    layers (slower than the site's usual `duration-150`/`duration-300`
    hover timings) — a soft, unhurried settle rather than a snap, applied
    via the "duration/easing live on whichever class list is active" CSS
    trick (no keyframes needed for a plain two-state toggle).

### Process timeline (About section, "My process")
Imported from a Claude Design canvas component (`ProcessTimeline.tsx`) and
reimplemented as a real React component — the `.dc.html` export's own
template DSL only runs inside the Claude Design canvas. Replaces the earlier
static three-card "Find the right problem / Make possibilities tangible /
Help the work ship" list entirely (`ProcessSteps.tsx`, deleted). Sits inside
`<section id="about">`, right after the existing bio paragraph, as its own
nested `<section aria-labelledby="process-heading">` with its own eyebrow
("My process") + h2 — a second beat within the About section (identity, then
process), not a new top-level numbered section.
- **Tabs** — one per project type (0→1 Product, Rapid Prototype, Design
  System, Redesign), horizontal underline style: `3px` `accent` bottom
  border + bold ink text when active, `muted` text + transparent border
  otherwise. Real `role="tablist"`/`role="tab"` with roving tabindex,
  `←`/`→`/Home/End — the horizontal counterpart to the vertical
  `ArrowUp`/`ArrowDown` pattern the homepage tabs use.
- **One joined surface, not two cards** — the timeline and detail halves
  share a single outer `border border-rule-strong rounded-card
  overflow-hidden` (`grid-cols-[3fr_2fr]` at `lg`, detail narrower than the
  timeline), with a `border-l` (`border-t` when stacked below `lg`) as the
  only seam between them — same "single joined block, no gap" treatment as
  the homepage tabs (MindTabs' tablist+pane), just split into unequal
  widths instead of a fixed tablist column.
- **Typical timeline half** (`bg-panel`, `p-card-pad`) — a week ruler
  (`W1…Wn`) above stacked rows of stage blocks, each block's width/position
  computed as a percentage of the tab's total weeks. Blocks are packed
  left-to-right per row (each one's gap from the previous block's right
  edge becomes its own left margin) so they can never overlap. Six semantic
  category colors (Research/Design/Code/Testing/Systems/Ship) —
  content-intrinsic categorical coding, not part of the site's brand
  palette, kept as component-local constants. A legend row lists all six
  regardless of which appear in the active tab.
- **Detail half** (`bg-white`, `p-card-pad`) — clicking a stage block
  toggles it open (click again to close); switching tabs always resets it
  to the closed/prompt state. Prompt state: small hand-drawn accent
  squiggle icon + "Click a step to see how I work." Open state: a category
  tag pill (`rounded-pill`, that category's own fill/text color) above the
  stage name, "When I use this" + body copy, "I skip this when…" in a
  `border-l-4 border-accent` / `bg-soft` callout (same left-border-callout
  convention as case-study impact cards, just accent instead of the
  un-colored default). Swapping between two already-open stages re-renders
  the same panel in place (no unmount/remount), so there's no flash — only
  a genuine prompt↔detail transition changes which branch renders.
- **Mobile**: the week ruler + stage rows scroll horizontally within the
  timeline card (legend stays outside the scroll region, always visible)
  rather than compress illegibly or overflow the page — the source export
  was only previewed at a fixed 1200px canvas width and didn't account for
  narrow viewports; this is linear time-ordered content that can't reflow
  the way a card grid can, so a contained horizontal scroll is the correct
  fix, not a design deviation.
- **No load-time animation of its own** — sits inside the homepage's
  existing per-section `<Reveal>` scroll-entrance (grows in once scrolled
  into view, same as every other homepage section) and has nothing that
  could compete with the hero's own logo/line/text load sequence, which
  is scoped to `Header.tsx`/`Hero.tsx` and finishes long before this
  below-the-fold section is ever visible.
- One reconciliation from the export: its focus-visible outline used accent
  orange; left as the site's global ink `:focus-visible` default instead,
  consistent with the WCAG 1.4.11 reasoning already documented for every
  other interactive element (`globals.css`).

### Screenshot frame — filmstrip gallery (case study pages)
```
background: #ffffff; border: 1px solid #eeece7; border-radius: 14px; padding: 8px;
box-shadow: 0 8px 22px rgba(34, 34, 34, 0.06);
img { border-radius: 6px; display: block; }
```
Single-row "filmstrip": every thumbnail is a uniform **210px tall**, width follows
each image's own aspect ratio (desktop shots read wider, mobile shots narrower) —
not the two-tier desktop/mobile CSS Grid an earlier draft of this doc described.
- `flex-wrap: wrap` — never horizontal-scroll; thumbnails wrap onto the next row on
  narrow viewports
- Hover/focus: shadow steps up to Frame accent (see Radii & elevation)
- Caption: mono 11px `#6b6660`, uppercase, nowrap, sits below the frame
- Clicking a thumbnail opens the Lightbox (below) — real click-to-expand
  functionality, not a static mockup affordance

### Lightbox (case study images)
Real interactive component (not the design files' CSS-only `:target` version):
- Backdrop `rgba(34, 34, 34, 0.8)`, `position: fixed; inset: 0`
- Header bar `#222222`, `border-radius: 12px` (within the general Small radius
  range, 10–12px), `padding: 12px 16px`; shows the caption, an image counter
  (`· N/M`) when there's more than one image, Previous/Next pill buttons, and a
  Close pill button
- Cursor `zoom-in` on the thumbnail, `zoom-out` on the backdrop
- Click-to-zoom on the expanded image itself: opens at 60% of its actual
  (natural) pixel size — cursor `zoom-in` — click (or Enter/Space, it's a
  real button) to jump to 100% true size — cursor `zoom-out` — click again
  to return to 60%. Resets to 60% every time a new image opens or Previous/
  Next changes the image. The image sits in its own scrollable region below
  the header bar, so a 100%-size image taller or wider than the viewport
  scrolls inside that region while the header (caption, Previous/Next,
  Close) stays fixed in place.
- Keyboard: `Escape` closes, `←`/`→` navigate between images, `Tab` is trapped
  inside the dialog (now including the zoom toggle, on viewports where it
  exists). Focus moves to Close on open and returns to the thumbnail that
  opened it on close.
- Expanded image: `border-radius: 12px`, `box-shadow` = Lightbox shadow (see Radii & elevation above)
- **Click-to-zoom is desktop-only** (`≥768px`, checked via `matchMedia`, same
  breakpoint the header's mobile nav uses). Below that, there's no toggle at
  all: the expanded image just renders at one fit-to-width size
  (`width: 100%; height: auto`, no `zoom-in`/`zoom-out` cursor, no button
  wrapper) — a tap-to-zoom toggle only fights with pinch-zoom/scroll on a
  touch viewport, and there's no pixel-detail gain from jumping to 100% on a
  small screen the way there is on desktop.

### Sticky TOC (case study pages)
- Two-column layout under the top header: TOC left (`280px`), content right
- `position: sticky; top: 32px` — **the sticky element's wrapper must not
  carry `self-start`/shrink-to-fit at the breakpoint where TOC and the
  main content share a grid row.** A sticky element's "stick range" is
  bounded by its own containing block; `self-start` shrinks that block to
  the nav's own short content height, so the nav stops sticking after a
  couple hundred pixels instead of for the whole page (found and fixed via
  Playwright: without this, the nav's on-screen position tracked scroll
  1:1 — not sticky at all — for all but the very top of the page). Let the
  wrapper use the grid's default `align-items: stretch` instead, so it
  matches the main content column's full height and the nav can travel the
  whole way down it, stopping naturally at the wrapper's own bottom edge —
  which is also how it stays clear of the footer (`<main>`, and therefore
  this grid, ends before `<Footer />` begins) without any extra scroll-math.
- `background: #ffffff`, `border: 1px solid #eeece7`, `border-radius: 20px`, `padding: 24px`
- Items: 15px/600, 16px gap. **Exception to the general nav `white-space: nowrap`
  rule** (§2): TOC labels wrap onto a second line instead of overflowing the
  column — some section headings (e.g. "Challenges & Problem-Solving") are too
  long to fit one line even at this width.
- **Active item:** Accent dark (`#A45B0B`) text + `font-weight: 700` + `4px` left
  border in `#FC890C` + a 6px accent dot before the label (both together, not
  either/or) + `border-radius: 0 16px 16px 0`
- Inactive items: `#4a4a4a`, `font-weight: 600`, flat `4px` `#eeece7` left border
  (an always-present track the active state highlights against)
- Real scroll-spy (IntersectionObserver) drives `activeId` — not the static
  single-example the design files show
- No logo, contact info or back-link inside the TOC — those live only in the top header
- **Below `lg`, this collapses into a dropdown** instead of the always-expanded
  sidebar (which would otherwise push the whole article down): a native
  `<details>` disclosure, summary label "Navigate to...", chevron rotates
  180° open. Same link list, same scroll-spy `activeId` highlighting, as the
  desktop sidebar — both are driven by one shared IntersectionObserver.
  Selecting a link closes the dropdown. `<details>` chosen over a custom
  JS-toggled panel for its built-in keyboard/screen-reader disclosure
  semantics with no extra wiring.
- **Item list (full case studies):** Starting Point, Examples of UI-screens,
  The Impact, How it started, Challenges & Problem-Solving, What I would do
  differently, Other case studies, Back to main page. Minimal
  (summary-only) case studies keep their own shorter list unchanged (About
  the project, Other case studies).
- **Opens the matching accordion section on click:** every section-anchor
  TOC link click dispatches a `cs:open-section` window `CustomEvent` with
  the clicked id (see `AccordionSection`) in addition to its normal anchor
  navigation — a harmless no-op for ids nothing is listening for.
- **"Back to main page" renders separately and looks different on
  purpose** (`pageLinks()`, vs. the section anchors' `sectionLinks()`) — a
  real link to `/` (`TocItem.href` overrides the default `#id` anchor;
  same destination as the header's own "← Back to work", offered again
  here since scrolling deep into a long case study puts the header's link
  off-screen), so it's styled as leaving the page rather than one more
  stop within it: a `←` prefix, bold ink text (not the section anchors'
  left-border-tab treatment), separated from the list above by its own
  `border-t` divider.

### Sneak-peek hero (full case studies, above "Starting Point")
Replaces `CaseStudyHero` entirely for the four full case studies — that
component now renders only for the minimal (summary-only) template.
Two-column (`lg:grid-cols-[1.15fr_0.85fr]`), left column stacked `gap-6`:
- Eyebrow "Case study" (plain mono-label, same as before)
- Category pill: `bg-panel border border-rule-strong rounded-pill`, accent-dark
  mono-label text — a short 2-3 word tag (e.g. "AI Search Platform"),
  `categoryTag` on the case study, distinct from the mono eyebrow `label`
  field (which keeps its own "INDUSTRIAL DATA TOOLS · 2020–2023" job)
- `<h1>` (`text-hero`, reused verbatim from the old hero) + one-sentence
  summary (`description` — the homepage-card copy, not `intro`)
- **Role/Focus box:** single `bg-panel border border-rule-strong rounded-card`
  box, two lines ("Role:" / "Focus:" bold inline, not the old hero's two
  separate side-by-side cards)
- "~N min read" with a small clock icon (muted, not accent — a meta
  indicator, not a content highlight). Computed from actual word count
  across the sections a visitor would read (Starting Point, Impact,
  accordions) at ~200wpm, not a hand-maintained number that could drift
  out of sync with the copy
- Six skill-tag pills (`skillTags`): `bg-white border border-rule-strong
  rounded-pill`, mono-label text, each with a `title` tooltip carrying its
  one-line elaboration (not shown inline — the pill itself stays a short
  label). A distinct list from `methods` at the page bottom: skill tags are
  project-specific contribution areas ("AI Search Flow"), `methods` is
  general research methodology ("User interviews") reused across projects
- No CTA button — "explore full case study" would be redundant on the
  page it's already the top of

Right column: exactly 2 stacked, overlapping, rotated screenshot cards
(`sneakPeekImages` — hand-picked `gallery` entries, not just its first N;
**desktop shots only, never mobile** — a mobile screenshot's own header
crops to something far less recognizable at this card size than a desktop
one does, and prioritize whatever reads clearly at a glance over anything
text-dense in general, since these render small and cropped). Each card is
a fixed `aspect-[3/4]`
box regardless of the source image's real aspect ratio (mixed desktop/
mobile shots) — `next/image` `fill` + `object-cover object-top` crops to
fit, favoring the top of the shot (its most recognizable part) over
showing the whole thing. Position/rotation/z-index per card index is
hand-tuned (`CARD_POSITION`) so every card gets its own corner and nothing
is fully hidden underneath another.

### Section cards (full case studies)
Every titled content section below the sneak-peek hero — Starting Point,
The Impact, and the three accordions — shares one card treatment:
`rounded-card border border-rule bg-white p-card-pad`. Plain white, not the
`bg-panel` cream fill used elsewhere on the site (that's reserved for
content *inside* a card — the Role/Focus box, ImpactSection's individual
number cards — not the section chrome itself). This replaced an earlier
version where only the accordion buttons got a `bg-panel` box: that read
as its own separately-styled control rather than a section like its
neighbors, so the card moved to the whole section instead and the fill
was dropped in favor of a plain border. Applying it to the plain sections
too (not just the accordions) is what makes the page read as one
consistent "each section is a card" system rather than the accordions
looking singled out.

### Starting Point (full case studies)
Plain (non-accordion) section card directly below the sneak-peek hero,
same eyebrow+`<h2>` chrome as any other plain section. Renders
`study.intro` — the field name didn't change (`hasFullContent`
type-guards on its presence), only where it's displayed: previously
inline in the old hero right under the `<h1>`, now its own card.

### Accordion sections (`AccordionSection`, full case studies)
"How it started", "Challenges & Problem-Solving", and "What I would do
differently" — everything else on a case study page (sneak-peek hero, Role/
Focus box, Starting Point, Impact cards) stays permanently visible.
- Same section-card wrapper as every other titled section (see above), and
  the same eyebrow+`<h2>` chrome, but the `<h2>` itself *is* the toggle
  button (`<h2><button aria-expanded aria-controls>`, matching MindTabs'
  mobile accordion precedent of a heading wrapping a button rather than a
  heading nested inside one)
- **The button itself carries no background or border of its own** — it's
  just the heading, full width, inside the card. A "Show more"/"Show less"
  mono-label next to the chevron (which rotates 180° open) is what marks it
  as a clickable control with more underneath — learned the hard way twice
  over: with only the chevron as a cue, a collapsed section read as if it
  simply had no content under the title; giving the button its own shaded
  box then made accordions look like a visually distinct, separately-styled
  control instead of a section like its neighbors
- When open, a `border-t border-rule` divider separates the heading from
  the revealed content — it lives inside the same `overflow-hidden`
  wrapper the panel collapses to zero height, so it's invisible while
  closed and only appears once there's content underneath it
- **Independent per section, not a single exclusive accordion** — opening
  one never closes another. Each section owns its own `useState`, matching
  this codebase's established preference for state to live as close to the
  thing it controls as possible (see AboutMe's per-row independent hover
  state for the same call made previously)
- "How it started" starts open (`defaultOpen`), the other two start closed
- Panel is always in the DOM (not conditionally rendered) and animates via
  the `grid-template-rows: 0fr -> 1fr` technique — animates to an
  intrinsic, unmeasured height in pure CSS, the same pattern as AboutMe's
  WorkingWithMe rows. Unlike those rows, no absolute-overlay trick is
  needed here: a click-toggled, page-level accordion pushing the sections
  below it down as it opens is expected, normal behavior, not an accidental
  side effect competing with a hovering mouse
- Listens for the TOC's `cs:open-section` event and opens if its own id
  matches — see the Sticky TOC entry above

### Header (all pages)
Single row, one hairline below:
```
[logo 80px]  ————————  [page links]  |  [LinkedIn icon]  [GitHub icon]  [Contact button]  [status badge]
```
- Logo: real vector mark (blob + signature paths, exact 1:1-scale overlay
  measured against the original `berit-logo.png`) + real text ("Berit
  Alasmäki" / "UX & Product Designer"), not a flat image — `height: 48px`
  below `sm`, `64px` at `sm:`, `80px` at `md:` and up (same in header and
  footer), large enough that the role line under the wordmark stays legible.
  The mark's height is the site's shock absorber for the header row: the
  wordmark beside it *cannot* shrink (its role line is `whitespace-nowrap`
  mono at a fixed 11px), and the row doesn't wrap, so when the row runs out
  of width the mark is what gives way. Fixed at 80px everywhere it overflowed
  by ~22px at 390px; at 64px it still overflowed by ~26px at 360px, pushing
  the mobile menu button off-screen. Both confirmed with Playwright
  (`scrollWidth` > `clientWidth`) and fixed by stepping the mark's own height
  down rather than touching the row layout. Header row gap is also `gap-3`
  below `md:` (`gap-8` from `md:`): it is a `justify-between` row, so the gap
  only acts as a minimum, but a 32px minimum alone was enough to push the
  button past the right gutter at 360px. Measured slack between the logo and
  the menu button after both changes: 19px @360, 49px @390, 73px @414. See
  `Logo.tsx` and the Entrance sequence below.
- **Wordmark lockup: the two text lines are the same width.** "Berit
  Alasmäki" (22px/800 Manrope) naturally paints 151.97px while "UX &
  PRODUCT DESIGNER" (11px IBM Plex Mono + 0.14em tracking) paints
  170.95px, so the name read as noticeably short over a wider subtitle.
  The name carries `tracking-[0.0616em]` to close that 18.98px gap across
  its 14 characters, bringing both lines flush at 170.95px (verified to
  within 0.01px in header, footer, case-study header and mobile). It's a
  hand-measured constant — the same convention as the mark's own
  transforms — because no CSS mechanism letter-spaces text to fit a
  width: `text-align: justify` only widens *word* gaps (this name has one
  space, so it would read "Berit          Alasmäki") and can never shrink
  the role line, `text-justify: inter-character` isn't reliably
  supported, and measuring in JS would force `Logo` to become a client
  component when the footer renders it as a server one. `Logo.tsx`
  carries the derivation to recompute from if `site.name`/`site.role`
  ever change.
- `border-bottom: 1px solid #eeece7; padding-bottom: 16px`
- Homepage links: Selected case studies · About · My Process (scrolls to
  `ProcessTimeline`'s `#process`)
- Case-study pages: `← Back to work` in place of the page links
- Contact button scrolls to `#contact` on the same page (`html { scroll-behavior: smooth }`)
- **LinkedIn/GitHub are icon-only buttons** (`IconLink` in `Header.tsx`), not
  labeled pills — a 44px circle, `border-rule-strong`, with a custom
  `aria-hidden` tooltip (not the native `title` attribute: `title` only
  shows on mouse hover after a browser delay, with inconsistent
  screen-reader support, so it can't give keyboard users the same
  hover/focus parity everything else on this site gets). The tooltip shows
  on both `group-hover` and `group-focus-within`; the accessible name comes
  from the link's own `aria-label` regardless of whether the tooltip is
  even rendered. On touch there's no hover/focus-within to trigger it — a
  tap just navigates. The mobile nav panel keeps the original labeled
  pills unchanged (plenty of vertical room there; an icon alone reads
  less clearly in a full-screen stacked menu).
- **Status badge** (`StatusPill.tsx` — filename kept, but it is no longer
  a pill): a small `success`-green dot plus rotating text, on the right of
  Contact, inside the same tight-gap `LinkedIn/GitHub/Contact` cluster
  rather than the wider page-links group. Cross-fades through "Open to
  work" / "Open to networking" / "Open to brainstorming" on a 4.5s
  `setInterval`, `duration-700` opacity crossfade. Tried next to the logo
  first, then directly to the left of Contact; settled on the right of it,
  separated by `ml-4` on top of the cluster's `gap-2` (24px total) so it
  doesn't crowd the Contact button.
  - **No pill chrome.** It began as a rounded `bg-success-bg` pill, but
    the fill is what made the fixed width below *visible*: a short status
    left a wide stretch of empty green, and the whole box read as heavy
    chrome for what is really a caption. With the fill gone the leftover
    width is simply invisible, so only the dot and the text remain.
  - **Typography is the standard mono eyebrow**, identical to "03 / ABOUT"
    and every other label on the site: `font-mono-label text-mono-label
    uppercase text-muted` (IBM Plex Mono, 11px, 0.14em tracking, `#6b6660`
    grey). It started as 12px semibold sans in the sage green, which read
    as a foreign element next to the site's own labels. Only the dot stays
    `success` green now — it alone carries the "available" signal.
  - **Text is left-aligned in the fixed box, not centered.** Centering
    split the leftover width evenly, which pushed a short status ~50px
    away from the dot and left the dot stranded. Left-aligning keeps the
    dot a constant 8px from the first glyph on every status, and keeps the
    dot's own x-position perfectly still as the text rotates (verified
    pixel-identical across all three).
  - **Fixed width, not hug-to-content.** An earlier version measured each
    status's natural width and resized the box to match, but that pill
    sat wedged against Contact and the icon buttons — its own footprint
    changing size as the text rotated shifted Contact sideways with it,
    which is exactly the "things move around" behavior a header shouldn't
    have. The text box is now a constant `212px` (the longest status,
    "Open to brainstorming", measures 165px at the mono-label face and
    tracking, leaving ~7px of slack for font-fallback variance) and never
    resizes; only its content's opacity crossfades. Height is a fixed
    `h-4` rather than `1em` so the box doesn't depend on inherited
    font-size and has room for uppercase descenders without
    `overflow-hidden` clipping them. Keep it tight rather than generous —
    every px is a px of header row, and this width sets the breakpoint
    below (it has gone 212px -> 204px -> 172px as the chrome and the
    longest status changed).
  - `prefers-reduced-motion` stops the interval outright (checked in JS,
    not just a CSS transition-duration kill — the requirement is "no
    rotation happens", not "the rotation happens instantly"), leaving it
    on the first message.
  - The rotation is `aria-hidden`; a single static `sr-only` label ("Open
    to work, networking, and brainstorming") covers all three states
    for screen readers rather than an `aria-live` region re-announcing
    every few seconds.
  - `hidden min-[1300px]:inline-flex` — the first thing to disappear as
    the viewport narrows, before the nav links, icons, or Contact button
    are ever at risk of wrapping. Not a stock breakpoint on purpose: it
    tracks the width the badge actually fits at, measured on the real
    header rather than guessed. At its current 186px the nav row wraps to
    a second line at every width up to 1280px but fits cleanly from
    1290px up, so 1300 is that threshold plus a small cushion (verified
    exactly: visible at 1300, hidden at 1299, and never wrapping while
    visible). Re-measure whenever the badge's width or the surrounding
    nav changes — this has already walked 1360 -> 1340 -> 1300 as the
    badge shed its pill chrome and then its longest status string.
  - **The dot breathes rather than pulses.** `animate-status-breathe`
    (a keyframe in `tailwind.config.ts`) fades it 1 -> 0.3 -> 1 over the
    same 4.5s as the rotation, replacing Tailwind's stock `animate-pulse`
    (0.5 dip over 2s), which is barely perceptible on a 6px dot and runs
    on a rhythm unrelated to anything else on screen. The slower, deeper
    fade on the rotation's own cadence is what cues that the text beside
    it changes. The keyframe ends at full opacity so the reduced-motion
    kill-switch in `globals.css` — which forces `animation-iteration-count: 1`
    at a 0.01ms duration — settles it to a solid dot rather than a dimmed
    one (verified: opacity pinned at 1 under `prefers-reduced-motion`).
- `nav-gap` (the fluid gap between page links) tightened to
  `clamp(10px, 1.8vw, 32px)` — down from `clamp(16px, 2.2vw, 32px)` — once
  a third nav link (My Process) joined "Selected case studies" and "About"
  competing for the same row as the icon buttons and Contact. Shrinking the
  gap first, rather than letting the row wrap to a second line, is the
  explicit priority; `flex-wrap` stays on the nav as a last-resort safety
  net, not the primary narrow-viewport behavior.

### Focus & selection state
Not covered by the original design files (no interactive states there) — added in
code and applies site-wide:
```
:focus-visible { outline: 2px solid #222222; outline-offset: 2px; border-radius: 4px; }
::selection { background: #FC890C; color: #222222; }
```

### Homepage entrance sequence
Plays once on load (homepage only — `Header`'s `animateLogo` prop), never on
scroll or re-render. Every stage is `ease-out`, deliberately unhurried — an
earlier, snappier pass (600ms logo, 700ms line segments) read as an instant
snap rather than a calm draw, since ease-out front-loads most of the visible
motion into the first fraction of the duration. The hero line and text now
start once the logo is mostly (not fully) drawn — waiting for its complete
1300ms read as a dead pause before anything else moved — so the whole thing
settles by ~2.55s, down from ~3.2s. `prefers-reduced-motion: reduce` shows
every element in its finished state immediately (site-wide kill-switch, see
the media query in `globals.css`), not just for this sequence.
1. **Logo signature mark** (`Logo.tsx`, 0–1300ms) — the blob is present from
   frame one; the black signature strokes in left to right. It's a filled
   brush-stroke shape, not a simple open line, so stroking it directly would
   render as a thin outline of the silhouette rather than "the pen writing
   the signature" — instead a wide horizontal bar, itself drawn with the
   same `pathLength`/`stroke-dasharray`/`stroke-dashoffset` technique as the
   hero line below, sweeps across an SVG `<mask>` that progressively reveals
   the real, unaltered signature path underneath.
2. **Hero line** (`Hero.tsx`, starts at 650ms, each path 900ms, same
   relative stagger as before) — overlaps the logo's own tail end (ease-out
   means it already reads as essentially drawn by 650ms/~60% of its
   duration) rather than waiting for the logo to fully finish, finishes
   around 2550ms.
3. **Headline → subheadline → buttons** (800ms / 980ms / 1160ms) — fade up
   (~12px, 700ms each), overlapping the hero line's own draw rather than
   waiting for it to finish. Case-study pages have no hero to lead into, so
   their header logo, and the footer's everywhere, just render finished.

### Scroll reveal (`Reveal.tsx`)
Below-the-fold content "grows in" as the user scrolls to it, rather than
just appearing: every major section on the homepage (except `Hero`, which
has its own load-in sequence above) and every section of a case-study page
is wrapped in a shared `<Reveal>` component.
- Starts `opacity: 0`, `translateY(28px) scale(0.97)`; transitions to
  `opacity: 1`, `translateY(0) scale(1)` over `700ms ease-out`
- Driven by a real `IntersectionObserver` (`threshold: 0.15`,
  `rootMargin: "0px 0px -10% 0px"` — triggers a little before the section's
  top edge reaches the bottom of the viewport), not a scroll listener
- **Fires once per section** — the observer disconnects after the first
  reveal, so scrolling back up and down never replays it; this is a one-time
  entrance, not a repeating effect
- **Progressive enhancement, not a requirement**: the hidden pre-reveal state
  is only ever applied client-side after mount (via a layout effect, so
  there's no flash of the visible state first). Server-rendered HTML, and
  any visitor whose JS fails or hasn't hydrated yet, sees the section fully
  visible from the start — content is never gated on JS to become visible
- `prefers-reduced-motion: reduce` collapses the transition to effectively
  instant via the site-wide kill-switch in `globals.css`, same as every
  other animation on the site — the section still becomes visible, it just
  doesn't visibly move
- Implemented as a single wrapping `<div>` around each section (not a hook
  each section calls, and not `cloneElement` onto the child) — the wrapper
  carries no box of its own (no padding/border/background) and sits in
  normal block/flex flow, so it doesn't disturb the `mt-rhythm` /
  `gap-[...]` spacing between sections
- Section-level only in this pass — individual cards within a grid (case
  study cards, impact cards, process steps) reveal together with their
  parent section rather than staggering card-by-card

### Back to top
Fixed bottom-right, links to `#page-top`. Ink fill (fully opaque `#222222`),
mono label, `shadow-lightbox`, plus a `ring-1 ring-white/25` so the dark pill
separates from dark content scrolling beneath it rather than merging into it.

Because it floats, it will always cover *something*; three rules keep that
from landing on content the reader needs:

1. **Appears only after a full viewport height of scrolling** (was `0.6 ×
   innerHeight`). The whole first screen is now free of it, so it never sits
   over hero/intro content still being read.
2. **Icon-only 48×48 circle below `sm:`**, full pill from `sm:` up. The pill
   is 138px wide — 38% of a 360px viewport, wide enough to lie across a
   heading. The circle is 13%.
3. **The footer reserves room for it**: `pb-24` (96px) rather than a
   visually-sufficient `pb-10`. The button sits `bottom-6` (24px) up and is
   at most 52px tall, so it claims the bottom ~76px of the viewport; at the
   very end of the page that band falls on the footer, and with 40px of
   padding it covered the copyright line outright (measured at 360/390/414).
   96px clears it with ~24px to spare. **Keep `Footer.tsx`'s `pb` and this
   button's size/offset in step.**

### Contact block (page closer)
```
background: #FC890C;
margin: clamp(64px, 9vw, 120px) calc(-1 * clamp(24px, 5vw, 72px)) 0;
padding: clamp(48px, 7vw, 96px) clamp(24px, 5vw, 72px);
```
Full-bleed. All text `#222222`. Contains the headline, subtext, email
(`berit.alasmaki@gmail.com`, 2px ink underline), the freelance availability line, and a
LinkedIn link.

---

## 6. Layout

- Content max width: the page uses full width with gutters; text blocks cap at 30–36em
- Two-column sections: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- Card grids: `repeat(auto-fit, minmax(280px, 1fr))`
- All grids wrap; nothing scrolls horizontally
- Fluid everywhere except fixed-size assets — use `max-width`, never fixed `width`

---

## 7. Voice & copy

- Colleague describing how they work inside a team, not a consultant pitching services
- Concrete over generic: name the domain and the outcome, skip taglines
- No "fresh energy", "clarity not deliverables", or CV-style phrasing
- Sentence case in headlines; mono labels are lowercase after the number
- Availability is stated once, quietly, near the contact info

---

## 8. Assets

```
assets/berit-logo.png     Logo: orange flourish + "Berit Alasmäki" + "UX & PRODUCT DESIGNER"
assets/berit-photo.png    Profile photo on the orange organic blob
assets/<client>.png        Client logos, normalized to #222222 on a transparent
                            background (alpha computed from source luminance,
                            not a hard cutout) — never redraw
case/kem-*.png             Industrial data case screenshots (original source files,
                            full resolution)
case/uni-*.png              University case screenshots
case/edu-*.png               Education platform case screenshots
case/syke-*.png               Environmental data case screenshots
```

All four case studies now have full detail content (`hasFullContent()` is true for
all of them — none render the minimal template anymore). Industrial Data's gallery
(`kem-*.png`) came from original, full-resolution source screenshots; the other
three case studies' galleries (`uni-*`, `edu-*`, `syke-*`) were cropped from the
screenshots embedded in the case-study PDFs the client provided, since no separate
hi-res originals existed for those — noticeably softer than `kem-*` as a result.
Swap in sharper originals for any of them if/when available; no layout change
needed, `GalleryImage.width`/`height` just needs updating to match.

Client logo row: Kemira, University of Helsinki, Syke, Digione, Espoo, Vantaa,
Fintraffic, Cardiff University, CSC, Vero, Volkswagen — `#222222`, transparent
PNG (source files came in on an opaque white background; converted once so the
mark sits directly on the page, no visible card behind it).
Grid of uniform, evenly padded cells (3 cols mobile / 4 cols `sm` / 11 cols `lg`,
fixed height per breakpoint) rather than one bare row of differently-sized
logos — no card box (no background/border/radius) behind each cell, just
even spacing. Each logo scales to fit its cell via `object-fit: contain`
(Next Image `fill` + `object-contain`, `16px` padding baked into the image's
content-box), so every cell reads as the same size regardless of that logo's
own aspect ratio.

---

## 9. Technical constraints

- Static HTML + CSS. No JS, no frameworks, no animations, no hover/interactive states
  in the design files (interactivity is added later in code)
- Real HTML text everywhere — no text baked into images
- Inline styles in the design components; only `@font-face`, `@keyframes` and body
  resets belong in a style block
- `a` and `a:hover` colors are always declared (`#222222`) so links never render
  browser-default blue
