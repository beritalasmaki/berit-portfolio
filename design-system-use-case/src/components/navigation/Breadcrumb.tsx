import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: ReactNode; href?: string };

type BreadcrumbProps = {
  items: Crumb[];
  label?: string;
};

export function Breadcrumb({ items, label = "Breadcrumb" }: BreadcrumbProps) {
  const lastIndex = items.length - 1;

  return (
    <nav aria-label={label}>
      <ol className="flex flex-wrap items-center gap-2 text-xs">
        {items.map((item, index) => {
          const isCurrent = index === lastIndex;
          return (
            <li key={`${item.href ?? "current"}-${index}`} className="flex items-center gap-2">
              {isCurrent || !item.href ? (
                <span aria-current={isCurrent ? "page" : undefined} className="font-mono font-medium text-[var(--preview-content,var(--color-content-primary))]">{item.label}</span>
              ) : (
                <Link href={item.href} className="font-mono text-[var(--preview-content-muted,var(--color-content-muted))] underline decoration-[var(--color-border-strong)] underline-offset-4 hover:text-[var(--color-action-accent-dark)] hover:decoration-[var(--color-action-accent)]">{item.label}</Link>
              )}
              {isCurrent ? null : <span aria-hidden="true" className="text-[var(--preview-content-muted,var(--color-content-muted))]">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
