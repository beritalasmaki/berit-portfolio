import Link from "next/link";
import { Icon } from "@/components/icons/Icon";

const figmaUrl = "https://www.figma.com/design/WlwWrwDWzt5shl0sYocASJ/Design-System-by-Berit";

type Tone = "ux" | "guide" | "reference" | "dev" | "app";
type Part = {
  id: string;
  tone: Tone;
  title: string;
  text: string;
  tag?: "UX" | "DEV";
  href?: string;
  external?: boolean;
  /** Position and size on the 30 by 21 cell grid: left, top, width, height. */
  cells?: [number, number, number, number];
};

const parts: Part[] = [
  { id: "tokens", tone: "ux", tag: "UX", title: "Design tokens", text: "Colours, typography, spacing, radius, shadows and more", href: "/foundations", cells: [8, 3, 14, 3] },
  { id: "guidelines", tone: "guide", title: "Guidelines", text: "Principles, rules and recommendations", href: "/principles", cells: [6, 7, 8, 3] },
  { id: "ui-kit", tone: "ux", tag: "UX", title: "UI kit", text: "Components, templates and resources in Figma", href: figmaUrl, external: true, cells: [16, 7, 8, 3] },
  { id: "reference", tone: "reference", title: "Reference site", text: "Guides, documentation and examples", href: "/getting-started", cells: [3, 11, 9, 3] },
  { id: "library", tone: "dev", tag: "DEV", title: "Component library", text: "Ready-to-use components in code", href: "/components", cells: [18, 11, 9, 3] },
  { id: "app-1", tone: "app", title: "Application 1", text: "Mobile, desktop, system and so on", href: "/examples/project-management", cells: [5, 17, 6, 3] },
  { id: "app-2", tone: "app", title: "Application 2", text: "Mobile, desktop, system and so on", href: "/examples/analytics", cells: [12, 17, 6, 3] },
  { id: "website", tone: "app", title: "Website", text: "Public and internal sites", href: "/examples", cells: [19, 17, 6, 3] },
];

const tones: Record<Tone, string> = {
  ux: "border-[var(--color-status-info-default)] bg-[var(--color-status-info-subtle)] text-[var(--color-content-primary)]",
  guide: "border-[var(--color-action-accent)] bg-[var(--color-status-warning-subtle)] text-[var(--color-content-primary)]",
  reference: "border-[var(--color-content-primary)] bg-[var(--color-surface-canvas)] text-[var(--color-content-primary)]",
  dev: "border-[var(--color-surface-inverse)] bg-[var(--color-surface-inverse)] text-[var(--color-content-inverse)]",
  app: "border-[var(--color-border-strong)] bg-[var(--color-surface-canvas)] text-[var(--color-content-primary)]",
};

const COLS = 30;
const ROWS = 21;

function Body({ part }: { part: Part }) {
  return (
    <>
      {part.tag ? <span aria-hidden="true" className={`absolute -top-2 right-2 rounded border px-1.5 font-mono text-[10px] font-semibold leading-4 ${part.tone === "dev" ? "border-[var(--color-action-accent)] bg-[var(--color-action-accent)] text-[var(--color-content-primary)]" : "border-[var(--color-status-info-default)] bg-white text-[var(--color-content-primary)]"}`}>{part.tag}</span> : null}
      <span className="block text-[max(11px,1.45cqw)] font-bold leading-tight md:text-[max(11px,1.45cqw)]">{part.title}{part.tag ? <span className="sr-only"> ({part.tag === "UX" ? "design" : "development"})</span> : null}</span>
      {part.href ? <span aria-hidden="true" className={`absolute bottom-1.5 right-2 text-[max(12px,1.4cqw)] font-bold leading-none ${part.tone === "dev" ? "text-[var(--color-action-accent)]" : "text-[var(--color-action-accent-dark)]"}`}>{part.external ? "↗" : "→"}</span> : null}
      <span className={`mt-1 block text-[max(10px,1.2cqw)] leading-snug ${part.tone === "dev" ? "text-white/80" : "text-[var(--color-content-secondary)]"}`}>{part.text}{part.external ? <span className="sr-only"> (opens in a new tab)</span> : null}</span>
    </>
  );
}

function Box({ part, positioned }: { part: Part; positioned: boolean }) {
  const base = `relative flex flex-col items-center justify-center rounded-xl border-2 p-2 text-center ${tones[part.tone]}`;
  const style = positioned && part.cells ? { position: "absolute" as const, left: `${(part.cells[0] / COLS) * 100}%`, top: `${(part.cells[1] / ROWS) * 100}%`, width: `${(part.cells[2] / COLS) * 100}%`, height: `${(part.cells[3] / ROWS) * 100}%` } : undefined;
  const hover = part.href ? "cursor-pointer transition hover:-translate-y-0.5 hover:border-[var(--color-action-accent)] hover:shadow-[var(--shadow-m)]" : "";
  if (part.href && part.external) return <a href={part.href} target="_blank" rel="noopener noreferrer" className={`${base} ${hover}`} style={style}><Body part={part} /></a>;
  if (part.href) return <Link href={part.href} className={`${base} ${hover}`} style={style}><Body part={part} /></Link>;
  return <div className={base} style={style}><Body part={part} /></div>;
}

const info = "var(--color-status-info-default)";
const orange = "var(--color-action-accent)";
const ink = "var(--color-content-secondary)";

/** A short filled triangle at the end of a dashed line. `dir` is where the point faces. */
function Arrow({ x, y, dir, color }: { x: number; y: number; dir: "down" | "left"; color: string }) {
  const s = 0.24;
  const d = dir === "down" ? `M${x - s} ${y - s * 1.9} L${x + s} ${y - s * 1.9} L${x} ${y} Z` : `M${x + s * 1.9} ${y - s} L${x + s * 1.9} ${y + s} L${x} ${y} Z`;
  return <path d={d} fill={color} />;
}

function Line({ d, color }: { d: string; color: string }) {
  return <path d={d} fill="none" stroke={color} strokeWidth={2} strokeDasharray="6 6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />;
}

const description = "Design tokens feed the reference site and the component library. Guidelines feed the reference site. The UI kit in Figma feeds the component library. The component library also feeds the reference site, and it is used by applications and websites.";

/**
 * A map of how the parts of the design system feed each other. On a wide screen it is drawn on the same
 * 32px grid as the page background, with dashed lines between the parts. On a narrow screen it becomes a
 * short top-to-bottom list.
 */
export function SystemDiagram() {
  const byId = Object.fromEntries(parts.map((part) => [part.id, part]));
  const group = (ids: string[]) => ids.map((id) => <li key={id} className="list-none"><Box part={byId[id]} positioned={false} /></li>);
  return (
    <nav aria-label="Design system map"><figure className="m-0" aria-labelledby="system-diagram-caption">
      <figcaption id="system-diagram-caption" className="sr-only">How the parts of the design system fit together. {description}</figcaption>

      <div className="hidden md:block" style={{ containerType: "inline-size" }}>
        <div
          className="relative mx-auto w-full max-w-[960px] overflow-hidden rounded-3xl border border-[var(--color-border-default)] bg-[var(--color-surface-canvas)]"
          style={{ aspectRatio: `${COLS} / ${ROWS}`, backgroundImage: "linear-gradient(var(--color-border-default) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-default) 1px, transparent 1px)", backgroundSize: `${100 / COLS}% ${100 / ROWS}%`, backgroundPosition: "-1px -1px" }}
        >
          <div aria-hidden="true" className="absolute rounded-[2.4cqw] border-2 border-[var(--color-action-accent)] bg-white/60" style={{ left: `${(1 / COLS) * 100}%`, top: `${(1 / ROWS) * 100}%`, width: `${(28 / COLS) * 100}%`, height: `${(14 / ROWS) * 100}%` }} />
          <p aria-hidden="true" className="absolute m-0 flex items-center justify-center rounded-full border-2 border-[var(--color-action-accent)] bg-[var(--color-status-warning-subtle)] font-mono text-[max(10px,1.2cqw)] font-semibold uppercase tracking-[0.12em]" style={{ left: `${(11.5 / COLS) * 100}%`, top: `${(0.4 / ROWS) * 100}%`, width: `${(7 / COLS) * 100}%`, height: `${(1.2 / ROWS) * 100}%` }}>Design system</p>
          <svg aria-hidden="true" viewBox={`0 0 ${COLS} ${ROWS}`} preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <Line color={info} d="M8 4.5 C 3 4.5 2.6 8 4.5 10.9" /><Arrow x={4.5} y={11} dir="down" color={info} />
            <Line color={info} d="M22 4.5 C 27 4.5 27.4 8 25.5 10.9" /><Arrow x={25.5} y={11} dir="down" color={info} />
            <Line color={orange} d="M8.5 10 L8.5 10.9" /><Arrow x={8.5} y={11} dir="down" color={orange} />
            <Line color={info} d="M20 10 L20 10.9" /><Arrow x={20} y={11} dir="down" color={info} />
            <Line color={ink} d="M18 12.5 L12.9 12.5" /><Arrow x={12} y={12.5} dir="left" color={ink} />
            <Line color={ink} d="M22.5 14 V16 M8 16 H22.5 M8 16 V16.9 M15 16 V16.9 M22 16 V16.9" />
            <Arrow x={8} y={17} dir="down" color={ink} /><Arrow x={15} y={17} dir="down" color={ink} /><Arrow x={22} y={17} dir="down" color={ink} />
          </svg>
          {parts.map((part) => <Box key={part.id} part={part} positioned />)}
        </div>
      </div>

      <div className="md:hidden">
        <p className="eyebrow m-0 mb-3">Design</p>
        <ul className="m-0 grid gap-3 p-0">{group(["tokens", "guidelines", "ui-kit"])}</ul>
        <Icon name="arrow_forward" className="mx-auto my-3 h-6 w-6 rotate-90 text-[var(--color-content-muted)]" />
        <p className="eyebrow m-0 mb-3">Documentation and code</p>
        <ul className="m-0 grid gap-3 p-0">{group(["reference", "library"])}</ul>
        <Icon name="arrow_forward" className="mx-auto my-3 h-6 w-6 rotate-90 text-[var(--color-content-muted)]" />
        <p className="eyebrow m-0 mb-3">Where it is used</p>
        <ul className="m-0 grid gap-3 p-0">{group(["app-1", "app-2", "website"])}</ul>
      </div>
    </figure></nav>
  );
}

