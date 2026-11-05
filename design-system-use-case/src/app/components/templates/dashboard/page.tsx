import Link from "next/link";
import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { TemplateRegion } from "@/components/documentation/TemplateRegion";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/icons/Icon";
import { NavigationLink } from "@/components/navigation/NavigationLink";

export const metadata: Metadata = { title: "Dashboard template" };

export default function DashboardTemplatePage() {
  return <ComponentPage
    name="Dashboard template"
    eyebrow="Components / templates"
    description="A page layout for an overview: navigation on the side and at the top, a row of key numbers, and the main content below."
    usage={<p className="m-0">Use it for pages where people check the state of something and then act, such as a project overview or an analytics view. The template has no real content. It shows where each organism goes and how much room it gets.</p>}
    contract={["Regions are the top navigation, the side navigation, a page header with one primary action, a row of metric cards, a main content area and a table.", "The side navigation stays on the left. On small screens it moves above the content.", "The page header has one primary button. Other actions are secondary.", "Metric cards sit in one row and wrap on smaller screens. They are Cards organisms.", "Content below the cards is either a chart area or a table, and keeps the same left edge as the cards."]}
    accessibility={["Use header, nav, main and section landmarks, and give each navigation a distinct label.", "The page has one h1 in the page header. Sections below use h2.", "The reading order follows the visual order: navigation, header, cards, then main content.", "A table keeps its real table markup. See the Table organism."]}
    examples={[
      {
        title: "Layout",
        description: "Dashed boxes are content that is filled in per page. Navigation, buttons and the page title use the system's own components.",
        content: <CodeTabs
          view={<div className="w-full overflow-hidden rounded-2xl border border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface,var(--color-surface-canvas))] text-[var(--preview-content,var(--color-content-primary))]">
            <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--preview-border,var(--color-border-default))] p-4">
              <Link href="#top" className="font-bold">DS by Berit</Link>
              <nav aria-label="Top navigation" className="flex flex-wrap gap-1"><NavigationLink href="#work" aria-current="page">Work</NavigationLink><NavigationLink href="#reports">Reports</NavigationLink><NavigationLink href="#help">Help</NavigationLink></nav>
            </header>
            <div className="grid gap-6 p-4 md:grid-cols-[12rem_1fr]">
              <nav aria-label="Side navigation" className="space-y-1"><NavigationLink href="#overview" aria-current="page">Overview</NavigationLink><NavigationLink href="#activity">Activity</NavigationLink><NavigationLink href="#settings">Settings</NavigationLink><NavigationLink href="#billing" disabled>Billing</NavigationLink></nav>
              <main className="grid min-w-0 gap-6">
                <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="eyebrow m-0">Section</p><h1 className="m-0 text-2xl font-extrabold">Page title</h1></div><Button leadingIcon={<Icon name="add" />}>Primary action</Button></div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{["Metric card", "Metric card", "Metric card", "Metric card"].map((label, index) => <TemplateRegion key={index} label={label} hint="Card organism" className="min-h-24" />)}</div>
                <div className="grid gap-4 lg:grid-cols-[2fr_1fr]"><TemplateRegion label="Chart or main content" hint="Fills the width of the first two columns" className="min-h-48" /><TemplateRegion label="Side panel" hint="Notes, activity or filters" className="min-h-48" /></div>
                <TemplateRegion label="Table" hint="Table organism, with its filters above" className="min-h-40" />
              </main>
            </div>
          </div>}
          cssCode={".dashboard {\n  display: grid;\n  grid-template-columns: 12rem 1fr;\n  gap: 24px;\n}\n.dashboard-cards {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}"}
          javascriptCode={'<header><nav aria-label="Top navigation">...</nav></header>\n<div className="grid md:grid-cols-[12rem_1fr]">\n  <nav aria-label="Side navigation">...</nav>\n  <main>\n    <h1>Page title</h1>\n    {/* metric cards, chart, table */}\n  </main>\n</div>'}
        />,
      },
    ]}
  />;
}
