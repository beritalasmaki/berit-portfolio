import type { ReactNode } from "react";

/** Documentation only: a labelled placeholder that stands for content in a template wireframe. */
export function TemplateRegion({ label, hint, className = "", children }: { label: string; hint?: string; className?: string; children?: ReactNode }) {
  return (
    <div className={`flex flex-col justify-center gap-1 rounded-xl border border-dashed border-[var(--preview-border,var(--color-border-strong))] bg-[var(--preview-surface-raised,var(--color-surface-subtle))] p-4 ${className}`}>
      <span className="token-name" style={{ color: "var(--preview-content, var(--color-content-primary))" }}>{label}</span>
      {hint ? <span className="text-xs text-[var(--preview-content-muted,var(--color-content-muted))]">{hint}</span> : null}
      {children}
    </div>
  );
}
