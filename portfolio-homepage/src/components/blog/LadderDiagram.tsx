import type { LadderExample } from "@/data/blog";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * Three rungs of rising height, bottom-aligned on a wide screen and stacked
 * on a phone. Rungs differ by how much orange they carry, deepening to the
 * top one, which is the only one with ink-coloured accents.
 */
const RUNGS = [
  { box: "border border-rule-strong bg-cream/70 shadow-frame md:min-h-[240px]", rule: "bg-accent", text: "text-body" },
  { box: "border-[1.5px] border-accent bg-accent/15 shadow-frame md:min-h-[290px]", rule: "bg-accent", text: "text-ink-alt" },
  { box: "border-2 border-accent bg-accent/30 shadow-frame-accent md:min-h-[340px]", rule: "bg-ink", text: "text-ink" },
] as const;

export default function LadderDiagram({ data, copy }: { data: LadderExample; copy: Dictionary["blog"] }) {
  return (
    <figure className="m-0 rounded-card glass p-card-pad">
      <figcaption className="flex flex-col gap-2">
        <span className="font-mono-label text-mono-label uppercase text-muted">{data.eyebrow ?? copy.diagram}</span>
        <span className="text-card-h3 text-ink text-balance">{data.title}</span>
      </figcaption>

      <ol className="mt-8 mb-0 p-0 list-none grid grid-cols-1 md:grid-cols-3 md:items-end gap-4">
        {data.rungs.map((rung, i) => {
          const tone = RUNGS[Math.min(i, RUNGS.length - 1)];
          return (
            <li key={rung.name} className={`min-w-0 flex flex-col gap-2 rounded-card p-6 ${tone.box}`}>
              <span className={`font-mono-label text-mono-label uppercase ${i === 2 ? "text-ink" : "text-muted"}`}>
                {String(i + 1).padStart(2, "0")} / {copy.ladderRung}
              </span>
              <span aria-hidden="true" className={`my-1 block h-[3px] w-8 rounded-img-inner ${tone.rule}`} />
              <span className="text-sub-h4 text-ink break-words hyphens-auto">{rung.name}</span>
              <span className={`text-body-sm ${tone.text}`}>{rung.text}</span>
              {rung.badge && (
                <span className="mt-auto pt-4">
                  <span className="inline-block rounded-pill bg-ink px-4 py-1.5 text-[13px] leading-[18px] font-bold text-white">
                    {rung.badge}
                  </span>
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {data.source && (
        <p className="mt-8 mb-0 flex items-center gap-4">
          <span aria-hidden="true" className="h-8 w-[3px] rounded-img-inner bg-accent" />
          <span className="font-mono-label text-mono-label uppercase text-muted">{data.source}</span>
        </p>
      )}
    </figure>
  );
}
