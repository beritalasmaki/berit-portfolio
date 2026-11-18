import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";
import { Tag, TagList } from "@berit/ds";
import { Variation } from "@/components/documentation/Variation";

export const metadata: Metadata = { title: "Tags" };

const cssCode = `.tag {\n  padding: 8px 16px;\n  border: 1px solid var(--color-border-subtle);\n  border-radius: 999px;\n  background: var(--color-surface-glass);\n  font: 500 12px "IBM Plex Mono", monospace;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}`;

export default function TagsPage() {
  return <ComponentPage name="Tags" eyebrow="Components / atoms" description="A tag is a small, static label that names a category, topic or skill." usage={<p className="m-0">Use a tag to describe what something is about, such as the type of project or a skill. Do not use a tag for anything people can press. Use a button or a link for that.</p>} contract={["A tag is a fully round pill with a short mono label in capitals. It takes only text, and it has no hover or pressed state because it does not do anything.", "Several tags sit together in a tag list, which wraps onto new lines and leaves 8px between tags. The list is a real list, so assistive technology says how many tags there are."]} accessibility={["Tags are plain text. Meaning is carried by the words, never by colour. The label is ink on a light surface, which is well above the 4.5:1 contrast needed for small text.", "A tag list needs a label, such as Skills, so that people using a screen reader know what the group is."]} examples={[
    { title: "A single tag", description: "One tag, on a light and a dark surface. Use the Light and Dark switch to see both.", content: <CodeTabs view={<Variation label="Default"><Tag>Design systems</Tag></Variation>} cssCode={cssCode} javascriptCode={`<Tag>Design systems</Tag>`} /> },
    { title: "A tag list", description: "Tags wrap onto several lines when there is not enough room.", content: <CodeTabs view={<TagList label="Skills">{["UX research", "Design systems", "Prototyping", "Accessibility"]}</TagList>} cssCode={cssCode} javascriptCode={`<TagList label="Skills">{["UX research", "Design systems"]}</TagList>`} /> },
  ]} />;
}
