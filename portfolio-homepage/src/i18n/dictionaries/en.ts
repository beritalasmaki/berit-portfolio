// English copy for everything that isn't a case study or a blog post (those
// live in `src/data`). `fi.ts` must have exactly the same shape: its type is
// derived from this file, so a missing or extra key is a compile error.
//
// Strings with `*word*` markers (hero story) highlight that word in orange.

export const en = {
  site: {
    name: "Berit Alasmäki",
    /** Under the wordmark in the header and footer (uppercase via CSS). */
    role: "UX & Product Designer",
    /** Extra letter-spacing for the name so both lockup lines are equally wide;
     * measured per language (see Logo.tsx). */
    nameTracking: "0.0616em",
    roleTracking: "0.14em",
    homeLabel: "Berit Alasmäki — home",
  },

  meta: {
    titleSuffix: "By Berit Alasmäki",
    home: {
      title: "UX Designer in Finland | Berit Alasmäki",
      description:
        "Berit Alasmäki is a senior UX and UI/UX designer in Finland with 10+ years of experience in expert tools, public sector services, service design and design systems. See selected case studies.",
    },
    blog: {
      title: "Blog",
      description:
        "Writing on UX, product design and bringing AI into organizations — notes from ten years of design work.",
    },
    jsonLd: {
      jobTitle: "Senior UX & Product Designer",
      description:
        "Senior UX and UI/UX designer based in Finland, with more than ten years of experience designing expert tools, public sector services and design systems.",
      knowsAbout: [
        "UX design",
        "UI design",
        "Product design",
        "Service design",
        "Design systems",
        "User research",
        "Usability testing",
        "Information architecture",
        "Accessibility",
        "AI-assisted design and prototyping",
      ],
      blogName: "Berit Alasmäki — Blog",
    },
  },

  common: {
    backToTop: "Back to top",
    primaryNav: "Primary",
    /** The link to the *other* language, written in that language. */
    otherLanguage: { code: "FI", name: "Suomeksi", aria: "Vaihda kieli suomeksi", lang: "fi" },
  },

  header: {
    nav: {
      caseStudies: { label: "Selected case studies", short: "Case studies" },
      about: "About",
      process: "My Process",
      blog: "Blog",
    },
    backToWork: "Back to work",
    backToBlog: "Back to blog",
    linkedin: "Connect with me on LinkedIn",
    github: "Visit my GitHub",
    linkedinShort: "LinkedIn",
    githubShort: "GitHub",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    photoAlt: "Berit Alasmäki",
    greeting: "Hi! I'm Berit. 🙂",
    greetingSeparator: "",
    title: "Senior UX & Product Designer",
    headline: ["Your partner in", "untangling", "complexity."],
    stats: [
      { value: "10+", label: "years" },
      { value: "25+", label: "projects" },
      { value: "10+", label: "clients" },
    ],
    lead: "I help teams turn complex products and services into experiences that are easier to use and easier to build.",
    primaryCta: "Get in touch",
    secondaryCta: "See the work",
    play: "Turn chaos into clarity",
    replay: "Play again",
    story: [
      "Every project starts with *clarifying.*",
      "First, I *map* where things stand.",
      "Then we *plan* what’s needed, the system and the goal.",
      "We set up the *systems* and how we’ll measure progress.",
      "We *move,* learning and adjusting as we go.",
      "And we reach the *goal,* together. 😊",
    ],
  },

  clients: {
    heading: "Experience with well-known organisations",
  },

  mindTabs: {
    heading: "How do I work?",
    aside: "A good collaboration starts with a better question.",
    tablistLabel: "Questions",
    tabs: [
      {
        question: "How do I keep my collaboration skills up to date?",
        body: "Developer collaboration looks different today than it did a few years ago. I keep adapting to that: I do not just hand a finished design over and disappear, I stay part of the conversation while developers are building. I also build real prototypes myself with tools like Claude Design and VS Code, so developers see working components early, not just static images to interpret.",
        highlight:
          "On a national education platform with many municipalities and vendors, I ran the team's daily meetings and created the workshop process the team used to move from research to real concepts.",
        linkLabel: "See the National Education case study →",
        study: "education-platform",
      },
      {
        question: "How do I approach complex problems?",
        body: "I map the problem, build early concepts, and adapt quickly instead of trying to plan every detail in advance.",
        highlight:
          "Modernizing old environmental data systems meant working with tools researchers had used for years without a clear structure. Instead of waiting for a perfect solution, I focused on releasing something useful quickly, and then improving it based on what we learned.",
        linkLabel: "See the Environmental Data Systems case study →",
        study: "environmental-data-tool",
      },
      {
        question: "How do I know a design is ready to build?",
        body: "I prefer to release something, learn from real feedback, and improve it, instead of spending too much time perfecting a first version nobody has tested yet.",
        highlight:
          "A university's digital portal launched as a first version, then kept improving based on real usage after launch.",
        linkLabel: "See the University Onboarding case study →",
        study: "university-ai-tool",
      },
    ] as { question: string; body: string; highlight: string; linkLabel: string; study: string }[],
  },

  caseStudies: {
    heading: "A closer look at the work.",
    projectOne: "project",
    projectMany: "projects",
  },

  about: {
    heading: "About Me",
    aside: "The person behind the pixels.",
    closing: "We agree, together, on what success looks like before the work starts.",
    greeting: "Hey, happy to have you here! ♥",
    photoAlt: "Berit Alasmäki",
    paragraphs: [
      "Growing up in a small town in Finland, I never expected to end up in tech, let alone design. I studied IT and web development, but my real start in design happened almost by accident: a friend brought me into his startup while I was still in high school, and that's where I first got hands-on experience with both design tools and code. I've been curious about both ever since.",
      "Ten years in design, nine of them as a consultant, taught me to move between very different worlds: public sector platforms, industrial tools, environmental data systems, often as the only designer in the room. I've worked on more than 25 projects, and each one shaped how I work today. That kind of work forces you to care about your craft, because there might not be anyone else to catch what you miss.",
      "I value quality work, clear focus, and strong collaboration. Instead of worrying about how AI is changing design, I take a practical approach: I use the tools that make sense, keep improving my process, and keep building solid product experiences.",
    ],
    linkedin: "Connect on LinkedIn",
    musicLabel: "Music I keep listening to",
    musicTitle: "Spotify playlist: music I keep listening to",
    workingWithMe: {
      heading: "Working with me",
      hintHover: "hover for more",
      hintPress: "press for more",
      items: [
        {
          statement: "I'll push back, respectfully.",
          detail:
            "If something won't work for users or developers, I'll say so early. I always explain the reason, not just share an opinion.",
        },
        {
          statement: "I'll make the coffee and bring the snacks.",
          detail: "Good work happens in a good mood. I like keeping the atmosphere light, even during crunch time.",
        },
        {
          statement: "I'll notice the details that matter.",
          detail: "Not every detail needs attention, but the ones that affect trust or usability always get mine.",
        },
        {
          statement: "I'll ask for feedback early, not just at the end.",
          detail: "I'd rather show a rough version early than a polished one too late to change.",
        },
        {
          statement: "I'll speak up for both the user and the developer building it.",
          detail:
            "Good design has to work for the person using it and the person building it. I try not to forget either side.",
        },
      ],
    },
  },

  whatIDo: {
    heading: "What I do",
    groups: [
      {
        title: "Research and understanding",
        body: "User research and interviews, usability testing, journey mapping, service blueprints. Finding out how work actually happens before deciding what to build.",
      },
      {
        title: "Design and delivery",
        body: "UI flows and interface design, process diagrams, design systems from tokens to components. I read and modify front-end code, and build working components rather than only static screens.",
      },
      {
        title: "Working with AI tools",
        body: "I build prototypes and real components with AI tooling, and I know how to direct an agent rather than accept what it produces: writing the rules it works from, and reviewing what came out. I built my own design system this way.",
      },
      {
        title: "Leading the work",
        body: "Co-design workshops and facilitation, setting the measures that show whether a design worked, supporting a product owner through planning and prioritisation, and a lean approach to getting something usable in front of people early.",
      },
    ],
  },

  process: {
    headingLines: ["Every project gets", "the approach it needs."],
    intro:
      "Sometimes that means weeks of research before anything gets drawn. Sometimes it means a prototype in someone's hands the same afternoon. Pick a project type to see how the shape changes.",
    kindQuestion: "What kind of project?",
    tablistLabel: "Project type",
    timelineHeading: "Typical timeline",
    weekPrefix: "W",
    weekUnit: "w",
    decimal: ".",
    emptyTitle: "Click a step to see how I work.",
    emptyBody: "Each one has a reason it exists, and a reason I sometimes leave it out.",
    whenLabel: "When I use this",
    skipLabel: "I skip this when…",
    categories: {
      research: "Research",
      design: "Design",
      code: "Code",
      testing: "Testing",
      systems: "Systems",
      ship: "Launch",
    },
    tabs: {
      zeroToOne: { label: "0→1 Product", duration: "~10 weeks" },
      prototype: { label: "Rapid Prototype", duration: "~2 weeks" },
      designSystem: { label: "Design System", duration: "~6 weeks" },
      redesign: { label: "Redesign", duration: "~8 weeks" },
    },
    stages: {
      research: {
        name: "Research",
        block: "Research",
        when: "When I'm working in a new domain, or the problem is tricky. I talk to real users, look around, and find out what actually needs solving.",
        skip: "The problem is already well understood, or we need to move fast and learn from a real release.",
      },
      discovery: {
        name: "Discovery",
        block: "Discovery",
        when: "I talk to the people involved (stakeholders), look at similar products (competitive analysis), and learn what limits we're working with (business constraints).",
        skip: "It's a small personal project, or the limits are already clear.",
      },
      flows: {
        name: "Flows & IA",
        block: "Flows & IA",
        when: "For big products with many paths. I draw out the whole journey (user flows, information architecture) before I design any screens.",
        skip: "It's a simple tool where there's really only one way through.",
      },
      wireframes: {
        name: "Wireframes",
        block: "Wireframes",
        when: "When I need to test if the structure makes sense before I make it look good.",
        skip: "I already know the direction, or it's faster to just build it.",
      },
      ui: {
        name: "UI Design",
        block: "UI Design",
        when: "Making it look and feel right (components, interactions, visual polish).",
        skip: "We're doing quick prototypes where we just want to learn something fast, not make it pretty.",
      },
      testing: {
        name: "User Testing",
        block: "User Testing",
        when: "Before big decisions or launches. I watch real users use it and listen to what they say.",
        skip: "It's a small change where we can just check the numbers afterward.",
      },
      iterate: {
        name: "Iterate",
        block: "Iterate",
        when: "After every round of feedback. The first version is never the final one.",
        skip: "Never. This step always happens.",
      },
      handoff: {
        name: "Handover",
        block: "Handover",
        when: "Writing down exactly what should be built, and working closely with developers so nothing gets lost along the way.",
        skip: "I'm building it myself, or working side by side with a developer already.",
      },
      ship: {
        name: "Launch",
        block: "Launch",
        when: "Release it to real users and learn from how they actually use it.",
        skip: "Never. Releasing it is how you find out whether it works.",
      },
      aiAssisted: {
        name: "AI-assisted",
        block: "AI-assisted",
        when: "Using AI to sketch ideas, write code, or try out options faster.",
        skip: "The work needs careful thinking and real craft, not speed.",
      },
      buildInCode: {
        name: "Build in Code",
        block: "Build in Code",
        when: "When building it is the fastest way to know if it works, especially for things users need to feel and use.",
        skip: "We still don't know what we're building yet.",
      },
      tokens: {
        name: "Tokens & Systems",
        block: "Tokens & Systems",
        when: "Setting up building blocks and rules (components and design tokens) that the whole team can reuse, plus the documentation to go with it.",
        skip: "It's a one-off project that won't need to grow or be reused.",
      },
    },
  },

  contact: {
    headingLine1: "What could we",
    headingLine2Before: "make ",
    headingAccent: "better?",
    lead: "Tell me what you're building, what's getting in the way, and where you want to go.",
    linkedin: "Connect on LinkedIn",
    statuses: ["Open to work", "Open to networking", "Open to brainstorming"],
    statusWidth: "172px",
    statusSrOnly: "Open to work, networking, and brainstorming",
  },

  footer: {
    credit: "Designed & built by Berit. Powered by Claude and Vercel.",
  },

  caseStudy: {
    backLink: "Back to work",
    breadcrumbEyebrow: "Case study",
    liveProject: "Visit live project ↗",
    role: "Role:",
    focus: "Focus:",
    readingTime: "~{min} min read",
    startingPointEyebrow: "The brief",
    startingPoint: "Starting Point",
    aboutProject: "About the project",
    screensToc: "Examples of UI-screens",
    selectedScreens: "Selected screens",
    screensNote: "Desktop and mobile, one platform",
    screensHeading: "Examples of UI screens",
    prevScreenshot: "Previous screenshot",
    nextScreenshot: "Next screenshot",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    close: "Close ✕",
    impactEyebrow: "Results",
    impact: "The Impact",
    startedEyebrow: "Background",
    started: "How it started",
    challengesEyebrow: "The hard parts",
    challenges: "Challenges & Problem-Solving",
    differentlyEyebrow: "In hindsight",
    differently: "What I would do differently",
    otherEyebrow: "Keep reading",
    other: "Other case studies",
    viewCaseStudy: "View case study →",
    backToMain: "Back to main page",
    glance: { eyebrow: "At a glance", heading: "The short version", problem: "The problem", role: "My role", decisions: "Decisions I made", outcome: "The outcome" },
    onThisPage: "On this page",
    navigateTo: "Navigate to...",
    showMore: "Show more",
    showLess: "Show less",
  },

  blog: {
    eyebrow: "Blog",
    heading: ["Notes on design & ", "change"],
    intro:
      "Writing on UX, product design and bringing AI into organizations, drawn from the projects I've worked on.",
    postsLabel: "Posts",
    filterLabel: "Filter posts by topic",
    allPosts: "All posts",
    countAll: "{count} posts",
    countTopic: "{count} posts about {topic}",
    noPosts: "No posts yet — check back soon.",
    topics: "Topics",
    readPost: "Read post →",
    seriesPart: "Part {part}",
    seriesPartOf: "Part {part} of {total}",
    readingTime: "~{min} min read",
    updated: "Updated",
    series: "Series",
    youAreHere: "(you are here)",
    intro_toc: "Introduction",
    keepReading: "Keep reading",
    moreFromBlog: "More from the blog",
    backToAll: "Back to all posts",
    share: "Share",
    opensNewTab: " (opens in a new tab)",
    copyLink: "Copy link",
    linkCopied: "Link copied",
    copyFailed: "Couldn't copy — copy the address from the address bar",
    more: "More…",
    diagram: "Diagram",
    okr: {
      objective: "Objective",
      objectiveQuestion: "Where are we heading?",
      measuredBy: "measured by key results",
      keyResults: "Key results",
      keyResultsQuestion: "How do we know we got there?",
      keyResultsHint: "A number you can check",
      achievedThrough: "achieved through initiatives",
      initiatives: "Initiatives",
      initiativesQuestion: "What do we do about it?",
      initiativesHint: "Can change along the way",
    },
  },
};

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type Dictionary = Widen<typeof en>;
