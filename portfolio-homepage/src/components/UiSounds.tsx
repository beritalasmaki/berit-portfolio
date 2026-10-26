"use client";

import { useEffect } from "react";

/**
 * Small UI sounds, played on click.
 *
 * Any element with `data-sound="<name>"` plays that sound when clicked, so
 * server components (the case study cards) can opt in with an attribute
 * instead of becoming client components for an onClick. One listener on
 * the document handles them all; it is mounted once, in the root layout.
 *
 * The clips are short and kept quiet: they confirm an action, they don't
 * announce it. Sounds only ever play in answer to a click, never on their
 * own, so they never fight the browser's autoplay rules.
 *
 * - play: the hero's "Turn chaos into clarity" button starts the story.
 * - play-again: "Play again" restarts it.
 * - pop: opening a case study, or jumping to a section from the nav.
 * - home: the logo, which whooshes the page back to the top.
 */
const SOUNDS = {
  play: { src: "/sounds/play.mp3", volume: 0.35 },
  "play-again": { src: "/sounds/play-again.mp3", volume: 0.35 },
  pop: { src: "/sounds/pop-click.mp3", volume: 0.5 },
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
      const name = target?.closest<HTMLElement>("[data-sound]")?.dataset.sound as SoundName | undefined;
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
