"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import Logo from "./Logo";
import { AboutIcon, ArrowLeftIcon, ArrowRightIcon, CaseStudiesIcon, ProcessIcon } from "./icons";
import { primaryNav, site } from "@/data/site";

type HeaderProps = {
  /**
   * When set, the page-links slot is replaced with a single "← Back to
   * work" link (case-study page pattern) instead of the primary nav.
   */
  backHref?: string;
  backLabel?: string;
  /** Plays the logo's draw-on entrance, then leads into the hero's own
   * sequence. Only the homepage sets this — case-study pages have no
   * hero to hand off to, so their header logo just shows finished. */
  animateLogo?: boolean;
};

// Brand marks — used both standalone (icon-only header buttons) and next
// to a text label (mobile nav pills), so they carry no size of their own;
// aria-hidden either way, since the accessible name comes from the
// wrapping link's aria-label/text. currentColor fill means they pick up
// whatever text color the wrapping element is set to, including on
// hover/focus.
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="w-4 h-4 shrink-0" fill="currentColor">
      <path d="M13.5 0h-11C1.12 0 0 1.12 0 2.5v11C0 14.88 1.12 16 2.5 16h11c1.38 0 2.5-1.12 2.5-2.5v-11C16 1.12 14.88 0 13.5 0zM4.94 13.44H2.4V5.98h2.54v7.46zM3.67 4.94c-.81 0-1.47-.66-1.47-1.47 0-.81.66-1.47 1.47-1.47.81 0 1.47.66 1.47 1.47 0 .81-.65 1.47-1.47 1.47zM13.6 13.44h-2.54V9.83c0-.86-.02-1.97-1.2-1.97-1.2 0-1.39.94-1.39 1.91v3.67H6.14V5.98h2.44v1.02h.03c.34-.64 1.17-1.32 2.4-1.32 2.57 0 3.05 1.69 3.05 3.89v3.87z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="w-4 h-4 shrink-0" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

/**
 * Icon-only header link (desktop nav's GitHub/LinkedIn) with a custom
 * tooltip rather than the native `title` attribute: `title` only ever
 * shows on mouse hover, after a browser-controlled delay, with
 * inconsistent screen-reader support — it can't give keyboard users the
 * same hover/focus parity every other interactive element on this site
 * gets. The tooltip here is `aria-hidden` and purely visual; the
 * accessible name comes from the link's own `aria-label`, so a screen
 * reader announces it correctly whether or not the tooltip is even
 * rendered. On touch, there's no hover or focus-within to trigger it —
 * a tap just navigates, exactly as a plain link would.
 */
function IconLink({
  href,
  label,
  tooltip,
  icon,
}: {
  href: string;
  label: string;
  tooltip: string;
  icon: ReactNode;
}) {
  return (
    <span className="relative group/tip">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className="glass-button inline-flex items-center justify-center w-11 h-11 rounded-pill text-body hover:text-ink focus-visible:text-ink"
      >
        {icon}
      </a>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full z-30 mt-2 -translate-x-1/2 whitespace-nowrap rounded-chrome bg-ink px-2 py-1 text-[12px] font-medium text-white opacity-0 transition-opacity duration-150 ease-out group-hover/tip:opacity-100 group-focus-within/tip:opacity-100"
      >
        {tooltip}
      </span>
    </span>
  );
}

// Theme icon for each primary nav link, keyed by its href.
const NAV_ICONS: Record<(typeof primaryNav)[number]["href"], typeof AboutIcon> = {
  "/#case-studies": CaseStudiesIcon,
  "/#about": AboutIcon,
  "/#process": ProcessIcon,
};

// The section in view, for the nav's current-link state: the last of the
// nav's sections whose top has passed a line 35% down the viewport, as long
// as its bottom hasn't (so nothing is current over the hero or the contact
// block).
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!enabled) return;
    const ids = primaryNav.map((item) => item.href.split("#")[1]);
    let frame = 0;
    function update() {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const id of ids) {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        if (rect && rect.top <= line && rect.bottom > line) current = id;
      }
      setActive(current);
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);
  return active;
}

export default function Header({ backHref, backLabel = "Back to work", animateLogo = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(!backHref);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile panel on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // A resize past the mobile breakpoint should reset the disclosure so it
  // doesn't stay "open" (and hidden by CSS) once desktop layout returns.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    function onChange() {
      if (query.matches) setOpen(false);
    }
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Frosted header that slims down as the page scrolls. Rather than flipping
  // between two states, it follows the scroll position: `--shrink` runs
  // 0 → 1 over the first SHRINK_RANGE px, eased with a smoothstep curve so
  // the change starts and lands softly, and the row and logo heights are
  // interpolated from it in CSS (`.site-header-row`, globals.css). A short
  // height transition smooths out the coarse steps of a mouse wheel.
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const SHRINK_RANGE = 160;
    let frame = 0;
    function update() {
      frame = 0;
      const t = Math.min(Math.max(window.scrollY / SHRINK_RANGE, 0), 1);
      const eased = t * t * (3 - 2 * t);
      headerRef.current?.style.setProperty("--shrink", eased.toFixed(3));
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* The header is `fixed`, so this spacer holds its full-height place in
          the flow. Shrinking the header then never moves the page content
          under it; with a sticky header every height change pushed the
          content up or down mid-scroll, which read as a jolt. */}
      <div aria-hidden="true" className="h-[var(--hdr-full)]" />
      <header
        ref={headerRef}
        className="site-header glass-bar fixed inset-x-0 top-0 z-40 border-b border-white/70 px-gutter"
      >
        {/* gap-2 below lg: this is a `justify-between` row, so the gap only
            ever acts as a minimum separation — but at 360px the logo lockup
            and the menu button together leave under 20px of slack, and a
            32px minimum was enough on its own to push the button past the
            right gutter. From lg, with the desktop nav, it is 24px (the nav only
            just fits at 1024px), and 32px from xl. */}
        <div className="site-header-row flex items-center justify-between gap-2 lg:gap-6 xl:gap-8">
          {/* `min-w-0`, not `shrink-0`: when the row runs out of room the logo
              must give way, never the menu button. Android's text scaling
              (common on Samsung phones) or display zoom widens the
              non-wrapping wordmark, and as a fixed `shrink-0` item it pushed
              the toggle past the right edge, where a fixed header can't be
              scrolled to. Now the wordmark truncates instead (see Logo.tsx). */}
          <Link href="/" className="block min-w-0" aria-label={`${site.name} — home`}>
            <Logo animated={animateLogo} />
          </Link>

          {/* Desktop nav — `lg` (1024px), not `md` (768px). The full row is
              three page links + a divider + two icon buttons + Contact, which
              needs ~565px of content; at 768px the row only has ~347px left
              after the logo, so from `md` this nav simply wrapped to two lines
              and stayed wrapped until ~1100px. No amount of gap-tightening
              closes a 218px gap — the honest fix is to show this nav only
              where it fits and let the mobile menu (which is built for exactly
              this) cover everything below. At 1024 it now fits on one line
              with room to spare; see the Logo's `xl:h-20` note for the other
              half of that budget. */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center justify-end gap-nav-gap flex-wrap min-w-0"
          >
            {backHref ? (
              <Link
                href={backHref}
                className="group inline-flex items-center gap-2 text-nav font-semibold whitespace-nowrap text-body transition-colors duration-150 ease-out hover:text-ink focus-visible:text-ink"
              >
                <ArrowLeftIcon />
                <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-150 ease-out group-hover:decoration-current group-focus-visible:decoration-current">{backLabel}</span>
              </Link>
            ) : (
              primaryNav.map((item) => {
                const NavIcon = NAV_ICONS[item.href];
                const current = activeSection === item.href.split("#")[1];
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "location" : undefined}
                    className="group inline-flex items-center gap-2 text-nav font-semibold whitespace-nowrap text-body transition-colors duration-150 ease-out hover:text-ink focus-visible:text-ink aria-[current]:text-accent-dark"
                  >
                    <NavIcon />
                    <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-150 ease-out group-hover:decoration-current group-focus-visible:decoration-current">
                      {"short" in item ? (
                        <>
                          <span className="xl:hidden">{item.short}</span>
                          <span className="hidden xl:inline">{item.label}</span>
                        </>
                      ) : (
                        item.label
                      )}
                    </span>
                  </a>
                );
              })
            )}
            <span aria-hidden="true" className="block w-px h-5 bg-rule-strong" />
            {/* LinkedIn + GitHub + Contact grouped with their own tight 8px
                gap, separate from the wider gap-nav-gap the rest of the nav
                uses. The rotating availability badge used to sit at the end of
                this cluster; it moved to the contact block, which is both
                calmer and not width-constrained (see StatusPill.tsx). */}
            <span className="flex items-center gap-2">
              <IconLink
                href={site.linkedinUrl}
                label="Connect with me on LinkedIn"
                tooltip="Connect with me on LinkedIn"
                icon={<LinkedInIcon />}
              />
              <IconLink href={site.githubUrl} label="Visit my GitHub" tooltip="Visit my GitHub" icon={<GithubIcon />} />
              <a
                href="#contact"
                className="glass-button-ink group inline-flex items-center gap-2 text-nav font-semibold whitespace-nowrap text-white rounded-pill h-11 px-6 hover:text-white focus-visible:text-white focus-visible:outline-white"
              >
                Contact
                <ArrowRightIcon className="transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5" />
              </a>
            </span>
          </nav>

          {/* Mobile nav toggle */}
          <button
            ref={toggleRef}
            type="button"
            className="glass-button lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-chrome shrink-0"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="#222222"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2.5 5.5h15M2.5 10h15M2.5 14.5h15"
                  stroke="#222222"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav panel — only rendered while open, so it never fights
            Tailwind's `flex` utility for control of `display` the way a
            native `hidden` attribute + `flex` class combo would. */}
        {open && (
          <nav
            id={panelId}
            aria-label="Primary"
            className="lg:hidden flex flex-col items-start gap-4 pt-2 pb-6 max-h-[calc(100dvh-var(--hdr-compact))] overflow-y-auto"
          >
            {backHref ? (
              <Link
                href={backHref}
                className="group inline-flex items-center gap-2 text-nav font-semibold whitespace-nowrap text-body transition-colors duration-150 ease-out hover:text-ink focus-visible:text-ink"
              >
                <ArrowLeftIcon />
                <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-150 ease-out group-hover:decoration-current group-focus-visible:decoration-current">{backLabel}</span>
              </Link>
            ) : (
              primaryNav.map((item) => {
                const NavIcon = NAV_ICONS[item.href];
                const current = activeSection === item.href.split("#")[1];
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "location" : undefined}
                    className="group inline-flex items-center gap-2 text-nav font-semibold whitespace-nowrap transition-colors duration-150 ease-out hover:text-ink focus-visible:text-ink aria-[current]:text-accent-dark"
                    onClick={() => setOpen(false)}
                  >
                    <NavIcon />
                    <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-150 ease-out group-hover:decoration-current group-focus-visible:decoration-current">{item.label}</span>
                  </a>
                );
              })
            )}
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-button inline-flex items-center gap-2 font-mono-label text-mono-label-em font-medium uppercase text-body rounded-pill h-11 px-6 hover:text-ink focus-visible:text-ink"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-button inline-flex items-center gap-2 font-mono-label text-mono-label-em font-medium uppercase text-body rounded-pill h-11 px-6 hover:text-ink focus-visible:text-ink"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="glass-button-ink group inline-flex items-center gap-2 text-nav font-semibold text-white rounded-pill h-11 px-6 hover:text-white focus-visible:text-white focus-visible:outline-white"
            >
              Contact
              <ArrowRightIcon className="transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5" />
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
