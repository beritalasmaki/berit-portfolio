/** A post's topic tag, in the same glass pill as the case studies' skill tags. */
export default function TagPill({ tag }: { tag: string }) {
  return (
    <span className="inline-block font-mono-label text-mono-label-em uppercase text-ink glass-pill rounded-pill py-2 px-4 whitespace-nowrap">
      {tag}
    </span>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul aria-label="Topics" className="flex flex-wrap gap-2 list-none p-0 m-0">
      {tags.map((tag) => (
        <li key={tag}>
          <TagPill tag={tag} />
        </li>
      ))}
    </ul>
  );
}
