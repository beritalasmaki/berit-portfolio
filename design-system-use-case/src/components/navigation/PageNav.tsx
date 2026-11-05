"use client";

import { useEffect, useState } from "react";

export type PageNavGroup = { heading: string; items: { id: string; label: string }[] };

/**
 * A sticky "on this page" list for the right-hand side of a documentation page.
 * Each group has a heading and links to sections on the page. The section that is
 * being read is marked with aria-current="location". It is hidden on narrow screens,
 * where the page is short enough to scroll.
 */
export function PageNav({ groups }: { groups: PageNavGroup[] }) {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const ids = groups.flatMap((group) => group.items.map((item) => item.id));
    const sections = ids.map((id) => document.getElementById(id)).filter((element): element is HTMLElement => Boolean(element));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setCurrent(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [groups]);

  return (
    <nav aria-label="On this page" className="hidden xl:block">
      <div className="sticky top-28 max-h-[calc(100vh-8rem)] space-y-6 overflow-y-auto pb-6">
        {groups.map((group) => (
          <div key={group.heading}>
            <p className="eyebrow mb-2 border-b border-[var(--color-border-default)] pb-2">{group.heading}</p>
            <ul className="m-0 list-none space-y-1 p-0">
              {group.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={current === item.id ? "location" : undefined}
                    className={`block rounded-lg px-2 py-1.5 text-sm ${current === item.id ? "font-semibold text-[var(--color-content-primary)] bg-[var(--color-surface-subtle)]" : "text-[var(--color-content-secondary)] hover:bg-[var(--color-surface-subtle)]"}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
