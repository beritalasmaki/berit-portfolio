import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { Variation } from "@/components/documentation/Variation";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { NavigationLink } from "@/components/navigation/NavigationLink";
import { Tabs } from "@/components/navigation/Tabs";

export const metadata: Metadata = { title: "Links, tabs and breadcrumbs" };

const cssCode = `.navigation-item:hover {
  background: var(--color-surface-raised);
}

.navigation-item[aria-current="page"] {
  background-image: var(--gradient-action-primary);
  color: var(--color-content-inverse);
}

.navigation-item[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
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
    contract={["The navigation link points to a destination and has three statuses: default, active for the current page, and disabled for a destination that is not available right now. Tabs switch between views of the same thing without leaving the page, and breadcrumbs show where the current page sits in the hierarchy and always end with the current page, which is not a link.", "Tabs move focus with the arrow keys, Home and End, and only one tab stays in the Tab order at a time. Together these three small parts are the building blocks of the larger navigation sections."]}
    accessibility={["The active link is marked for assistive technology as the current page and has a filled background, so it never relies on colour alone. A disabled link is shown as plain text that is marked as unavailable, so it is skipped by the Tab key and announced as not available.", "Breadcrumbs are an ordered list inside their own navigation landmark, and the last item is marked as the current page. Tabs use the standard tablist, tab and tabpanel roles, so screen readers describe them correctly."]}
    examples={[
      {
        title: "Links",
        description: "A link has three statuses: default, active for the current page, and disabled for a destination that is not available right now.",
        content: <CodeTabs
          view={<div className="grid max-w-sm gap-4 rounded-2xl border border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface,var(--color-surface-canvas))] p-4 text-[var(--preview-content,var(--color-content-primary))]"><Variation label="Active" className="w-full"><NavigationLink href="#overview" aria-current="page" className="w-full">Overview</NavigationLink></Variation><Variation label="Default" className="w-full"><NavigationLink href="#projects" className="w-full">Projects</NavigationLink></Variation><Variation label="Disabled" className="w-full"><NavigationLink href="#reports" disabled className="w-full">Reports</NavigationLink></Variation></div>}
          cssCode={cssCode}
          javascriptCode={'<NavigationLink href="/overview" aria-current="page">Overview</NavigationLink>\n<NavigationLink href="/projects">Projects</NavigationLink>\n<NavigationLink href="/reports" disabled>Reports</NavigationLink>'}
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
