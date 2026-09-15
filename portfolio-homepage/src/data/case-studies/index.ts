import { industrialTool } from "./industrial-tool";
import { universityAiTool } from "./university-ai-tool";
import { educationPlatform } from "./education-platform";
import { environmentalDataTool } from "./environmental-data-tool";
import { designSystem } from "./design-system";
import type { CaseStudy, CaseStudySlug } from "./types";

export type {
  CaseStudySlug,
  CaseStudySummary,
  CaseStudy,
  CaseStudyFullContent,
  ImpactCard,
  GalleryImage,
  ChallengeSubsection,
  Finding,
  ProseSection,
} from "./types";
export { hasFullContent } from "./types";

/** Registry order = display order on the homepage and in "Other case studies" lists. */
export const caseStudies: CaseStudy[] = [
  industrialTool,
  universityAiTool,
  educationPlatform,
  environmentalDataTool,
  designSystem,
];

export function getCaseStudy(slug: CaseStudySlug): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getOtherCaseStudies(slug: CaseStudySlug): CaseStudy[] {
  return caseStudies.filter((study) => study.slug !== slug);
}
