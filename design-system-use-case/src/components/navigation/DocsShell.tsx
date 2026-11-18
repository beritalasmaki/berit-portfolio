"use client";

import { usePathname } from "next/navigation";
import { useRef, useState, type ReactNode } from "react";
import { PageNav, type PageNavGroup } from "@/components/navigation/PageNav";
import { SideNavigation, type NavigationGroup } from "@/components/navigation/SideNavigation";
import { SiteBrand, SiteHeader, SiteHeaderAction } from "@/components/navigation/SiteHeader";
import { TopNavigation } from "@/components/navigation/TopNavigation";
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

  const sectionItems = siteSections.map((item) => ({ href: item.href, label: item.label, current: item.id === section.id }));
  const pageGroups: NavigationGroup[] = section.groups.map((group) => ({ heading: group.heading, items: group.links.map((link) => ({ href: link.href, label: link.label, current: pathname === link.href })) }));
  const actionIcon = topLink.label === "Back to landing page" ? "arrow_back" : "arrow_forward";
  const pageLinks = <SideNavigation heading={section.label} label={`${section.label} pages`} groups={pageGroups} />;

  return (
    <div className="min-h-screen bg-[var(--color-surface-canvas)]">
      <div className="hidden px-6 pt-4 lg:block lg:px-10">
        <TopNavigation className="mx-auto max-w-[var(--width-page)]" label="Main sections" brand={<SiteBrand />} items={sectionItems} action={<SiteHeaderAction href={topLink.href} label={topLink.label} icon={actionIcon} />} />
      </div>
      <div className="lg:hidden"><SiteHeader actionHref={topLink.href} actionLabel={topLink.label} actionIcon={actionIcon} /></div>

      <div className="border-b border-[var(--color-border-default)] px-6 lg:hidden">
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
            <SideNavigation heading="Sections" label="Main sections (menu)" items={sectionItems} />
            {pageLinks}
          </div>
        ) : null}
      </div>

      <div className="mx-auto grid max-w-[var(--width-page)] lg:grid-cols-[304px_1fr]">
        <aside className="hidden px-6 py-6 lg:block lg:min-h-[calc(100vh-130px)] lg:border-r lg:border-[var(--color-border-default)] lg:px-4 lg:py-10">{pageLinks}</aside>
        <main id="main-content" className="min-w-0 px-6 py-10 lg:px-12 lg:py-14">{pageNav ? <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_14rem] xl:gap-12"><div className="min-w-0">{children}</div><PageNav groups={pageNav} /></div> : children}</main>
      </div>
    </div>
  );
}
