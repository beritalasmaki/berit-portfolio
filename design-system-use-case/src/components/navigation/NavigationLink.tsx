import Link from "next/link";
import type { ComponentProps } from "react";

type LinkVariant = "default" | "current" | "muted" | "inverse";

type NavigationLinkProps = ComponentProps<typeof Link> & {
  variant?: LinkVariant;
};

const variants: Record<LinkVariant, string> = {
  default: "font-semibold text-[var(--preview-content,var(--color-content-secondary))] hover:text-[var(--color-action-accent-dark)]",
  current: "font-semibold bg-[var(--preview-action,var(--color-surface-inverse))] text-[var(--preview-action-text,var(--color-content-inverse))]",
  muted: "font-normal text-[var(--preview-content-muted,var(--color-content-muted))] hover:text-[var(--preview-content,var(--color-content-primary))] hover:underline hover:underline-offset-4",
  inverse: "font-semibold text-[var(--color-content-muted-dark)] hover:bg-[var(--color-surface-raised-dark)] hover:text-[var(--color-content-inverse)]",
};

export function NavigationLink({ variant = "default", className = "", ...props }: NavigationLinkProps) {
  return <Link className={`block rounded-lg px-3 py-2 text-sm transition ${variants[variant]} ${className}`} {...props} />;
}
