import type { GalleryImage } from "../types";

/**
 * Finnish gallery: the English file stays the source of truth for the image
 * files and their pixel sizes; only the alt text and caption are written here,
 * in the same order. Throws at build time if the counts differ, so a screenshot
 * added to the English study can't silently go missing from the Finnish one.
 */
export function localizeGallery(
  images: GalleryImage[] | undefined,
  texts: ReadonlyArray<{ alt: string; caption: string }>
): GalleryImage[] {
  if (!images || images.length !== texts.length) {
    throw new Error(
      `Finnish gallery has ${texts.length} captions but the English one has ${images?.length ?? 0} images`
    );
  }
  return images.map((image, i) => ({ ...image, ...texts[i] }));
}
