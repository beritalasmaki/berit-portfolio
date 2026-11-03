import type { ReactNode } from "react";

type FormIntroProps = {
  title: string;
  /** What the person needs to have ready, how long it takes, any time limits. */
  children: ReactNode;
  /** Shows "* marked fields are required". Keep it on every form that has required fields. */
  showRequiredNote?: boolean;
  className?: string;
};

/** Context before the form. Place it before the form element so a screen reader reads it first. */
export function FormIntro({ title, children, showRequiredNote = true, className = "" }: FormIntroProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <h2 className="m-0 text-[19px] font-bold leading-tight text-[var(--preview-content,var(--color-content-primary))]">{title}</h2>
      <div className="text-[15px] text-[var(--preview-content-muted,var(--color-content-secondary))]">{children}</div>
      {showRequiredNote ? <p className="m-0 text-sm font-semibold text-[var(--preview-content,var(--color-content-primary))]">* marked fields are required</p> : null}
    </div>
  );
}
