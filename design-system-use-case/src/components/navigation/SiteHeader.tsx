import Link from "next/link";
import type { ReactNode } from "react";
import { BrandMark } from "@/components/navigation/BrandMark";

type SiteHeaderProps = {
  actionHref: string;
  actionLabel: string;
  actionIcon: "arrow_back" | "arrow_forward";
  children?: ReactNode;
};

export function SiteHeader({ actionHref, actionLabel, actionIcon, children }: SiteHeaderProps) {
  return (
    <header className="border-b border-[var(--color-border-default)] px-6 py-5 lg:px-10">
      <div className="mx-auto flex max-w-[var(--width-page)] items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3 font-bold" aria-label="DS by Berit home">
          <BrandMark />
          <span>DS by Berit <span className="hidden font-normal text-[var(--color-content-muted)] sm:inline">/ Design System</span></span>
        </Link>
        {children}
        <nav aria-label="Primary" className="flex items-center text-sm font-semibold">
          <Link href={actionHref} className="inline-flex items-center rounded-full bg-[var(--color-action-primary)] px-4 py-2 text-white hover:bg-[var(--color-action-accent)] hover:text-[var(--color-content-primary)]">
            {actionIcon === "arrow_back" ? <span aria-hidden="true" className="material-symbols-outlined mr-1">arrow_back</span> : null}
            {actionLabel}
            {actionIcon === "arrow_forward" ? <span aria-hidden="true" className="material-symbols-outlined ml-1">arrow_forward</span> : null}
          </Link>
        </nav>
      </div>
    </header>
  );
}
