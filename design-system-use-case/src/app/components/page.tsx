import Link from "next/link";
import type { Metadata } from "next";
import { DocsShell } from "@/components/navigation/DocsShell";

export const metadata: Metadata = { title: "Components" };

const levels = [
  { level: "Atoms", text: "The smallest parts. They cannot be broken down further and are used inside everything else.", items: [
    ["Icons", "A small set of line icons and the icon-only button.", "atoms/icons"],
    ["Buttons", "Primary, secondary and tertiary buttons, with icons, loading and disabled states.", "atoms/buttons"],
    ["Form controls", "Input, select, checkbox and radio in every mode.", "atoms/form-controls"],
  ] },
  { level: "Molecules", text: "Small groups of atoms that work as one unit.", items: [
    ["Form fields", "A control with its label, hint and error, and grouped radios.", "molecules/form-fields"],
    ["Links, tabs and breadcrumbs", "The small pieces of navigation.", "molecules/navigation-parts"],
    ["Date picker", "A date field in the format DD/MM/YYYY, with a calendar that starts on Monday.", "molecules/date-picker"],
    ["Notifications", "Panels and toasts for info, success, warning and error messages.", "molecules/notifications"],
    ["Form progress and actions", "Numbered steps and the buttons for a multi-step form.", "molecules/form-progress"],
  ] },
  { level: "Organisms", text: "Larger sections built from molecules and atoms.", items: [
    ["Navigation", "Top and side navigation.", "organisms/navigation"],
    ["Cards", "Cards for metrics, actions, images and selectable content.", "organisms/cards"],
    ["Table", "Sorting, filtering, selection and empty states for tabular data.", "organisms/table"],
    ["Multi-step form", "An introduction, sections, progress and actions put together.", "organisms/forms"],
  ] },
  { level: "Templates", text: "Page layouts without real content. They show where the organisms go.", items: [
    ["Dashboard template", "Side and top navigation, metric cards, a chart area and a table.", "templates/dashboard"],
    ["Form page template", "One column with an introduction, progress, form sections and actions.", "templates/form-page"],
  ] },
];

export default function ComponentsPage() {
  return (
    <DocsShell active="Components">
      <div className="max-w-5xl">
        <p className="eyebrow mb-4">Documentation / components</p>
        <h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">Components</h1>
        <p className="body-copy mt-5 text-lg">Components are grouped by Atomic Design: atoms, molecules, organisms and templates. Each page shows a component in its modes, with code, the rules it follows and its accessibility notes. Colours, type and spacing are the foundations underneath, and the example screens at the end are the pages.</p>
        {levels.map((group, levelIndex) => (
          <section key={group.level} className="mt-12" aria-labelledby={`level-${group.level}`}>
            <p className="eyebrow mb-2">0{levelIndex + 1}</p>
            <h2 id={`level-${group.level}`} className="m-0 text-3xl font-extrabold tracking-[-0.04em]">{group.level}</h2>
            <p className="body-copy mt-2 max-w-2xl text-sm">{group.text}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {group.items.map(([label, detail, slug]) => (
                <Link key={slug} href={`/components/${slug}`} className="group rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-action-accent)]">
                  <h3 className="m-0 text-xl font-bold">{label}</h3>
                  <p className="body-copy mt-2 text-sm">{detail}</p>
                  <span aria-hidden="true" className="material-symbols-outlined mt-6 block text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
        <section className="mt-12" aria-labelledby="level-pages">
          <p className="eyebrow mb-2">05</p>
          <h2 id="level-pages" className="m-0 text-3xl font-extrabold tracking-[-0.04em]">Pages</h2>
          <p className="body-copy mt-2 max-w-2xl text-sm">Pages are templates filled with real content. They show how the components hold up with realistic content.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link href="/examples/project-management" className="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-6 hover:border-[var(--color-action-accent)]"><h3 className="m-0 text-xl font-bold">Project management</h3><p className="body-copy mt-2 text-sm">A project workspace with a table, cards and filters.</p></Link>
            <Link href="/examples/analytics" className="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-6 hover:border-[var(--color-action-accent)]"><h3 className="m-0 text-xl font-bold">Analytics</h3><p className="body-copy mt-2 text-sm">A metrics view with cards and a table.</p></Link>
          </div>
        </section>
      </div>
    </DocsShell>
  );
}
