import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonMode = "default" | "hover" | "active" | "focus" | "disabled" | "loading";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  mode?: ButtonMode;
  children: ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[var(--preview-action,var(--color-action-primary))] text-[var(--preview-action-text,var(--color-content-inverse))] hover:bg-[var(--color-action-accent-dark)]",
  secondary: "border border-[var(--preview-border,var(--color-border-strong))] text-[var(--preview-content,var(--color-content-primary))] hover:border-[var(--preview-content,var(--color-content-primary))]",
  tertiary: "text-[var(--color-action-accent-dark)] underline decoration-[var(--color-action-accent)] underline-offset-4 hover:text-[var(--preview-content,var(--color-content-primary))]",
};

export function Button({ variant = "primary", mode = "default", disabled, children, className = "", ...props }: ButtonProps) {
  const isLoading = mode === "loading";
  const isDisabled = disabled || mode === "disabled" || isLoading;
  const modeClass = mode === "hover" ? "!bg-[var(--color-action-accent-dark)]" : mode === "active" ? "!scale-[.98] !bg-[var(--color-action-accent-dark)]" : mode === "focus" ? "focus-ring" : "";
  return (
    <button
      type="button"
      aria-busy={isLoading || undefined}
      disabled={isDisabled}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition ${variants[variant]} ${modeClass} disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {isLoading ? <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> : null}
      {isLoading ? "Working" : children}
    </button>
  );
}
