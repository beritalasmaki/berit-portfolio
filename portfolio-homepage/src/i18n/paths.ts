// Every internal URL on the site is built here, so a link can never point at
// the wrong language's path.
//
// Internally the App Router has one route tree: `app/[locale]/...` with
// `blog` and `usecases` folders. `next.config.mjs` maps the public URLs onto
// it (English without a prefix, Finnish under `/fi` with Finnish words).
// Public URL shapes:
//
//             English                 Finnish
//   home      /                       /fi
//   blog      /blog                   /fi/blogi
//   post      /blog/<slug>            /fi/blogi/<slug>
//   work      /usecases/<slug>        /fi/tyot/<slug>

import { defaultLocale, isLocale, type Locale } from "./config";

const SEGMENTS: Record<Locale, { blog: string; work: string }> = {
  en: { blog: "blog", work: "usecases" },
  fi: { blog: "blogi", work: "tyot" },
};

const prefix = (locale: Locale) => (locale === defaultLocale ? "" : `/${locale}`);

export function homePath(locale: Locale, hash?: string): string {
  const base = locale === defaultLocale ? "/" : `/${locale}`;
  return hash ? `${base}#${hash}` : base;
}

export function blogPath(locale: Locale): string {
  return `${prefix(locale)}/${SEGMENTS[locale].blog}`;
}

export function postPath(locale: Locale, slug: string): string {
  return `${blogPath(locale)}/${slug}`;
}

export function workPath(locale: Locale, slug: string): string {
  return `${prefix(locale)}/${SEGMENTS[locale].work}/${slug}`;
}

/** Absolute URL for a path, for canonicals, Open Graph and the sitemap. */
export function absoluteUrl(origin: string, path: string): string {
  return `${origin}${path === "/" ? "" : path}`;
}

export type PageKind = "home" | "blog" | "other";

/**
 * What the browser's current pathname is, locale-independent. The header uses
 * it to mark the current page; it works on the public URL (what
 * `usePathname()` returns), not on the internal route.
 */
export function pageKind(pathname: string): PageKind {
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];
  const locale: Locale = first !== undefined && isLocale(first) && first !== defaultLocale ? first : defaultLocale;
  const rest = locale === defaultLocale ? parts : parts.slice(1);
  if (rest.length === 0) return "home";
  if (rest[0] === SEGMENTS[locale].blog) return "blog";
  return "other";
}
