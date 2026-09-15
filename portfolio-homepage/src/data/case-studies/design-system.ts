import type { CaseStudy } from "./types";

export const designSystem: CaseStudy = {
  slug: "design-system",
  title: "DS by Berit",
  label: "PERSONAL DESIGN SYSTEM · 2025–PRESENT",
  headline: "A design system I design,\nbuild and run myself.",
  description:
    "A personal design system, built from scratch and still in progress. Colours, text styles and spacing are saved as named values, with a growing library of reusable parts built from them, plus the documentation and structure that keep it usable as it grows. I am building it to show how I work on a design system over time: not only the parts themselves, but how I organise, document and maintain them.",
  thumbnail: "",
  thumbnailAlt: "DS by Berit",
  placeholderLabel: "Currently in process",
  tag: "Personal project",
  ctaLabel: "Explore the case study",
  otherCaseStudyDescription:
    "A personal design system of named values, reusable parts and documentation, built to show how I structure and maintain a system over time.",
  liveUrl: "https://design-system-use-case.vercel.app/",

  // Two paragraphs on the detail page's hero where the card gets one — see
  // `heroIntro` in types.ts.
  heroIntro: [
    "DS by Berit is a personal design system, built from scratch and still in progress. A design system is the shared set of colours, text styles, spacing rules and ready-made parts that keep a product looking and working the same way everywhere. In this one, colour, text and spacing are saved as named values, with a growing library of components built from them: buttons, links and other parts that get reused across a product. The system also includes the documentation and the structure that keep it usable as it grows. I build it to show how I work on a design system over time, both the components themselves and how I organise, document and maintain them.",
    "I built it with an AI agent, and that turned out to raise a more interesting question than the system itself.",
  ],

  // Partial content: `intro`, the "How it started" fields and two extra
  // sections. There is no `gallery` yet, so `hasFullContent` is still false
  // and this page keeps the minimal `CaseStudyHero` — the sections below
  // render on their own presence rather than on that flag. See the route's
  // section gating.
  intro:
    "I wanted to find out what happens when a designer builds a design system in code instead of in a design tool like Figma, so I built one. Every colour, text style and spacing value in it has a name, and everything else is built from those names. It meets accessibility requirements from the start, and it is made of working parts that a real product can use, not drawings of them.",

  howItStarted: [
    "I built the system with an AI agent, and it was ready quickly. That speed raised a question I had not expected: how well do I understand a system I did not write myself? If the agent stopped being available tomorrow, could I keep the system going on my own?",
    "So I read my own code, file by file. The system looked consistent from the outside. Underneath, I found seven things.",
  ],

  howItStartedFindings: [
    {
      title: "The spacing rules were written down but not followed.",
      body: "The system allows eight spacing values, from 4px to 64px, so that the gaps between elements stay consistent. The button uses 20px, which is not one of the eight.",
    },
    {
      title: "The same value from outside the list appeared in a second place.",
      body: "A link on the version history page used 20px as well. Nothing in the project said that the value was not allowed, so it spread.",
    },
    {
      title: "Three colours were in use without being part of the official list.",
      body: "The colours for raised surfaces, strong borders and the dark accent are used in the code, but they were never added to the list of named colours the system documents. The documentation showed the system as smaller than it really was.",
    },
    {
      title: "The preview views repeated colour values instead of reusing them.",
      body: "The light and dark previews write out the same colour codes that are already defined at the top of the same file. If I change the original value, the previews keep showing the old one, and nothing warns me about it.",
    },
    {
      title: "A font was loaded but never used.",
      body: "Manrope was downloaded every time a page opened. I was sure I had a plan for it, subtitles on the documentation pages, but when I checked, the plan existed only in my head and nothing in the system knew about it.",
    },
    {
      title: "The version history page described a file that no longer existed.",
      body: "It said it was showing a history file that I kept up to date by hand. It never read that file, and the file had been deleted some time before.",
    },
    {
      title: "The documentation site had stopped using its own components.",
      body: "A link was made to look like a button by copying the button's styling by hand, instead of using the button the system already has. The system has no way to make a link that looks like a button, so someone found a way around that gap instead of closing it.",
    },
  ],

  howItStartedClosing: [
    "On their own these are small, and that is what makes them a problem. Each one is easy to miss, and an agent produces them faster than a person can check them. Over time they build up, and cleaning them up later costs more time than the fast start saved.",
  ],

  additionalSections: [
    {
      id: "fixing",
      label: "The response",
      heading: "How I started fixing it",
      paragraphs: [
        "All seven came from the same place: the system had no written rules. An AI agent reads its instructions from two files in the project, and both of them held only a short technical note that the framework had put there automatically. Nothing described how this system was meant to be built, so the agent worked the rules out from the existing code every time it started.",
        "So I wrote the rules down: what the project is and what stage it is at, where new components go, how the two files that hold the named values relate to each other, the spacing values as a fixed list, and accessibility as a minimum requirement. I also listed the changes I want to be asked about before they happen, such as adding a new outside library or changing how an existing component is used.",
        "Then I fixed what I had found by hand, instead of asking the agent to do it. Removing the unused font was one line. Correcting the wrong spacing was two small edits. Rewriting the outdated text was one paragraph. I had started with the question of whether I could look after a system I had not written myself, and doing the work myself was the only way to answer it.",
      ],
    },
    {
      id: "ai-ready",
      label: "What I took from it",
      heading: "Rules are not enough: what an AI-ready design system actually needs",
      navLabel: "Rules are not enough",
      paragraphs: [
        "Writing the rules down was the obvious first step, and the weakest one. A written rule is a request. The agent reads it, usually follows it, and sometimes does not: it can misunderstand a rule, or lose track of it during a long piece of work. If a written rule is the only thing preventing a mistake, the mistake will happen at some point.",
        "For a design system to stay intact while an agent works in it, the rules need to exist at three levels.",
      ],
      findings: [
        {
          title: "Written rules tell the agent what to do.",
          body: "This is the instructions file, and it is where I am now. It covers the spacing values, where components go, what should never be written out by hand, and what needs to be asked about first. Without it, the agent works the rules out again from nothing every time it starts, so having it is a real improvement. But it asks, it does not prevent.",
        },
        {
          title: "Structure makes the wrong choice impossible.",
          body: "If the project is set up so that only the eight allowed spacing values exist, then using 20px is not a mistake anyone can make, because there is no 20px to use. The rule becomes part of how the system works instead of something to remember.",
        },
        {
          title: "Automatic checks catch what gets through.",
          body: "Not everything can be made impossible, so the rest is checked automatically. This project already runs a tool that reviews the code on every change. A check that refuses colour values written out by hand would catch that mistake every time, and it never gets tired the way a person reviewing code does.",
        },
      ],
      closing: [
        "All seven of the things I found would have been caught at one of these levels, and none of them were, because none of the levels existed. The agent was not being careless. It was working without rules, and it had no way of knowing that.",
        "The tools are not the difficult part of this. The difficult part is making a system clear enough that an agent can work in it without slowly breaking it, and that is design work. It is the part I find most interesting right now. Structure and automatic checks come next.",
      ],
    },
  ],
};
