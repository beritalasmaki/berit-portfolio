# @berit/ds

The DS by Berit components and tokens, shared by the documentation site (`design-system-use-case`) and the portfolio (`portfolio-homepage`). Change a component or a token here and both sites pick it up.

## What is in here

- `src/tokens.css` — the CSS variables the components read (colours, radii, shadows, glass, grid) and the few shared classes (`.eyebrow`, `.focus-ring`, the toast timer). Import it once per app: `@import "@berit/ds/tokens.css";`
- `src/index.ts` — components that work in any React app: buttons, tags, accordion, cards, forms, icons, notifications, table, tabs and the on-this-page list.
- `src/next.ts` — components that use `next/link` or `next/image` (the navigation links, `TopNavigation`, `SideNavigation`, breadcrumbs, `CardImage`). Import them from `@berit/ds/next`, and only in a Next.js app.

## Using it in an app

1. Add `"@berit/ds": "*"` to the app's dependencies and add `transpilePackages: ["@berit/ds"]` to its Next.js config.
2. Import `@berit/ds/tokens.css` in the app's global stylesheet.
3. Make Tailwind scan this package: add `../packages/ds/src/**/*.{ts,tsx}` to `content` (Tailwind 3) or `@source "../../../packages/ds/src";` (Tailwind 4).
4. Import components: `import { Button, ButtonLink, Tag } from "@berit/ds";`

Use `ButtonLink` for a destination (it renders a link that looks like a button, and takes `as={Link}` for a framework link) and `Button` for an action.

## Keep in mind

- `src/data/tokens.ts` in the documentation site documents the tokens. It is still maintained by hand next to `tokens.css`.
- Both apps must use the same React version, so there is only one copy of React.
