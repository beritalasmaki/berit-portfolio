import type { OkrExample } from "@/data/blog";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * A worked OKR example as a diagram in the site's own language: glass
 * panes, the ink/orange palette, mono eyebrows and Manrope headings, rather
 * than a pasted picture in someone else's colours. Three rows (objective →
 * key results → initiatives) joined by labelled connectors; each row is a
 * question on the left and its answer on the right, stacking on a phone.
 *
 * The three levels are told apart by how much orange they carry, deepening
 * from the objective (ink) to the key results (orange figures) to the
 * initiatives (orange bullets), so it stays one palette.
 */
export default function OkrDiagram({ okr, copy }: { okr: OkrExample; copy: Dictionary["blog"] }) {
  return (
    <figure className="m-0 rounded-card glass p-card-pad">
      <figcaption className="flex flex-col gap-2">
        <span className="font-mono-label text-mono-label uppercase text-muted">{copy.diagram}</span>
        <span className="text-card-h3 text-ink">{okr.title}</span>
        {okr.subtitle && <span className="text-body-sm text-body">{okr.subtitle}</span>}
      </figcaption>

      <div className="mt-8 flex flex-col">
        <Row index="01" name={copy.okr.objective} question={copy.okr.objectiveQuestion} tone="ink">
          <p className="m-0 h-full flex items-center rounded-frame bg-cream/60 border border-white/70 p-card-pad text-sub-h4 text-ink text-pretty">
            {okr.objective}
          </p>
        </Row>

        <Connector label={copy.okr.measuredBy} />

        <Row
          index="02"
          name={copy.okr.keyResults}
          question={copy.okr.keyResultsQuestion}
          hint={copy.okr.keyResultsHint}
          tone="accent"
        >
          <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
            {okr.keyResults.map((kr) => (
              <li
                key={kr.value}
                className="min-w-0 flex flex-col gap-2 rounded-frame bg-cream/60 border border-white/70 p-6 sm:p-4 xl:p-6"
              >
                <span className="text-card-h3 text-accent-hero whitespace-nowrap">{kr.value}</span>
                <span className="text-body-sm text-body">{kr.label}</span>
              </li>
            ))}
          </ul>
        </Row>

        <Connector label={copy.okr.achievedThrough} />

        <Row
          index="03"
          name={copy.okr.initiatives}
          question={copy.okr.initiativesQuestion}
          hint={copy.okr.initiativesHint}
          tone="soft"
        >
          <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {okr.initiatives.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-frame bg-cream/60 border border-white/70 px-6 py-4 text-body-sm text-ink"
              >
                <span aria-hidden="true" className="shrink-0 w-2 h-2 rounded-pill bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Row>
      </div>

      {okr.note && (
        <p className="mt-8 mb-0 rounded-frame bg-panel/70 px-6 py-4 text-center text-body-sm text-body">
          {okr.note}
        </p>
      )}
    </figure>
  );
}

const TONES = {
  // Objective: the site's ink "primary" surface.
  ink: { box: "bg-ink text-white", index: "text-white/70", hint: "text-white/80" },
  // Key results: the brand orange. Text on it is ink, not white: white on
  // #FC890C is under 3:1.
  accent: { box: "bg-accent text-ink", index: "text-ink/70", hint: "text-ink/80" },
  // Initiatives: a warm, quieter pane — the changeable layer.
  soft: { box: "bg-cream border border-rule-strong text-ink", index: "text-muted", hint: "text-accent-dark" },
} as const;

function Row({
  index,
  name,
  question,
  hint,
  tone,
  children,
}: {
  index: string;
  name: string;
  question: string;
  hint?: string;
  tone: keyof typeof TONES;
  children: React.ReactNode;
}) {
  const t = TONES[tone];
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] gap-4">
      <div className={`flex flex-col gap-2 rounded-frame p-6 ${t.box}`}>
        <span className={`font-mono-label text-mono-label uppercase ${t.index}`}>{index}</span>
        <span className="text-card-h3">{name}</span>
        <span className="mt-auto pt-4 text-body-em font-semibold">{question}</span>
        {hint && <span className={`text-body-sm ${t.hint}`}>{hint}</span>}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 py-2 md:pl-[calc(6.5rem-8px)]">
      <svg viewBox="0 0 16 32" aria-hidden="true" className="w-4 h-8 shrink-0 text-muted">
        <path
          d="M8 2v26M3 23l5 5 5-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-mono-label text-mono-label uppercase text-muted">{label}</span>
    </div>
  );
}
