# DS by Berit

A standalone Next.js showcase for DS by Berit, a token-first design system. The project demonstrates how a small, intentional foundation can support accessible product UI across documentation and real example screens.

The project also includes [main.html](./main.html), a separate static showcase that presents the token foundation and component examples without replacing the Next.js application entry page.

## Why this project exists

This project was built to demonstrate the connection between design-system thinking and front-end implementation. Its purpose is to make the decisions behind a design system visible: how tokens become component states, how components compose into product interfaces, and how accessibility is treated as part of the component contract rather than a final polish step.

The project is also a practical design and coding study. It gives the system a place to evolve beyond static design files and shows how a designer can define foundations, document reusable patterns, and validate those patterns in working interfaces.

## How we started

The `design-system-use-case` folder began as an empty project area inside the portfolio repository. We used the existing portfolio as a visual and accessibility reference, then created this as an independent Next.js application so the design-system work could have its own structure, routes, dependencies, and development workflow.

The initial direction was intentionally narrow: build four component families and spend more effort on a flexible token foundation and useful documentation than on creating a large component library.

## Steps taken

1. Scaffolded a standalone Next.js, React, and TypeScript application under the DS by Berit name.
2. Established primitive and semantic tokens for color, spacing, typography, shape, borders, elevation, and motion.
3. Built a landing page explaining the purpose of the system.
4. Created documentation routes for Getting started, Foundations, Components, and Version history.
5. Separated foundation tokens into dedicated Colors, Spacing, Typography, and Shape & elevation pages.
6. Implemented the four component families: Navigation, Buttons, Cards, and Table.
7. Added reusable inner parts such as NavigationLink, Tabs, CardImage, TableRow, TableCell, and TableColumnHeader.
8. Added documented component modes including hover, active, selected, disabled, loading, Light, and Dark previews.
9. Added View, CSS, and JavaScript tabs so each example exposes both behavior and implementation.
10. Built project-management and analytics practice pages with desktop and mobile mock-ups.
11. Checked contrast, focus behavior, semantic table structure, keyboard interaction, linting, type safety, and production builds.
12. Added route-specific browser titles using the `Page title - DS by Berit` format and renamed the visible product branding.
13. Added a separate static `main.html` showcase with token previews, component examples, code tabs, and Light/Dark modes.

## How we are moving forward

The next stage is to deepen the system without losing its clarity. Planned work includes refining component APIs, expanding interaction tests, improving mobile navigation behavior, adding more realistic table states, and testing the documented examples with keyboard and screen-reader workflows.

The project will continue to favor a small number of well-defined component families, semantic token usage, accessible native HTML, and documentation that stays close to the implementation. New patterns should earn their place by solving a real product need and by having a clear contract, states, and accessibility guidance.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` - landing page explaining the system and its purpose
- `/components/navigation` - top navigation, sidebar, wayfinding, and keyboard model
- `/components/buttons` - primary, secondary, tertiary, loading, and disabled states
- `/components/cards` - metric, action, and composable card parts
- `/components/table` - filtering, sorting, selection, empty state, and responsive overflow
- `/getting-started` - introduction to the documentation structure
- `/foundations` - dedicated token and foundation documentation
- `/foundations/colors` - color tokens and semantic color roles
- `/foundations/spacing` - spacing scale tokens
- `/foundations/typography` - heading, body, label, and metadata tokens
- `/foundations/shape` - radius, border, and elevation tokens
- `/components` - dedicated component family index
- `/version-history` - manually maintained project history
- `/examples/project-management` - integrated project workspace
- `/examples/analytics` - integrated analytics view
- `main.html` - standalone static design-system showcase

## Token conventions

Tokens are organized in two layers in `src/data/tokens.ts`:

- **Primitive tokens** describe values such as `color.orange.500`, `space.4`, and `radius.md`.
- **Semantic tokens** describe intent such as `color.action.primary`, `color.content.muted`, and `color.focus.ring`.

Components should consume semantic roles rather than raw palette values. This keeps the component API stable when the visual theme changes.

## Component conventions

The project focuses on four families: `Navigation`, `Button`, `Card`, and `DataTable`. Inner patterns such as tabs, breadcrumbs, pagination, filters, row selection, and loading states stay within those families. Native HTML semantics are preferred for landmarks, buttons, links, tables, headings, and form controls.

## Accessibility baseline

- Skip link and visible `:focus-visible` treatment.
- Distinct navigation landmarks and `aria-current` page state.
- Native button and link semantics.
- `aria-busy` on loading buttons.
- Real table markup with captions, scoped headers, `aria-sort`, and labeled selection controls.
- Reduced-motion support.
- Responsive table overflow rather than unreadable compressed columns.

## Scripts

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

The visual direction builds on the parent portfolio's documented palette and typography, but this app is intentionally standalone and has no runtime dependency on `portfolio-homepage`.

Version history is maintained manually on the `/version-history` page (`src/app/version-history/page.tsx`). It is not generated automatically.
