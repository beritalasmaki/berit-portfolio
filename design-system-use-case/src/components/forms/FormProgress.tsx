import { Icon } from "@/components/icons/Icon";

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

/** Where the person is in a multi-step form: numbered circles, a status under each step, and "Step 2 of 4" as text. */
export function FormProgress({ steps, current, label = "Form progress", className = "" }: FormProgressProps) {
  return (
    <nav aria-label={label} className={className}>
      <p className="m-0 flex flex-wrap items-baseline gap-2 text-sm">
        <span className="font-semibold text-[var(--preview-content,var(--color-content-primary))]">Step {current} of {steps.length}</span>
        <span className="text-[var(--preview-content-muted,var(--color-content-secondary))]">{steps[current - 1]}</span>
      </p>
      <ol className="m-0 mt-3 flex list-none p-0">
        {steps.map((step, index) => {
          const number = index + 1;
          const state = number < current ? "complete" : number === current ? "current" : "upcoming";
          const circle =
            state === "upcoming"
              ? "border-2 border-[var(--color-border-strong)] text-[var(--preview-content-muted,var(--color-content-muted))]"
              : state === "current"
                ? "bg-[var(--color-action-accent)] font-bold text-[var(--color-content-primary)] shadow-[0_0_0_2px_var(--preview-content,var(--color-content-primary))]"
                : "bg-[var(--color-action-accent)] text-[var(--color-content-primary)]";
          return (
            <li key={step} aria-current={state === "current" ? "step" : undefined} className="flex min-w-0 flex-1 flex-col items-center gap-2 text-center">
              <div className="flex w-full items-center gap-2">
                <span aria-hidden="true" className={`h-px flex-1 bg-[var(--preview-border,var(--color-border-default))] ${index === 0 ? "invisible" : ""}`} />
                <span className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm ${circle}`}>{state === "complete" ? <Icon name="check" /> : <span aria-hidden="true">{String(number).padStart(2, "0")}</span>}</span>
                <span aria-hidden="true" className={`h-px flex-1 bg-[var(--preview-border,var(--color-border-default))] ${index === steps.length - 1 ? "invisible" : ""}`} />
              </div>
              <span className={`text-xs ${state === "current" ? "font-semibold text-[var(--preview-content,var(--color-content-primary))]" : "text-[var(--preview-content-muted,var(--color-content-secondary))]"}`}>{step}</span>
              <span className="text-xs text-[var(--preview-content-muted,var(--color-content-muted))]">{statusText[state]}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
