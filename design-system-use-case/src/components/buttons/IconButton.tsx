import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";

type IconButtonMode = "default" | "hover" | "focus" | "disabled";

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "aria-label"> & {
  /** The accessible name. An icon-only button has no visible text, so this is required. */
  label: string;
  icon: ReactNode;
  mode?: IconButtonMode;
  /** Forwarded to the button, for example to return focus to it when a popup closes. */
  ref?: Ref<HTMLButtonElement>;
};

/** A 44px icon-only button: close, previous, next, or open a calendar. */
export function IconButton({ label, icon, mode = "default", disabled, className = "", ...props }: IconButtonProps) {
  const modeClass = mode === "hover" ? "bg-[var(--preview-surface-raised,var(--color-surface-raised))]" : mode === "focus" ? "focus-ring" : "";
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled || mode === "disabled"}
      className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full text-[var(--preview-content,var(--color-content-primary))] transition hover:bg-[var(--preview-surface-raised,var(--color-surface-raised))] disabled:cursor-not-allowed disabled:opacity-50 ${modeClass} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}
