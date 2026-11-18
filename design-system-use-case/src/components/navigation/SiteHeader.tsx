import Link from "next/link";
import type { ReactNode } from "react";
import { BrandMark } from "@/components/navigation/BrandMark";

type SiteHeaderProps = {
  actionHref: string;
  actionLabel: string;
  actionIcon: "arrow_back" | "arrow_forward";
  children?: ReactNode;
};

/** The logo and name of the site, linking to the home page. */
export function SiteBrand() {
  return (
    <Link href="/" className="flex items-center gap-3 whitespace-nowrap font-bold" aria-label="DS by Berit home">
      <BrandMark />
      <span>DS by Berit <span className="hidden font-normal text-[var(--color-content-muted)] sm:inline">/ Design System</span></span>
    </Link>
  );
}

/** The round ink link at the end of the header, with an arrow in the direction it leads. */
export function SiteHeaderAction({ href, label, icon }: { href: string; label: string; icon: "arrow_back" | "arrow_forward" }) {
  return (
    <Link href={href} className="inline-flex min-h-11 items-center rounded-[var(--radius-pill)] bg-[var(--color-action-primary)] px-4 text-sm sm:px-6 sm:text-[15px] leading-tight font-semibold tracking-[0.01em] text-white transition hover:-translate-y-px hover:bg-[var(--color-surface-raised-dark)]">
      {icon === "arrow_back" ? <span aria-hidden="true" className="material-symbols-outlined mr-1">arrow_back</span> : null}
      {label}
      {icon === "arrow_forward" ? <span aria-hidden="true" className="material-symbols-outlined ml-1">arrow_forward</span> : null}
    </Link>
  );
}

export function SiteHeader({ actionHref, actionLabel, actionIcon, children }: SiteHeaderProps) {
  return (
    <header className="glass-bar px-6 py-4 lg:px-10">
      <div className="mx-auto flex max-w-[var(--width-page)] items-center justify-between gap-5">
        <SiteBrand />
        {children}
        <nav aria-label="Primary" className="flex items-center">
          <SiteHeaderAction href={actionHref} label={actionLabel} icon={actionIcon} />
        </nav>
      </div>
    </header>
  );
}
