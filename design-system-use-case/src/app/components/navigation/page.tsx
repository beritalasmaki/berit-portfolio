import Link from "next/link";
import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { Variation } from "@/components/documentation/Variation";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { NavigationLink } from "@/components/navigation/NavigationLink";
import { Tabs } from "@/components/navigation/Tabs";

export const metadata: Metadata = { title: "Navigation" };

const cssCode = `.navigation-item:hover {
  background: var(--surface-subtle);
}

.navigation-item[aria-current="page"] {
  background: var(--surface-inverse);
  color: white;
}`;

const breadcrumbCss = `.breadcrumb a {
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  text-decoration: underline;
  text-underline-offset: 4px;
}`;

const tabsCss = `.tab[aria-selected="true"] {
  border-bottom: 2px solid var(--color-action-accent);
  font-weight: 600;
}`;

export default function NavigationPage() {
  return <ComponentPage
    name="Navigation"
    eyebrow="Components / wayfinding"
    description="Navigation orients people across a product with persistent context, focused movement, and clear current-page signals."
    usage={<p className="m-0">Use top navigation for product-level movement and side navigation for a focused workspace. Use links for individual destinations, then add tabs, breadcrumbs, or pagination when people need context within a deeper task.</p>}
    contract={["Navigation landmarks have distinct aria-label values.", "NavigationLink variants include default, current, muted, and inverse.", "Top navigation handles product-level movement; side navigation handles workspace movement.", "Tabs switch peer views in place and use a roving tabindex with Arrow, Home, and End keys.", "Breadcrumbs describe hierarchy and always end in the current page, which is not a link."]}
    accessibility={["Use native nav landmarks for navigation groups.", "Do not rely on color alone to show the current page.", "Top and side navigation use clear, distinct aria-label values.", "Disclosure menus return focus to their trigger on Escape.", "Breadcrumbs use an ordered list inside their own nav landmark, and mark the last item aria-current."]}
    examples={[
      {
        title: "Links",
        description: "The small, reusable destination primitive used by both navigation panels.",
        content: <CodeTabs
          view={<div className="grid max-w-sm gap-4 rounded-2xl border border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface,var(--color-surface-canvas))] p-4 text-[var(--preview-content,var(--color-content-primary))]"><Variation label="Current" className="w-full"><NavigationLink href="#overview" variant="current" aria-current="page" className="w-full">Overview</NavigationLink></Variation><Variation label="Default" className="w-full"><NavigationLink href="#projects" className="w-full">Projects</NavigationLink></Variation><Variation label="Muted" className="w-full"><NavigationLink href="#history" variant="muted" className="w-full">Version history</NavigationLink></Variation><Variation label="Inverse" className="w-full"><div className="w-full rounded-lg bg-[var(--color-surface-inverse)] p-2"><NavigationLink href="#help" variant="inverse" className="w-full">Settings</NavigationLink></div></Variation></div>}
          cssCode={cssCode}
          javascriptCode={'<NavigationLink href="/projects" variant="current">Projects</NavigationLink>'}
        />,
      },
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
      {
        title: "Breadcrumbs",
        description: "Where this page sits in the hierarchy. A trail of links ending in the current page.",
        content: <CodeTabs
          view={<Breadcrumb items={[{ label: "Workspace", href: "#workspace" }, { label: "Projects", href: "#projects" }, { label: "Research workspace" }]} />}
          cssCode={breadcrumbCss}
          javascriptCode={'<Breadcrumb items={[\n  { label: "Projects", href: "/projects" },\n  { label: "Research workspace" },\n]} />'}
        />,
      },
      {
        title: "Tabs",
        description: "Peer views of the same thing, switched in place. Not a way to move between pages.",
        content: <CodeTabs
          view={<Tabs label="Project views" items={[{ id: "overview", label: "Overview", content: <p className="m-0 text-sm text-[var(--preview-content-muted,var(--color-content-secondary))]">Overview content.</p> }, { id: "activity", label: "Activity", content: <p className="m-0 text-sm text-[var(--preview-content-muted,var(--color-content-secondary))]">Activity content.</p> }, { id: "files", label: "Files", content: <p className="m-0 text-sm text-[var(--preview-content-muted,var(--color-content-secondary))]">Files content.</p> }]} />}
          cssCode={tabsCss}
          javascriptCode={'<Tabs label="Project views" items={items} />'}
        />,
      },
    ]}
  />;
}
