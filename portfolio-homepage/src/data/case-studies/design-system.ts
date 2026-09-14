import type { CaseStudy } from "./types";

export const designSystem: CaseStudy = {
  slug: "design-system",
  title: "DS by Berit",
  label: "PERSONAL DESIGN SYSTEM · 2025–PRESENT",
  headline: "A design system I design,\nbuild and run myself.",
  description:
    "A personal design system, built from scratch and still in progress. It covers foundations (color, type, spacing) as tokens, a growing library of components built on them, and the documentation and structure that keeps the whole thing usable as it grows. I'm building it to show, concretely, how I approach a design system end to end: not just the components themselves, but how I organise, document and maintain one over time.",
  thumbnail: "",
  thumbnailAlt: "DS by Berit",
  placeholderLabel: "Currently in process",
  tag: "Personal project",
  ctaLabel: "Explore the case study",
  otherCaseStudyDescription:
    "A personal design system covering tokens, components and documentation, built to show how I structure and maintain a system end to end.",
  liveUrl: "https://design-system-use-case.vercel.app/",

  // Partial content: `intro` and the "How it started" fields only. There is
  // no `gallery` yet, so `hasFullContent` is still false and this page keeps
  // the minimal `CaseStudyHero` — the sections below render on their own
  // presence rather than on that flag. See the route's section gating.
  intro:
    "I wanted to find out what happens when a designer builds a design system in code instead of Figma. So I built one. DS by Berit is token-first, accessible by default, and lives as real components rather than a UI kit.",

  howItStarted: [
    "I built the system with an AI agent, and it came together fast. That speed raised a question I did not expect: how well do I actually understand a system I did not write line by line? If the agent stopped being available tomorrow, could I maintain this myself?",
    "So I went back and read my own code, file by file. The system looked consistent from the outside. Underneath, I found five things.",
  ],

  howItStartedFindings: [
    {
      title: "The spacing scale was documented but never used.",
      body: "My token file defines eight spacing values, from 4px to 64px. The button component uses 20px horizontal padding, a value that does not exist in that scale. The documentation described a system the code was not following.",
    },
    {
      title: "Three colour variables had no token behind them.",
      body: "Raised surfaces, strong borders and the dark accent all exist in the CSS, but none of them appear in the semantic token layer. The documentation showed the system as smaller than it actually was.",
    },
    {
      title: "Preview themes hardcoded values that already existed as variables.",
      body: "The light and dark preview modes repeat hex codes defined at the top of the same file. Change the source value and the previews quietly fall out of sync.",
    },
    {
      title: "A font was loaded but never used.",
      body: "Manrope is fetched on every page load. Nothing references it.",
    },
    {
      title: "Documentation logic had leaked into a system component.",
      body: "The button carries a prop that exists only so the docs can display hover and active states side by side. Anyone adopting the component inherits it, along with a few !important rules they did not ask for.",
    },
  ],

  howItStartedClosing: [
    "On their own, none of these would break anything. That is exactly why they matter. Each one is small enough to pass unnoticed, and an agent produces them faster than a person can review them. Left alone, they compound into the kind of debt that eventually slows the system down more than it ever sped it up.",
    "The question is not whether the agent made mistakes. It is how to make sure it works to a defined set of rules from here on.",
  ],
};
