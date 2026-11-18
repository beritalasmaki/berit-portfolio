import type { TimelineExample } from "@/data/blog";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * A process on one line. The stages sit side by side on a wide screen and
 * stack top to bottom on a phone, joined by a thin line. The highlighted
 * stage carries the orange (ink on orange, never white) and has no stage
 * number, so the numbers count only the stages. Built as an ordered list of
 * real text, so it reflows and reads out to a screen reader.
 */
export default function TimelineDiagram({ data, copy }: { data: TimelineExample; copy: Dictionary["blog"] }) {
  let stage = 0;
  return (
    <figure className="m-0 rounded-card glass p-card-pad">
      <figcaption className="flex flex-col gap-2">
        <span className="font-mono-label text-mono-label uppercase text-muted">{copy.diagram}</span>
        <span className="text-card-h3 text-ink">{data.title}</span>
      </figcaption>

      <ol className="m-0 mt-8 flex list-none flex-col gap-6 p-0 md:flex-row md:gap-0">
        {data.items.map((item, i) => {
          if (!item.highlight) stage += 1;
          const last = i === data.items.length - 1;
          return (
            <li key={item.label} className="relative flex gap-4 md:min-w-0 md:flex-1 md:flex-col md:gap-3 md:pr-3">
              {/* The line to the next stage: down on a phone, across on a wide screen. */}
              {!last && (
                <span
                  aria-hidden="true"
                  className="absolute left-[13px] top-8 -bottom-6 w-px bg-rule-strong md:left-9 md:right-0 md:top-[13px] md:bottom-auto md:h-px md:w-auto"
                />
              )}
              <span
                aria-hidden="true"
                className={`relative z-[1] flex h-7 w-7 shrink-0 items-center justify-center rounded-pill font-mono-label text-[11px] text-ink ${
                  item.highlight ? "border-[1.5px] border-accent bg-accent" : "border border-rule-strong bg-white"
                }`}
              >
                {item.highlight ? "•" : stage}
              </span>
              <span className="flex min-w-0 flex-col gap-1">
                <span className="text-body-sm font-bold text-ink text-pretty">{item.label}</span>
                {item.note && <span className="text-[13px] leading-snug text-muted">{item.note}</span>}
              </span>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
