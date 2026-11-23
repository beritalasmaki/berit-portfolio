"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import type { GalleryImage } from "@/data/case-studies";
import type { Dictionary } from "@/i18n/dictionaries";

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

// Click-to-zoom levels for the expanded image: opens at 60% of its actual
// (natural) pixel size, click to jump to 100% (true size, may need to
// scroll to see the whole thing), click again to return to 60%.
const ZOOM_LEVELS = [0.6, 1] as const;

// Horizontal distance (px) a touch has to travel before it counts as a
// swipe rather than a tap or a slightly-crooked vertical scroll.
const SWIPE_THRESHOLD = 50;

/**
 * The full-screen screenshot viewer, shared by the old one-block gallery and
 * the story layout's in-text figures. Mounted only while open: mounting locks
 * body scroll and moves focus into the dialog, unmounting gives focus back to
 * `returnFocusRef` (the thumbnail that opened it).
 */
export default function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
  returnFocusRef,
  copy,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  returnFocusRef: RefObject<HTMLElement | null>;
  copy: Dictionary["caseStudy"];
}) {
  const [zoomed, setZoomed] = useState(false);
  // Click-to-zoom is desktop-only: on a touch-sized viewport the tap would
  // fight pinch-zoom and scroll.
  const [isDesktop, setIsDesktop] = useState(true);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const current = images[index];
  const zoom = ZOOM_LEVELS[zoomed ? 1 : 0];
  const close = onClose;

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    function onChange() {
      setIsDesktop(query.matches);
    }
    onChange();
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const step = useCallback(
    (delta: number) => {
      onIndexChange((index + delta + images.length) % images.length);
      setZoomed(false);
    },
    [index, images.length, onIndexChange]
  );

  // Swipe is touch-only on purpose: a desktop mouse-drag is never a swipe.
  function onTouchStart(event: React.TouchEvent) {
    touchStartRef.current =
      event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }

  function onTouchEnd(event: React.TouchEvent) {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start || images.length < 2) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;
    step(dx < 0 ? 1 : -1);
  }

  // Lock body scroll, move focus in, and hand it back on close.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const returnTo = returnFocusRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      returnTo?.focus();
    };
  }, [returnFocusRef]);

  // Escape / arrow keys / focus trap.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      } else if (event.key === "Tab") {
        const container = dialogRef.current;
        if (!container) return;
        const focusables = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [close, step]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-[clamp(16px,4vw,48px)] cursor-zoom-out"
      style={{ background: "rgba(34, 34, 34, 0.8)" }}
      onClick={close}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={current.caption}
        className="relative flex max-w-[92vw] max-h-[92vh] flex-col gap-4 cursor-auto"
        onClick={(event) => event.stopPropagation()}
      >
        {/* gap-2 on mobile, and the caption truncates rather than
            running `whitespace-nowrap` past the edge: at 390px a long
            caption plus the counter plus the controls overflowed the
            toolbar and cut the Close button in half. */}
        <div className="shrink-0 flex items-center justify-between gap-2 sm:gap-6 rounded-chrome bg-ink px-4 py-2">
          <p className="font-mono-label text-mono-label uppercase text-white m-0 min-w-0 truncate">
            {current.caption}
            {images.length > 1 && (
              <span className="text-white/60">
                {" "}
                · {index + 1}/{images.length}
              </span>
            )}
          </p>
          <div className="flex items-center gap-2 shrink-0">
            {/* Arrows are desktop chrome only. On touch, swiping the
                image replaces them (see onTouchEnd) — keeping them would
                mean either an overflowing toolbar or a squeezed caption,
                and they are the least necessary control of the three
                once swipe exists. Keyboard users still have ←/→. */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label={copy.prevScreenshot}
                  className="hidden sm:block text-[13px] font-semibold uppercase tracking-[0.06em] text-white border border-white rounded-pill py-2 px-4 whitespace-nowrap transition-[background-color,color] duration-200 ease-linear hover:bg-white hover:text-ink focus-visible:bg-white focus-visible:text-ink focus-visible:outline-white"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label={copy.nextScreenshot}
                  className="hidden sm:block text-[13px] font-semibold uppercase tracking-[0.06em] text-white border border-white rounded-pill py-2 px-4 whitespace-nowrap transition-[background-color,color] duration-200 ease-linear hover:bg-white hover:text-ink focus-visible:bg-white focus-visible:text-ink focus-visible:outline-white"
                >
                  ›
                </button>
              </>
            )}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="text-[13px] font-semibold uppercase tracking-[0.06em] text-white border border-white rounded-pill py-2 px-4 whitespace-nowrap transition-[background-color,color] duration-200 ease-linear hover:bg-white hover:text-ink focus-visible:bg-white focus-visible:text-ink focus-visible:outline-white"
            >
              {copy.close}
            </button>
          </div>
        </div>
        {/* Click-to-zoom: 60% (fit-ish, whole image visible) <-> 100%
            (true pixel size, scrolls if it doesn't fit). A real <button>,
            not a div, so it's reachable in the Tab order the focus trap
            above already walks. Desktop only — on mobile the image just
            renders at one fit-to-width size with no toggle. */}
        <div className="min-h-0 flex-1 overflow-auto" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {isDesktop ? (
            <button
              type="button"
              onClick={() => setZoomed((z) => !z)}
              aria-label={zoomed ? copy.zoomOut : copy.zoomIn}
              className={`block ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                // Higher than the default 75: these are UI screenshots
                // with small text, more sensitive to compression softness
                // than a photo, and this is the one place on the site
                // people are meant to look closely at fine detail.
                quality={95}
                style={{ width: current.width * zoom, height: current.height * zoom }}
                className="block rounded-chrome bg-white shadow-lightbox"
              />
            </button>
          ) : (
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              quality={95}
              sizes="92vw"
              style={{ width: "100%", height: "auto" }}
              className="block rounded-chrome bg-white shadow-lightbox"
            />
          )}
        </div>
        {/* Swipe is invisible until tried, and on mobile it's the only
            way to reach the other screenshots now that the arrows are
            gone, so it gets an explicit label. aria-hidden: the counter
            in the toolbar already tells assistive tech where it is, and
            keyboard/SR users move with ←/→ rather than by swiping. */}
        {images.length > 1 && (
          <p
            aria-hidden="true"
            className="sm:hidden shrink-0 m-0 text-center font-mono-label text-mono-label uppercase text-white/60"
          >
            {copy.swipeHint}
          </p>
        )}
      </div>
    </div>
  );
}
