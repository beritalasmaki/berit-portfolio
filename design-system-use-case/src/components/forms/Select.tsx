import type { SelectHTMLAttributes } from "react";
import { AlertMark, Chevron, controlClassName, isInert, Spinner, type FormMode } from "@/components/forms/controlStyles";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  mode?: FormMode;
};

export function Select({ mode = "default", disabled, className = "", children, ...props }: SelectProps) {
  const isLoading = mode === "loading";
  const isError = mode === "error";

  return (
    <span className="relative block w-full">
      <select
        aria-busy={isLoading || undefined}
        aria-invalid={isError || undefined}
        disabled={disabled || isInert(mode)}
        className={controlClassName(mode, `appearance-none pr-12 ${className}`)}
        {...props}
      >
        {children}
      </select>
      {isLoading ? (
        <Spinner className="absolute right-3 top-1/2 -translate-y-1/2" />
      ) : (
        <>
          {isError ? <AlertMark className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 text-[var(--preview-error,var(--color-status-error-strong))]" /> : null}
          <Chevron className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--preview-content-muted,var(--color-content-muted))]" />
        </>
      )}
    </span>
  );
}
