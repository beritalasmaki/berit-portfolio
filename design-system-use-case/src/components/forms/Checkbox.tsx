import type { InputHTMLAttributes, ReactNode } from "react";
import { choiceClasses, isInert, Spinner, type FormMode } from "@/components/forms/controlStyles";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: ReactNode;
  mode?: FormMode;
};

export function Checkbox({ label, mode = "default", disabled, className = "", ...props }: CheckboxProps) {
  const isLoading = mode === "loading";
  const isDisabled = disabled || isInert(mode);
  const choice = choiceClasses(mode);

  return (
    <label className={`inline-flex min-h-11 items-center gap-3 rounded-lg px-2 text-sm transition text-[var(--preview-content,var(--color-content-primary))] ${choice.wrapper} ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${className}`}>
      <input
        type="checkbox"
        disabled={isDisabled}
        aria-busy={isLoading || undefined}
        className={`h-5 w-5 shrink-0 rounded-sm border border-[var(--preview-border,var(--color-border-strong))] accent-[var(--color-action-accent-dark)] transition ${choice.box}`}
        {...props}
      />
      <span>{label}</span>
      {isLoading ? <Spinner /> : null}
    </label>
  );
}
