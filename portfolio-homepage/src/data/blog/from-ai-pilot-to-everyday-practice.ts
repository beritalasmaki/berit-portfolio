import type { BlogPost } from "./types";

export const aiPilotToEverydayPractice: BlogPost = {
  slug: "from-ai-pilot-to-everyday-practice",
  title: "From AI pilot to everyday practice",
  excerpt:
    "Many AI pilots stop after the first phase because the processes, funding and roles around them stay the same. This article describes how to build a framework for scaling, and five practical ways to keep teams using it.",
  date: "2026-10-31",
  tags: ["AI adoption", "Scaling", "Change management"],
  series: {
    name: "AI adoption",
    part: 2,
    subtitle: "Scaling and keeping the model in use",
  },
  body: [
    {
      type: "paragraph",
      text: "In a university project I worked on, some developers built their own UI components instead of using the ones in the design system. They were under a tight deadline, and making something new felt quicker than looking for the right component. Rather than treating it as a rule violation, I tried to make the existing components easier to find, and brought in the design system team when a new component was actually needed.",
    },
    {
      type: "paragraph",
      text: "I think the same applies to AI. Teams will use a shared way of working when it's easier than doing things their own way.",
    },
    {
      type: "paragraph",
      text: "In [Part 1](/blog/ai-adoption-starts-with-strategy), I went through the first three phases of AI adoption: defining the direction, experimenting on a small scale and involving people. This part covers the fourth phase, which is where many organizations run into trouble.",
    },

    {
      type: "heading",
      id: "phase-4",
      text: "Phase 4: Build a framework that can scale",
      navLabel: "Phase 4: Build to scale",
    },
    {
      type: "paragraph",
      text: "A successful experiment is only the start. Without a path to production, much of the work done in the pilot is lost. Moving forward requires a few things:",
    },
    {
      type: "list",
      items: [
        "**Common technical foundations.** Developing, running and maintaining machine learning models needs shared standards and a playbook. This is often called MLOps. Without it, each project builds its own setup from scratch.",
        "**Changes to how work is done.** Adding a new tool to an old process seldom brings big improvements. It's worth asking whether some meetings and long backlogs could be replaced with shorter cycles of continuous iteration.",
        "**A way into daily operations.** When a service concept works, for example identifying people's need for benefits, the organization needs a model for making it part of normal operations. Legal and ethical requirements should be part of that model.",
      ],
    },
    {
      type: "paragraph",
      text: "The same thinking applies to software development. A defined approach to AI-assisted development, such as the CollabAI model, helps teams work consistently and measure the results.",
    },

    {
      type: "heading",
      id: "five-ways",
      text: "Five ways to keep the model in use",
      navLabel: "Five ways to keep it in use",
    },
    {
      type: "paragraph",
      text: "Getting teams to keep using a shared model usually takes a mix of structure, automation and culture. These five practices work in most industries.",
    },
    { type: "subheading", text: "1. Make the model part of the tools" },
    {
      type: "paragraph",
      text: "Guidelines on their own rarely change how people work. It helps to build the model into the tools teams already use.",
    },
    {
      type: "list",
      items: [
        "**Templates and automation.** Ready-made project and code templates, CI/CD pipelines and monitoring tools mean that a new AI project starts within the framework without anyone having to look up instructions.",
        "**Automatic quality checks.** Checks for ethics, security and architecture can be added to the development pipeline. A project that doesn't meet the criteria can't move on, so following the model doesn't depend on people remembering it.",
      ],
    },
    { type: "subheading", text: "2. Connect the model to decisions and funding" },
    {
      type: "paragraph",
      text: "If teams can get funding for AI experiments outside the agreed process, the model quickly loses its meaning.",
    },
    {
      type: "list",
      items: [
        "**Stage gates for ideas.** An idea moves past the proof-of-concept stage only after an agreed review.",
        "**Funding tied to the process.** Budget for the next phase is approved once the lessons, metrics and technical requirements of the previous phase have been documented and checked.",
      ],
    },
    { type: "subheading", text: "3. Measure how the model is used" },
    {
      type: "paragraph",
      text: "Measuring the accuracy of AI models is important, but you also need to know how well the development process itself is working.",
    },
    {
      type: "list",
      items: [
        "**Adoption metrics.** How many teams use the shared platform, and how quickly do projects pass the quality checks?",
        "**Regular reviews.** When AI is linked to OKRs, the reviews are a good moment to check whether teams follow the agreed framework or have built their own solutions.",
      ],
    },
    {
      type: "paragraph",
      text: "This is something I would start earlier in my own projects. Usage data shows how many people use a service, but it doesn't show whether the service helps them. That needs its own metrics, and they're easier to set up at the beginning.",
    },
    { type: "subheading", text: "4. Name owners and coaches" },
    { type: "paragraph", text: "A model that nobody is responsible for tends to be forgotten." },
    {
      type: "list",
      items: [
        "**A center of excellence.** A small team that supports other teams in applying the model, instead of doing all the work itself.",
        "**AI champions.** People in each business unit who know the framework well, help colleagues with practical questions and set an example.",
      ],
    },
    {
      type: "paragraph",
      text: "It also helps to write down why decisions were made. After I left one project, some design details were changed in ways that went against the original intent. Each change was small, but together they affected the experience. Written reasoning would have helped the team make those decisions without me.",
    },
    { type: "subheading", text: "5. Review and improve the model regularly" },
    { type: "paragraph", text: "If the model is too rigid, teams start working around it." },
    {
      type: "list",
      items: [
        "**Update the model as you learn.** When pilots such as a CollabAI way of working or a GenAI Twin experiment produce new insights, add them to the wider model.",
        "**Make feedback easy to give.** Teams should be able to say when a step in the model slows them down without adding value. When people can influence the model, they're more willing to follow it.",
      ],
    },

    { type: "heading", id: "summary", text: "Summary" },
    { type: "paragraph", text: "In the end, the series comes down to one idea:" },
    {
      type: "quote",
      text: "An experiment becomes routine only when the new way of working is easier than the old one.",
    },
    {
      type: "paragraph",
      text: "Organizations keep using frameworks when they are built into everyday tools and funding criteria. Reminders on the intranet are not enough on their own.",
    },
  ],
};
