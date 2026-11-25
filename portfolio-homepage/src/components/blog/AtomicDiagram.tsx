import Image from "next/image";
import type { AtomicExample } from "@/data/blog";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * A component broken into its parts, smallest at the top and the finished
 * solution at the bottom, each level shown with real examples from a design
 * system. Tokens sit apart in a dashed box at the very top, because they
 * aren't a level of the components but the values every level uses. There is
 * one card only: the sections inside it are told apart by thin rules (a
 * dashed one under the tokens), not by cards of their own, and all levels
 * share one neutral look so that nothing reads as highlighted.
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

/** Ball-based icons: one ball, a few balls joined, and a larger group of joined balls inside an outline. */
function LevelIcon({ kind }: { kind: "atom" | "molecule" | "organism" }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", "aria-hidden": true, className: "shrink-0 self-center text-ink" } as const;
  if (kind === "atom") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="6" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "molecule") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 17 12 6l5 11Z" />
        <circle cx="12" cy="6" r="3.2" fill="currentColor" />
        <circle cx="7" cy="17" r="3.2" fill="currentColor" />
        <circle cx="17" cy="17" r="3.2" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1.75" y="1.75" width="20.5" height="20.5" rx="6" />
      <path d="M8 8h8v8H8Z" strokeWidth="1.25" />
      <circle cx="8" cy="8" r="2.4" fill="currentColor" />
      <circle cx="16" cy="8" r="2.4" fill="currentColor" />
      <circle cx="8" cy="16" r="2.4" fill="currentColor" />
      <circle cx="16" cy="16" r="2.4" fill="currentColor" />
    </svg>
  );
}

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

      <div className="mt-6 flex flex-col gap-3 border-t border-rule-strong pt-5 pb-5">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-sub-h4 text-ink">{data.tokens.name}</span>
          <span className="text-[13px] leading-snug text-muted">{data.tokens.eyebrow}</span>
        </div>
        <span className="text-body-sm text-ink-alt">{data.tokens.text}</span>
        <Chips items={data.tokens.parts} />
      </div>

      <ol className="m-0 flex list-none flex-col p-0">
        {data.levels.map((level, i) => (
          <li
            key={level.name}
            className={`flex min-w-0 flex-col gap-4 border-t py-5 border-rule-strong ${i === 0 ? "border-dashed" : ""}`}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <LevelIcon kind={level.icon} />
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
                  <span className="self-start rounded-[18px] border border-rule-strong bg-white px-3 py-1 text-[13px] leading-[18px] font-semibold text-ink">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </figure>
  );
}
