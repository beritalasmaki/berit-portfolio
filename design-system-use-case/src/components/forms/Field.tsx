import type { ReactNode } from "react";
import { AlertMark } from "@/components/forms/controlStyles";

type FieldProps = {
  /** Also set as the id of the control inside, so the label points at it. */
  id: string;
  label: string;
  /** Instructions shown between the label and the control. Use this instead of a placeholder, and link it to the control with aria-describedby. */
  hint?: ReactNode;
  /** Says what is wrong and how to fix it. Pair it with the control's error mode and aria-invalid. */
  error?: ReactNode;
  /** Adds a * after the label. Also set the required attribute on the control, and say "* marked fields are required" at the top of the form. */
  required?: boolean;
  /** Adds "(optional)" after the label. */
  optional?: boolean;
  children: ReactNode;
  className?: string;
};

export function Field({ id, label, hint, error, required = false, optional = false, children, className = "" }: FieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-sm font-semibold text-[var(--preview-content,var(--color-content-primary))]">
        {label}
        {required ? <span aria-hidden="true" className="ml-1">*</span> : null}
        {optional ? <span className="ml-1 font-normal text-[var(--preview-content-muted,var(--color-content-muted))]">(optional)</span> : null}
      </label>
      {hint ? <p id={`${id}-hint`} className="m-0 text-xs text-[var(--preview-content-muted,var(--color-content-muted))]">{hint}</p> : null}
      {children}
      {error ? <p id={`${id}-error`} className="m-0 flex items-center gap-2 text-xs font-semibold text-[var(--preview-error,var(--color-status-error-strong))]"><AlertMark />{error}</p> : null}
    </div>
  );
}
