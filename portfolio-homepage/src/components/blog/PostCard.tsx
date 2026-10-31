import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import PostMeta from "./PostMeta";
import { TagList } from "./TagPill";

/** A post as a glass card, in the "Other case studies" card style. */
export default function PostCard({ post, headingLevel = "h2" }: { post: BlogPost; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article data-ripple className="flex flex-col glass rounded-card overflow-hidden">
      <Link
        href={`/blog/${post.slug}`}
        data-sound="open"
        className="flex flex-1 flex-col gap-4 p-card-pad group rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-[-2px]"
      >
        {post.series && (
          <span className="self-start font-mono-label text-mono-label-em uppercase text-accent-dark">
            {post.series.name} · Part {post.series.part}
          </span>
        )}
        <Heading className="m-0 text-card-h3 text-ink group-hover:underline group-focus-visible:underline decoration-accent underline-offset-4">
          {post.title}
        </Heading>
        <PostMeta post={post} />
        <p className="m-0 text-body-sm text-body">{post.excerpt}</p>
        <TagList tags={post.tags} />
        <span className="mt-auto text-nav font-semibold text-ink border-b border-accent pb-2 self-start whitespace-nowrap transition-[border-color] duration-150 ease-out group-hover:border-accent-dark group-focus-visible:border-accent-dark">
          Read post →
        </span>
      </Link>
    </article>
  );
}
