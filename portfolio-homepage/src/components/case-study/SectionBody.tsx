import FindingsList from "./FindingsList";
import ParagraphList from "./ParagraphList";
import type { Finding } from "@/data/case-studies";

/**
 * The body shape shared by "How it started" and every `additionalSections`
 * panel: prose, an optional numbered findings list, then the prose that
 * closes the section out. The gap between the three blocks is wider
 * (`gap-8`) than the gap between paragraphs inside one of them
 * (`ParagraphList`'s `gap-6`), so the list reads as a distinct block rather
 * than as two more paragraphs.
 *
 * Sections supplying only `paragraphs` render exactly as a bare
 * `ParagraphList` would — the four prose case studies included.
 */
export default function SectionBody({
  paragraphs,
  findings,
  closing,
}: {
  paragraphs: string[];
  findings?: Finding[];
  closing?: string[];
}) {
  return (
    <div className="flex flex-col gap-8">
      <ParagraphList paragraphs={paragraphs} />
      {findings !== undefined && findings.length > 0 && <FindingsList items={findings} />}
      {closing !== undefined && closing.length > 0 && <ParagraphList paragraphs={closing} />}
    </div>
  );
}
