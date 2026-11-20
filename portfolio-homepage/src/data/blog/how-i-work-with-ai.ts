import type { BlogPost } from "./types";

export const howIWorkWithAi: BlogPost = {
  slug: "how-i-work-with-ai",
  title: "How I work with AI: a template for design projects",
  tabTitle: "How I work with AI",
  excerpt:
    "Plain prompts are not enough when AI is used in demanding design work. Here I describe how I use AI in research and design, how I built a context template for my projects, and where decisions and responsibility stay with me.",
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
      type: "heading",
      id: "start",
      text: "Starting point",
    },
    {
      type: "paragraph",
      text: "I used to work like this: I started a conversation with the AI by writing a prompt straight away and refined it as the conversation went on. I soon learned, however, that the result depends far more on what the AI knows about the project than on how the prompt is phrased.",
    },
    {
      type: "paragraph",
      text: "I began building a new approach in my own projects, among them [my design system](https://design-system-use-case.vercel.app/) and [an agent run review screen](https://demo-t-example.vercel.app/). I wrote the AI the context and the rules first: what the product is, what the AI may do and what it may not. The results were already considerably better.",
    },
    {
      type: "paragraph",
      text: "That became a template I now use as the starting point for new projects. I made it especially for projects where accessibility and security are important and there are several stakeholders. These are often public sector projects and projects in banking, insurance, healthcare and security.",
    },
    {
      type: "paragraph",
      text: "In client projects I use AI only when the client has allowed it. I find that out before the work starts, and at the same time we agree which AI service may be used and where the material may be stored.",
    },

    {
      type: "heading",
      id: "research",
      text: "AI in research",
    },
    {
      type: "paragraph",
      text: "In research, AI speeds up preparation and structuring the most. With it I draft interview guides and workshop materials and plan the stages and schedule of the work. I also use it to summarise interviews. Before I give interview material to the AI, I remove names and other identifying details.",
    },
    {
      type: "paragraph",
      text: "When summarising, I write down my own observations first. The AI finds recurring themes quickly, but it was not in the interview. Tone, hesitation and what was left unsaid remain for me to interpret.",
    },
    {
      type: "paragraph",
      text: "The AI also helps with frameworks. The first version of a service blueprint, a roadmap and other templates comes together quickly, but the content comes from research and from stakeholders.",
    },

    {
      type: "heading",
      id: "design",
      text: "AI in design",
    },
    {
      type: "paragraph",
      text: "When I draw user paths, the AI is a good sparring partner. When a path has to be opened up step by step, it helps me find the branches and error situations that are easily forgotten. In ideation I ask it for variations, meaning several ways to solve the same screen or step. I choose from them and combine them. Sometimes ideation still starts on paper with a pencil.",
    },
    {
      type: "paragraph",
      text: "I build prototypes and design system components with the AI all the way to code, and I also use it to maintain the design system. A working prototype shows straight away whether the plan holds up in real use.",
    },
    {
      type: "paragraph",
      text: "I use Figma and Claude Design, but the tool is a side issue for me. What matters is that the work gets done.",
    },

    {
      type: "heading",
      id: "roles",
      text: "Division of work: AI and people",
      navLabel: "AI and people",
    },
    {
      type: "paragraph",
      text: "Good context also makes the division of work clearer. In some things the AI works well, and in others it still needs a person's decisions and guidance.",
    },
    {
      type: "subheading",
      text: "Where it makes sense to use AI",
    },
    {
      type: "list",
      items: [
        "**First draft.** A structured stakeholder map, requirements and a description of user paths come out of raw notes quickly.",
        "**Summarising.** Summarising long material and finding what is missing from it.",
        "**Consistency.** Does every screen have all its states, and is a term used the same way everywhere?",
        "**Options.** Several solutions to choose from.",
        "**Repetitive work.** Tables, formatting and documentation.",
      ],
    },
    {
      type: "paragraph",
      text: "Drafts and summaries still always have to be checked, because the AI can overlook important things. That is why I usually write down my own key points before I ask the AI to summarise or draft anything. That way I notice at once if something important is missing from its version.",
    },
    {
      type: "subheading",
      text: "Where people are needed",
    },
    {
      type: "list",
      items: [
        "**Direction and trade-offs.** What to build, what to leave out and what is good enough.",
        "**Understanding people and context.** Empathy towards users, who really decides, what a user experiences and what the organisation can accept.",
        "**Visual finishing.** The end result has to look and sound like the brand and feel made for this particular product and its users.",
        "**Accountability.** Accessibility, security and legal questions need a person who answers for them.",
        "**Testing with real users,** including users with access needs. AI cannot be the user.",
      ],
    },
    {
      type: "paragraph",
      text: "In my view this split works well and makes sure that the designer's observations and handwriting remain in the result.",
    },

    {
      type: "heading",
      id: "context",
      text: "Project context in writing",
    },
    {
      type: "paragraph",
      text: "The AI knows nothing about the project or the brand when a new session starts. Without written context it guesses the missing pieces from its training data and probabilities, and the result easily resembles any similar solution. In addition, the business goals and the client-specific requirements are left entirely unaddressed.",
    },
    {
      type: "paragraph",
      text: "That is why I create a private workspace (a Git repository) for every new project from my own template. Short documents are added to the workspace, and the AI reads them before the work starts: who the product is for, the problem as a user situation, who decides what, the requirements and a decision log. I also add anonymised raw notes, from which the AI drafts a first version and I correct it. Whatever cannot be found in the notes is marked as something to find out, an open question.",
    },
    {
      type: "paragraph",
      text: "The workspace is for my own working and documentation, and I do not put it in the client's repository unless that is specifically requested.",
    },

    {
      type: "heading",
      id: "constraints",
      text: "Constraints instead of a prohibition list",
      navLabel: "Constraints, not prohibitions",
    },
    {
      type: "paragraph",
      text: "To guide the AI I do not rely on a list of what it must not do alone. Instead I tell it which constraints apply to the design task: the brand, the technology, accessibility and the business, meaning what the product needs the user to do.",
    },
    {
      type: "paragraph",
      text: "I also give it examples of successful design from comparable projects as a benchmark. The examples do not have to be my own. When the information can be found, I also say what was decided and what was given up, so the AI understands the reasons and not only the result.",
    },
    {
      type: "paragraph",
      text: "The importance of constraints is also the subject of the article [Why Your AI Prompts Aren't Working — And How to Fix Them as a Designer](https://medium.com/design-bootcamp/why-your-ai-prompts-arent-working-and-how-to-fix-them-as-a-designer-18d26592290f) (Medium / Design Bootcamp, 2026). According to the article, constraints do not limit the AI's creativity but make it useful. The more specifically you state them in the prompt, the better the result fits the problem you are solving.",
    },

    {
      type: "heading",
      id: "process",
      text: "Process",
    },
    {
      type: "paragraph",
      text: "The process has six stages. Each has its own instructions for the AI (a skill) and documents where the result is recorded. More detailed instructions can be found in the template on GitHub.",
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
      type: "list",
      ordered: true,
      items: [
        "**Framing the problem.** The request is turned into a user situation with no ready-made solution, and what is known and what is missing is listed. I anonymise the request before the AI handles it.",
        "**Understanding the people.** Work out who decides what, and record the requirements with their owners. Conflicts are recorded side by side as they appear, but the AI does not resolve them.",
        "**Design.** User paths are described with their error situations, and the states of each screen are listed against the design system rules. The AI marks the states as missing until I confirm them.",
        "**Checking.** Accessibility, data and permissions are reviewed, along with the choices that were left as defaults. Contrast is calculated by a script. This is a design-stage review, not an audit.",
        "**Handing off.** States what is final, who approved it and what each vendor provides.",
        "**Recording and reflecting.** Decisions are recorded so that it shows who decided and why. If the project is published, the log is finally turned into a case study with no confidential information.",
      ],
    },
    {
      type: "paragraph",
      text: "Between checking and handing off, responsibility passes to people: user testing (including users with access needs), security review and legal assessment.",
    },

    {
      type: "heading",
      id: "flows",
      text: "User paths and challenging paths",
      navLabel: "Challenging paths",
    },
    {
      type: "paragraph",
      text: "A path is the route a user takes towards their goal. A state tells which situation a single screen is in, for example an error message, a loading view or an empty view. I work with paths in three steps:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**The successful path.** First I draw a path where the user reaches their goal. Each step shows what the user does and how the system responds.",
        "**Challenging points.** For each step I think about who might find it difficult and why. The same path can be smooth for one person and unbearably hard for another.",
        "**Other paths and states.** Finally, error messages, more time, another way to do the step and what happens when something fails are added.",
      ],
    },
    {
      type: "paragraph",
      text: "For example, in a public service the step “sign in with strong identification” can be easy for a user with a banking app and a smartphone, but a barrier for those without them. A long form with a time limit can suit most people and be impossible for a user who needs more time or uses a screen reader.",
    },
    {
      type: "paragraph",
      text: "For each such step I write down who might struggle and what the design offers instead. If I do not know, I mark it as an open question and find out.",
    },

    {
      type: "heading",
      id: "boundaries",
      text: "Ground rules and security",
    },
    {
      type: "list",
      items: [
        "**No inflated claims.** A design is not called accessible, compliant or tested. Each check ends as pass, fail or cannot tell from a design.",
        "**Evidence or open question.** Every claim is labelled as evidence with a source, or as an open question. No invented quotes, research results or numbers.",
        "**No personal data for the AI.** No real names, personal data or confidential figures in prompts or files. Substitute names and figures are used in their place.",
        "**Only an approved service.** I handle other project information, such as requirements and the security brief, only in an AI service the client has approved.",
        "**Role, not name.** Decisions are recorded by role. If a role alone identifies a person, I use a more general description.",
        "**Case study only with permission.** A case study of a project is published only with the client's permission and without confidential information.",
      ],
    },

    {
      type: "heading",
      id: "documentation",
      text: "Documentation",
    },
    {
      type: "paragraph",
      text: "The documents are Markdown files in Git, so they have a history and one source of truth. They are delivered to the client according to the client's own practices: as Confluence pages, as PDF files or as a folder on the client's shared drive.",
    },
    {
      type: "paragraph",
      text: "To keep the client's documentation from going out of date, delivered versions are numbered and dated. A new version is delivered to the client's tool whenever a document changes, and old versions are kept. If the client wants to maintain a document themselves, we agree at the start that their version is the official version from then on.",
    },
    {
      type: "paragraph",
      text: "Well-organised documents are easy to find later with AI or ordinary search, and they show how things have progressed. That is why I organise them into folders by year and topic, for example 2026/User research/Research theme and date.",
    },

    {
      type: "heading",
      id: "checks",
      text: "Automated checks",
    },
    {
      type: "paragraph",
      text: "Rules are easy to break without noticing. So an automatic check runs on the project files whenever they change. It works the same whether I or the AI made the change. It checks, for example, these things:",
    },
    {
      type: "list",
      items: [
        "**Length of the main instruction file.** This is the file the AI reads at the start of every task. The longer it is, the more it uses up the AI's context, meaning the information the AI can take into account at once, and the more likely it is that important rules get buried among the rest of the text. That is why the main instruction file has to stay concise. The basis is the [Claude Code documentation](https://code.claude.com/docs/en/memory), according to which a long instruction file uses up context and reduces how well the instructions are followed.",
        "**Broken links.** A link that leads nowhere leaves the reader or the AI without the information the document promises. The AI may then start guessing the missing content.",
        "**Colour contrast.** The contrast ratio is calculated and compared with the requirements of the accessibility standard ([WCAG](https://www.w3.org/TR/WCAG22/#contrast-minimum)), because a contrast that is too weak makes text harder to read, especially for people with low vision.",
      ],
    },

    {
      type: "heading",
      id: "weight",
      text: "Keeping the process lightweight",
      navLabel: "Keeping it lightweight",
    },
    {
      type: "paragraph",
      text: "A process like this can get heavy if you try to do everything at once. You can still get started with something smaller:",
    },
    {
      type: "list",
      items: [
        "**Five documents to begin with.** Product context, problem framing, stakeholder map, requirements and decision log. The others, such as the accessibility checklist or the handoff document, are added when a stage needs them.",
        "**The AI writes the first version.** For example, I paste in my anonymised kick-off notes and get back a stakeholder map with the roles, decision rights and open questions marked. I correct it instead of writing it from a blank page.",
        "**Some of the rules check themselves.** If a broken link slips into the text or a colour contrast is too weak, the automatic check flags it. I do not have to remember to check these by hand.",
        "**No document without a reader.** A document is made only when someone really needs it. The feedback log, for example, is made only when several stakeholders give conflicting feedback, and case study notes only if I plan to publish the project.",
      ],
    },
    {
      type: "paragraph",
      text: "Delivering to the client's tools and logging decisions are manual work, but they too can be made lighter:",
    },
    {
      type: "list",
      items: [
        "**I deliver only the documents that have changed** and only at agreed milestones, such as after the kick-off, the review and the handoff, not after every small change.",
        "**I ask the AI to prepare the export version.** It formats the Markdown document into the form the client's tool or a PDF requires, and I check the result.",
        "**I log a decision in one line as soon as it is made:** the date, the decider's role, the decision and the reason. The AI can draft the line from the meeting notes, and I approve or correct it.",
        "**I log only decisions that are hard to undo or that affect others.** Small choices do not need an entry of their own.",
      ],
    },

    {
      type: "heading",
      id: "closing",
      text: "In closing",
    },
    {
      type: "paragraph",
      text: "The purpose of the template is not to produce more documents. It is to make sure the AI knows what the project is about and that the designer decides what is done with it. Start small: one project, a few documents and your own notes first. The rest is added as it is needed.",
    },
  ],
};
