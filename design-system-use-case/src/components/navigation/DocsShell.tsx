"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, type ReactNode } from "react";
import { PageNav, type PageNavGroup } from "@/components/navigation/PageNav";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { siteSections } from "@/components/navigation/siteMap";

const itemClass = (current: boolean) => `block rounded-lg px-3 py-2 text-sm font-semibold ${current ? "bg-[var(--color-surface-inverse)] text-white" : "text-[var(--color-content-secondary)] hover:bg-[var(--color-surface-subtle)]"}`;
const topClass = (current: boolean) => `inline-flex min-h-11 items-center border-b-2 px-3 text-sm font-semibold ${current ? "border-[var(--color-action-accent)] text-[var(--color-content-primary)]" : "border-transparent text-[var(--color-content-secondary)] hover:text-[var(--color-content-primary)]"}`;

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
            {group.links.map((link) => <li key={link.href}><Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={itemClass(pathname === link.href)}>{link.label}</Link></li>)}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-[var(--color-surface-canvas)]">
      <SiteHeader actionHref={topLink.href} actionLabel={topLink.label} actionIcon={topLink.label === "Back to landing page" ? "arrow_back" : "arrow_forward"} />

      <div className="border-b border-[var(--color-border-default)] px-6 lg:px-10">
        <nav aria-label="Main sections" className="mx-auto hidden max-w-[var(--width-page)] gap-2 lg:flex">
          {siteSections.map((item) => <Link key={item.id} href={item.href} aria-current={item.id === section.id ? "true" : undefined} className={topClass(item.id === section.id)}>{item.label}</Link>)}
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
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-4 text-sm font-semibold"
          >
            <span aria-hidden="true" className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>Menu
          </button>
        </div>
        {menuOpen ? (
          <div id="docs-menu" className="max-h-[70vh] space-y-6 overflow-y-auto pb-6 lg:hidden">
            <nav aria-label="Main sections (menu)"><p className="eyebrow mb-2">Sections</p><ul className="m-0 list-none space-y-1 p-0">{siteSections.map((item) => <li key={item.id}><Link href={item.href} aria-current={item.id === section.id ? "true" : undefined} className={itemClass(item.id === section.id)}>{item.label}</Link></li>)}</ul></nav>
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
