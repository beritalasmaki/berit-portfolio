import type { ReactNode } from "react";
import { AlertMark } from "@/components/forms/controlStyles";

type RadioGroupProps = {
  /** Gives the group a stable id, used to link the hint and the error to the group. */
  id: string;
  /** The question. It is the group's legend, so it carries the Required or Optional marker. */
  legend: string;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  optional?: boolean;
  /** The Radio components in the group. Give them the same name. */
  children: ReactNode;
  className?: string;
};

/** A fieldset with a legend around a group of radio buttons. Put the marker on the legend, not on every radio. */
export function RadioGroup({ id, legend, hint, error, required = false, optional = false, children, className = "" }: RadioGroupProps) {
  const describedBy = [hint ? `${id}-hint` : "", error ? `${id}-error` : ""].filter(Boolean).join(" ") || undefined;
  return (
    <fieldset aria-describedby={describedBy} className={`m-0 flex min-w-0 flex-col gap-2 border-0 p-0 ${className}`}>
      <legend className="mb-2 p-0 text-sm font-semibold text-[var(--preview-content,var(--color-content-primary))]">
        {legend}
        {required ? <span aria-hidden="true" className="ml-1">*</span> : null}
        {optional ? <span className="ml-1 font-normal text-[var(--preview-content-muted,var(--color-content-muted))]">(optional)</span> : null}
      </legend>
      {hint ? <p id={`${id}-hint`} className="m-0 text-xs text-[var(--preview-content-muted,var(--color-content-muted))]">{hint}</p> : null}
      <div className="flex flex-col gap-1">{children}</div>
      {error ? <p id={`${id}-error`} className="m-0 flex items-center gap-2 text-xs font-semibold text-[var(--preview-error,var(--color-status-error-strong))]"><AlertMark />{error}</p> : null}
    </fieldset>
  );
}
