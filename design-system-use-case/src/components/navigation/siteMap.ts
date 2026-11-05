export type NavLink = { href: string; label: string };
export type NavGroup = { heading?: string; links: NavLink[] };
export type SiteSection = { id: string; label: string; href: string; groups: NavGroup[]; matches: (path: string) => boolean };

const startsWith = (...prefixes: string[]) => (path: string) => prefixes.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));

/** The main sections shown in the top navigation, and the pages listed on the left when a section is open. */
export const siteSections: SiteSection[] = [
  {
    id: "getting-started", label: "Getting started", href: "/getting-started", matches: startsWith("/getting-started", "/version-history"),
    groups: [{ links: [
      { href: "/getting-started", label: "Overview" },
      { href: "/getting-started/designers", label: "For designers" },
      { href: "/getting-started/developers", label: "For developers" },
      { href: "/getting-started/product-owners", label: "For product owners" },
      { href: "/version-history", label: "Version history" },
    ] }],
  },
  {
    id: "principles", label: "Principles", href: "/principles", matches: startsWith("/principles"),
    groups: [{ links: [{ href: "/principles", label: "Design principles" }] }],
  },
  {
    id: "foundations", label: "Foundations", href: "/foundations", matches: startsWith("/foundations"),
    groups: [{ links: [
      { href: "/foundations", label: "Overview" },
      { href: "/foundations/colors", label: "Colors" },
      { href: "/foundations/spacing", label: "Spacing" },
      { href: "/foundations/layout", label: "Layout & grid" },
      { href: "/foundations/typography", label: "Typography" },
      { href: "/foundations/shape", label: "Shape & elevation" },
    ] }],
  },
  {
    id: "components", label: "Components", href: "/components", matches: startsWith("/components"),
    groups: [
      { links: [{ href: "/components", label: "Overview" }] },
      { heading: "Atoms", links: [
        { href: "/components/atoms/icons", label: "Icons" },
        { href: "/components/atoms/buttons", label: "Buttons" },
        { href: "/components/atoms/form-controls", label: "Form controls" },
      ] },
      { heading: "Molecules", links: [
        { href: "/components/molecules/form-fields", label: "Form fields" },
        { href: "/components/molecules/navigation-parts", label: "Links, tabs and breadcrumbs" },
        { href: "/components/molecules/date-picker", label: "Date picker" },
        { href: "/components/molecules/notifications", label: "Notifications" },
        { href: "/components/molecules/form-progress", label: "Form progress and actions" },
      ] },
      { heading: "Organisms", links: [
        { href: "/components/organisms/navigation", label: "Navigation" },
        { href: "/components/organisms/cards", label: "Cards" },
        { href: "/components/organisms/table", label: "Table" },
        { href: "/components/organisms/forms", label: "Multi-step form" },
      ] },
      { heading: "Templates", links: [
        { href: "/components/templates/dashboard", label: "Dashboard template" },
        { href: "/components/templates/form-page", label: "Form page template" },
      ] },
    ],
  },
  {
    id: "pages", label: "Pages", href: "/examples", matches: startsWith("/examples"),
    groups: [{ links: [
      { href: "/examples", label: "Overview" },
      { href: "/examples/project-management", label: "Project management" },
      { href: "/examples/analytics", label: "Analytics" },
    ] }],
  },
];
