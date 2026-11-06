import Link from "next/link";
import type { ReactNode } from "react";

// `` `code` ``, `**bold**`, `*italic*` and `[label](href)` — just enough inline markup for
// blog copy kept as plain strings in `data/blog/`. Not nested: an italic
// inside a bold stays literal, which no post needs.
const TOKEN = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)\s]+\))/g;

const linkClass =
  "text-ink font-semibold underline decoration-accent decoration-2 underline-offset-4 transition-[text-decoration-color] duration-200 ease-linear hover:decoration-accent-dark focus-visible:decoration-accent-dark";

export default function InlineText({ text }: { text: string }) {
  const parts: ReactNode[] = text.split(TOKEN).map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code key={i} className="font-mono text-[0.88em] text-ink bg-panel rounded-img-inner px-1 py-0.5">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      // Site-internal links go through the router; anything else opens in
      // a new tab, like the rest of the site's external links.
      return href.startsWith("/") ? (
        <Link key={i} href={href} data-sound="open" className={linkClass}>
          {label}
        </Link>
      ) : (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {label}
        </a>
      );
    }
    return part;
  });
  return <>{parts}</>;
}

/** The same string with the markup removed, for meta tags and the feed. */
export function plainText(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1");
}
