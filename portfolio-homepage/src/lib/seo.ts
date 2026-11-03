// Search-engine metadata, built in one place so every page gets the same
// treatment: a canonical URL, `hreflang` alternates between the two language
// versions, and Open Graph / Twitter cards in the page's own language.

import type { Metadata } from "next";
import { siteUrl } from "@/data/site";
import { htmlLang, locales, ogLocale, type Locale } from "@/i18n/config";
import { absoluteUrl } from "@/i18n/paths";

/** Social preview image per language (1200×630), in `public/og/`. */
export const ogImage: Record<Locale, { url: string; width: number; height: number; alt: string }> = {
  en: {
    url: "/og/og-en.png",
    width: 1200,
    height: 630,
    alt: "Berit Alasmäki — Senior UX & Product Designer in Finland",
  },
  fi: {
    url: "/og/og-fi.png",
    width: 1200,
    height: 630,
    alt: "Berit Alasmäki — senior UX-suunnittelija Suomessa",
  },
};

export type PageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  /** Public path of this page in each language it exists in. The page's own
   * language must be among them. A language that is missing gets no
   * `hreflang` entry (a page that isn't translated mustn't pretend to be). */
  paths: Partial<Record<Locale, string>>;
  type?: "website" | "article";
  /** For `type: "article"`. */
  article?: { publishedTime: string; modifiedTime?: string; tags?: string[]; authors: string[] };
  siteName: string;
};

export function pageMetadata({
  locale,
  title,
  description,
  paths,
  type = "website",
  article,
  siteName,
}: PageMetadataInput): Metadata {
  const own = paths[locale];
  if (own === undefined) throw new Error(`pageMetadata: no path given for "${locale}"`);
  const url = absoluteUrl(siteUrl, own);

  const languages: Record<string, string> = {};
  for (const l of locales) {
    const path = paths[l];
    if (path !== undefined) languages[htmlLang[l]] = absoluteUrl(siteUrl, path);
  }
  // English is the fallback for visitors whose language we don't have.
  if (paths.en !== undefined) languages["x-default"] = absoluteUrl(siteUrl, paths.en);

  const image = ogImage[locale];
  const alternateLocale = locales
    .filter((l) => l !== locale && paths[l] !== undefined)
    .map((l) => ogLocale[l]);

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName,
      locale: ogLocale[locale],
      ...(alternateLocale.length > 0 ? { alternateLocale } : {}),
      images: [{ url: image.url, width: image.width, height: image.height, alt: image.alt }],
      ...(article ?? {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
