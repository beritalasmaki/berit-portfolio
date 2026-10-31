"use client";

import { useEffect, useState } from "react";

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
        LinkedIn
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <button type="button" onClick={copy} data-sound="pop" className={button}>
        Copy link
      </button>
      {canShare && (
        <button type="button" onClick={share} data-sound="pop" className={button}>
          More…
        </button>
      )}
      <span role="status" aria-live="polite" className="text-body-sm text-accent-dark">
        {status}
      </span>
    </div>
  );
}
