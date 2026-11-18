import { Tag } from "@berit/ds";

/** A post's topic tag, in the same glass pill as the case studies' skill tags. */
export default function TagPill({ tag }: { tag: string }) {
  return (
    <Tag>{tag}</Tag>
  );
}

export function TagList({ tags, label }: { tags: string[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2 list-none p-0 m-0">
      {tags.map((tag) => (
        <li key={tag}>
          <TagPill tag={tag} />
        </li>
      ))}
    </ul>
  );
}
