import type { BlogPost } from "./types";

export const howIWorkWithAi: BlogPost = {
  slug: "how-i-work-with-ai",
  title: "How I work with AI: a template for design projects",
  tabTitle: "How I work with AI",
  excerpt:
    "I start design projects from a template where AI drafts, I decide and real people test. It holds written context, checks the AI cannot skip and a record of who decided what. This post explains what is in it, how I use it and what it does not prove yet.",
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
      text: "When I built the agent run review screen, I wrote the rules for the AI agent before I wrote any code: what it may do, what it may not, and one rule above the others, no claim without a source. Writing them felt like design work. Deciding what a machine may claim is the same kind of judgment as deciding what a screen may claim.",
    },
    {
      type: "paragraph",
      text: "That idea grew into a template I now start design projects from. It is meant for public sector and B2B work, where accessibility and security are requirements and many people have a say. This post explains what is in it, how I use it and what it does not prove yet.",
    },

    {
      type: "heading",
      id: "idea",
      text: "The idea: AI drafts, I decide, real people test",
      navLabel: "The idea in one line",
    },
    {
      type: "paragraph",
      text: "AI is good at structure and first drafts. It is not good at deciding, and it cannot be the user. So the work is split into three roles.",
    },
    {
      type: "list",
      items: [
        "**AI drafts.** Structure, first versions, summaries of my notes and checks against criteria I have set.",
        "**I decide.** The direction, the trade-offs, what is shared and what ships.",
        "**Real people test.** User testing that includes users with access needs, security review and legal advice. AI does not stand in for any of them.",
      ],
    },
    {
      type: "paragraph",
      text: "The split matters most where the stakes are high. In a public sector service I need to be able to say what was checked, by whom, and what was only assumed.",
    },

    {
      type: "heading",
      id: "context",
      text: "Written context beats a clever prompt",
      navLabel: "Written context beats a prompt",
    },
    {
      type: "paragraph",
      text: "An AI assistant starts every session knowing nothing about the project. Without written context it fills the gaps with generic guesses, and the result could belong to any product.",
    },
    {
      type: "paragraph",
      text: "So each client project gets its own private workspace, created from the template. It holds short documents that the AI reads before it helps: who the product is for, the problem written as a user situation with no solution inside it, who decides what, what the product must do, and a log of decisions. I paste in my raw notes, the AI drafts, and I correct. Anything it cannot find in my material is marked as a gap, not guessed.",
    },
    {
      type: "paragraph",
      text: "The workspace is mine, not the client's. I never put it in the client's repository. If the client wants a document from it, such as the decision log, I hand that file over.",
    },

    {
      type: "heading",
      id: "process",
      text: "How a project goes",
    },
    {
      type: "paragraph",
      text: "Six stages. Each has a skill, which is a set of instructions written for the AI, and a document that holds the result.",
    },
    {
      type: "findings",
      items: [
        {
          title: "Frame the problem",
          body: "I quote the request as it was handed to me, then write the problem as a situation a user is in. If a solution is hiding inside it, I rewrite it.",
        },
        {
          title: "Understand the people",
          body: "A stakeholder map shows who decides what. Most disagreements only show up as the project goes on, so at the start what matters is knowing who has the final say when they do. Conflicts are added side by side as they appear. I do not let the AI resolve them.",
        },
        {
          title: "Design",
          body: "Flows come with error paths and every screen state. The AI starts each state as missing, and only I can mark it as designed.",
        },
        {
          title: "Check",
          body: "Accessibility, security and privacy, and a review of which choices were left at default. Contrast is calculated by a script, never estimated.",
        },
        {
          title: "Hand off",
          body: "A handoff names what is final, who approved it and what each vendor provides, so nothing is left to guess.",
        },
        {
          title: "Record and reflect",
          body: "Decisions are logged with who decided and why. At the end, the log feeds a case study with the confidential details removed.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Between checking and handing off, real people take over: user testing that includes users with access needs, security review and legal advice. The template makes room for that step. It never replaces it.",
    },

    {
      type: "heading",
      id: "limits",
      text: "The limits I do not bend",
      navLabel: "Limits I do not bend",
    },
    {
      type: "list",
      items: [
        "**A design is never called accessible, compliant or tested.** Each check ends as pass, fail or cannot tell from a design. A clean result means no fails found in what was shown, nothing more.",
        "**Every claim is labelled.** Evidence with a source, or a gap. No invented quotes, research or numbers.",
        "**Client data stays out.** No real names, personal data or confidential figures in prompts or files. I use placeholders.",
        "**Decisions are recorded by role,** not by name.",
      ],
    },
    {
      type: "paragraph",
      text: "In client projects I use AI only when the client allows it, and I find that out before the work starts. Some clients, especially in the public sector, also limit where their material may be stored. The project config asks about both on day one.",
    },

    {
      type: "heading",
      id: "truth",
      text: "Where the documents live",
    },
    {
      type: "paragraph",
      text: "The documents are Markdown files in Git, which gives me history and one source of truth. If the team reads them somewhere else, such as Confluence, that copy is read-only. Jira stays where it is: tickets need owners and status, and Git is no good for that.",
    },
    {
      type: "paragraph",
      text: "At the end of a project I deliver the final versions to the client, because they should not depend on my private repository for their own project history. The cost of this setup is that publishing a copy is manual. I have not automated it yet.",
    },

    {
      type: "heading",
      id: "checks",
      text: "How the rules stay true",
    },
    {
      type: "paragraph",
      text: "A rule written in a file is easy to break quietly. The main rules file grows too long, a skill's description stops it from loading, a colour change drops below the contrast minimum. So the repository checks itself. One script runs on every push and fails when something is wrong, whether the change was made by me or by the AI.",
    },
    {
      type: "paragraph",
      text: "The same thinking decided how I handle design quality. I first planned a list of banned styles to keep AI work from looking generic. I dropped it. A ban list puts the banned thing in front of the model, and it goes out of date. I now give the AI annotated examples of good work from my own projects, each with what it decided and what it gave up.",
    },

    {
      type: "heading",
      id: "unknown",
      text: "What I do not know yet",
    },
    {
      type: "paragraph",
      text: "This is a first version, and I have not used it on a real project yet. The examples in it are fictional. The tests that check whether each skill loads when it should are written but not run. And the accessibility checks are design-stage reviews, not audits. They do not replace testing with assistive technology, or user testing with people who have access needs.",
    },
    {
      type: "paragraph",
      text: "My next step is to use it on one real project, with the client's permission, and change whatever does not survive the first week.",
    },
    {
      type: "quote",
      text: "AI makes drafting faster. It does not make deciding, testing or being accountable faster, and that is the part I want to keep.",
    },
  ],
};
