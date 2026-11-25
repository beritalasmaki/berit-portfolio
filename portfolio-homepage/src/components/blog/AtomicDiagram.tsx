import Image from "next/image";
import type { AtomicExample } from "@/data/blog";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * A component broken into its parts, smallest at the top and the finished
 * solution at the bottom, each level shown with real examples from a design
 * system. Tokens sit apart in a dashed box at the very top, because they
 * aren't a level of the components but the values every level uses. All
 * levels share one neutral look so that nothing reads as highlighted.
 *
 * Each level's examples sit in an even grid of equal-height tiles, with the
 * image centred in its tile and the caption under it, so a row lines up
 * whatever the sizes of the screenshots. One column on a phone. Real text and
 * images with alt text, in ordered lists, so it reads out to a screen reader.
 */

/** The screenshots are saved at 1.5x; they show smaller (width / 2) to keep the diagram compact. */
const IMAGE_SCALE = 2;

/** Columns on a wide screen by number of examples. Full class names, so Tailwind can see them. */
const COLUMNS: Record<number, string> = {
  1: "sm:grid-cols-1 sm:max-w-[460px]",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

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

      <div className="mt-5 flex flex-col gap-3 rounded-card border-2 border-dashed border-rule-strong px-5 py-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-sub-h4 text-ink">{data.tokens.name}</span>
          <span className="text-[13px] leading-snug text-muted">{data.tokens.eyebrow}</span>
        </div>
        <span className="text-body-sm text-ink-alt">{data.tokens.text}</span>
        <Chips items={data.tokens.parts} />
      </div>

      <ol className="mt-3 mb-0 flex list-none flex-col gap-3 p-0">
        {data.levels.map((level) => (
          <li
            key={level.name}
            className="flex min-w-0 flex-col gap-4 rounded-card border border-rule-strong bg-cream/70 px-5 py-4"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sub-h4 text-ink">{level.name}</span>
              <span className="text-[13px] leading-snug text-muted">{level.text}</span>
            </div>
            <ul
              className={`m-0 grid min-w-0 list-none grid-cols-1 items-stretch gap-4 p-0 ${COLUMNS[Math.min(level.items.length, 3)]}`}
            >
              {level.items.map((item) => (
                <li key={item.label} className="flex min-w-0 flex-col gap-2">
                  <div className="flex flex-1 items-center justify-center rounded-img-inner border border-rule-strong bg-white p-4">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(min-width: 768px) 420px, 100vw"
                      style={{ width: Math.round(item.width / IMAGE_SCALE), maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <span className="text-[13px] leading-snug font-semibold text-ink">{item.label}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </figure>
  );
}
