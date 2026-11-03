import type { MetadataRoute } from "next";
import { getCaseStudies } from "@/data/case-studies";
import { caseStudyPath } from "@/data/case-studies/slugs";
import { getPosts, getTranslation } from "@/data/blog";
import { siteUrl } from "@/data/site";
import { htmlLang, locales, type Locale } from "@/i18n/config";
import { absoluteUrl, blogPath, homePath, postPath } from "@/i18n/paths";

type Entry = MetadataRoute.Sitemap[number];

/** One sitemap entry per page per language, each listing the other language's
 * version as an alternate (Google reads `hreflang` from the sitemap too). */
function entry(paths: Partial<Record<Locale, string>>, extra: Partial<Entry> = {}): Entry[] {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    const path = paths[l];
    if (path !== undefined) languages[htmlLang[l]] = absoluteUrl(siteUrl, path);
  }
  return locales.flatMap((l) => {
    const path = paths[l];
    if (path === undefined) return [];
    return [{ url: absoluteUrl(siteUrl, path), alternates: { languages }, ...extra }];
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const home = entry({ en: homePath("en"), fi: homePath("fi") }, { changeFrequency: "monthly", priority: 1 });

  const blog = entry({ en: blogPath("en"), fi: blogPath("fi") }, { changeFrequency: "weekly", priority: 0.7 });

  const caseStudies = getCaseStudies("en").flatMap((study) =>
    entry(
      { en: caseStudyPath("en", study.slug), fi: caseStudyPath("fi", study.slug) },
      { changeFrequency: "yearly", priority: 0.8 }
    )
  );

  // Posts: lastModified is the post's own date (never "now"), which is what
  // lets a search engine trust the field.
  const posts = locales.flatMap((locale) =>
    getPosts(locale).flatMap((post) => {
      const translation = getTranslation(locale, post);
      const other: Locale = locale === "en" ? "fi" : "en";
      const paths: Partial<Record<Locale, string>> = { [locale]: postPath(locale, post.slug) };
      if (translation) paths[other] = postPath(other, translation.slug);
      // Emit each page once: the entry for this locale only.
      const own = entry(paths, {
        lastModified: post.updated ?? post.date,
        changeFrequency: "yearly",
        priority: 0.6,
      }).filter((e) => e.url === absoluteUrl(siteUrl, postPath(locale, post.slug)));
      return own;
    })
  );

  return [...home, ...blog, ...caseStudies, ...posts];
}
