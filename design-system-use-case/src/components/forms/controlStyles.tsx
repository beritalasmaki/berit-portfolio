export type FormMode = "default" | "hover" | "active" | "focus" | "disabled" | "loading";

const modeClasses: Record<FormMode, string> = {
  default: "",
  hover: "!border-[var(--preview-content,var(--color-content-primary))]",
  active: "!border-[var(--color-action-accent-dark)] !bg-[var(--preview-surface-raised,var(--color-surface-subtle))]",
  focus: "focus-ring !border-[var(--color-action-accent-dark)]",
  disabled: "",
  loading: "",
};

const controlBase =
  "min-h-11 w-full rounded-lg border border-[var(--preview-border,var(--color-border-strong))] bg-[var(--preview-surface,var(--color-surface-canvas))] px-3 text-sm text-[var(--preview-content,var(--color-content-primary))] transition placeholder:text-[var(--preview-content-muted,var(--color-content-muted))] hover:border-[var(--preview-content,var(--color-content-primary))] disabled:cursor-not-allowed disabled:opacity-50";

export function controlClassName(mode: FormMode, className = "") {
  return `${controlBase} ${modeClasses[mode]} ${className}`.replace(/\s+/g, " ").trim();
}

/** A control in these modes cannot be operated, so it is rendered disabled. */
export function isInert(mode: FormMode) {
  return mode === "disabled" || mode === "loading";
}

/**
 * A checkbox or radio is painted by the browser, so a mode has to read on the
 * label around it as well as on the box itself.
 */
export function choiceClasses(mode: FormMode): { wrapper: string; box: string } {
  if (mode === "hover") return { wrapper: "bg-[var(--preview-surface-raised,var(--color-surface-subtle))]", box: "!border-[var(--preview-content,var(--color-content-primary))]" };
  if (mode === "active") return { wrapper: "bg-[var(--preview-surface-raised,var(--color-surface-subtle))]", box: "!scale-90 ring-2 ring-[var(--color-action-accent)] ring-offset-1" };
  if (mode === "focus") return { wrapper: "", box: "focus-ring" };
  return { wrapper: "", box: "" };
}

/** A chevron drawn inline, so a control never depends on an icon font loading. */
export function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className={`h-4 w-4 ${className}`}>
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AlertMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className={`h-4 w-4 shrink-0 ${className}`}>
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 4.75v4M8 11.4v.1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function Spinner({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent opacity-60 ${className}`} />;
}
