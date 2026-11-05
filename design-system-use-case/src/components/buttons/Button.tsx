import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonMode = "default" | "hover" | "active" | "focus" | "disabled" | "loading";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  mode?: ButtonMode;
  /** Decorative icon before the label, for example a left arrow on Back or a cross on Cancel. */
  leadingIcon?: ReactNode;
  /** Decorative icon after the label, for example a right arrow on Next. */
  trailingIcon?: ReactNode;
  children: ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "group relative isolate overflow-hidden border border-[var(--preview-action-border,transparent)] bg-[image:var(--preview-action-gradient,var(--gradient-action-primary))] text-[var(--preview-action-text,var(--color-content-inverse))] shadow-[var(--preview-action-shadow,none)] hover:text-[var(--preview-action-hover-text,var(--color-content-inverse))] hover:shadow-none",
  secondary: "border border-[var(--preview-border,var(--color-border-strong))] text-[var(--preview-content,var(--color-content-primary))] hover:border-[var(--preview-content,var(--color-content-primary))]",
  tertiary: "text-[var(--preview-accent,var(--color-action-accent-dark))] underline decoration-[var(--color-action-accent)] underline-offset-4 hover:text-[var(--preview-content,var(--color-content-primary))]",
};

const hoverMode = "!text-[var(--preview-action-hover-text,var(--color-content-inverse))] !shadow-none";

export function Button({ variant = "primary", mode = "default", disabled, children, leadingIcon, trailingIcon, className = "", ...props }: ButtonProps) {
  const isLoading = mode === "loading";
  const isDisabled = disabled || mode === "disabled" || isLoading;
  const showHoverLayer = mode === "hover" || mode === "active";
  const modeClass = mode === "hover" ? (variant === "primary" ? hoverMode : "") : mode === "active" ? (variant === "primary" ? `!scale-[.98] ${hoverMode}` : "!scale-[.98]") : mode === "focus" ? "focus-ring" : "";
  return (
    <button
      type="button"
      aria-busy={isLoading || undefined}
      disabled={isDisabled}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold transition ${variants[variant]} ${modeClass} disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {variant === "primary" ? <span aria-hidden="true" className={`pointer-events-none absolute -inset-px -z-10 bg-[image:var(--preview-action-gradient-hover,var(--gradient-action-primary-hover))] transition-opacity duration-200 ease-out group-disabled:hidden ${showHoverLayer ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} /> : null}
      {isLoading ? <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> : leadingIcon}
      {isLoading ? "Working" : children}
      {isLoading ? null : trailingIcon}
    </button>
  );
}
