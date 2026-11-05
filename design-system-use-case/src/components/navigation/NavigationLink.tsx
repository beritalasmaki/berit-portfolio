import Link from "next/link";
import type { ComponentProps } from "react";

type NavigationLinkProps = ComponentProps<typeof Link> & {
  /** A link that cannot be used right now. It is shown as text, not as a link, and is not reachable with Tab. */
  disabled?: boolean;
};

const base = "block rounded-lg px-3 py-2 text-sm font-semibold transition";

/**
 * A link to a destination. It has three statuses:
 * default, active (pass aria-current="page" on the link to the current page) and disabled.
 * On a dark surface, set the Dark preview theme on the parent rather than using a separate style.
 */
export function NavigationLink({ disabled = false, className = "", children, ...props }: NavigationLinkProps) {
  if (disabled) {
    return <span aria-disabled="true" className={`${base} cursor-not-allowed text-[var(--preview-content,var(--color-content-secondary))] opacity-50 ${className}`}>{children}</span>;
  }
  const active = props["aria-current"] === "page" || props["aria-current"] === true;
  const status = active
    ? "bg-[image:var(--preview-action-gradient,var(--gradient-action-primary))] text-[var(--preview-action-text,var(--color-content-inverse))]"
    : "text-[var(--preview-content,var(--color-content-secondary))] hover:bg-[var(--preview-surface-raised,var(--color-surface-raised))] hover:text-[var(--preview-content,var(--color-content-primary))]";
  return <Link className={`${base} ${status} ${className}`} {...props}>{children}</Link>;
}
