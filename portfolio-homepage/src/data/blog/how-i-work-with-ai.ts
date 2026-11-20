import type { BlogPost } from "./types";

export const howIWorkWithAi: BlogPost = {
  slug: "how-i-work-with-ai",
  title: "How I work with AI: a template for design projects",
  tabTitle: "How I work with AI",
  excerpt:
    "Plain commands are no longer enough when AI is used in demanding design work. To keep the ways of working efficient but the whole under control, I built a ready-made context template for my projects. Here I describe my six-stage process and the division of work: where AI helps most and where a person's insight and responsibility are needed.",
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
      text: "At first I started a new conversation with the AI by writing a command straight away and refining it as the conversation went on. I learned quite quickly, though, that in the end the result depends far more on what the AI knows about the project than on how the request is phrased. I then started building a new approach through a few projects of my own (among them [my design system](https://design-system-use-case.vercel.app/) and [an agent run review screen](https://demo-t-example.vercel.app/)). I wrote the rules and the context for the AI first: what the product is, which rules apply, and what the AI may and may not do. The results were already considerably better.",
    },
    {
      type: "paragraph",
      text: "That became a template that now works well as a starting point for new projects. The idea was to build it for projects where accessibility and security play an important role and there are several stakeholders. These are often public sector projects and projects in critical industries, such as banking, insurance, healthcare and security.",
    },
    {
      type: "paragraph",
      text: "In client projects I use AI only when the client allows it, and I find that out before the work starts. Some clients also limit where their material may be stored.",
    },

    {
      type: "heading",
      id: "roles",
      text: "What AI does well, and where people are needed",
      navLabel: "AI and people",
    },
    {
      type: "paragraph",
      text: "Good context also makes the division of work clearer: AI works well in some things, and in others it still needs a person's decisions and guidance.",
    },
    {
      type: "subheading",
      text: "Where it makes sense to use AI",
    },
    {
      type: "list",
      items: [
        "**Turning raw notes into a structured first draft.** Stakeholder maps, requirements and descriptions of user paths come together quickly.",
        "**Summarising long material** and finding what is missing from it.",
        "**Checking consistency.** Does every screen have all its states, and is a term used the same way everywhere.",
        "**Producing options** to choose from.",
        "**Repetitive work,** such as tables, formatting and documentation.",
      ],
    },
    {
      type: "paragraph",
      text: "Drafts and summaries still always have to be checked, not accepted blindly, because the AI can overlook important points. That is why I usually write down my own key points before I ask the AI to summarise or draft anything. That way I notice at once if something important is missing from its version.",
    },
    {
      type: "subheading",
      text: "Where people's decisions and guidance are needed",
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
      text: "In my view this split works well, and it makes sure the designer's observations and handwriting really remain in the result.",
    },

    {
      type: "heading",
      id: "context",
      text: "Project context in writing",
    },
    {
      type: "paragraph",
      text: "The AI knows nothing about the project or the brand when a new session starts. Without written context it guesses the missing pieces from its training data and probabilities, and the end product easily resembles any other similar solution, on top of which the business goals and the client-specific requirements are left entirely unaddressed.",
    },
    {
      type: "paragraph",
      text: "That is why I now create a private workspace (a Git repository) for every new project from a template of my own. Short documents are added to the workspace, and the AI reads them before the work starts: who the product is for, the problem as a user situation, who decides what, the requirements and a decision log. I also add my raw notes, which the AI drafts from and I correct. Whatever cannot be found in the notes is marked as something to find out (a gap).",
    },
    {
      type: "paragraph",
      text: "The idea is that the workspace is for my own working and documentation, and I do not put it in the client's repository unless that is specifically requested.",
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
          meta: [
            { label: "Skill", values: ["problem-framing"] },
            { label: "Artefacts", values: ["00 product context", "01 problem framing"] },
          ],
          body: "The request is turned into a user situation with no solution inside it, and what is known and what is missing is listed. I write the request down as it was handed to me and aim to anonymise it, so that neither the client nor any person is named. Client information stays confidential.",
        },
        {
          title: "Understand the people",
          meta: [
            { label: "Skill", values: ["stakeholder-map"] },
            { label: "Artefacts", values: ["02 stakeholder map", "03 requirements spec"] },
          ],
          body: "Work out who decides what, and record the requirements with their owners. Most disagreements appear only as the project goes on, so at the start what matters is knowing who has the final say. Conflicts are added side by side as they appear, and the AI does not resolve them.",
        },
        {
          title: "Design",
          meta: [
            { label: "Skill", values: ["user-flow-and-states"] },
            { label: "Artefacts", values: ["04 user flows and states", "07 design system rules"] },
          ],
          body: "User paths are mapped step by step with error situations, and every screen gets all its states listed against the design system rules. The AI marks each state as missing until I confirm it is designed.",
        },
        {
          title: "Check",
          meta: [
            { label: "Skills", values: ["a11y-gate", "security-privacy-brief", "sameness-check"] },
            { label: "Artefacts", values: ["05 accessibility checklist", "06 security and privacy brief"] },
          ],
          body: "Accessibility, data and permissions are reviewed, along with which choices were left at default. Contrast is calculated by a script. This is a design-stage review, not an audit.",
        },
        {
          title: "Hand off",
          meta: [
            { label: "Skill", values: ["procurement-ready-handoff"] },
            { label: "Artefacts", values: ["08 handoff spec", "09 stakeholder feedback log"] },
          ],
          body: "States what is final, who approved it and what each vendor provides, and keeps review comments together with who decides on them.",
        },
        {
          title: "Record and reflect",
          meta: [
            { label: "Skills", values: ["decision-log", "nda-safe-case-study"] },
            { label: "Artefacts", values: ["10 decision log", "11 case study notes"] },
          ],
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
      text: "User paths and challenging paths",
      navLabel: "Challenging paths",
    },
    {
      type: "paragraph",
      text: "I usually start with a path where the user has successfully reached their goal. Let us think about which steps the user goes through to reach it, and how the system responds at each step. Only then do I go through the path step by step and ask which parts could be challenging for some users.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Draw the successful path.** Each step shows what the user does and how the system responds.",
        "**Ask for each step who might find it challenging, and why.** The same path can be smooth for one user and unbearably hard for another.",
        "**Finally, add the other paths and states:** error messages, more time, another way to do the step, and what happens when something fails.",
      ],
    },
    {
      type: "paragraph",
      text: "A path is the route a user takes towards their goal, and a state tells which situation a single screen is in. Other paths include another way to do the same step and what happens when something fails. States include an error message, a loading view, an empty view and extra time.",
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
        "**Client data stays out.** No real names, personal data or confidential figures in prompts or files. Substitute names and figures are used in their place.",
        "**Decisions are recorded by role,** not by name.",
      ],
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
      text: "How they reach the client depends on the client's own documentation practices and tools. If the client works in Confluence, the documents go there as pages. Another client may want PDF files, or a folder in their own shared drive. The documentation is delivered in the form and the place the client requires.",
    },
    {
      type: "paragraph",
      text: "To keep the client's copy from going out of date, each delivered version is numbered and dated, and a new version is delivered whenever a document changes. Old versions stay available. If the client wants to maintain a document themselves, we agree at the start that their version is the original from then on.",
    },
    {
      type: "paragraph",
      text: "This also pays off later: both AI and ordinary search find the documents easily, and the versions show how things have progressed over the course of the project or product development. That is why it is important to store documents in the right folders and years, for example 2026/User research/Name of the research theme and date.",
    },

    {
      type: "heading",
      id: "checks",
      text: "Automated checks",
    },
    {
      type: "paragraph",
      text: "Rules are easy to break without noticing. So the project files have an automatic check that runs whenever they change. It flags, for example, a main AI instruction file that has grown too long, a broken link or a colour contrast that is too weak. It works the same whether I or the AI made the change.",
    },
    {
      type: "paragraph",
      text: "To guide the AI I do not rely on a list of what it must not do alone. Instead I tell it which constraints apply to the design task: the brand, the technology, accessibility and the business, meaning what the product needs the user to do. I also give it examples of successful design from comparable projects, which I use as a benchmark. The examples do not have to be my own. For the examples where the information can be found, it also helps to say what was decided and what was given up, so the AI understands the reasons and not only the result.",
    },
    {
      type: "paragraph",
      text: "The importance of constraints is also the subject of [Why Your AI Prompts Aren't Working — And How to Fix Them as a Designer](https://medium.com/design-bootcamp/why-your-ai-prompts-arent-working-and-how-to-fix-them-as-a-designer-18d26592290f) (Medium / Design Bootcamp, 2026). According to the article, constraints do not limit the AI's creativity but make it useful, and the more specifically you state them in the prompt, the better the result fits the problem you are solving.",
    },

    {
      type: "heading",
      id: "weight",
      text: "Keeping it lightweight",
    },
    {
      type: "paragraph",
      text: "A process like this can become heavy if you try to do everything at once. You can still get started in a smaller way:",
    },
    {
      type: "list",
      items: [
        "**Five documents to begin with:** product context, problem framing, stakeholder map, requirements and decision log. The others, such as the accessibility checklist or the handoff spec, are added when a stage needs them.",
        "**The AI writes the first version.** For example, I paste in my kick-off notes and get back a stakeholder map with roles, decision rights and the gaps marked. I correct it instead of writing it from a blank page.",
        "**The rules check themselves.** If a broken link slips into the text or a colour contrast is too weak, the automatic check flags it. I do not have to remember to look by hand.",
        "**No document without a reader.** A document is made only when someone will use it. The feedback log, which records stakeholders' comments and who decides on them, is made only when several stakeholders give conflicting feedback. Case study notes, which become a portfolio write-up, are made only if I plan to publish the project.",
      ],
    },
    {
      type: "paragraph",
      text: "The client's tools and the logging of decisions are done by hand. These too can be made lighter in various ways when needed:",
    },
    {
      type: "list",
      items: [
        "**Deliver only the documents that have changed,** and only at agreed milestones, such as after the kick-off, the review and the handoff, not after every small change.",
        "**Ask the AI to prepare the export version.** It formats the Markdown document into the form the client's tool or a PDF requires, and you check the result.",
        "**Log a decision in one line as soon as it is made:** the date, the decider's role, the decision and the reason. The AI can draft the line from the meeting notes, and you only approve or correct it.",
        "**Log only decisions that are hard to undo or that affect others.** Small choices do not need an entry of their own.",
      ],
    },
    {
      type: "paragraph",
      text: "The purpose of the template is not to produce more documents but to make sure the AI knows what the project is about and that the designer decides what is done with it. Start small: one project, a few documents and your own notes first. The rest is added as it is needed.",
    },
  ],
};
