"use client";

import { NavigationLink } from "@/components/navigation/NavigationLink";
import { usePathname } from "next/navigation";
import { useRef, useState, type ReactNode } from "react";
import { PageNav, type PageNavGroup } from "@/components/navigation/PageNav";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { siteSections } from "@/components/navigation/siteMap";

type DocsShellProps = {
  children: ReactNode;
  /** Kept so existing pages do not need to change. The open section and current page are read from the address. */
  active?: string;
  topLink?: { href: string; label: string };
  pageNav?: PageNavGroup[];
};

/**
 * The documentation frame: a top navigation with the main sections, a left navigation with the pages of the
 * open section, and an optional "on this page" list on the right. On small screens one Menu button opens
 * both the sections and the pages of the open section.
 */
export function DocsShell({ children, topLink = { href: "/", label: "Back to landing page" }, pageNav }: DocsShellProps) {
  const pathname = usePathname();
  const section = siteSections.find((item) => item.matches(pathname)) ?? siteSections[0];
  // The menu is open for one page only, so it closes by itself when a link in it is followed.
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const menuButton = useRef<HTMLButtonElement>(null);

  const pageLinks = (
    <nav aria-label={`${section.label} pages`}>
      <p className="eyebrow mb-4">{section.label}</p>
      {section.groups.map((group, index) => (
        <div key={group.heading ?? index} className={group.heading ? "mt-6" : ""}>
          {group.heading ? <p className="eyebrow mb-1 px-3">{group.heading}</p> : null}
          <ul className="m-0 list-none space-y-1 p-0">
            {group.links.map((link) => <li key={link.href}><NavigationLink href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</NavigationLink></li>)}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-[var(--color-surface-canvas)]">
      <SiteHeader actionHref={topLink.href} actionLabel={topLink.label} actionIcon={topLink.label === "Back to landing page" ? "arrow_back" : "arrow_forward"} />

      <div className="border-b border-[var(--color-border-default)] px-6 lg:px-10">
        <nav aria-label="Main sections" className="mx-auto hidden max-w-[var(--width-page)] gap-2 py-2 lg:flex">
          {siteSections.map((item) => <NavigationLink key={item.id} href={item.href} aria-current={item.id === section.id ? "true" : undefined}>{item.label}</NavigationLink>)}
        </nav>
        <div className="flex items-center justify-between py-2 lg:hidden">
          <p className="m-0 text-sm font-semibold">{section.label}</p>
          <button
            ref={menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="docs-menu"
            onClick={() => setMenuPath(menuOpen ? null : pathname)}
            onKeyDown={(event) => { if (event.key === "Escape") { setMenuPath(null); menuButton.current?.focus(); } }}
            className="inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-border-subtle)] px-6 text-[15px] font-semibold"
          >
            <span aria-hidden="true" className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>Menu
          </button>
        </div>
        {menuOpen ? (
          <div id="docs-menu" className="max-h-[70vh] space-y-6 overflow-y-auto pb-6 lg:hidden">
            <nav aria-label="Main sections (menu)"><p className="eyebrow mb-2">Sections</p><ul className="m-0 list-none space-y-1 p-0">{siteSections.map((item) => <li key={item.id}><NavigationLink href={item.href} aria-current={item.id === section.id ? "true" : undefined}>{item.label}</NavigationLink></li>)}</ul></nav>
            {pageLinks}
          </div>
        ) : null}
      </div>

      <div className="mx-auto grid max-w-[var(--width-page)] lg:grid-cols-[240px_1fr]">
        <aside className="hidden px-6 py-6 lg:block lg:min-h-[calc(100vh-130px)] lg:border-r lg:border-[var(--color-border-default)] lg:px-8 lg:py-10">{pageLinks}</aside>
        <main id="main-content" className="min-w-0 px-6 py-10 lg:px-12 lg:py-14">{pageNav ? <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_14rem] xl:gap-12"><div className="min-w-0">{children}</div><PageNav groups={pageNav} /></div> : children}</main>
      </div>
    </div>
  );
}
