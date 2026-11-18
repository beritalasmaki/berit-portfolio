import Link from "next/link";
import type { ComponentProps } from "react";

type NavigationLinkProps = ComponentProps<typeof Link> & {
  /** A link that cannot be used right now. It is shown as text, not as a link, and is not reachable with Tab. */
  disabled?: boolean;
};

const base = "flex min-h-11 items-center rounded-[var(--radius-pill)] border px-4 text-[15px] font-semibold tracking-[0.01em] transition";
const highlight = "border-[var(--preview-nav-highlight-border,var(--color-border-glass))] bg-[var(--preview-nav-highlight,var(--color-surface-glass-highlight))] shadow-[var(--preview-nav-highlight-shadow,0_4px_16px_rgba(34,34,34,0.08))]";

/**
 * A link to a destination. It has three statuses:
 * default, active (pass aria-current="page" on the link to the current page) and disabled.
 * On a dark surface, set the Dark preview theme on the parent rather than using a separate style.
 */
export function NavigationLink({ disabled = false, className = "", children, ...props }: NavigationLinkProps) {
  if (disabled) {
    return <span aria-disabled="true" className={`${base} cursor-not-allowed border-transparent text-[var(--preview-content,var(--color-content-secondary))] opacity-50 ${className}`}>{children}</span>;
  }
  const current = props["aria-current"];
  const active = current !== undefined && current !== false && current !== "false";
  const status = active
    ? `${highlight} font-bold text-[var(--preview-accent,var(--color-action-accent-dark))]`
    : "border-transparent text-[var(--preview-content-secondary,var(--color-content-secondary))] hover:border-[var(--preview-nav-highlight-border,var(--color-border-glass))] hover:bg-[var(--preview-nav-highlight,var(--color-surface-glass-highlight))] hover:text-[var(--preview-content,var(--color-content-primary))]";
  return <Link className={`${base} ${status} ${className}`} {...props}>{children}</Link>;
}
