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
    <header className="glass-bar px-6 py-4 lg:px-10">
      <div className="mx-auto flex max-w-[var(--width-page)] items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3 font-bold" aria-label="DS by Berit home">
          <BrandMark />
          <span>DS by Berit <span className="hidden font-normal text-[var(--color-content-muted)] sm:inline">/ Design System</span></span>
        </Link>
        {children}
        <nav aria-label="Primary" className="flex items-center font-semibold">
          <Link href={actionHref} className="inline-flex min-h-11 items-center rounded-[var(--radius-pill)] bg-[var(--color-action-primary)] px-6 text-[15px] tracking-[0.01em] text-white transition hover:-translate-y-px hover:bg-[var(--color-surface-raised-dark)]">
            {actionIcon === "arrow_back" ? <span aria-hidden="true" className="material-symbols-outlined mr-1">arrow_back</span> : null}
            {actionLabel}
            {actionIcon === "arrow_forward" ? <span aria-hidden="true" className="material-symbols-outlined ml-1">arrow_forward</span> : null}
          </Link>
        </nav>
      </div>
    </header>
  );
}
