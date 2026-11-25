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
  "border-2 border-accent bg-accent/30 shadow-frame-accent",
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
      <figcaption className="flex flex-col gap-2">
        <span className="font-mono-label text-mono-label uppercase text-muted">{data.eyebrow ?? copy.diagram}</span>
        <span className="text-card-h3 text-ink">{data.title}</span>
      </figcaption>

      <ol className="mt-8 mb-0 flex list-none flex-col gap-3 p-0">
        {data.levels.map((level, i) => {
          const tone = LEVELS[Math.min(i, LEVELS.length - 1)];
          const last = i === data.levels.length - 1;
          return (
            <li key={level.name} className="flex flex-col gap-3">
              <div className={`flex min-w-0 flex-col gap-2 rounded-card p-6 ${tone}`}>
                <span className="font-mono-label text-mono-label uppercase text-muted">{level.name}</span>
                <span className="text-sub-h4 text-ink">{level.example}</span>
                <span className="text-body-sm text-ink-alt">{level.text}</span>
                {level.parts.length > 0 && (
                  <div className="mt-2 flex flex-col gap-2">
                    <span className="font-mono-label text-mono-label uppercase text-muted">{data.joinLabel}</span>
                    <Chips items={level.parts} />
                  </div>
                )}
              </div>
              {!last && (
                <span aria-hidden="true" className="pl-6 font-mono-label text-mono-label text-muted">
                  ↓
                </span>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-8 flex flex-col gap-2 rounded-card border-2 border-dashed border-rule-strong p-6">
        <span className="font-mono-label text-mono-label uppercase text-muted">{data.tokens.eyebrow}</span>
        <span className="text-sub-h4 text-ink">{data.tokens.name}</span>
        <span className="text-body-sm text-ink-alt">{data.tokens.text}</span>
        <div className="mt-2">
          <Chips items={data.tokens.parts} />
        </div>
      </div>
    </figure>
  );
}
