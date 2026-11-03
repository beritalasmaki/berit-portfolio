// Structured data (schema.org JSON-LD): tells search engines who the site is
// about, what she does, where, and in which language. It doesn't change what
// visitors see.

import { site, siteUrl } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { htmlLang } from "@/i18n/config";
import { absoluteUrl, homePath } from "@/i18n/paths";
import type { Dictionary } from "@/i18n/dictionaries";

type JsonLdProps = { data: unknown };

/** Renders a JSON-LD block. `<` is escaped so the data can never close the tag. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const personId = `${siteUrl}/#person`;

/** The person, as a reusable node other nodes can point at by `@id`. */
export function personNode(locale: Locale, copy: Dictionary) {
  return {
    "@type": "Person",
    "@id": personId,
    name: site.name,
    givenName: "Berit",
    familyName: "Alasmäki",
    jobTitle: copy.meta.jsonLd.jobTitle,
    description: copy.meta.jsonLd.description,
    url: absoluteUrl(siteUrl, homePath(locale)),
    image: `${siteUrl}/photo.png`,
    sameAs: [site.linkedinUrl, site.githubUrl],
    knowsAbout: copy.meta.jsonLd.knowsAbout,
    knowsLanguage: ["fi", "en"],
    address: { "@type": "PostalAddress", addressCountry: "FI" },
    homeLocation: { "@type": "Country", name: locale === "fi" ? "Suomi" : "Finland" },
    hasOccupation: {
      "@type": "Occupation",
      name: copy.meta.jsonLd.jobTitle,
      occupationLocation: { "@type": "Country", name: locale === "fi" ? "Suomi" : "Finland" },
    },
  };
}

/** Homepage: the website, the profile page and the person it is about. */
export function homeJsonLd(locale: Locale, copy: Dictionary, otherLocale: Locale) {
  const home = absoluteUrl(siteUrl, homePath(locale));
  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(locale, copy),
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        inLanguage: [htmlLang[locale], htmlLang[otherLocale]],
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${home}#profile`,
        url: home,
        name: copy.meta.home.title,
        description: copy.meta.home.description,
        inLanguage: htmlLang[locale],
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": personId },
      },
    ],
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(siteUrl, crumb.path),
    })),
  };
}
