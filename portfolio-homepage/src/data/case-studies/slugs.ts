// Case-study ids and their public URL slugs, per language.
//
// A case study's `slug` (in its data file) is its stable id and the English
// URL slug. The Finnish pages use Finnish slugs: the words in a URL help a
// Finnish search engine understand the page, and read better in a result.
// This file has no imports from the content files, so it is cheap to use from
// client components and from `next.config.mjs`-adjacent code.

import type { Locale } from "@/i18n/config";
import { workPath } from "@/i18n/paths";

export type CaseStudySlug =
  | "industrial-tool"
  | "university-ai-tool"
  | "education-platform"
  | "environmental-data-tool";

export const caseStudyUrlSlugs: Record<Locale, Record<CaseStudySlug, string>> = {
  en: {
    "industrial-tool": "industrial-tool",
    "university-ai-tool": "university-ai-tool",
    "education-platform": "education-platform",
    "environmental-data-tool": "environmental-data-tool",
  },
  fi: {
    "industrial-tool": "teollisuuden-data-ja-asiantuntijatyokalut",
    "university-ai-tool": "yliopiston-perehdytys-ja-tekoalyhaku",
    "education-platform": "koulutuksen-digitaalinen-palvelualusta",
    "environmental-data-tool": "ymparistodatajarjestelmien-uudistus",
  },
};

/** Public path of a case study in a language. */
export function caseStudyPath(locale: Locale, id: CaseStudySlug): string {
  return workPath(locale, caseStudyUrlSlugs[locale][id]);
}

/** The case study a URL slug names in a language, if any. */
export function caseStudyIdFromUrlSlug(locale: Locale, urlSlug: string): CaseStudySlug | undefined {
  const entry = Object.entries(caseStudyUrlSlugs[locale]).find(([, slug]) => slug === urlSlug);
  return entry?.[0] as CaseStudySlug | undefined;
}
