import type { FlowExample, FlowNode, FlowRow } from "@/data/blog";
import type { Dictionary } from "@/i18n/dictionaries";
import Chevron from "./Chevron";

/**
 * Compares ways of working as rows of "pill → box → box → pill". The
 * highlighted box carries the orange; the rest stay neutral. Each row reads
 * as an ordered list; on a phone the chain stacks top to bottom.
 */
export default function FlowDiagram({ data, copy }: { data: FlowExample; copy: Dictionary["blog"] }) {
  return (
    <figure className="m-0 rounded-card glass p-card-pad">
      <figcaption className="flex flex-col gap-2">
        <span className="font-mono-label text-mono-label uppercase text-muted">{copy.diagram}</span>
        <span className="text-card-h3 text-ink text-balance">{data.title}</span>
      </figcaption>

      <div className="mt-8 flex flex-col gap-4">
        {data.rows.map((row, i) => (
          <Row key={row.heading} index={i} row={row} />
        ))}
      </div>

      {data.quote && (
        <p className="mt-8 mb-0 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span aria-hidden="true" className="h-5 w-[3px] rounded-img-inner bg-accent" />
          <span className="text-body-sm font-bold text-ink">“{data.quote.text}”</span>
          <span className="font-mono-label text-mono-label uppercase text-muted">{data.quote.cite}</span>
        </p>
      )}
    </figure>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="shrink-0 self-start md:self-center rounded-pill border border-rule-strong bg-panel px-4 py-2 text-center text-[13px] font-bold text-ink">
      {children}
    </span>
  );
}

function Node({ node }: { node: FlowNode }) {
  return (
    <li
      className={`min-w-0 flex-1 list-none flex flex-col gap-1 rounded-frame p-4 ${
        node.highlight ? "border-[1.5px] border-accent bg-accent/15" : "border border-rule-strong bg-white"
      }`}
    >
      <span className="font-mono-label text-mono-label uppercase text-muted">{node.eyebrow}</span>
      <span className="text-body-em font-bold text-ink">{node.heading}</span>
      <span className="text-body-sm text-body">{node.text}</span>
    </li>
  );
}

function Row({ index, row }: { index: number; row: FlowRow }) {
  return (
    <section className="rounded-card border border-rule-strong bg-cream/70 p-6 shadow-frame flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="font-mono-label text-mono-label uppercase text-muted">
          {String(index + 1).padStart(2, "0")} / {row.eyebrow}
        </span>
        <span aria-hidden="true" className="my-1 block h-[3px] w-8 rounded-img-inner bg-accent" />
        <span className="text-sub-h4 text-ink">{row.heading}</span>
        <span className="text-body-sm text-body">{row.text}</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-stretch gap-2">
        <Pill>{row.start}</Pill>
        {row.nodes.map((node) => (
          <FlowStep key={node.heading} node={node} />
        ))}
        <Chevron />
        <Pill>{row.end}</Pill>
      </div>
    </section>
  );
}

function FlowStep({ node }: { node: FlowNode }) {
  return (
    <>
      <Chevron />
      <ul className="m-0 p-0 flex min-w-0 flex-1">
        <Node node={node} />
      </ul>
    </>
  );
}
