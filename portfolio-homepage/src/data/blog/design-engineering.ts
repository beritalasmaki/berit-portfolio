import type { BlogPost } from "./types";

export const designEngineering: BlogPost = {
  slug: "design-engineering",
  title: "Design engineering: when a designer works in code",
  tabTitle: "Design engineering: when a designer works in code",
  excerpt:
    "I studied to become a web and mobile developer, but ended up spending nine years in UX design without writing code. AI has now made programming so much more approachable that going back to code feels natural. In this post, I explain what the design engineer role means in practice, which skills matter more than coding, and how a designer can support developers' work.",
  date: "2026-11-04",
  tags: ["Design engineering", "AI tools", "Design systems"],
  body: [
    {
      type: "paragraph",
      text: "I've worked with developers for a long time. Together we've figured out how a solution should be built, what technical constraints might come up, which components already exist in the design system and what's worth building new. Still, the division of work has almost always been the same: I made the design in a design tool such as Figma, and a developer turned it into code.",
    },
    {
      type: "paragraph",
      text: "With AI, that division has started to change. I can now do part of the work directly in code: build components, make working prototypes in code, and write code that refers to the team's real components. That's why I've started moving towards the design engineer role.",
    },
    {
      type: "paragraph",
      text: "For me, it isn't an entirely new direction. It's a return to where I started.",
    },

    { type: "heading", id: "started-with-code", text: "I started with code, then became a designer", navLabel: "I started with code" },
    {
      type: "paragraph",
      text: "My first projects were fan sites for my favourite bands and video games. I made them in the 2000s, when building your own website was trendy and fairly easy. In my second year of upper secondary school, a friend asked me to join his startup because he'd seen what I had made on the computer. He gave me access to Adobe's tools and real assignments, and my own projects became more ambitious. For a while I also ran a YouTube channel and considered video editing as a career.",
    },
    {
      type: "paragraph",
      text: "I chose programming instead and studied web and mobile development at Vaasa University of Applied Sciences. There I learned how code actually gets to production and how development teams work. During my practical training, though, I got so excited about UX that I didn't write code for the next nine years.",
    },
    {
      type: "paragraph",
      text: "Those years as a UX consultant weren't time away from development. I worked with developers every day on design systems, complex expert tools and large public sector services. I just didn't write the code myself.",
    },
    {
      type: "paragraph",
      text: "Now that's realistic again, but it isn't as simple as you might think. You can't just ask Claude Code to build you a website. The work needs a working system behind it, and every team already has its own way of doing things. So I wanted to understand what the design engineer role actually requires.",
    },

    { type: "heading", id: "what-is-a-design-engineer", text: "What is a design engineer?" },
    {
      type: "paragraph",
      text: "The clearest answer I found comes from Peter Bokor. He's the Founding Design Engineer at Modeinspect and has written a ten-chapter [guide to becoming a design engineer](https://modeinspect.com/design-engineer). By his definition, a design engineer is a product designer who works in the product's real codebase. Instead of handing over pictures to be built, they deliver their work as a pull request: a proposed change that a developer reviews before it's merged into the product. Bokor sums it up briefly: *\"Ship the thing rather than describe it.\"*",
    },
    {
      type: "paragraph",
      text: "The title can be misleading, though. A design engineer can also mean a mechanical engineer who designs physical parts and products in CAD software and works with things like manufacturing tolerances. That role has nothing to do with software development. According to Bokor, it's this mechanical role that fills most of the results on LinkedIn and Indeed when you search for the title on its own. In this post, I'm talking about the software role.",
    },
    {
      type: "paragraph",
      text: "Two things in the definition matter from a designer's point of view. First, the designer still makes the design decisions, while an AI agent writes most of the code. Second, code review stays the same: a developer still decides what ends up in the product. So it isn't about bypassing developers, but about a new way of working together.",
    },
    {
      type: "paragraph",
      text: "Many people already do this work without using the title. Bokor cites the Designer Fund and Foundation Capital [AI in Design Report 2026](https://stateofaidesign.com/), which found that half of the designers surveyed had shipped AI-generated code to production. Yet only one in five called themselves a design engineer.",
    },

    { type: "heading", id: "two-steps", text: "From design to implementation: two steps", navLabel: "Design to implementation" },
    {
      type: "paragraph",
      text: "So why has the role appeared now? Modeinspect's article on [the new design ladder](https://modeinspect.com/blog/the-new-design-ladder) describes the traditional design handoff as two steps. First, the designer's idea is drawn out in a design tool. Then the drawings are built in code. Both steps take time, because the same thing is made twice, in two tools with different constraints.",
    },
    { type: "paragraph", text: "In my own projects, I've tried to bring these two steps closer together:" },
    {
      type: "list",
      items: [
        "**A shared tool.** On an [industrial data tool](/usecases/industrial-tool), I moved the component library from Sketch to Figma so that designers and developers could work in the same environment.",
        "**A shared understanding.** On a [digital service platform for education](/usecases/education-platform), we held regular sessions with developers to go through the reasoning behind solutions and to hear their ideas.",
        "**Shared components.** On a [university project](/usecases/university-ai-tool), I made the design system's components easier to find and brought in the design system team whenever something genuinely new was needed.",
      ],
    },
    {
      type: "paragraph",
      text: "Design engineering takes the same idea further. When the designer works in the codebase, the design and the implementation are the same thing. The article describes this as designers *\"getting their material back\"*, much like industrial designers work directly with the material their product is made from.",
    },
    {
      type: "flow",
      title: "Two steps or one?",
      rows: [
        {
          eyebrow: "traditional",
          heading: "Traditional handoff",
          text: "The same thing is made twice, in two tools.",
          start: "Idea",
          nodes: [
            { eyebrow: "Step 1 · Designer", heading: "Drawn in a design tool", text: "For example in Figma" },
            { eyebrow: "Step 2 · Developer", heading: "Built in code", text: "The drawing is rebuilt as code" },
          ],
          end: "Finished product",
        },
        {
          eyebrow: "design engineer",
          heading: "Designing in code",
          text: "Design and implementation are the same thing.",
          start: "Idea",
          nodes: [
            {
              eyebrow: "Designer + AI agent",
              heading: "Designed and built in code",
              text: "In the product's real codebase",
              highlight: true,
            },
            { eyebrow: "Developer", heading: "Pull request and review", text: "A developer decides what ships" },
          ],
          end: "Finished product",
        },
      ],
      quote: { text: "Ship the thing rather than describe it.", cite: "Peter Bokor, Modeinspect" },
    },

    { type: "heading", id: "five-skills", text: "Five skills that matter more than coding", navLabel: "Skills that matter more" },
    {
      type: "paragraph",
      text: "If a designer doesn't write the code themselves, what do they need to know? The most important skill isn't coding. It's knowing the codebase well enough to guide an AI agent precisely. Bokor describes five habits, which I explain here in my own words.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Refer to components by their real names.** In code, every component has a name, such as `Button`, `Card` or `TextField`. If you ask an agent to \"make this look like the mockup\", it has to guess, and sometimes it starts building a completely new button. If you instead ask it to \"use the `Button` component for the form's submit button and the `spacing-md` token between the fields\", the agent uses what the team already has.",
        "**Know where the files are.** You don't need to be able to rewrite the codebase. You do need to know which folder the components are in, what they're called and which ones belong to the actual design system. Only then can you refer to a component by name.",
        "**Break the work into steps.** Don't ask the agent to build a whole view at once. Work in small parts. If you're making a login form, for example, first ask for the layout only: where the fields and the button go. Then ask for the states, such as how a field looks when it's active, has an error or is disabled. Next, ask for validation: what happens if the email address is wrong. Finally, ask for the responsive layout, or how the form looks on a phone. Check each step against the design. One broad, vague request easily produces a lot of code that looks finished but isn't.",
        "**Read what the agent did.** You don't need to understand the logic, but it's worth checking the styles. Did it use a token or a hardcoded colour? Is the button the real button component, or a `div` styled to look like one? The AI may also create several almost identical buttons, none of which belong to the design system. Visual accuracy is the designer's responsibility, and this is where it gets checked.",
        "**Take the change to review.** It's enough to know the pull request workflow: create a branch, make the change, save it with a commit, open a pull request and respond to the reviewer's comments.",
      ],
    },
    {
      type: "steps",
      title: "Break the work into steps: building a login view in code",
      mock: {
        email: "Email",
        password: "Password",
        button: "Log in",
        typed: "matti@",
        wrongEmail: "matti.meikalainen",
        error: "Check the email address",
      },
      steps: [
        { name: "Layout", heading: "Fields and button", text: "Where the fields and the button go. No colours or behaviour yet." },
        {
          name: "States",
          heading: "Active, disabled",
          text: "How a field or button looks in different situations: when you type in it or when it can't be used.",
        },
        {
          name: "Validation",
          heading: "Wrong email address",
          text: "The form checks whether the input is valid and shows an error message if it isn't.",
        },
        {
          name: "Phone",
          heading: "Responsive, small screen",
          text: "How the form looks on a phone: the fields and button stack on top of each other.",
        },
      ],
      tip: {
        label: "Tip",
        text: "A design tool (e.g. Figma or Claude Design) works perfectly well as an aid for the layout, after which the images can be fed to the agent.",
      },
    },
    {
      type: "paragraph",
      text: "All five skills rest on the same thing: knowing the team's own vocabulary. So the hardest part of the design engineer role isn't reading code, but getting into each team's way of working and its vocabulary. You have to learn it again in every team, and the best way to learn it is by working together with developers.",
    },

    { type: "heading", id: "design-system", text: "A well-built design system supports the work", navLabel: "Design system as support" },
    {
      type: "paragraph",
      text: "Design engineering works best when the team has a well-built design system. The agent then already has the right components, tokens and names to refer to. It doesn't have to guess or invent something new, and the result follows the team's way of doing things.",
    },
    { type: "paragraph", text: "A design system helps in two situations:" },
    {
      type: "list",
      items: [
        "**When building new views.** When components and tokens are clearly named and easy to find, a new view can be put together from them in small steps. It's consistent with the rest of the product from the start.",
        "**When improving an existing view.** When a view is changed to work better, the design system shows what already exists. The change can be made with ready-made components, and a smaller, more familiar change is easier for a developer to review.",
      ],
    },
    {
      type: "paragraph",
      text: "So the design system is the same vocabulary I described earlier. The clearer it is, the easier it is for the designer to guide the agent, and the less the developer has to fix in review.",
    },

    { type: "heading", id: "support-developers", text: "How can a designer support developers?", navLabel: "Supporting developers" },
    {
      type: "paragraph",
      text: "I don't see the design engineer role as one where the designer's solutions are final and simply need to be followed. My own principle is that we design and think things through together. Code is a new way for me to take part in that conversation, not a way to skip it.",
    },
    { type: "paragraph", text: "In practice, I mean four things:" },
    {
      type: "list",
      items: [
        "**A first version of a component.** I can build a first version of a component in code. A developer looks at it, and we decide together how it fits the whole.",
        "**Prototypes that work in code.** A prototype that uses the team's real components and data often answers developers' questions better than a picture. It shows things like loading, errors and empty states, which are hard to read from a static image.",
        "**Building parts of the interface.** I can build part of the interface myself, such as a view's layout, its states or visual fixes, and offer it to developers as a pull request. A developer reviews the change and decides whether it's merged into the product. That leaves developers more time for logic, APIs and other technical questions.",
        "**A shared vocabulary.** I use the names from the code everywhere I talk with developers: in conversations, in task descriptions and in Figma, if the team uses it. When I talk about the `Button` component and not \"the orange button\", the developer doesn't have to guess what I mean.",
      ],
    },

    { type: "heading", id: "where-i-am", text: "Where I am now" },
    {
      type: "paragraph",
      text: "Modeinspect's ladder has three rungs. On the first are designers who work in Figma. On the second are those who make AI prototypes that developers later rebuild. On the third are design engineers whose pull requests get merged into the product. For the designers Modeinspect interviewed, the first merged pull request came two to eight weeks after they got access to the codebase, alongside their normal design work.",
    },
    {
      type: "ladder",
      eyebrow: "Design engineer",
      title: "Three rungs",
      rungs: [
        {
          name: "Figma",
          text: "The designer works in Figma, and a developer builds the design in code.",
          badge: "Where I am in client work",
        },
        { name: "AI prototypes", text: "The designer makes prototypes with AI, which developers later rebuild." },
        {
          name: "Design engineer",
          text: "The designer's pull requests get merged into the product.",
          badge: "Practising in my own projects",
        },
      ],
      source: "Source: Modeinspect, The New Design Ladder",
    },
    {
      type: "paragraph",
      text: "In client work, I've been on the first rung so far. I'm practising the third rung in my own projects. I built my portfolio with Claude Code, for example, and every change goes through its own branch and a preview. This post also reached the site through a merged pull request. 😉",
    },
    {
      type: "paragraph",
      text: "The role still isn't for every designer. Mehmet Baytaş, who worked as a design engineer on a marketing team, has warned that in more senior roles the work can be much more software engineering than design, especially when the design engineer is also responsible for production.",
    },

    { type: "heading", id: "summary", text: "Summary" },
    {
      type: "quote",
      text: "The design engineer isn't there to replace developers' work. The role makes collaboration between design and development smoother.",
    },
    {
      type: "paragraph",
      text: "If you're a designer thinking about the same move, start small. Open your team's codebase and find a component you've drawn many times. Learn its real name and look at what options it has. For example:",
    },
    {
      type: "list",
      items: [
        "A button might be `Button` in code, with the options `variant=\"primary\"` and `variant=\"secondary\"`, rather than two separate components.",
        "Figma's \"Spacing / Medium\" might be a token called `spacing-md` in code, or the Tailwind class `gap-4`.",
        "A modal might be `Dialog`, with its title, content and buttons as their own subcomponents.",
      ],
    },
    {
      type: "paragraph",
      text: "Once you know these names, you can use them in your next design and in your next conversation with a developer.",
    },

    { type: "heading", id: "sources", text: "Sources" },
    {
      type: "list",
      items: [
        "Peter Bokor: [What does a design engineer do? The software role, explained](https://modeinspect.com/design-engineer/what-does-a-design-engineer-do). Modeinspect, 16 Sep 2026.",
        "Modeinspect: [The New Design Ladder: Why Design Engineers Are the Only Designers Who Ship](https://modeinspect.com/blog/the-new-design-ladder). 15 Sep 2026.",
        "Peter Bokor: [Becoming a Design Engineer](https://modeinspect.com/design-engineer). Modeinspect, 2026.",
        "Designer Fund and Foundation Capital: [AI in Design Report 2026](https://stateofaidesign.com/), as cited by Bokor.",
      ],
    },
  ],
};
