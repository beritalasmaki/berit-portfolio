import type { ReactNode } from "react";
import { AlertMark } from "@/components/forms/controlStyles";

type FieldProps = {
  /** Also set as the id of the control inside, so the label points at it. */
  id: string;
  label: string;
  hint?: ReactNode;
  error?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Field({ id, label, hint, error, children, className = "" }: FieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-sm font-semibold text-[var(--preview-content,var(--color-content-primary))]">{label}</label>
      {hint ? <p id={`${id}-hint`} className="m-0 text-xs text-[var(--preview-content-muted,var(--color-content-muted))]">{hint}</p> : null}
      {children}
      {error ? <p id={`${id}-error`} className="m-0 flex items-center gap-2 text-xs font-semibold text-[var(--color-action-accent-dark)]"><AlertMark />{error}</p> : null}
    </div>
  );
}
