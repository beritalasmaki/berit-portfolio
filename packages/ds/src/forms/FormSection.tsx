import type { ReactNode } from "react";

type FormSectionProps = {
  title: string;
  description?: ReactNode;
  /** Keep the title for assistive technology but do not show it, for example when a step is already named by the progress above. */
  hideTitle?: boolean;
  /** About three to six related fields. */
  children: ReactNode;
  className?: string;
};

/** One chunk of a longer form: a fieldset with a legend, an optional description and a group of related fields. */
export function FormSection({ title, description, hideTitle = false, children, className = "" }: FormSectionProps) {
  return (
    <fieldset className={`m-0 min-w-0 border-0 border-t border-[var(--preview-border,var(--color-border-default))] px-0 pb-0 pt-6 ${className}`}>
      <legend className={`p-0 ${hideTitle ? "sr-only" : "pr-4"} text-[19px] font-bold leading-tight text-[var(--preview-content,var(--color-content-primary))]`}>{title}</legend>
      {description ? <p className={`m-0 ${hideTitle ? "" : "mt-1"} text-sm text-[var(--preview-content-muted,var(--color-content-secondary))]`}>{description}</p> : null}
      <div className="mt-6 flex flex-col gap-6">{children}</div>
    </fieldset>
  );
}
