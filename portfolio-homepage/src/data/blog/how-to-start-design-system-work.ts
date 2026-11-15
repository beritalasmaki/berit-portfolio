import type { BlogPost } from "./types";

export const howToStartDesignSystemWork: BlogPost = {
  slug: "how-to-start-design-system-work",
  title: "How to start design system work",
  excerpt:
    "Design system work usually starts from one of two situations: a company already has several digital services, or it is building a design system alongside a new product. The start is different, but the conditions for success are the same. In this part, I go through what to confirm first, how to take a brand to the web, and how to choose structure and technology.",
  date: "2026-11-15",
  tags: ["Design systems", "Branding", "Tokens"],
  series: {
    name: "Starting design system work",
    part: 1,
    subtitle: "Prerequisites, starting point and structure",
  },
  body: [
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

    { type: "heading", id: "existing-services", text: "When the company already has digital services", navLabel: "When services already exist" },
    {
      type: "paragraph",
      text: "**1. Map the current state.** Start by mapping the existing services and collecting the elements and solution patterns that repeat across them, such as buttons, forms and cards. The mapping also shows what works well and what doesn't. Turn the solutions that work into components and improve the weaker ones. It also tells you which colours, font sizes and spacings the tokens need.",
    },
    {
      type: "paragraph",
      text: "**2. First components.** Begin by choosing a few of the most used components and finish them carefully, but only as far as the services have a real need. For a button, that could mean variations (primary, secondary, tertiary) and the states it needs. Add new variations only when a real use for them appears. A dark theme and separate mobile versions are decisions too: design them only if they are truly needed.",
    },
    {
      type: "paragraph",
      text: "**3. Phased adoption.** Build new services with the components from the start. Roll out the design system to old services in phases, with a plan of its own that has a schedule, responsible people and a clear starting point. Without a plan, updates easily go undone. Many old systems need renewing anyway, for example for security reasons, and it makes sense to tie the adoption of the design system to those renewals.",
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
      text: "I usually use Brad Frost's Atomic Design model, where larger wholes are built from small parts: atoms into molecules, and molecules into organisms. Choose the structure at the start, so that everyone uses the same terms.",
    },
    {
      type: "paragraph",
      text: "In Atomic Design, for example, a button and a text field are atoms, a search field built from them is a molecule, and a header with a logo, a search field and navigation is an organism. Besides the model, it's worth agreeing on a few practices:",
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
      text: "At the start you also decide whether the design system is tied to a specific technology, such as React. I recommend that at least the tokens are defined independently of technology. Then they can be adopted in any technology, even if the company's choices change.",
    },
    {
      type: "paragraph",
      text: "In practice, tokens can be stored in one place, from where they are converted automatically into, for example, CSS variables, and the same names are used in Figma. Components can be built with one technology if all services are made with it. If there are several technologies, Web Components are an alternative: they work in most web technologies but require more specialist skills.",
    },

    { type: "heading", id: "series-continues", text: "The series continues" },
    {
      type: "paragraph",
      text: "This is the first part of a four-part series. In the next part, I write about why a well-made design system can still go unused.",
    },
    {
      type: "paragraph",
      text: "The series is based on my thesis *Productising and managing a design system: Developing a service model for public sector digitalisation projects* (Vaasa University of Applied Sciences, 2026), which is available on [Theseus](https://www.theseus.fi/items/f6a21835-ccc6-496c-b6a3-341a814a798c). The thesis is written in Finnish.",
    },
  ],
};
