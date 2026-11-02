import type { BlogPost } from "./types";

export const aiAdoptionStrategy: BlogPost = {
  slug: "ai-adoption-starts-with-strategy",
  title: "AI adoption starts with strategy",
  excerpt:
    "Organizations that benefit from AI usually begin by defining the problem they want to solve, test their ideas in small experiments and involve their employees early. This article goes through these three phases. Part 2 looks at how to make the change last.",
  date: "2026-10-24",
  tags: ["AI adoption", "Strategy", "Change management"],
  series: {
    name: "AI adoption",
    part: 1,
    subtitle: "Direction, experiments and people",
  },
  body: [
    {
      type: "paragraph",
      text: "When I worked on an AI search for a university, the hardest issue we ran into had little to do with the model itself. The search could show private staff information to visitors who weren't logged in, and solving that required a design decision and an agreement within the team on how to handle privacy.",
    },
    {
      type: "paragraph",
      text: "I've seen similar situations in many projects over the past ten years. The technology usually works well enough. The difficulties come from unclear goals, experiments that don't lead anywhere, and people who haven't been involved in the change. With AI, these problems show up faster, because getting started is so easy: licenses are cheap and pilots are quick to launch.",
    },
    {
      type: "paragraph",
      text: "I find it useful to think about AI adoption in four phases. This article covers the first three.",
    },

    {
      type: "heading",
      id: "phase-1",
      text: "Phase 1: Define the direction before choosing the technology",
      navLabel: "Phase 1: Define the direction",
    },
    {
      type: "paragraph",
      text: "AI is useful only when you know which business or societal problem you want it to help with. Starting from the problem also protects you from AI hype, where an organization buys licenses and tries out tools without any measurable benefit.",
    },
    { type: "paragraph", text: "I usually start with three questions." },
    { type: "subheading", text: "Where are we now?" },
    {
      type: "paragraph",
      text: "How good is our data, what platforms do we have, and what skills do our people have? Some organizations already have a well-functioning data platform and can focus on putting it to use. Others need to fix their data first, and that work can't be skipped.",
    },
    { type: "subheading", text: "Where do we want to be in three to five years?" },
    {
      type: "paragraph",
      text: "Scenario work helps here. Look at how your field is likely to change and what role AI might play in it. The outcome can be a short vision statement that people remember, for example: *\"With AI, we will become the leading provider of sustainable [your industry].\"*",
    },
    { type: "subheading", text: "How does this connect to the goals we already have?" },
    {
      type: "paragraph",
      text: "An AI strategy that lives in its own slide deck is easy to forget. It works better when it's tied to the organization's annual goals and the metrics people already follow. OKRs are one way to do this.",
    },
    { type: "subheading", text: "A short introduction to OKRs" },
    {
      type: "paragraph",
      text: "OKR stands for Objectives and Key Results. It's a goal-setting method with three levels:",
    },
    {
      type: "list",
      items: [
        "**Objective** describes where you want to go. It's written in words rather than numbers and should feel worth pursuing. Most teams have three to five objectives at most.",
        "**Key results** tell you whether you got there. Each one is measurable, and there are usually three to five per objective.",
        "**Initiatives** are the concrete things you do to reach the key results. You can change them during the quarter if they aren't working.",
      ],
    },
    {
      type: "okr",
      title: "The OKR model, by example",
      subtitle: "Example: rolling out AI at a university, one quarter",
      objective: "Students and staff use AI confidently and responsibly in their studies and teaching.",
      keyResults: [
        { value: "70%", label: "of teachers have completed an AI fundamentals course" },
        { value: "15", label: "courses have piloted AI-assisted teaching methods" },
        { value: "3.1 → 3.8", label: "how useful students find AI to be, in a survey (scale 1–5)" },
      ],
      initiatives: [
        "Three workshops across faculties",
        "An idea hub for teachers' pilots",
        "An AI champion in every faculty",
        "Guidelines for responsible AI use",
      ],
      note: "Results are reviewed and objectives refreshed roughly every three months.",
    },
    {
      type: "paragraph",
      text: "People often write initiatives as key results by mistake. \"Run AI training sessions\" is an initiative, because you can complete it even if nobody attends. \"70% of teachers complete an AI fundamentals course\" is a key result, because it measures what happened.",
    },
    {
      type: "paragraph",
      text: "OKRs are usually set for one quarter at a time and shared openly across the organization. They're normally kept separate from bonuses, so that people are willing to set ambitious goals. They also differ from KPIs: KPIs follow ongoing performance, while OKRs are used to steer a specific change.",
    },

    {
      type: "heading",
      id: "phase-2",
      text: "Phase 2: Experiment on a small scale and show results early",
      navLabel: "Phase 2: Experiment small",
    },
    {
      type: "paragraph",
      text: "Organizations often get stuck in long planning phases, or they run many small pilots that have little to do with each other. A better approach is to split a large goal into small experiments that can show their value quickly and don't require a big investment up front.",
    },
    { type: "paragraph", text: "Some practices that help:" },
    {
      type: "list",
      items: [
        "**An innovation hub** gives employees a place to submit ideas, and a simple process for evaluating them and choosing which ones to try.",
        "**Testing in a real environment** brings out problems and side effects early. One option is a comparison pilot, where one team keeps working as before and another uses an AI-assisted approach. Agree on the metrics before the pilot starts.",
        "**Choosing pilots where results are easy to see**, such as raw-material use or maintenance, makes it easier to decide whether to continue from a proof of concept to an MVP.",
      ],
    },
    {
      type: "paragraph",
      text: "In my own projects, releasing a small, useful version early and improving it based on feedback has worked much better than trying to deliver everything at once.",
    },

    {
      type: "heading",
      id: "phase-3",
      text: "Phase 3: Involve people from the start",
      navLabel: "Phase 3: Involve people",
    },
    {
      type: "paragraph",
      text: "Technology changes rarely fail for technical reasons. More often, people resist the change, worry about what it means for their job, or simply don't know enough about it. For this reason, AI adoption needs to involve the whole organization and not only the IT department.",
    },
    {
      type: "list",
      items: [
        "**Workshops and interviews early on.** When people can tell you what slows them down in their daily work, they are more likely to support the change.",
        "**Psychological safety.** AI can make a team's work more visible. People need to trust that this information won't be used against them, otherwise they stop sharing what they know.",
        "**AI literacy for everyone.** Employees in all roles should understand how data and AI will affect their own work. An internal training program, such as an AI academy, is one way to provide this.",
      ],
    },

    {
      type: "heading",
      id: "next",
      text: "Next: making the change last",
    },
    {
      type: "paragraph",
      text: "When the direction is clear, experiments are running and people are involved, the next challenge is turning a successful pilot into a normal way of working. I'll cover that in [Part 2](/blog/from-ai-pilot-to-everyday-practice).",
    },
  ],
};
