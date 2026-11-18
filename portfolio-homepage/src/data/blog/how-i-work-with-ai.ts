import type { BlogPost } from "./types";

export const howIWorkWithAi: BlogPost = {
  slug: "how-i-work-with-ai",
  title: "How I work with AI: a template for design projects",
  tabTitle: "How I work with AI",
  excerpt:
    "My starting point for new design projects is a template where AI drafts, I decide and real people test. This post describes what it contains and how I use it.",
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
      text: "When I built the agent run review screen, I wrote the rules for the AI agent before any code: what it may do, what it may not, and one rule above the rest, no claim without a source. Deciding what a machine may claim is the same judgment as deciding what a screen may claim.",
    },
    {
      type: "paragraph",
      text: "That idea became the template I use as the starting point for new design projects. It is built for public sector and B2B work, where accessibility and security are requirements and many people have a say.",
    },

    {
      type: "heading",
      id: "roles",
      text: "Roles and responsibilities",
    },
    {
      type: "paragraph",
      text: "AI is good at structure and first drafts. It does not decide, and it cannot be the user. The work is split accordingly.",
    },
    {
      type: "list",
      items: [
        "**AI drafts.** Structure, first versions, summaries of my notes and checks against criteria I have set.",
        "**I decide.** Direction, trade-offs, and what is shared or ships.",
        "**Real people test.** User testing that includes users with access needs, security review and legal advice. AI does not replace any of them.",
      ],
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
      text: "The workspace is mine, not the client's, and never goes into the client's repository. Documents the client needs, such as the decision log, I hand over as files.",
    },

    {
      type: "heading",
      id: "process",
      text: "Process",
    },
    {
      type: "paragraph",
      text: "Six stages. Each has a skill, a set of instructions written for the AI, and a document that holds the result.",
    },
    {
      type: "findings",
      items: [
        {
          title: "Frame the problem",
          body: "I write the request down as it was handed to me, and I aim to anonymise it so that neither the client nor any person is named. Client information stays confidential. Then I describe the problem as a situation a user is in, and rewrite it if a solution is hiding inside.",
        },
        {
          title: "Understand the people",
          body: "A stakeholder map shows who decides what. Most disagreements appear only as the project goes on, so at the start what matters is knowing who has the final say. Conflicts are added side by side as they appear, and the AI does not resolve them.",
        },
        {
          title: "Design",
          body: "Flows include error paths, and every screen has all of its states. The AI marks each state as missing until I confirm it is designed.",
        },
        {
          title: "Check",
          body: "Accessibility, security and privacy, and a review of which choices were left at default. Contrast is calculated by a script. This is a design-stage review, not an audit.",
        },
        {
          title: "Hand off",
          body: "A handoff states what is final, who approved it and what each vendor provides, so nothing is left to guess.",
        },
        {
          title: "Record and reflect",
          body: "Decisions are logged with who decided and why. At the end, the log feeds a case study with the confidential details removed.",
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
      text: "User flows and hard paths",
    },
    {
      type: "paragraph",
      text: "A user flow is more than the happy path. I also map the situations where something goes wrong or is hard: error messages, a session that times out, a lost connection, and what happens when the user is not allowed to do something.",
    },
    {
      type: "paragraph",
      text: "The same path can be smooth for one user and unbearably hard for another. For each step I ask who finds it hard, for example someone with little digital experience, someone using assistive technology, someone in a hurry on a phone or someone who is interrupted halfway.",
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
      text: "The documents are Markdown files in Git, which gives history and one source of truth. If the team reads them elsewhere, such as in Confluence, that copy is read-only. Jira stays for tickets. At the end of a project I hand the final versions to the client, so their project history does not depend on my private repository.",
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
        "**Five documents to begin with.** The others are added only when someone will read and use them.",
        "**The AI writes the first version.** I give it raw notes and correct the result.",
        "**The rules check themselves,** so nobody has to remember to keep them true.",
        "**No document without a reader.** Each has a named reader and a use.",
      ],
    },
    {
      type: "paragraph",
      text: "Two parts are still manual: publishing a read-only copy to the client's tools, and logging decisions. Making those lighter is next.",
    },
  ],
};
