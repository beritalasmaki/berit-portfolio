import Image from "next/image";
import type { AtomicExample } from "@/data/blog";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * A component broken into its parts, smallest at the top and the finished
 * solution at the bottom, each level shown with real examples from a design
 * system. Tokens sit apart in a dashed box at the very top, because they
 * aren't a level of the components but the values every level uses. All
 * levels share one neutral look so that nothing reads as highlighted. Real
 * text and images with alt text, in an ordered list, so it reflows on a
 * phone and reads out to a screen reader.
 */

/** The screenshots are saved at 1.5x; they show smaller (width / 2) to keep the diagram compact. */
const IMAGE_SCALE = 2;

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

      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 rounded-card border-2 border-dashed border-rule-strong px-5 py-4 md:grid-cols-[170px_1fr] md:items-center">
        <div className="flex flex-col">
          <span className="text-sub-h4 text-ink">{data.tokens.name}</span>
          <span className="text-[13px] leading-snug text-muted">{data.tokens.eyebrow}</span>
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <span className="text-body-sm text-ink-alt">{data.tokens.text}</span>
          <Chips items={data.tokens.parts} />
        </div>
      </div>

      <ol className="mt-3 mb-0 flex list-none flex-col gap-3 p-0">
        {data.levels.map((level) => (
          <li
            key={level.name}
            className="grid min-w-0 grid-cols-1 gap-x-6 gap-y-3 rounded-card border border-rule-strong bg-cream/70 px-5 py-4 md:grid-cols-[170px_1fr]"
          >
            <div className="flex flex-col">
              <span className="text-sub-h4 text-ink">{level.name}</span>
              <span className="text-[13px] leading-snug text-muted">{level.text}</span>
            </div>
            <ul className="m-0 flex min-w-0 list-none flex-wrap items-end gap-x-5 gap-y-4 p-0">
              {level.items.map((item) => (
                <li key={item.label} className="flex min-w-0 max-w-full flex-col gap-2">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(min-width: 768px) 560px, 100vw"
                    style={{ width: Math.round(item.width / IMAGE_SCALE), maxWidth: "100%", height: "auto" }}
                    className="rounded-img-inner border border-rule-strong bg-white"
                  />
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
