import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  interactive?: boolean;
  mode?: "default" | "hover" | "selected" | "disabled";
};

export function Card({ children, interactive = false, mode = "default", className = "", ...props }: CardProps) {
  const modeClass = mode === "hover" ? "-translate-y-1 border-[var(--color-action-accent)]" : mode === "selected" ? "border-[var(--color-action-accent-dark)] bg-[var(--preview-surface-raised,var(--color-surface-raised))] ring-2 ring-[var(--color-action-accent)] ring-offset-2" : mode === "disabled" ? "opacity-50" : interactive ? "hover:-translate-y-1 hover:border-[var(--color-action-accent)]" : "";
  return <article className={`rounded-2xl border border-[var(--preview-border,var(--color-border-default))] bg-[var(--preview-surface,var(--color-surface-canvas))] text-[var(--preview-content,var(--color-content-primary))] transition ${modeClass} ${className}`} {...props}>{children}</article>;
}

export function CardHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`flex items-start justify-between gap-4 p-6 pb-0 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`border-t border-[var(--color-border-default)] px-6 py-4 ${className}`}>{children}</div>;
}
