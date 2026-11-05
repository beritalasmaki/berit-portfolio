import Link from "next/link";
import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { NavigationLink } from "@/components/navigation/NavigationLink";

export const metadata: Metadata = { title: "Navigation" };

const cssCode = `.navigation-item:hover {
  background: var(--surface-subtle);
}

.navigation-item[aria-current="page"] {
  background: var(--surface-inverse);
  color: white;
}`;

export default function NavigationPage() {
  return <ComponentPage
    name="Navigation"
    eyebrow="Components / organisms"
    description="Navigation shows people where they are in a product and how to move around it."
    usage={<p className="m-0">Use top navigation for product-level movement and side navigation for a focused workspace. Both are built from NavigationLink, and tabs and breadcrumbs can be added inside a page when people need context within a deeper task.</p>}
    contract={["Navigation landmarks have distinct aria-label values.", "Top navigation handles product-level movement; side navigation handles workspace movement.", "Both are composed from NavigationLink molecules."]}
    accessibility={["Use native nav landmarks for navigation groups.", "Top and side navigation use clear, distinct aria-label values.", "Disclosure menus return focus to their trigger on Escape."]}
    examples={[
      {
        title: "Top navigation",
        description: "Product-level movement with brand context and primary destinations.",
        content: <CodeTabs
          view={<header className="rounded-2xl border border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface,var(--color-surface-canvas))] p-4 text-[var(--preview-content,var(--color-content-primary))]"><div className="flex flex-wrap items-center justify-between gap-4"><Link href="#home" className="flex items-center gap-2 font-bold"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-action-accent)] font-mono text-xs">DS</span>DS by Berit</Link><nav aria-label="Top navigation" className="flex flex-wrap items-center gap-1"><NavigationLink href="#work" variant="current" aria-current="page">Work</NavigationLink><NavigationLink href="#foundations">Foundations</NavigationLink><NavigationLink href="#components">Components</NavigationLink><NavigationLink href="#contact" variant="muted">Contact</NavigationLink></nav></div></header>}
          cssCode={cssCode}
          javascriptCode={'<header><nav aria-label="Top navigation">...</nav></header>'}
        />,
      },
      {
        title: "Side navigation",
        description: "Workspace-level movement that keeps the current section visible.",
        content: <CodeTabs
          view={<aside className="max-w-xs rounded-2xl border border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface,var(--color-surface-canvas))] p-5 text-[var(--preview-content,var(--color-content-primary))]"><p className="eyebrow mb-4">Workspace</p><nav aria-label="Side navigation" className="space-y-1"><NavigationLink href="#overview" variant="current" aria-current="page">Overview</NavigationLink><NavigationLink href="#activity" variant="inverse">Activity</NavigationLink><NavigationLink href="#settings" variant="inverse">Settings</NavigationLink></nav></aside>}
          cssCode={cssCode}
          javascriptCode={'<aside><nav aria-label="Side navigation">...</nav></aside>'}
        />,
      },
    ]}
  />;
}
