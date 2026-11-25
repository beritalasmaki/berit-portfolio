import type { IntroVideo as IntroVideoData } from "@/data/case-studies";

/** Walkthrough video shown at the top of a case study. Controls are visible
 * and nothing autoplays, so the visitor can pause and follow along. */
export default function IntroVideo({ video }: { video: IntroVideoData }) {
  return (
    <figure className="m-0 rounded-card glass p-3 sm:p-4">
      <video
        className="block w-full h-auto rounded-frame bg-ink"
        controls
        muted
        playsInline
        preload="metadata"
        poster={video.poster}
        aria-label={video.label}
        width={video.width}
        height={video.height}
      >
        <source src={video.src} type="video/mp4" />
      </video>
      <figcaption className="mt-3 px-1 text-muted text-sm">{video.caption}</figcaption>
    </figure>
  );
}
