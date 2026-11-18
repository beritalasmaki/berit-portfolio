import type { HTMLAttributes } from "react";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: string;
};

/** A static label for a category, topic or skill. A tag is not interactive: use a button or link for anything people can press. */
export function Tag({ children, className = "", ...props }: TagProps) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-[var(--radius-pill)] border border-[var(--preview-border,var(--color-border-subtle))] bg-[var(--preview-tag-surface,var(--color-surface-glass))] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[var(--preview-content,var(--color-content-primary))] ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

/** A wrapping row of tags, as a list so assistive technology announces how many there are. */
export function TagList({ label, children, className = "" }: { label: string; children: string[]; className?: string }) {
  return (
    <ul aria-label={label} className={`m-0 flex list-none flex-wrap gap-2 p-0 ${className}`}>
      {children.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}
