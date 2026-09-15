import Link from "next/link";
import type { ComponentProps } from "react";

type LinkVariant = "default" | "current" | "muted" | "inverse";

type NavigationLinkProps = ComponentProps<typeof Link> & {
  variant?: LinkVariant;
};

const variants: Record<LinkVariant, string> = {
  default: "text-[var(--preview-content-muted,var(--color-content-secondary))] hover:text-[var(--preview-content,var(--color-content-primary))]",
  current: "bg-[var(--preview-action,var(--color-surface-inverse))] text-[var(--preview-action-text,var(--color-content-inverse))]",
  muted: "text-[var(--preview-content-muted,var(--color-content-muted))] hover:text-[var(--preview-content,var(--color-content-primary))]",
  inverse: "text-[var(--preview-content-muted,rgba(255,255,255,.7))] hover:bg-[var(--preview-surface-raised,rgba(255,255,255,.1))] hover:text-[var(--preview-content,var(--color-content-inverse))]",
};

export function NavigationLink({ variant = "default", className = "", ...props }: NavigationLinkProps) {
  return <Link className={`block rounded-lg px-3 py-2 text-sm font-semibold transition ${variants[variant]} ${className}`} {...props} />;
}
