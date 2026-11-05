import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { Variation } from "@/components/documentation/Variation";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { NavigationLink } from "@/components/navigation/NavigationLink";
import { Tabs } from "@/components/navigation/Tabs";

export const metadata: Metadata = { title: "Links, tabs and breadcrumbs" };

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

export default function NavigationPartsPage() {
  return <ComponentPage
    name="Links, tabs and breadcrumbs"
    eyebrow="Components / molecules"
    description="The small pieces of navigation: a link to a destination, tabs that switch views, and breadcrumbs that show where a page sits."
    usage={<p className="m-0">Use links for single destinations, breadcrumbs to show where a page sits in a hierarchy, and tabs to switch between peer views of one thing without leaving the page.</p>}
    contract={["NavigationLink variants include default, current, muted, and inverse.", "Tabs switch peer views in place and use a roving tabindex with Arrow, Home, and End keys.", "Breadcrumbs describe hierarchy and always end in the current page, which is not a link."]}
    accessibility={["Do not rely on color alone to show the current page.", "Breadcrumbs use an ordered list inside their own nav landmark, and mark the last item aria-current.", "Tabs use the tablist, tab and tabpanel roles and keep one tab in the Tab order."]}
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
