import Image from "next/image";
import FindingsList from "@/components/case-study/FindingsList";
import type { BlogBlock } from "@/data/blog";
import InlineText from "./InlineText";
import OkrDiagram from "./OkrDiagram";

/**
 * A post's body, block by block, in the case studies' type scale: body-lg
 * paragraphs at the 800px `prose-cs` measure, section headings that the
 * table of contents links to, and the shared findings list.
 */
export default function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="m-0 max-w-prose-cs text-body-lg text-body">
                <InlineText text={block.text} />
              </p>
            );
          case "heading":
            return (
              <h2
                key={i}
                id={block.id}
                className="mt-6 first:mt-0 mb-0 max-w-prose-cs text-card-h3 text-ink text-balance"
              >
                {block.text}
              </h2>
            );
          case "subheading":
            return (
              <h3 key={i} className="mt-2 mb-0 max-w-prose-cs text-sub-h4 text-ink">
                {block.text}
              </h3>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-2 mx-0 max-w-prose-cs border-l-[3px] border-accent bg-cream/50 rounded-r-frame py-6 pl-6 pr-card-pad"
              >
                <p className="m-0 text-sub-h4 text-ink text-pretty">
                  <InlineText text={block.text} />
                </p>
                {block.cite && (
                  <footer className="mt-4 font-mono-label text-mono-label uppercase text-muted">
                    {block.cite}
                  </footer>
                )}
              </blockquote>
            );
          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={i}
                className={`m-0 max-w-prose-cs pl-6 flex flex-col gap-4 text-body-lg text-body marker:text-accent ${
                  block.ordered ? "list-decimal" : "list-disc"
                }`}
              >
                {block.items.map((item, j) => (
                  <li key={j} className="pl-2">
                    <InlineText text={item} />
                  </li>
                ))}
              </ListTag>
            );
          }
          case "image":
            return (
              <figure key={i} className="m-0 max-w-prose-cs">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  sizes="(min-width: 1024px) 800px, 100vw"
                  className="block w-full h-auto rounded-frame border border-white/70 bg-white shadow-frame"
                />
                {block.caption && (
                  <figcaption className="mt-2 text-body-sm text-muted">{block.caption}</figcaption>
                )}
              </figure>
            );
          case "findings":
            return (
              <div key={i} className="max-w-prose-cs">
                <FindingsList items={block.items} />
              </div>
            );
          case "okr":
            return (
              <div key={i} className="my-2">
                <OkrDiagram okr={block} />
              </div>
            );
        }
      })}
    </div>
  );
}
