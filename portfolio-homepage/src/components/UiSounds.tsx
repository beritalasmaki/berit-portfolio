"use client";

import { useEffect } from "react";

/**
 * Small UI sounds, played on click.
 *
 * Any element with `data-sound="<name>"` plays that sound when clicked, so
 * server components (the case study cards) can opt in with an attribute
 * instead of becoming client components for an onClick. Every other button
 * (a real <button>, or a link styled as one: Back to top, the hero's
 * calls to action, the social icons) pops, like the nav links. One listener on
 * the document handles them all; it is mounted once, in the root layout.
 *
 * The clips are short and kept quiet: they confirm an action, they don't
 * announce it. Sounds only ever play in answer to a click, never on their
 * own, so they never fight the browser's autoplay rules.
 *
 * - play: the hero's "Turn chaos into clarity" button starts the story.
 * - play-again: "Play again" restarts it.
 * - pop: jumping to a section from the nav, and every other button.
 * - open: opening a case study.
 * - back: from a case study, back to the main page.
 * - home: the logo, which whooshes the page back to the top.
 */
const SOUNDS = {
  play: { src: "/sounds/play.mp3", volume: 0.35 },
  "play-again": { src: "/sounds/play-again.mp3", volume: 0.35 },
  pop: { src: "/sounds/pop-click.mp3", volume: 0.5 },
  open: { src: "/sounds/open.mp3", volume: 0.3 },
  back: { src: "/sounds/back.mp3", volume: 0.35 },
  home: { src: "/sounds/home.mp3", volume: 0.3 },
} as const;

type SoundName = keyof typeof SOUNDS;

export default function UiSounds() {
  useEffect(() => {
    const clips = new Map<string, HTMLAudioElement>();
    for (const [name, { src, volume }] of Object.entries(SOUNDS)) {
      const audio = new Audio(src);
      audio.preload = "auto";
      audio.volume = volume;
      clips.set(name, audio);
    }

    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const el = target?.closest<HTMLElement>("[data-sound], button, a.glass-button, a.glass-button-ink");
      const name = (el?.dataset.sound ?? (el ? "pop" : undefined)) as SoundName | undefined;
      const audio = name && clips.get(name);
      if (!audio) return;
      // Restart rather than queue, so a quick second click still sounds.
      audio.currentTime = 0;
      // play() rejects if the browser declines (e.g. still loading); a
      // missing click sound isn't worth an error.
      audio.play().catch(() => {});
    }

    // Capture phase, so the sound starts before any handler that navigates
    // or re-renders the clicked element away.
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      clips.forEach((audio) => audio.pause());
    };
  }, []);

  return null;
}
