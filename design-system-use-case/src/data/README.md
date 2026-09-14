# Data

This folder holds `tokens.ts`, the documented token definitions for the
design system: colour, spacing, typography and shape values, with a
description of what each one is for.

Tokens are defined in two layers. Primitives are the raw values, for
example `color.charcoal.950`. Semantic tokens reference those primitives
by purpose, for example `color.content.primary`. Components should be
built against the semantic layer, so a value can change without the name
becoming wrong.

## Important: this file documents the system, it does not drive it

The values components actually use are CSS custom properties defined in
`src/app/globals.css`. This file is the reference layer that the
documentation site reads to display the token tables.

That means the two are maintained by hand and can drift apart. If you
change a value, change it in both places. If you add a CSS variable,
add the matching semantic token here too.

Keeping these in sync automatically is on the list. Until then, treat
this file and `globals.css` as a pair.
