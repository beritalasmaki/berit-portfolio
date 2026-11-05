"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { PageNav, type PageNavGroup } from "@/components/navigation/PageNav";
import { SiteHeader } from "@/components/navigation/SiteHeader";

const componentGroups = [
  { level: "Atoms", links: [
    { href: "/components/atoms/icons", label: "Icons" },
    { href: "/components/atoms/buttons", label: "Buttons" },
    { href: "/components/atoms/form-controls", label: "Form controls" },
  ] },
  { level: "Molecules", links: [
    { href: "/components/molecules/form-fields", label: "Form fields" },
    { href: "/components/molecules/navigation-parts", label: "Links, tabs and breadcrumbs" },
    { href: "/components/molecules/date-picker", label: "Date picker" },
    { href: "/components/molecules/notifications", label: "Notifications" },
    { href: "/components/molecules/form-progress", label: "Form progress and actions" },
  ] },
  { level: "Organisms", links: [
    { href: "/components/organisms/navigation", label: "Navigation" },
    { href: "/components/organisms/cards", label: "Cards" },
    { href: "/components/organisms/table", label: "Table" },
    { href: "/components/organisms/forms", label: "Multi-step form" },
  ] },
];
const componentLinks = componentGroups.flatMap((group) => group.links);

const navItem = (active: boolean) => `block rounded-lg px-3 py-2 text-sm font-semibold ${active ? "bg-[var(--color-surface-inverse)] text-white" : "text-[var(--color-content-secondary)] hover:bg-[var(--color-surface-subtle)]"}`;

export function DocsShell({ children, active, topLink = { href: "/", label: "Back to landing page" }, pageNav }: { children: ReactNode; active?: string; topLink?: { href: string; label: string }; pageNav?: PageNavGroup[] }) {
  const foundationRouteActive = active === "Foundations" || ["Colors", "Spacing", "Typography", "Shape & elevation"].includes(active ?? "");
  const componentRouteActive = active === "Components" || componentLinks.some((item) => item.label === active);
  const [foundationsOpen, setFoundationsOpen] = useState(foundationRouteActive);
  const [componentsOpen, setComponentsOpen] = useState(componentRouteActive);
  const showFoundations = foundationsOpen || foundationRouteActive;
  const showComponents = componentsOpen || componentRouteActive;

  return (
    <div className="min-h-screen bg-[var(--color-surface-canvas)]">
      <SiteHeader actionHref={topLink.href} actionLabel={topLink.label} actionIcon={topLink.label === "Back to landing page" ? "arrow_back" : "arrow_forward"} />
      <div className="mx-auto grid max-w-[1480px] lg:grid-cols-[240px_1fr]">
        <aside className="border-b border-[var(--color-border-default)] px-6 py-6 lg:min-h-[calc(100vh-81px)] lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
          <nav aria-label="Design system documentation">
            <p className="eyebrow mb-4">Documentation</p>
            <div className="flex gap-2 overflow-x-auto lg:block lg:space-y-1">
              <Link href="/getting-started" className={navItem(active === "Getting started")}>Getting started</Link>
              <div className="border-l border-[var(--color-border-default)] pl-3">
                <Link href="/version-history" className={navItem(active === "Version history")}>Version history</Link>
              </div>
              <Link href="/foundations" onClick={() => setFoundationsOpen(true)} className={`${navItem(active === "Foundations")} flex items-center justify-between gap-3`}><span>Foundations</span><span aria-hidden="true" className={`material-symbols-outlined text-base leading-none transition-transform ${showFoundations ? "rotate-180" : ""}`}>expand_more</span></Link>
              {showFoundations ? <div className="mt-2 hidden border-l border-[var(--color-border-default)] pl-3 lg:block">
                <Link href="/foundations/colors" className={navItem(active === "Colors")}>Colors</Link>
                <Link href="/foundations/spacing" className={navItem(active === "Spacing")}>Spacing</Link>
                <Link href="/foundations/typography" className={navItem(active === "Typography")}>Typography</Link>
                <Link href="/foundations/shape" className={navItem(active === "Shape & elevation")}>Shape & elevation</Link>
              </div> : null}
              <Link href="/components" onClick={() => setComponentsOpen(true)} className={`${navItem(active === "Components")} flex items-center justify-between gap-3`}><span>Components</span><span aria-hidden="true" className={`material-symbols-outlined text-base leading-none transition-transform ${showComponents ? "rotate-180" : ""}`}>expand_more</span></Link>
            </div>
            {showComponents ? <div className="mt-2 hidden border-l border-[var(--color-border-default)] pl-3 lg:block">
              {componentGroups.map((group) => <div key={group.level} className="mb-3"><p className="eyebrow mb-1 px-3 pt-2">{group.level}</p>{group.links.map((item) => <Link key={item.href} href={item.href} aria-current={active === item.label ? "page" : undefined} className={navItem(active === item.label)}>{item.label}</Link>)}</div>)}
            </div> : null}
            <p className="eyebrow mb-4 mt-10 hidden lg:block">Pages</p>
            <Link href="/examples/project-management" className="mt-2 hidden rounded-lg px-3 py-2 text-sm font-semibold text-[var(--color-content-secondary)] hover:bg-[var(--color-surface-subtle)] lg:block">Project management</Link>
            <Link href="/examples/analytics" className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-[var(--color-content-secondary)] hover:bg-[var(--color-surface-subtle)] lg:block">Analytics</Link>
          </nav>
        </aside>
        <main id="main-content" className="min-w-0 px-6 py-10 lg:px-12 lg:py-14">{pageNav ? <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_14rem] xl:gap-12"><div className="min-w-0">{children}</div><PageNav groups={pageNav} /></div> : children}</main>
      </div>
    </div>
  );
}
