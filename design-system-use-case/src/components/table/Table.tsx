import type { HTMLAttributes, ReactNode, ThHTMLAttributes, TdHTMLAttributes } from "react";

export function Table({ className = "", ...props }: HTMLAttributes<HTMLTableElement>) {
  return <table className={`w-full border-collapse text-left text-sm text-[var(--preview-content,var(--color-content-primary))] ${className}`} {...props} />;
}

export function TableHead({ className = "", ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={`border-b border-[var(--preview-border,var(--color-border-default))] ${className}`} {...props} />;
}

export function TableBody({ className = "", ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={className} {...props} />;
}

export function TableRow({ selected = false, className = "", ...props }: HTMLAttributes<HTMLTableRowElement> & { selected?: boolean }) {
  return <tr className={`border-b border-[var(--preview-border,var(--color-border-default))] last:border-0 ${selected ? "bg-[var(--preview-surface-raised,var(--color-surface-raised))]" : ""} ${className}`} {...props} />;
}

export function TableColumnHeader({ sortable = false, sortDirection, className = "", children, ...props }: ThHTMLAttributes<HTMLTableCellElement> & { sortable?: boolean; sortDirection?: "ascending" | "descending" }) {
  return <th scope="col" aria-sort={sortable ? sortDirection ?? "none" : undefined} className={`px-4 py-3 text-xs uppercase tracking-[0.08em] text-[var(--color-content-muted)] ${className}`} {...props}>{children}</th>;
}

type TableCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
  /** Decorative only. An icon that carries meaning needs text beside it. */
  icon?: ReactNode;
  iconPosition?: "leading" | "trailing";
  subtitle?: ReactNode;
};

export function TableCell({ icon, iconPosition = "leading", subtitle, className = "", children, ...props }: TableCellProps) {
  if (!icon && !subtitle) {
    return <td className={`px-4 py-4 ${className}`} {...props}>{children}</td>;
  }

  const iconMark = icon ? <span aria-hidden="true" className="flex shrink-0 items-center text-[var(--preview-content-muted,var(--color-content-muted))]">{icon}</span> : null;

  return (
    <td className={`px-4 py-4 ${className}`} {...props}>
      <span className="flex items-center gap-3">
        {iconPosition === "leading" ? iconMark : null}
        <span className="min-w-0 flex-1">
          <span className="block">{children}</span>
          {subtitle ? <span className="block text-xs font-normal text-[var(--preview-content-muted,var(--color-content-muted))]">{subtitle}</span> : null}
        </span>
        {iconPosition === "trailing" ? iconMark : null}
      </span>
    </td>
  );
}
