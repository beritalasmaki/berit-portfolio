import type { Metadata } from "next";
import { Button } from "@/components/buttons/Button";
import { DeviceMockup } from "@/components/examples/DeviceMockup";
import { AppShell } from "@/components/examples/AppShell";
import { MetricCard } from "@/components/examples/MetricCard";
import { Icon } from "@/components/icons/Icon";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { DocsShell } from "@/components/navigation/DocsShell";
import { NotificationPanel } from "@/components/notifications/NotificationPanel";
import { DataTable } from "@/components/table/DataTable";

export const metadata: Metadata = { title: "Project management" };

function ProjectSummary({ mobile = false }: { mobile?: boolean }) {
  return (
    <AppShell active="projects" mobile={mobile} searchId={mobile ? "pm-search-mobile" : "pm-search-desktop"}>
      <div className="min-w-0">
        <Breadcrumb items={[{ label: "Workspace", href: "#workspace" }, { label: "Projects", href: "#projects" }, { label: "Customer portal" }]} />
        <div className="mb-6 mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className={`m-0 ${mobile ? "text-2xl" : "text-3xl"} font-extrabold tracking-[-0.04em]`}>Good morning, Mika.</h2>
            <p className="body-copy mt-2 text-sm">Here is what needs your attention across your 6 active projects.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" leadingIcon={<Icon name="download" />}>Export</Button>
            <Button leadingIcon={<Icon name="add" />}>New item</Button>
          </div>
        </div>

        <NotificationPanel status="warning" title="3 decisions are due this week">
          Approval flow, Billing export and Onboarding checklist need an owner or a new date before Friday 19 September.
        </NotificationPanel>

        <div className={`mt-6 grid gap-3 ${mobile ? "grid-cols-1" : "md:grid-cols-3"}`}>
          <MetricCard label="Open work" value="24" change="+3" changeNote="since last week" good={false} helper="Across 6 active projects" spark={[18, 19, 19, 21, 20, 22, 24]} />
          <MetricCard label="On track" value="18" change="75%" changeNote="of active work" helper="2 more than last week" spark={[14, 15, 15, 16, 17, 17, 18]} />
          <MetricCard label="Needs attention" value="3" change="1 blocked" changeNote="2 at risk" direction="up" good={false} helper="Decisions due this week" spark={[1, 1, 2, 2, 2, 3, 3]} />
        </div>

        <section aria-labelledby={mobile ? "work-items-m" : "work-items-d"} className="mt-8">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-1">Current workspace</p>
              <h3 id={mobile ? "work-items-m" : "work-items-d"} className="m-0 text-xl font-bold">Work items</h3>
            </div>
            <Button variant="tertiary" trailingIcon={<Icon name="arrow_forward" />}>View all 24</Button>
          </div>
          <DataTable compact={mobile} />
        </section>
      </div>
    </AppShell>
  );
}

export default function ProjectManagementPage() {
  return (
    <DocsShell>
      <div className="max-w-[var(--width-page)]">
        <section className="mb-12 max-w-[var(--width-text)]">
          <p className="eyebrow mb-4">Pages / project management</p>
          <h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">A workspace for keeping work moving.</h1>
          <p className="body-copy mt-5 text-lg">This page shows how DS by Berit supports a daily project-management routine. A person scans the health of the work, sees the decisions that need attention, and moves into a detailed table without losing context. Everything on the screen is built from the system&apos;s own components.</p>
          <div className="mt-6 grid gap-4 border-t border-[var(--color-border-default)] pt-5 sm:grid-cols-2">
            <div><p className="eyebrow mb-2">What the system contributes</p><p className="body-copy m-0 text-sm">The side navigation and breadcrumb show where the person is. The search field, filters and table controls help them find work quickly. A warning panel puts the most urgent news first, metric cards give a fast summary, and the table handles the detail.</p></div>
            <div><p className="eyebrow mb-2">Patterns in use</p><p className="body-copy m-0 text-sm">Side navigation, breadcrumb, search with helper text, notification panel, primary, secondary and tertiary buttons with icons, metric cards, status chips, sorting, filtering, row selection, row actions and paging.</p></div>
          </div>
        </section>
        <section aria-labelledby="project-preview-heading">
          <div className="mb-5"><p className="eyebrow mb-2">Rendered example</p><h2 id="project-preview-heading" className="m-0 text-2xl font-bold">Project workspace</h2></div>
          <DeviceMockup label="Desktop / 1440px" url="app.dsbyberit.example/projects"><ProjectSummary /></DeviceMockup>
          <div className="mt-10 flex justify-center"><DeviceMockup label="Mobile / 390px" mode="mobile"><ProjectSummary mobile /></DeviceMockup></div>
        </section>
      </div>
    </DocsShell>
  );
}
