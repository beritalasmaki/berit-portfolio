import type { StepsExample } from "@/data/blog";
import type { Dictionary } from "@/i18n/dictionaries";
import Chevron from "./Chevron";

/**
 * A login view built in four stages (layout → states → validation → phone),
 * each drawn as a small mock-up. Four across is too tight for the article
 * column, so it is a 2×2 grid, with arrows only while the stages stack. The mock-ups are decorative (`aria-hidden`);
 * the step's heading and text carry the meaning for a screen reader.
 */
export default function StepsDiagram({ data, copy }: { data: StepsExample; copy: Dictionary["blog"] }) {
  const { mock, steps } = data;
  return (
    <figure className="m-0 rounded-card glass p-card-pad">
      <figcaption className="flex flex-col gap-2">
        <span className="font-mono-label text-mono-label uppercase text-muted">{copy.diagram}</span>
        <span className="text-card-h3 text-ink text-balance">{data.title}</span>
      </figcaption>

      <ol className="mt-8 mb-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-4">
        {steps.map((step, i) => (
          <StepItem key={step.name} index={i} step={step} mock={mock} last={i === steps.length - 1} />
        ))}
      </ol>

      {data.tip && (
        <p className="mt-8 mb-0 flex items-center gap-4 rounded-frame border border-rule-strong bg-cream/60 px-6 py-4 text-body-sm text-ink">
          <span aria-hidden="true" className="self-stretch w-[3px] rounded-img-inner bg-accent shrink-0" />
          <span className="font-mono-label text-mono-label uppercase text-muted shrink-0">{data.tip.label}</span>
          <span className="font-semibold">{data.tip.text}</span>
        </p>
      )}
    </figure>
  );
}

function StepItem({
  index,
  step,
  mock,
  last,
}: {
  index: number;
  step: StepsExample["steps"][number];
  mock: StepsExample["mock"];
  last: boolean;
}) {
  return (
    <>
      <li className="min-w-0 flex flex-col gap-6 rounded-card border border-rule-strong bg-cream/70 p-6 shadow-frame">
        <div className="flex flex-col gap-2">
          <span className="font-mono-label text-mono-label uppercase text-muted">
            {String(index + 1).padStart(2, "0")} / {step.name}
          </span>
          <span aria-hidden="true" className="my-1 block h-[3px] w-8 rounded-img-inner bg-accent" />
          <span className="text-sub-h4 text-ink">{step.name}</span>
          <span className="text-body-sm font-bold text-ink">{step.heading}</span>
          <span className="text-body-sm text-body">{step.text}</span>
        </div>
        <div
          aria-hidden="true"
          className="mt-auto flex min-h-[220px] flex-col justify-center rounded-frame border border-rule bg-cream/70 p-4"
        >
          <Mock index={index} mock={mock} />
        </div>
      </li>
      {!last && <Chevron className="sm:hidden" />}
    </>
  );
}

const field = "h-9 rounded-chrome box-border";
const label = "text-[12px] leading-4 font-semibold text-ink";

function Field({
  text,
  className,
  children,
}: {
  text: string;
  className: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className={label}>{text}</span>
      <div className={`${field} ${className}`}>{children}</div>
    </div>
  );
}

function Mock({ index, mock }: { index: number; mock: StepsExample["mock"] }) {
  if (index === 0) {
    const wire = "bg-accent/15 border-[1.5px] border-accent";
    return (
      <div className="flex flex-col gap-4">
        <Field text={mock.email} className={wire} />
        <Field text={mock.password} className={wire} />
        <div className={`h-[38px] rounded-pill flex items-center justify-center text-[13px] font-bold text-ink ${wire}`}>
          {mock.button}
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="flex flex-col gap-4">
        <Field
          text={mock.email}
          className="flex items-center gap-px pl-2.5 bg-white border-2 border-accent shadow-[0_0_0_3px_rgba(252,137,12,0.25)] text-[13px] font-medium text-ink"
        >
          {mock.typed}
          <span className="block h-4 w-[1.5px] bg-ink" />
        </Field>
        <Field text={mock.password} className="bg-white border border-rule-strong" />
        <div className="h-[38px] rounded-pill border-[1.5px] border-dashed border-accent flex items-center justify-center text-[13px] font-bold text-muted">
          {mock.button}
        </div>
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className={label}>{mock.email}</span>
          <div className={`${field} flex items-center pl-2.5 bg-accent-dark/10 border-2 border-accent-dark text-[13px] font-medium text-ink`}>
            {mock.wrongEmail}
          </div>
          <span className="flex items-center gap-1 text-[12px] leading-4 font-bold text-accent-dark">
            <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path d="M12 7v6M12 17v.01" />
            </svg>
            {mock.error}
          </span>
        </div>
        <Field text={mock.password} className="bg-white border border-rule-strong" />
        <div className="h-[38px] rounded-pill bg-panel border border-rule-strong flex items-center justify-center text-[13px] font-bold text-body">
          {mock.button}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="relative flex h-[196px] w-[104px] flex-col gap-2.5 rounded-[22px] border-[1.5px] border-accent bg-accent/15 px-3 pb-4 pt-6">
        <span className="absolute left-1/2 top-[9px] h-1 w-6 -translate-x-1/2 rounded-img-inner bg-accent" />
        <span className="h-1.5 w-10 rounded-pill bg-rule-strong" />
        <span className="h-7 rounded-lg border border-rule-strong bg-white" />
        <span className="h-1.5 w-10 rounded-pill bg-rule-strong" />
        <span className="h-7 rounded-lg border border-rule-strong bg-white" />
        <span className="flex-1" />
        <span className="h-[30px] rounded-pill bg-ink" />
      </div>
    </div>
  );
}
