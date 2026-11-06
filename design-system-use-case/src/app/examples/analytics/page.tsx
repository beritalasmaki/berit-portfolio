import type { Metadata } from "next";
import { Button } from "@/components/buttons/Button";
import { Card, CardBody } from "@/components/cards/Card";
import { DeviceMockup } from "@/components/examples/DeviceMockup";
import { AppShell } from "@/components/examples/AppShell";
import { LineChart } from "@/components/examples/LineChart";
import { MetricCard } from "@/components/examples/MetricCard";
import { Select } from "@/components/forms/Select";
import { Icon } from "@/components/icons/Icon";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { DocsShell } from "@/components/navigation/DocsShell";
import { Tabs } from "@/components/navigation/Tabs";
import { NotificationPanel } from "@/components/notifications/NotificationPanel";
import { DataTable } from "@/components/table/DataTable";

export const metadata: Metadata = { title: "Analytics" };

// Sample data: 30 days of active users for this period and the one before it.
const current = Array.from({ length: 30 }, (_, i) => Math.round(13200 + i * 170 + 700 * Math.sin(i / 2.2)));
current[29] = 18420;
const previous = Array.from({ length: 30 }, (_, i) => Math.round(12800 + i * 130 + 600 * Math.sin(i / 2.6 + 1)));
previous[29] = 17020;
const thousands = (value: number) => (value >= 1000 ? `${(value / 1000).toFixed(value % 1000 ? 1 : 0)}k` : String(value));
const weekly = [0, 7, 14, 21, 29].map((index, week) => ({ label: week === 4 ? "Week 5 (30 Sep)" : `Week ${week + 1} (${index + 1} Sep)`, values: [current[index], previous[index]] }));

function Overview({ mobile }: { mobile: boolean }) {
  return (
    <div className="mt-6 space-y-6">
      <div className={`grid gap-3 ${mobile ? "grid-cols-1" : "md:grid-cols-2 xl:grid-cols-4"}`}>
        <MetricCard label="Active users" value="18,420" change="+8.2%" changeNote="vs previous 30 days" spark={[13, 14, 14, 15, 16, 17, 18]} />
        <MetricCard label="Completion rate" value="72.8%" change="+3.1 pts" changeNote="vs previous 30 days" spark={[66, 68, 67, 70, 71, 72, 73]} />
        <MetricCard label="Time to value" value="4.2 min" change="-0.6 min" changeNote="faster than before" direction="down" spark={[5.1, 5, 4.8, 4.6, 4.5, 4.3, 4.2]} />
        <MetricCard label="New signals" value="46" change="+8" changeNote="this week" good helper="12 need a decision" spark={[28, 30, 33, 35, 39, 42, 46]} />
      </div>
      <Card>
        <CardBody>
          <LineChart
            title="Active users"
            summary="Daily active users rose from about 13,000 to 18,420 over the last 30 days, and stayed above the previous period."
            series={[{ label: "This period", values: current }, { label: "Previous period", values: previous, dashed: true }]}
            xLabels={["1 Sep", "8 Sep", "15 Sep", "22 Sep", "30 Sep"]}
            yTicks={[0, 5000, 10000, 15000, 20000]}
            tableRows={weekly}
            format={thousands}
          />
        </CardBody>
      </Card>
      <section aria-labelledby={mobile ? "signals-m" : "signals-d"}>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow mb-1">Signal detail</p><h3 id={mobile ? "signals-m" : "signals-d"} className="m-0 text-xl font-bold">Latest product work</h3></div>
          <Button variant="tertiary" leadingIcon={<Icon name="download" />}>Download CSV</Button>
        </div>
        <DataTable compact={mobile} />
      </section>
    </div>
  );
}

function Placeholder({ text }: { text: string }) {
  return <p className="body-copy mt-6 text-sm">{text}</p>;
}

function AnalyticsSummary({ mobile = false }: { mobile?: boolean }) {
  const dateId = mobile ? "range-m" : "range-d";
  return (
    <AppShell active="reports" mobile={mobile} searchId={mobile ? "an-search-mobile" : "an-search-desktop"}>
      <div className="min-w-0">
        <Breadcrumb items={[{ label: "Reports", href: "#reports" }, { label: "Product signals" }]} />
        <div className="mb-5 mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className={`m-0 ${mobile ? "text-2xl" : "text-3xl"} font-extrabold tracking-[-0.04em]`}>Product signals</h2>
            <p className="body-copy mt-2 text-sm">A focused view of the work shaping this month&apos;s outcomes. Updated 2 minutes ago.</p>
          </div>
          <div className="flex flex-wrap items-end gap-2">
            <div>
              <label htmlFor={dateId} className="mb-1 block text-xs font-semibold">Date range</label>
              <Select id={dateId} defaultValue="30" aria-describedby={`${dateId}-hint`}>
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days (1–30 Sep)</option>
                <option value="90">Last quarter</option>
              </Select>
              <p id={`${dateId}-hint`} className="m-0 mt-1 text-xs text-[var(--color-content-muted)]">Compared with the 30 days before.</p>
            </div>
            <Button variant="secondary" leadingIcon={<Icon name="download" />}>Export</Button>
          </div>
        </div>
        <NotificationPanel status="info" title="Retention data for 28–30 September is still being processed">
          The numbers on the Retention tab may change slightly until tomorrow morning.
        </NotificationPanel>
        <div className="mt-4">
          <Tabs
            label="Report sections"
            items={[
              { id: "overview", label: "Overview", content: <Overview mobile={mobile} /> },
              { id: "acquisition", label: "Acquisition", content: <Placeholder text="Where new users come from: search, invitations and direct visits. Select Overview to see this period's headline numbers." /> },
              { id: "retention", label: "Retention", content: <Placeholder text="How many people come back after one, seven and thirty days. Some of the latest data is still being processed." /> },
            ]}
          />
        </div>
      </div>
    </AppShell>
  );
}

export default function AnalyticsPage() {
  return (
    <DocsShell>
      <div className="max-w-[var(--width-page)]">
        <section className="mb-12 max-w-[var(--width-text)]">
          <p className="eyebrow mb-4">Pages / analytics</p>
          <h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">A clear view of product signals.</h1>
          <p className="body-copy mt-5 text-lg">This page shows a reporting view that helps a product team scan performance, compare trends and move from a high-level signal into the detailed work behind it. It is built entirely from the system&apos;s own components, plus a simple chart.</p>
          <div className="mt-6 grid gap-4 border-t border-[var(--color-border-default)] pt-5 sm:grid-cols-2">
            <div><p className="eyebrow mb-2">What the system contributes</p><p className="body-copy m-0 text-sm">Metric cards give each number a clear hierarchy and say in words whether a change is good. Tabs organise the report, a labelled date range explains what is being compared, and the table makes the detail searchable and filterable.</p></div>
            <div><p className="eyebrow mb-2">Patterns in use</p><p className="body-copy m-0 text-sm">Side navigation, breadcrumb, search with helper text, select with a hint, info panel, tabs, metric cards with trend lines, line chart with a text alternative, export buttons with icons, status chips, filtering, sorting and paging.</p></div>
          </div>
        </section>
        <section aria-labelledby="analytics-preview-heading">
          <div className="mb-5"><p className="eyebrow mb-2">Rendered example</p><h2 id="analytics-preview-heading" className="m-0 text-2xl font-bold">Analytics overview</h2></div>
          <DeviceMockup label="Desktop / 1440px" url="app.dsbyberit.example/reports/signals"><AnalyticsSummary /></DeviceMockup>
          <div className="mt-10 flex justify-center"><DeviceMockup label="Mobile / 390px" mode="mobile"><AnalyticsSummary mobile /></DeviceMockup></div>
        </section>
      </div>
    </DocsShell>
  );
}
