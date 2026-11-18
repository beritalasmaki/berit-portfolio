import type { BlogPost } from "./types";

export const howIWorkWithAi: BlogPost = {
  slug: "how-i-work-with-ai",
  title: "How I work with AI: a template for design projects",
  tabTitle: "How I work with AI",
  excerpt:
    "Well-built context and information architecture give much better results from AI than commands alone. This post describes the template I use as my starting point, and where AI is strong and where people still decide.",
  date: "2026-11-18",
  tags: ["AI tools", "AI adoption"],
  body: [
    {
      type: "links",
      items: [
        { label: "View the template on GitHub", href: "https://github.com/beritalasmaki/project-set-up-template" },
        {
          label: "Read the guide",
          href: "https://github.com/beritalasmaki/project-set-up-template/blob/main/docs/using-this-template.md",
        },
      ],
    },
    {
      type: "paragraph",
      text: "At first I used AI one command at a time: ask for something, look at the result, adjust the request. What I learned is that the result depends far more on what the AI knows about the project than on how the request is phrased. In my own projects, the design system and the agent run review screen, I wrote the rules and the context for the AI first: what the product is, which rules apply, and what the AI may and may not do. The results were considerably better.",
    },
    {
      type: "paragraph",
      text: "That became the template I use as the starting point for new design projects. It is built for public sector and B2B work, where accessibility and security are requirements and many people have a say. The idea behind it is that well-built context and information architecture produce much better results than commands alone.",
    },

    {
      type: "heading",
      id: "roles",
      text: "Where AI is strong, and where people decide",
      navLabel: "AI and people",
    },
    {
      type: "paragraph",
      text: "Well-built context made the biggest difference, and it also made the division of work clear. AI is strong at some things, and others still need a person's decisions and guidance. I think that is how it should be.",
    },
    {
      type: "subheading",
      text: "Where AI is strong",
    },
    {
      type: "list",
      items: [
        "**Turning raw notes into a structured first draft.** Stakeholder maps, requirements and descriptions of user flows come together quickly.",
        "**Summarising long material** and finding what is missing from it.",
        "**Checking consistency.** Does every screen have all its states, and is a term used the same way everywhere.",
        "**Producing options** to choose from.",
        "**Repetitive work,** such as tables, formatting and documentation.",
      ],
    },
    {
      type: "subheading",
      text: "Where people decide and guide",
    },
    {
      type: "list",
      items: [
        "**Direction and trade-offs.** What to build, what to leave out and what is good enough.",
        "**Understanding people and context.** Who really decides, what a user experiences and what the organisation can accept.",
        "**Accountability.** Accessibility, security and legal questions need a person who answers for them.",
        "**Testing with real users,** including users with access needs. AI cannot be the user.",
      ],
    },
    {
      type: "paragraph",
      text: "This split is not a limitation to work around. It is where the work of a designer remains.",
    },

    {
      type: "heading",
      id: "context",
      text: "Project context in writing",
    },
    {
      type: "paragraph",
      text: "An AI assistant starts every session knowing nothing about the project. Without written context it guesses, and the result could belong to any product.",
    },
    {
      type: "paragraph",
      text: "Each client project gets its own private workspace, created from the template. It holds short documents that the AI reads before it helps: who the product is for, the problem as a user situation, who decides what, the requirements and a decision log. I give it my raw notes, it drafts, and I correct. Whatever it cannot find in the notes is marked as a gap.",
    },
    {
      type: "paragraph",
      text: "The workspace is mine, not the client's, and never goes into the client's repository.",
    },

    {
      type: "heading",
      id: "process",
      text: "Process",
    },
    {
      type: "paragraph",
      text: "Six stages. Each has a skill, which is a set of instructions written for the AI, and artefacts, which are the documents that hold the results.",
    },
    {
      type: "timeline",
      labelledBy: "process",
      items: [
        { label: "Frame the problem" },
        { label: "Understand the people" },
        { label: "Design" },
        { label: "Check" },
        { label: "Real people test", note: "Users, security, legal", highlight: true },
        { label: "Hand off" },
        { label: "Record and reflect" },
      ],
    },
    {
      type: "findings",
      items: [
        {
          title: "Frame the problem",
          body: "**Skill** `problem-framing` · **Artefacts** `00 product context`, `01 problem framing`. Turns the request into a user situation with no solution inside it, and lists what is known and what is missing. I write the request down as it was handed to me and aim to anonymise it, so that neither the client nor any person is named. Client information stays confidential.",
        },
        {
          title: "Understand the people",
          body: "**Skill** `stakeholder-map` · **Artefacts** `02 stakeholder map`, `03 requirements spec`. Shows who decides what, and the requirements with their owners. Most disagreements appear only as the project goes on, so at the start what matters is knowing who has the final say. Conflicts are added side by side as they appear, and the AI does not resolve them.",
        },
        {
          title: "Design",
          body: "**Skill** `user-flow-and-states` · **Artefacts** `04 user flows and states`, `07 design system rules`. Maps flows step by step, with error paths and every screen state, against the design system rules. The AI marks each state as missing until I confirm it is designed.",
        },
        {
          title: "Check",
          body: "**Skills** `a11y-gate`, `security-privacy-brief`, `sameness-check` · **Artefacts** `05 accessibility checklist`, `06 security and privacy brief`. Reviews accessibility, data and permissions, and which choices were left at default. Contrast is calculated by a script. This is a design-stage review, not an audit.",
        },
        {
          title: "Hand off",
          body: "**Skill** `procurement-ready-handoff` · **Artefacts** `08 handoff spec`, `09 stakeholder feedback log`. States what is final, who approved it and what each vendor provides, and keeps review comments together with who decides on them.",
        },
        {
          title: "Record and reflect",
          body: "**Skills** `decision-log`, `nda-safe-case-study` · **Artefacts** `10 decision log`, `11 case study notes`. Logs decisions with who decided and why. At the end, the log feeds a case study with the confidential details removed.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Between checking and handing off, real people take over: user testing that includes users with access needs, security review and legal advice.",
    },

    {
      type: "heading",
      id: "flows",
      text: "User flows and challenging paths",
      navLabel: "Challenging paths",
    },
    {
      type: "paragraph",
      text: "I start with the basic flow: the steps a user takes to reach their goal, and how the system responds at each step. Only then do I go through it step by step and ask which parts could be challenging for some users.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Draw the basic flow.** Each step pairs what the user does with how the system responds.",
        "**Ask who might find each step challenging, and why.** The same path can be smooth for one user and unbearably hard for another.",
        "**Add the paths and states those users need:** error messages, more time, another way to do the step, and what happens when something fails.",
      ],
    },
    {
      type: "paragraph",
      text: "For example, in a public service the step “sign in with strong identification” can be easy for someone with a banking app and a smartphone, and a barrier for someone without them. A long form with a time limit can suit most people and be impossible for someone who needs more time or uses a screen reader. For each such step I write down who might struggle and what the design offers instead. If I do not know, I mark it as a gap and find out.",
    },

    {
      type: "heading",
      id: "boundaries",
      text: "Boundaries",
    },
    {
      type: "list",
      items: [
        "**No design is called accessible, compliant or tested.** Each check ends as pass, fail or cannot tell from a design.",
        "**Every claim is labelled** as evidence with a source, or as a gap. No invented quotes, research or numbers.",
        "**Client data stays out.** No real names, personal data or confidential figures in prompts or files. I use placeholders.",
        "**Decisions are recorded by role,** not by name.",
      ],
    },
    {
      type: "paragraph",
      text: "In client projects I use AI only when the client allows it, and I find that out before the work starts. Some clients also limit where their material may be stored. The project configuration asks about both on the first day.",
    },

    {
      type: "heading",
      id: "documentation",
      text: "Documentation",
    },
    {
      type: "paragraph",
      text: "The documents are Markdown files in Git, which gives history and one source of truth.",
    },
    {
      type: "paragraph",
      text: "How they reach the client depends on the client's own documentation practices and tools. If the client works in Confluence, the documents go there as pages. Another client may want PDF files, or a folder in their own shared drive. This is the documentation handoff: the files are delivered in the form and the place the client already uses.",
    },
    {
      type: "paragraph",
      text: "A copy in the client's tool is read-only. The content is copied there from the Git file, for example as a Confluence page or as a PDF attachment, and the copy is marked as a read-only copy. Changes are always made to the source and the copy is refreshed from it, so there are never two competing versions.",
    },

    {
      type: "heading",
      id: "checks",
      text: "Automated checks",
    },
    {
      type: "paragraph",
      text: "A rule written in a file is easy to break quietly. A script runs on every push and fails if, for example, the main rules file grows too long, a skill stops loading or a colour falls below the contrast minimum. It does not matter whether I or the AI made the change.",
    },
    {
      type: "paragraph",
      text: "For design quality I do not rely on lists of banned styles. I give the AI annotated examples of good work from my own projects, each with what it decided and what it gave up.",
    },

    {
      type: "heading",
      id: "weight",
      text: "Keeping it lightweight",
    },
    {
      type: "paragraph",
      text: "A process like this is heavy if you try to do everything. It is built to start small.",
    },
    {
      type: "list",
      items: [
        "**Five documents to begin with:** product context, problem framing, stakeholder map, requirements and decision log. The others, such as the accessibility checklist or the handoff spec, are added when a stage needs them.",
        "**The AI writes the first version.** For example, I paste in my kick-off notes and get back a stakeholder map with roles, decision rights and the gaps marked. I correct it instead of writing it from a blank page.",
        "**The rules check themselves.** For example, a skill without a “when not to use” line, a broken link or a colour pair below the contrast minimum fails the check, so nobody has to remember to look.",
        "**No document without a reader.** The stakeholder feedback log, for example, is only made when several stakeholders send conflicting comments, and case study notes only if I plan to publish.",
      ],
    },
    {
      type: "paragraph",
      text: "Two parts are still manual: publishing a read-only copy to the client's tools, and logging decisions. Making those lighter is next.",
    },
  ],
};
