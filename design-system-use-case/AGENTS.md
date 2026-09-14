<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# DS by Berit — project rules

## What this project is

DS by Berit is a personal design system, built in code rather than in
Figma. Right now it is a learning environment: I use it to build a
design system independently and document what I learn as it develops.

The goal is that it grows into something solid enough to use as a
starting point for real projects. It is not there yet.

Because of that direction, keep component APIs clean from the start.
No props that exist only to serve the documentation site, no behaviour
that only makes sense inside this repository. Experimentation is
expected everywhere else, but the component interfaces should be
something I would not have to unpick later.

## Working with me on this

I am learning as this system develops. When you make a change, explain
what you did and why, in plain language. If there is more than one
reasonable approach, say so and let me choose rather than picking one
silently.

## Structure

- `src/data/tokens.ts` — documented token definitions
- `src/app/globals.css` — the CSS variables components actually use
- `src/components/` — React components
- `src/app/` — pages, one folder per route

### Where things go

System components live in `src/components`, each in its own folder named
after the component type, for example `buttons` or `cards`.

Components that exist only to build the documentation site belong in
`src/components/documentation`. Do not mix the two. They will be split
into `ui/` and `docs/` once there are enough components to justify it,
so keep the boundary clear in the meantime.

When you add a new system component, also add its documentation page
under `src/app/components`, using the existing `ComponentPage` template
so it stays consistent with the rest.

Note that `components` and `examples` appear both in `src/components`
and in `src/app`. The ones in `src/app` are pages. The ones in
`src/components` are the components those pages use.

## Tokens

Tokens live in two places and they are maintained by hand:

- `src/data/tokens.ts` documents the system and feeds the token tables
  on the documentation site
- `src/app/globals.css` holds the CSS variables components actually use

These two can drift apart. When you change a value, change it in both.
When you add a CSS variable, add the matching semantic token as well.

Tokens are defined in two layers. Primitives are raw values, for example
`color.charcoal.950`. Semantic tokens reference them by purpose, for
example `color.content.primary`. Build components against the semantic
layer.

### Never hardcode a value that exists as a variable

If a colour, radius or shadow is already defined as a CSS variable, use
the variable. Do not repeat the hex code, even inside a block that
defines its own scoped values.

### Spacing scale

Use only these spacing values: 4px, 8px, 12px, 16px, 24px, 32px, 48px
and 64px.

In Tailwind terms: `1`, `2`, `3`, `4`, `6`, `8`, `12` and `16`. Do not
use `5`, `7`, `10` or any arbitrary value. If a layout seems to need
something in between, use the nearer value from the scale rather than
introducing a new one.

## Use the system's own components

The documentation site is built with this design system. If a component
exists for what you are building, use it rather than recreating its
styles by hand.

If the component cannot do what is needed, say so rather than working
around it. That is a gap in the system and worth fixing properly.

## Accessibility

Accessibility is part of the foundation, not something added afterwards.
These apply to every component:

- Use semantic HTML. A button is a `button`, a link is an `a`. Do not
  build interactive elements out of `div`s.
- Everything interactive must work with a keyboard: reachable with Tab,
  operable with Enter or Space, in a logical order.
- Never remove the focus outline. The system defines a visible focus
  ring via `:focus-visible` in `globals.css`. Let it apply.
- Interactive elements have a minimum touch target of 44px.
- Use ARIA attributes where state needs to be communicated, for example
  `aria-busy` on a loading button or `aria-expanded` on a disclosure.
  Mark decorative elements `aria-hidden`.
- Respect `prefers-reduced-motion`. The global rule in `globals.css`
  covers animations and transitions; do not override it.
- Colour is never the only way meaning is conveyed.

## Version history

Changes are logged on the version history page at
`src/app/version-history/page.tsx`, grouped by day. Entries are written
directly into the page.

After making changes, add or update that day's entry: what changed and
why, in plain language. One entry per day, not per change. Follow the
format already used on the page.

This is a public log. Write it so someone outside the project can follow
what has been happening, not as a technical changelog.

## Ask before doing

Check with me first before:

- installing a new dependency
- changing the folder structure
- changing an existing component's API, including adding or renaming
  props
- changing a token value

These all affect more than the file being worked on. Everything else,
go ahead, and explain what you did afterwards.
