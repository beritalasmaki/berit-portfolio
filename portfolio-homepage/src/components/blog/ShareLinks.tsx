"use client";

import { useEffect, useState } from "react";

// Kept in this file, per the codebase's per-file icon convention (the same
// LinkedIn mark as Header.tsx and AboutMe.tsx). All 16px, `currentColor`,
// `aria-hidden`: the button text carries the meaning.
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="w-4 h-4 shrink-0" fill="currentColor">
      <path d="M13.5 0h-11C1.12 0 0 1.12 0 2.5v11C0 14.88 1.12 16 2.5 16h11c1.38 0 2.5-1.12 2.5-2.5v-11C16 1.12 14.88 0 13.5 0zM4.94 13.44H2.4V5.98h2.54v7.46zM3.67 4.94c-.81 0-1.47-.66-1.47-1.47 0-.81.66-1.47 1.47-1.47.81 0 1.47.66 1.47 1.47 0 .81-.65 1.47-1.47 1.47zM13.6 13.44h-2.54V9.83c0-.86-.02-1.97-1.2-1.97-1.2 0-1.39.94-1.39 1.91v3.67H6.14V5.98h2.44v1.02h.03c.34-.64 1.17-1.32 2.4-1.32 2.57 0 3.05 1.69 3.05 3.89v3.87z" />
    </svg>
  );
}

function LineIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="w-4 h-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

/** Two chain links. */
function LinkIcon() {
  return (
    <LineIcon>
      <path d="M6.75 9.25a3 3 0 004.24 0l2.12-2.12a3 3 0 00-4.24-4.24l-.7.7" />
      <path d="M9.25 6.75a3 3 0 00-4.24 0L2.89 8.87a3 3 0 004.24 4.24l.7-.7" />
    </LineIcon>
  );
}

/** A tick, shown on "Copy link" once the link is copied. */
function CheckIcon() {
  return (
    <LineIcon>
      <path d="M3 8.5l3.25 3.25L13 5" />
    </LineIcon>
  );
}

/** Three connected nodes — the generic "share" mark. */
function ShareIcon() {
  return (
    <LineIcon>
      <circle cx="12" cy="3.5" r="1.75" />
      <circle cx="4" cy="8" r="1.75" />
      <circle cx="12" cy="12.5" r="1.75" />
      <path d="M5.5 7.15l5-2.8M5.5 8.85l5 2.8" />
    </LineIcon>
  );
}

/**
 * Share this post: LinkedIn (where the audience is), copy link, and the
 * device's own share sheet where there is one (phones). The URL is read from
 * the page itself, so it's right on every domain the site is served from.
 */
export default function ShareLinks({ title }: { title: string }) {
  const [url, setUrl] = useState("");
  const [canShare, setCanShare] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setUrl(window.location.href.split("#")[0]);
    setCanShare(typeof navigator.share === "function");
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setStatus("Link copied");
    } catch {
      setStatus("Couldn't copy — copy the address from the address bar");
    }
    window.setTimeout(() => setStatus(""), 3000);
  }

  async function share() {
    try {
      await navigator.share({ title, url });
    } catch {
      // Dismissed by the visitor: nothing to do.
    }
  }

  const button =
    "glass-button inline-flex items-center gap-2 font-mono-label text-mono-label-em font-medium uppercase text-body rounded-pill h-11 px-6 hover:text-ink focus-visible:text-ink";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-mono-label text-mono-label uppercase text-muted mr-2">Share</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        data-sound="social"
        className={button}
      >
        <LinkedInIcon />
        LinkedIn
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <button type="button" onClick={copy} data-sound="pop" className={button}>
        {status === "Link copied" ? <CheckIcon /> : <LinkIcon />}
        Copy link
      </button>
      {canShare && (
        <button type="button" onClick={share} data-sound="pop" className={button}>
          <ShareIcon />
          More…
        </button>
      )}
      <span role="status" aria-live="polite" className="text-body-sm text-accent-dark">
        {status}
      </span>
    </div>
  );
}
