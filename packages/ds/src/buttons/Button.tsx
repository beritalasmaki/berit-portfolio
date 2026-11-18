import type { ButtonHTMLAttributes, ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

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
    "group relative isolate overflow-hidden border border-[var(--preview-action-border,transparent)] [background-clip:padding-box] bg-[image:var(--preview-action-gradient,var(--gradient-action-primary))] text-[var(--preview-action-text,var(--color-content-inverse))] shadow-[var(--preview-action-shadow,none)] hover:text-[var(--preview-action-hover-text,var(--color-content-primary))] hover:shadow-none",
  secondary: "border-2 border-[var(--preview-content,var(--color-content-primary))] text-[var(--preview-content,var(--color-content-primary))] hover:border-[var(--preview-accent,var(--color-action-accent-dark))] hover:bg-[var(--color-action-accent-subtle)] hover:text-[var(--preview-accent,var(--color-action-accent-dark))]",
  tertiary: "text-[var(--preview-content,var(--color-content-primary))] underline decoration-[var(--color-action-accent)] decoration-1 underline-offset-8 hover:text-[var(--preview-accent,var(--color-action-accent-dark))] hover:decoration-2",
};

const base = "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-pill)] px-6 py-3 text-[15px] font-semibold tracking-[0.01em] whitespace-nowrap transition";

const hoverMode = "!text-[var(--preview-action-hover-text,var(--color-content-primary))] !shadow-none";
const hoverModeOther: Record<"secondary" | "tertiary", string> = {
  secondary: "!border-[var(--preview-accent,var(--color-action-accent-dark))] !bg-[var(--color-action-accent-subtle)] !text-[var(--preview-accent,var(--color-action-accent-dark))]",
  tertiary: "!text-[var(--preview-accent,var(--color-action-accent-dark))] !decoration-2",
};

export function Button({ variant = "primary", mode = "default", disabled, children, leadingIcon, trailingIcon, className = "", ...props }: ButtonProps) {
  const isLoading = mode === "loading";
  const isDisabled = disabled || mode === "disabled" || isLoading;
  const showHoverLayer = mode === "hover" || mode === "active";
  const modeClass = mode === "hover" ? (variant === "primary" ? `-translate-y-px ${hoverMode}` : `-translate-y-px ${hoverModeOther[variant]}`) : mode === "active" ? (variant === "primary" ? `!scale-[.98] ${hoverMode}` : `!scale-[.98] ${hoverModeOther[variant]}`) : mode === "focus" ? "focus-ring" : "";
  return (
    <button
      type="button"
      aria-busy={isLoading || undefined}
      disabled={isDisabled}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] px-4 py-3 text-sm font-bold transition ${variants[variant]} ${modeClass} disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {variant === "primary" ? <span aria-hidden="true" className={`pointer-events-none absolute -inset-px -z-10 bg-[image:var(--preview-action-gradient-hover,var(--gradient-action-primary-hover))] transition-opacity duration-200 ease-out group-disabled:hidden ${showHoverLayer ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} /> : null}
      {isLoading ? <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> : leadingIcon}
      {isLoading ? "Working" : children}
      {isLoading ? null : trailingIcon}
    </button>
  );
}

type ButtonLinkOwnProps = {
  variant?: ButtonVariant;
  /** Decorative icon before the label. */
  leadingIcon?: ReactNode;
  /** Decorative icon after the label, for example a right arrow. */
  trailingIcon?: ReactNode;
  children: ReactNode;
  className?: string;
};

type ButtonLinkProps<T extends ElementType> = ButtonLinkOwnProps & { as?: T } & Omit<ComponentPropsWithoutRef<T>, keyof ButtonLinkOwnProps | "as">;

/**
 * A link that looks like a button, for a destination rather than an action. It renders an `a` by default.
 * Pass `as` to render a framework link instead, for example `as={Link}` with Next.js, so the button and the router agree.
 */
export function ButtonLink<T extends ElementType = "a">({ as, variant = "primary", leadingIcon, trailingIcon, children, className = "", ...props }: ButtonLinkProps<T>) {
  const Component: ElementType = as ?? "a";
  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {variant === "primary" ? <span aria-hidden="true" className="pointer-events-none absolute -inset-px -z-10 bg-[image:var(--preview-action-gradient-hover,var(--gradient-action-primary-hover))] opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100" /> : null}
      {leadingIcon}
      {children}
      {trailingIcon}
    </Component>
  );
}
