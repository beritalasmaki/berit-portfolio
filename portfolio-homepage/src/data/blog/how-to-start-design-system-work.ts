import type { BlogPost } from "./types";

export const howToStartDesignSystemWork: BlogPost = {
  slug: "how-to-start-design-system-work",
  title: "How to start design system work",
  excerpt:
    "What needs to be in place before design system work starts? And how do the first components and tokens come into use, and how do you make brand colours and fonts work on the web? The first part of a four-part series covers the groundwork.",
  date: "2026-11-15",
  tags: ["Design systems", "Branding", "Tokens"],
  series: {
    name: "Starting design system work",
    part: 1,
    subtitle: "Prerequisites, starting point and structure",
  },
  body: [
    {
      type: "quote",
      text: "A design system is the official story of how an organization designs and builds digital interfaces.",
      cite: "Brad Frost",
    },
    {
      type: "paragraph",
      text: "Design system work usually starts from one of two situations. Either a company already has several digital services it wants to make consistent, or a new company wants to build a design system alongside its product. The start is different, but the conditions for success are the same.",
    },

    { type: "heading", id: "check-first", text: "What to confirm first" },
    {
      type: "paragraph",
      text: "**The brand foundation is in place.** The brand is the core that guides all design work. It defines both the visual direction and the principles the design follows, and its colours and typography are the base of the tokens. If these haven't been decided yet, the work may have to be redone later.",
    },
    {
      type: "paragraph",
      text: "**Management has given a mandate.** A design system changes how teams design and build services. That's why management needs to give the people responsible for the work, such as the product owner and the technical project manager, a clear mandate to act and make decisions, and to reserve time and budget for it. Without a mandate, their guidance stays a recommendation, and teams go back to their own solutions whenever the schedule gets tight.",
    },
    {
      type: "paragraph",
      text: "**The people responsible come from inside the organisation.** A design system needs an owner who decides its direction, prioritises its development and rules on what gets added. An outside expert can help with building and transfer know-how, but ownership has to stay in the organisation. Otherwise development can stall when the consulting project ends.",
    },
    {
      type: "paragraph",
      text: "**The design system is part of the business strategy.** A design system has to support the company's goals, such as faster development, a consistent customer experience or accessibility. When the link to those goals is visible, it's easier for management to justify resources for it in the future. Then the design system is seen as part of all digital work, not as a side project of the IT department.",
    },

    {
      type: "heading",
      id: "vacuum",
      text: "The common mistake: building in a vacuum",
      navLabel: "Building in a vacuum",
    },
    {
      type: "paragraph",
      text: "Design system work often goes wrong in the same way. Dan Mall describes it in his book *Design that Scales* (2023):",
    },
    {
      type: "quote",
      text: "When design system work is done in a vacuum and a design system team doesn't have specific use cases, their strategy seems to be something akin to “let's provide as many elements as product teams might need at any point,” leading to a bloated design system.",
      cite: "Dan Mall, Design that Scales (2023)",
    },
    {
      type: "paragraph",
      text: "Building in a vacuum isn't only a technical mistake, it's a human one. You can't assume people will welcome a design system. To many designers and developers it can look like a threat to their professional skill: it can feel as if their own work is being devalued and replaced by a shared system.",
    },
    {
      type: "paragraph",
      text: "That's why a design system has to be a project of the whole organisation, one that takes everyone's handprint into account. When the system is built from solutions teams have already made, they see their own work in it and don't experience it as a threat. In practice, that means for example:",
    },
    {
      type: "list",
      items: [
        "**Involve the makers from the start.** Designers and developers take part in the decisions and aren't only the receivers of a finished system.",
        "**Make earlier work visible.** Say which team a component's solution came from and why it was chosen.",
        "**Show what the team gets.** A design system should reduce teams' work, not just add rules to it.",
      ],
    },
    {
      type: "paragraph",
      text: "The way out is to start from real work. This is how I approach design system projects, especially when a product family already exists.",
    },

    {
      type: "heading",
      id: "existing-services",
      text: "When the company already has digital services",
      navLabel: "When services already exist",
    },
    {
      type: "paragraph",
      text: "I start from what already works, not from a blank page. The work goes in four steps:",
    },
    {
      type: "findings",
      items: [
        {
          title: "Audit",
          body: "I go through the products and see which UI parts are used most, and in how many different versions.",
        },
        {
          title: "Best parts",
          body: "I keep the best existing solutions and clean up the ones that need it. I build on other designers' work instead of replacing it.",
        },
        {
          title: "Pilots",
          body: "I run several different pilots: a new product, a redesigned feature, and a whole view rebuilt as a prototype on the system. They show other designers and the developers what the system gives them.",
        },
        {
          title: "Need before wish",
          body: "I build what teams need, not everything they ask for. That keeps the system small and in use.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "**Phased adoption.** Build new services with the components from the start. Roll out the design system to old services in phases, with a plan that has a schedule, responsible people and a clear starting point. Tie it to the renewals old systems need anyway, for example for security reasons.",
    },

    {
      type: "heading",
      id: "pilots",
      text: "Pilots: the best way to start and sustain a design system",
      navLabel: "Pilots",
    },
    {
      type: "paragraph",
      text: "A pilot is a small, real project built with the design system as it grows. When Mall drives a pilot, the question that steers it is this:",
    },
    {
      type: "quote",
      text: "What do we NEED to be able to make with our design system? And not: What do we WANT to be able to make with our design system?",
      cite: "Dan Mall, Design that Scales (2023)",
    },
    {
      type: "list",
      items: [
        "**Don't start from the flagship products.** Build the products with the least red tape first, and do as many of them as you can, quickly. Be creative with the kinds of pilots you run and watch the design system grow naturally.",
        "**Run three pilots at the same time.** Use a pilot scoreboard to pick three in sequence. Three is the smallest number at which patterns start to emerge.",
        "**Give components context.** Pilots show components in real use, which you wouldn't get otherwise.",
      ],
    },
    {
      type: "paragraph",
      text: "When the system is built from components and variations that already exist, each ready-made variation is easier to create, because it comes from specific product requirements and a previously tested version.",
    },

    {
      type: "heading",
      id: "reuse-earlier-work",
      text: "Why earlier work is the starting point",
    },
    {
      type: "paragraph",
      text: "Building on what designers have already made is not a shortcut. As Mall puts it:",
    },
    {
      type: "quote",
      text: "It's not about reinventing the wheel; it's about mass producing the wheel so more people can more easily experience their own adventures.",
      cite: "Dan Mall, Design that Scales (2023)",
    },
    {
      type: "paragraph",
      text: "A design system is also “a place that spotlights teams' accomplishments”, so teams see their own work in it. The purpose of the design system team is to collect the best practices and prepare them for scaling. The result is that teams get a sharper focus on the most important and relevant customer needs.",
    },

    { type: "heading", id: "no-services-yet", text: "When there are no services yet" },
    {
      type: "paragraph",
      text: "In a new company, design the first service first and build the design system from it. That way you see which components are really needed. If the component library is designed before the service, it easily fills up with components and variations that nobody ends up using.",
    },
    {
      type: "paragraph",
      text: "Still, adopt tokens from the very beginning. That doesn't mean locking the values. When colours, font sizes and spacings are named as tokens in the first version, you can change their values in one place as you learn what works while building the service. Without tokens, the same values end up in dozens of places in the code, and every change has to be made by hand. At first, the brand colours, typography and a simple spacing scale are enough. Make a component when the same element turns up a second or third time.",
    },

    { type: "heading", id: "brand-to-web", text: "From the brand book to the web" },
    {
      type: "paragraph",
      text: "The colours and fonts in a brand book are often designed for print and marketing, and they don't always work on the web as they are. A light brand colour may have too little contrast for text, and a decorative font can be heavy to read.",
    },
    {
      type: "paragraph",
      text: "That's why web-ready variations are made from them: shades that meet contrast requirements, and sizes and line heights that make a page easy to read and scan.",
    },
    {
      type: "paragraph",
      text: "In practice, this means for example checking the contrast of the brand colours against accessibility requirements and building tint scales from the main colours for text, backgrounds and different states. A decorative brand font can work in headings, but body text should be clear. Agree the web variations with the people responsible for the brand, so that they are accepted as part of it.",
    },
    {
      type: "paragraph",
      text: "Good examples can be found in the large open design systems. IBM's [Carbon Design System](https://carbondesignsystem.com) names colours by purpose, for example `$text-secondary` or `$layer`, and each theme gives them its own values. This way the same token can be dark in a light theme and light in a dark theme. Google's [Material Design 3](https://m3.material.io) in turn shows how a whole tonal palette and matching colour roles can be derived from a single brand colour.",
    },
    {
      type: "paragraph",
      text: "Nathan Curtis's article [Color in Design Systems](https://medium.com/eightshapes-llc/color-in-design-systems-a1c80f65fa3) gives practical advice on bringing brand colours into a design system. Among other things, he recommends agreeing on the brand's main colours early, involving the people responsible for the brand before changes are made to them, and checking contrast at the start and again along the way.",
    },

    { type: "heading", id: "structure-and-technology", text: "Structure and technology" },
    {
      type: "paragraph",
      text: "I usually use Brad Frost's [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) model, where larger wholes are built from small parts: atoms into molecules, and molecules into organisms. Choose the structure at the start, so that everyone uses the same terms.",
    },
    {
      type: "paragraph",
      text: "In Atomic Design, for example, a button and a text field are atoms, a search field built from them is a molecule, and a header with a logo, a search field and navigation is an organism. Organisms are then put together into templates and finished pages, where the parts are seen in whole views with real content.",
    },
    {
      type: "atomic",
      title: "A component broken into parts",
      joinLabel: "Made of",
      levels: [
        {
          name: "Organism",
          example: "Header",
          text: "A finished whole",
          parts: ["Logo", "Search field", "Navigation"],
        },
        {
          name: "Molecule",
          example: "Search field",
          text: "A few parts together",
          parts: ["Text field", "Button"],
        },
        {
          name: "Atom",
          example: "Text field, button",
          text: "The smallest part",
          parts: [],
        },
      ],
      tokens: {
        eyebrow: "Its own layer",
        name: "Tokens",
        text: "Named values that every level uses.",
        parts: ["Colours", "Font sizes", "Spacing"],
      },
    },
    {
      type: "paragraph",
      text: "I think Atomic Design is the best option, because it works for both designers and developers and grows with the system:",
    },
    {
      type: "list",
      items: [
        "**A shared language.** Designers, developers and product owners talk about the same things with the same names, so terms don't have to be agreed again in every conversation.",
        "**Every part is made only once.** Larger wholes are built from the same small parts, so a change to a button, for example, updates everywhere it is used.",
        "**Faster prototyping.** New views are put together quickly from ready-made, tested parts, and can be tried with real content already at the template and page level.",
        "**Fits on top of existing work.** The repeated elements found in the audit are easy to place on the levels, and pilots can be built from small parts to larger ones.",
        "**Grows as needed.** You can start with a few atoms and tokens and add larger wholes only when there is a real need.",
      ],
    },
    {
      type: "paragraph",
      text: "The model also has borderline cases, for example whether a part is a molecule or an organism. According to some design teams, not every level needs to be followed to the letter: the biggest benefit comes from defining the atoms carefully and relying on them, and molecules and organisms are talked about only when it helps. I see the model first and foremost as a flexible way of thinking, with limits worth agreeing together at the start. Besides the model, it's worth agreeing on a few practices:",
    },
    {
      type: "list",
      items: [
        "Name components by purpose, not by appearance. The name `button-primary` survives a colour change, `button-orange` doesn't.",
        "Write down for each component what it is used for and when it is not used.",
        "Components and tokens in Figma and in code have the same names, so that designers and developers talk about the same things.",
      ],
    },
    {
      type: "paragraph",
      text: "I organise my Figma files by the same model: tokens first, then atoms, molecules and organisms, and finally templates. Below is an example from my own design system file.",
    },
    {
      type: "image",
      src: "/blog/how-to-start-design-system-work/figma-file-organisation.png",
      alt: "The structure of a Figma file: About, Tokens, Atoms, Molecules, Organisms and Templates, with the components and templates in each section.",
      caption: "The structure of a Figma file: tokens as their own section, followed by atoms, molecules, organisms and templates.",
      width: 751,
      height: 317,
    },
    {
      type: "links",
      items: [
        { label: "Design system example site", href: "https://design-system-use-case.vercel.app/" },
        { label: "UI kit in Figma", href: "https://www.figma.com/design/WlwWrwDWzt5shl0sYocASJ/Design-System-by-Berit?node-id=4-4" },
      ],
    },
    {
      type: "paragraph",
      text: "At the start you also decide whether the design system is tied to a specific technology. Tokens are usually defined independently of technology: they are stored in a JSON file, from which they are easy to adapt to different technologies, for example as CSS variables. The same names are used in Figma too.",
    },
    {
      type: "paragraph",
      text: "The technology for the components depends on what the services are built with. If all services use the same technology, build the components with it. React is often recommended as the basis for a design system when flexibility is wanted. If there are several technologies, Web Components are an alternative: they work in most web technologies but require more specialist skills.",
    },

    { type: "heading", id: "series-continues", text: "The series continues" },
    {
      type: "paragraph",
      text: "This is the first part of a four-part series. In the next part, I write about why a well-made design system can still go unused.",
    },
    {
      type: "paragraph",
      text: "The series is based on my thesis *Productising and managing a design system: Developing a service model for public sector digitalisation projects* (Vaasa University of Applied Sciences, 2026), which is available on [Theseus](https://www.theseus.fi/items/f6a21835-ccc6-496c-b6a3-341a814a798c). The thesis is written in Finnish. The quotes in this part are from Dan Mall's book *Design that Scales: Creating a Sustainable Design System Practice* (2023), except the opening one by Brad Frost.",
    },
  ],
};
