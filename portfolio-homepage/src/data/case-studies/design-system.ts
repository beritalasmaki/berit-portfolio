import type { CaseStudy } from "./types";

export const designSystem: CaseStudy = {
  slug: "design-system",
  title: "DS by Berit",
  label: "PERSONAL DESIGN SYSTEM · 2025–PRESENT",
  headline: "A design system I design,\nbuild and run myself.",
  description:
    "A personal design system, built from scratch and still in progress. Colours, text styles and spacing are saved as tokens, with a growing library of components built from them, plus the documentation and structure that keep it usable as it grows. I am building it to show how I work on a design system over time: not only the components themselves, but how I organise, document and maintain them.",
  thumbnail: "",
  thumbnailAlt: "DS by Berit",
  placeholderLabel: "Currently in process",
  tag: "Personal project",
  ctaLabel: "Explore the case study",
  otherCaseStudyDescription:
    "A personal design system of tokens, components and documentation, built to show how I structure and maintain a system over time.",
  liveUrl: "https://design-system-use-case.vercel.app/",

  // The detail page's hero copy, separate from the shorter card
  // `description` above — see `heroIntro` in types.ts.
  heroIntro: [
    "DS by Berit is a personal design system, built from scratch and still in progress. A design system is the shared set of colours, text styles, spacing rules and ready-made parts that keep a product looking and working the same way everywhere. In this one, every colour, text style and spacing value is saved as a token: a named value, such as “accent colour” or “spacing 16”, that the rest of the system refers to by name instead of repeating the value itself. Components are built from those tokens: the ready-made parts, like buttons and cards, that get reused across a product. Around them sits the documentation and the structure that keep the system usable as it grows. I build it to show how I work on a design system over time, both the components themselves and how I organise, document and maintain them.",
  ],

  // Partial content: `intro`, the "How it started" fields and two extra
  // sections. There is no `gallery` yet, so `hasFullContent` is still false
  // and this page keeps the minimal `CaseStudyHero` — the sections below
  // render on their own presence rather than on that flag. See the route's
  // section gating.
  intro: [
    "I wanted to find out what happens when a designer builds a design system in code instead of in a design tool like Figma, so I built one. It is built on tokens, it meets accessibility requirements from the start, and it is made of working components that a real product can use, not drawings of them.",
    "What I took from it is that written rules are the weakest way to guide an agent. Most of the work is building the system so that the wrong thing is not possible in the first place.",
  ],

  howItStarted: [
    "I built the system with an AI agent. I wanted to see what would happen if I had an AI agent build a simple design system from scratch, and then find out how well I understood the system it wrote for me. If the agent stopped being available tomorrow, could I keep it going on my own?",
    "It was ready quickly. Then I went through the repository file by file, with a second AI agent as a reviewer rather than a builder. The system looked consistent from the outside. Underneath, we found four things.",
  ],

  howItStartedFindings: [
    {
      title: "Spacing values that were not in the system.",
      body: "The system defines eight spacing tokens, but the button uses 20px, which is not one of them. The same value had spread to a link on another page. Nothing in the project said it was not allowed.",
    },
    {
      title: "Colours used without a token.",
      body: "Three colours were in the code but never given a token, so the documentation showed a smaller system than the real one. The preview views also typed out colour values that already existed as tokens, which means they keep showing the old colour if a token changes.",
    },
    {
      title: "Things that described something that was no longer true.",
      body: "A font was loaded on every page but never used. The version history page said it was showing a file I maintained by hand, but it had never read that file, and the file had been deleted.",
    },
    {
      title: "The documentation site had stopped using its own components.",
      body: "A link was made to look like a button by copying the button's styling by hand. The system has no way to make a link that looks like a button, so someone worked around the gap instead of closing it.",
    },
  ],

  howItStartedClosing: [
    "None of these problems is serious on its own, but they add up. Technical debt like this makes the system more expensive to maintain and more likely to break in small ways over time.",
  ],

  additionalSections: [
    {
      id: "fixing",
      label: "The response",
      heading: "How I started fixing it",
      paragraphs: [
        "All seven came from the same place: the system had no written rules. An AI agent reads its instructions from two files in the project, and both of them held only a short technical note that the framework had put there automatically. Nothing described how this system was meant to be built, so the agent worked the rules out from the existing code every time it started.",
        "So I wrote the rules down with my AI-assistant: what the project is and what stage it is at, where new components go, how the two token files relate to each other, the spacing tokens as a fixed list, and accessibility as a minimum requirement. I also listed the changes I want to be asked about before they happen, such as adding a new outside library or changing how an existing component is used.",
        "Then I fixed what I had found by hand, instead of asking the agent to do it. I wanted to see whether I could handle the coding side myself, at least to some extent. Removing the unused font was one line. Correcting the spacing was two small edits. Rewriting the outdated text was one paragraph. None of it was work I needed the agent for.",
      ],
    },
    {
      id: "ai-ready",
      label: "What I took from it",
      heading: "Rules are not enough: what an AI-ready design system actually needs",
      navLabel: "Rules are not enough",
      paragraphs: [
        "Writing the rules down was the obvious first step, and the weakest one. A written rule is a request. The agent reads it, usually follows it, and sometimes does not: it can misunderstand a rule, or lose track of it during a long piece of work. If a written rule is the only thing preventing a mistake, the mistake will happen at some point.",
        "For a design system to stay intact while an agent works in it, the rules need to exist at three levels. Each level is stronger than the one before it.",
      ],
      findings: [
        {
          title: "Level 1: rules written down, so the agent can read them.",
          body: "This is the instructions file, and it is where I am now. It says which spacing tokens exist, where new components go, what must never be typed in by hand, and which changes I want to be asked about first. Without it the agent works the rules out again from nothing every time it starts, so having it is a real improvement. But a written rule can only ask. The agent can still misunderstand it or forget it, and nothing stops the mistake from being made.",
        },
        {
          title: "Level 2: the system built so that the wrong value does not exist.",
          body: "This is what I mean by structure: instead of asking for the right value, the project is set up so the wrong one is not available. The eight spacing tokens can be made the only spacing values the code accepts. After that, nobody can use 20px anywhere, because 20px is not one of the options and the code will not work with it. The rule stops being something to remember and becomes part of how the system is built.",
        },
        {
          title: "Level 3: a program that reads every change and reports mistakes.",
          body: "Not every rule can be built into the structure like that. Colour is one example: a colour value is just text, so nothing prevents anyone from typing one in by hand instead of using a token. Rules like this need a program that reads the code after every change and reports what does not follow them. This project already runs one. It needs one more rule in it: reject colour values that are typed in by hand instead of being taken from a token. The program checks every line every time, and it does not get tired the way a person reviewing code does.",
        },
      ],
      closing: [
        "All four of the things I found would have been caught at one of these levels, and none of them were, because none of the levels existed. The agent was not being careless. It was working without rules, and it had no way of knowing that.",
        "Making a system clear enough that an agent can work in it without slowly breaking it is design work, not a tooling problem, and it is the part I find most interesting right now. Level 2 and level 3 come next.",
      ],
    },
  ],
};
