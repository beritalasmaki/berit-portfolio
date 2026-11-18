import { NavigationLink, type NavigationItem } from "@/components/navigation/NavigationLink";

type SideNavigationProps = {
  /** The destinations inside one area. Mark the page the person is on with `current`. */
  items: NavigationItem[];
  /** A short mono heading above the links, such as the name of the area. */
  heading?: string;
  /** Names the navigation landmark. Give each navigation on a page a different label. */
  label?: string;
  className?: string;
};

/** Navigation for movement inside one area of a product, on a frosted card. */
export function SideNavigation({ items, heading, label = "Side navigation", className = "" }: SideNavigationProps) {
  return (
    <div className={`rounded-[var(--radius-md)] border border-[var(--preview-card-border,var(--color-border-default))] bg-[var(--preview-card-surface,var(--color-surface-glass))] [backdrop-filter:var(--preview-card-blur,var(--blur-glass))] p-6 text-[var(--preview-content,var(--color-content-primary))] ${className}`}>
      {heading ? <p className="eyebrow mb-4">{heading}</p> : null}
      <nav aria-label={label}>
        <ul className="m-0 list-none space-y-2 p-0">
          {items.map((item) => (
            <li key={item.href}>
              <NavigationLink href={item.href} disabled={item.disabled} aria-current={item.current ? "page" : undefined}>{item.label}</NavigationLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
