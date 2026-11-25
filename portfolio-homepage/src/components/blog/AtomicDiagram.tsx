import type { AtomicExample } from "@/data/blog";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * A component broken into its parts, largest level on top: each level is
 * made of the parts listed under it. Levels differ by how much orange they
 * carry, deepening towards the smallest. Tokens sit apart in a dashed box,
 * because they aren't a level of the components but the values every level
 * uses. Real text in an ordered list, so it reflows and reads out to a
 * screen reader.
 */
const LEVELS = [
  "border border-rule-strong bg-cream/70",
  "border-[1.5px] border-accent bg-accent/15",
  "border-2 border-accent bg-accent/30",
] as const;

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-pill border border-rule-strong bg-white px-3 py-1 text-[13px] leading-[18px] font-semibold text-ink"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function AtomicDiagram({ data, copy }: { data: AtomicExample; copy: Dictionary["blog"] }) {
  return (
    <figure className="m-0 rounded-card glass p-card-pad">
      <figcaption className="flex flex-col gap-1">
        <span className="font-mono-label text-mono-label uppercase text-muted">{data.eyebrow ?? copy.diagram}</span>
        <span className="text-card-h3 text-ink">{data.title}</span>
      </figcaption>

      <ol className="mt-5 mb-0 flex list-none flex-col gap-2 p-0">
        {data.levels.map((level, i) => {
          const tone = LEVELS[Math.min(i, LEVELS.length - 1)];
          return (
            <li
              key={level.name}
              className={`grid min-w-0 grid-cols-1 gap-x-6 gap-y-2 rounded-card px-5 py-4 md:grid-cols-[170px_1fr] md:items-center ${tone}`}
            >
              <div className="flex flex-col">
                <span className="text-sub-h4 text-ink">{level.name}</span>
                <span className="text-[13px] leading-snug text-muted">{level.text}</span>
              </div>
              <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-body-sm font-bold text-ink">{level.example}</span>
                {level.parts.length > 0 && (
                  <>
                    <span className="font-mono-label text-mono-label uppercase text-muted">{data.joinLabel}</span>
                    <Chips items={level.parts} />
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 rounded-card border-2 border-dashed border-rule-strong px-5 py-4 md:grid-cols-[170px_1fr] md:items-center">
        <div className="flex flex-col">
          <span className="text-sub-h4 text-ink">{data.tokens.name}</span>
          <span className="text-[13px] leading-snug text-muted">{data.tokens.eyebrow}</span>
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <span className="text-body-sm text-ink-alt">{data.tokens.text}</span>
          <Chips items={data.tokens.parts} />
        </div>
      </div>
    </figure>
  );
}
