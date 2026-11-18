import { Icon } from "../icons/Icon";

type FormProgressProps = {
  /** The step names, in order. */
  steps: string[];
  /** The current step, counting from 1. */
  current: number;
  /** Names the list for assistive technology. */
  label?: string;
  className?: string;
};

const statusText = { complete: "Completed", current: "In progress", upcoming: "Not started" } as const;

/**
 * Where the person is in a multi-step form: numbered nodes on one line, a status under each step, and "Step 2 of 4" as text.
 * The line fills with the accent colour as steps are completed.
 */
export function FormProgress({ steps, current, label = "Form progress", className = "" }: FormProgressProps) {
  return (
    <nav aria-label={label} className={className}>
      <p className="m-0 flex flex-wrap items-baseline gap-2">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--preview-accent,var(--color-action-accent-dark))]">Step {current} of {steps.length}</span>
        <span className="text-[15px] font-semibold text-[var(--preview-content,var(--color-content-primary))]">{steps[current - 1]}</span>
      </p>
      <ol className="m-0 mt-4 flex list-none p-0">
        {steps.map((step, index) => {
          const number = index + 1;
          const state = number < current ? "complete" : number === current ? "current" : "upcoming";
          const circle =
            state === "upcoming"
              ? "border border-[var(--preview-border,var(--color-border-subtle))] text-[var(--preview-content-muted,var(--color-content-muted))]"
              : state === "current"
                ? "bg-[var(--preview-action,var(--color-action-primary))] font-semibold text-[var(--preview-action-text,var(--color-content-inverse))]"
                : "bg-[var(--color-action-accent)] text-[var(--color-content-primary)]";
          const line = (filled: boolean, hidden: boolean) => `h-0.5 flex-1 ${filled ? "bg-[var(--color-action-accent)]" : "bg-[var(--preview-border,var(--color-border-default))]"} ${hidden ? "invisible" : ""}`;
          return (
            <li key={step} aria-current={state === "current" ? "step" : undefined} className="flex min-w-0 flex-1 flex-col items-center gap-2 text-center">
              <div className="flex w-full items-center">
                <span aria-hidden="true" className={line(number <= current, index === 0)} />
                <span className={`flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-xs ${circle}`}>{state === "complete" ? <Icon name="check" /> : <span aria-hidden="true">{String(number).padStart(2, "0")}</span>}</span>
                <span aria-hidden="true" className={line(number < current, index === steps.length - 1)} />
              </div>
              <span className={`text-sm ${state === "current" ? "font-bold text-[var(--preview-content,var(--color-content-primary))]" : "font-semibold text-[var(--preview-content-secondary,var(--color-content-secondary))]"}`}>{step}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--preview-content-muted,var(--color-content-muted))]">{statusText[state]}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
