import { Card, CardBody } from "@/components/cards/Card";
import { Icon } from "@/components/icons/Icon";

type MetricCardProps = {
  label: string;
  value: string;
  /** The change, written as text, for example "+8.2%". */
  change?: string;
  /** What the change is measured against, for example "vs last 30 days". */
  changeNote?: string;
  /** "up" and "down" choose the arrow. `good` says whether the change is a good thing, which sets the colour. */
  direction?: "up" | "down";
  good?: boolean;
  helper?: string;
  /** Values for a small trend line. */
  spark?: number[];
};

function Sparkline({ values }: { values: number[] }) {
  const min = Math.min(...values), max = Math.max(...values);
  const points = values.map((value, index) => `${(index / (values.length - 1)) * 100},${28 - ((value - min) / (max - min || 1)) * 24}`).join(" ");
  return <svg aria-hidden="true" viewBox="0 0 100 30" preserveAspectRatio="none" className="h-8 w-full"><polyline points={points} fill="none" stroke="var(--color-action-accent-dark)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" /></svg>;
}

/** Documentation only: a metric card with a value, a change with an arrow and words, and an optional trend line. */
export function MetricCard({ label, value, change, changeNote, direction = "up", good = true, helper, spark }: MetricCardProps) {
  return (
    <Card>
      <CardBody className="p-5">
        <p className="eyebrow mb-2">{label}</p>
        <p className="m-0 text-3xl font-extrabold">{value}</p>
        {change ? (
          <p className={`mt-2 flex items-center gap-1.5 text-sm font-semibold ${good ? "text-[var(--color-status-success-strong)]" : "text-[var(--color-status-error-strong)]"}`}>
            <Icon name={direction === "up" ? "trending_up" : "trending_down"} className="h-4 w-4" />
            <span>{change}<span className="sr-only">{good ? " (an improvement)" : " (a decline)"}</span></span>
          </p>
        ) : null}
        {changeNote ? <p className="m-0 mt-0.5 text-xs text-[var(--color-content-muted)]">{changeNote}</p> : null}
        {helper ? <p className="body-copy mt-1 text-xs">{helper}</p> : null}
        {spark ? <div className="mt-3"><Sparkline values={spark} /></div> : null}
      </CardBody>
    </Card>
  );
}
