import { NavigationLink, type NavigationItem } from "@/components/navigation/NavigationLink";

/** Destinations that belong together, with an optional small heading. */
export type NavigationGroup = { heading?: string; items: NavigationItem[] };

type SideNavigationProps = {
  /** A short mono heading above the links, such as the name of the area. */
  heading?: string;
  /** Names the navigation landmark. Give each navigation on a page a different label. */
  label?: string;
  className?: string;
} & (
  | {
      /** The destinations inside one area. Mark the page the person is on with `current`. */
      items: NavigationItem[];
      groups?: never;
    }
  | {
      /** The destinations split into headed groups, for a longer list. */
      groups: NavigationGroup[];
      items?: never;
    }
);

/** Navigation for movement inside one area of a product, on a frosted card. */
export function SideNavigation({ items, groups, heading, label = "Side navigation", className = "" }: SideNavigationProps) {
  const sections: NavigationGroup[] = groups ?? [{ items: items ?? [] }];
  return (
    <div className={`rounded-[var(--radius-md)] border border-[var(--preview-card-border,var(--color-border-default))] bg-[var(--preview-card-surface,var(--color-surface-glass))] [backdrop-filter:var(--preview-card-blur,var(--blur-glass))] p-6 text-[var(--preview-content,var(--color-content-primary))] ${className}`}>
      {heading ? <p className="eyebrow mb-4">{heading}</p> : null}
      <nav aria-label={label}>
        {sections.map((group, index) => (
          <div key={group.heading ?? index} className={index > 0 ? "mt-6" : ""}>
            {group.heading ? <p className="eyebrow mb-2 px-4">{group.heading}</p> : null}
            <ul className="m-0 list-none space-y-2 p-0">
              {group.items.map((item) => (
                <li key={item.href}>
                  <NavigationLink href={item.href} disabled={item.disabled} aria-current={item.current ? "page" : undefined}>{item.label}</NavigationLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
