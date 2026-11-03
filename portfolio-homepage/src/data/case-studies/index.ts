import type { Locale } from "@/i18n/config";
import { industrialTool } from "./industrial-tool";
import { universityAiTool } from "./university-ai-tool";
import { educationPlatform } from "./education-platform";
import { environmentalDataTool } from "./environmental-data-tool";
import { industrialToolFi } from "./fi/industrial-tool";
import { universityAiToolFi } from "./fi/university-ai-tool";
import { educationPlatformFi } from "./fi/education-platform";
import { environmentalDataToolFi } from "./fi/environmental-data-tool";
import { caseStudyIdFromUrlSlug } from "./slugs";
import type { CaseStudy, CaseStudySlug } from "./types";

export type {
  CaseStudySlug,
  CaseStudySummary,
  CaseStudy,
  CaseStudyFullContent,
  CaseGlance,
  ImpactCard,
  GalleryImage,
  ChallengeSubsection,
  Finding,
  ProseSection,
} from "./types";
export { hasFullContent } from "./types";

// Registry order = display order on the homepage and in "Other case studies"
// lists. Each language has its own files (`fi/` for Finnish): the Finnish
// versions are written for Finnish readers, not mirrored sentence by sentence,
// but they keep the same `slug` ids, images and structure.
const registries: Record<Locale, CaseStudy[]> = {
  en: [industrialTool, universityAiTool, educationPlatform, environmentalDataTool],
  fi: [industrialToolFi, universityAiToolFi, educationPlatformFi, environmentalDataToolFi],
};

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return registries[locale];
}

/** By stable id (`slug` in the data file), in a language. */
export function getCaseStudy(locale: Locale, id: CaseStudySlug): CaseStudy | undefined {
  return registries[locale].find((study) => study.slug === id);
}

/** By the slug used in that language's URL. */
export function getCaseStudyByUrlSlug(locale: Locale, urlSlug: string): CaseStudy | undefined {
  const id = caseStudyIdFromUrlSlug(locale, urlSlug);
  return id ? getCaseStudy(locale, id) : undefined;
}

export function getOtherCaseStudies(locale: Locale, id: CaseStudySlug): CaseStudy[] {
  return registries[locale].filter((study) => study.slug !== id);
}
