import type { ReactNode } from "react";
import { NavigationLink, type NavigationItem } from "@/components/navigation/NavigationLink";

type TopNavigationProps = {
  /** The brand: usually a link to the home page with a logo and a name. */
  brand: ReactNode;
  /** The main destinations. Mark the page the person is on with `current`. */
  items: NavigationItem[];
  /** The one main action, such as a contact button. It is set apart from the links by a divider. */
  action?: ReactNode;
  /** Names the navigation landmark. Give each navigation on a page a different label. */
  label?: string;
  className?: string;
};

/** Navigation for movement between the main areas of a product: the brand, the links and one action, on a frosted surface. */
export function TopNavigation({ brand, items, action, label = "Top navigation", className = "" }: TopNavigationProps) {
  return (
    <header className={`rounded-[var(--radius-md)] border border-[var(--preview-card-border,var(--color-border-default))] bg-[var(--preview-card-surface,var(--color-surface-glass))] [backdrop-filter:var(--preview-card-blur,var(--blur-glass))] px-6 py-4 text-[var(--preview-content,var(--color-content-primary))] ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {brand}
        <nav aria-label={label} className="flex flex-wrap items-center gap-2">
          {items.map((item) => (
            <NavigationLink key={item.href} href={item.href} disabled={item.disabled} aria-current={item.current ? "page" : undefined}>{item.label}</NavigationLink>
          ))}
          {action ? (
            <>
              <span aria-hidden="true" className="mx-2 block h-5 w-px bg-[var(--preview-border,var(--color-border-subtle))]" />
              {action}
            </>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
