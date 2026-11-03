import type { InputHTMLAttributes, ReactNode } from "react";
import { AlertMark, controlClassName, isInert, Spinner, type FormMode } from "@/components/forms/controlStyles";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  mode?: FormMode;
  /** Decorative icon inside the field, on the left: for example search, user or language. */
  leadingIcon?: ReactNode;
  /**
   * Icon or icon button on the right: for example a clear button or search.
   * An interactive trailing control needs its own accessible name.
   */
  trailingIcon?: ReactNode;
};

export function Input({ mode = "default", disabled, leadingIcon, trailingIcon, className = "", ...props }: InputProps) {
  const isLoading = mode === "loading";
  const isError = mode === "error";
  const hasTrailing = Boolean(trailingIcon) || isLoading || isError;

  return (
    <span className="relative block w-full">
      {leadingIcon ? <span aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--preview-content-muted,var(--color-content-muted))]">{leadingIcon}</span> : null}
      <input
        aria-busy={isLoading || undefined}
        aria-invalid={isError || undefined}
        disabled={disabled || isInert(mode)}
        className={controlClassName(mode, `${leadingIcon ? "pl-12" : ""} ${hasTrailing ? "pr-12" : ""} ${className}`)}
        {...props}
      />
      {isLoading ? <Spinner className="absolute right-3 top-1/2 -translate-y-1/2" /> : trailingIcon ? <span className="absolute right-0 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center text-[var(--preview-content-muted,var(--color-content-muted))]">{trailingIcon}</span> : isError ? <AlertMark className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--preview-error,var(--color-status-error-strong))]" /> : null}
    </span>
  );
}
