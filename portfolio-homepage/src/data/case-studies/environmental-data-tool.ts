import type { CaseStudy } from "./types";

export const environmentalDataTool: CaseStudy = {
  slug: "environmental-data-tool",
  title: "Modernization of Environmental Data Systems",
  label: "ENVIRONMENTAL DATA SYSTEMS · 2020–2024",
  headline: "Outdated systems.\nNow something researchers actually trust.",
  description:
    "Monitoring and reporting tools for environmental data, built so specialists can find, compare and publish results without fighting the interface.",
  thumbnail: "/case/syke-new.png",
  thumbnailAlt: "Environmental data systems",
  ctaLabel: "Explore the full case study",
  otherCaseStudyDescription:
    "Transformed outdated systems into modern, efficient tools that help environmental researchers manage and analyze critical data.",

  intro: [
    "An environmental research institute relied on outdated tools to manage and analyze critical data, often defaulting to Excel just to make sense of it. Over several projects between 2020 and 2023, I was brought in as the institute's only UX designer to modernize these tools.",
  ],
  roleLabel: "UI/UX Designer (sole designer, long-term client relationship)",
  focusLabel: "Modernizing outdated data systems, combining UX/UI design with lightweight service design",
  categoryTag: "Data Platform",
  skillTags: [
    {
      label: "Modernizing Old Systems",
      description: "Rebuilt tools around how researchers actually work today",
    },
    {
      label: "Data Visualization",
      description: "Replaced manual Excel work with built-in analytics views",
    },
    {
      label: "Lightweight Service Design",
      description: "Combined UX/UI work with simple service thinking",
    },
    {
      label: "Lean Discovery",
      description: "Released something small and useful quickly, then improved it",
    },
    {
      label: "Solo Ownership",
      description: "Sole designer across multiple separate projects",
    },
    {
      label: "Long-Term Client Relationship",
      description: "Maintained trust and continuity over three years",
    },
  ],

  gallery: [
    { src: "/case/syke-graph.png", alt: "Observation data graph view", caption: "Observation data", width: 1208, height: 700 },
    { src: "/case/syke-table.png", alt: "Monitoring locations table", caption: "Monitoring locations", width: 1208, height: 708 },
    { src: "/case/syke-map.png", alt: "Monitoring locations map", caption: "Locations map", width: 1208, height: 714 },
    {
      src: "/case/syke-redlist.png",
      alt: "Red List of habitat types service",
      caption: "Red List service",
      width: 1208,
      height: 772,
    },
    {
      src: "/case/syke-redlist-mobile.png",
      alt: "Red List of habitat types, mobile",
      caption: "Red List, mobile",
      width: 632,
      height: 1802,
    },
  ],
  sneakPeekImages: ["/case/syke-map.png", "/case/syke-graph.png"],

  impactIntro: "These impacts are based on feedback gathered directly from users during the projects.",
  impactCards: [
    {
      number: "01",
      title: "From outdated tools to something built for how the work actually happens",
      body: "Instead of just modernizing the look of old systems, we rebuilt several of them around how researchers actually work today, including how they combine map and table data, and how they add new results as their work continues.",
    },
    {
      number: "02",
      title: "Richer insight through real data visualization",
      body: "In the largest of these projects, researchers had previously relied heavily on Excel to make sense of their data. We built proper analytics views directly into the system instead, giving them a much clearer, faster way to spot patterns and understand their data without exporting it elsewhere first.",
    },
    {
      number: "03",
      title: "Easier, clearer sample tracking",
      body: "The improved interfaces made everyday work noticeably easier for specialists. Saving new samples and tracking how they changed over time became much simpler than it was with the old systems.",
    },
  ],

  howItStarted: [
    "Every system I worked on was outdated and needed to be rebuilt, but rarely as an exact copy of the old one. In most cases, we could not simply recreate the old system with a new interface. We had to rethink how the data and workflows should actually work, then build something new on top of that. For a couple of the projects, this meant starting with a short round of research myself, close to what is called Lean Design: gather just enough to start, then learn the rest by building. I did that directly with the system's specialists to gather the material needed before I could start on the actual interface.",
  ],

  challenges: [
    {
      number: "01",
      title: "Bringing maps and tables together",
      body: "A recurring challenge across several of these systems was combining map views and table views into one coherent experience. I had to figure out how many columns a table could reasonably hold before it became hard to use, and how to give the map view the right features to show different types of data points clearly, without overwhelming the user.",
    },
    {
      number: "02",
      title: "Designing for growing, real-time data",
      body: "These weren't static systems. Users needed to be able to add new sampling results directly into the system, which meant the data itself kept growing and changing. I worked closely with the specialists who used these systems daily to make sure the design could handle new data being added without breaking the structure we'd built.",
    },
    {
      number: "03",
      title: "Working with real project structure, when it existed",
      body: "Not every project had the same level of structure. One project in particular had a dedicated project manager keeping the work on track and making sure we were solving the right problems, and I supported that work from the design side. Other projects were smaller and looser, closer to informal, ongoing collaborations with the specialists themselves.",
    },
    {
      number: "04",
      title: "Building real data analytics views",
      body: "In one of the larger projects, we went further than basic interfaces and built proper data analytics views, including bar charts, scatter plots, and other visualizations, giving researchers a much richer way to explore and understand their data than the old systems ever offered. Across all of these projects, what consistently made the difference was staying close to the specialists using the tools day to day. The work was demanding, but designing side by side with them made it genuinely enjoyable, not just effective.",
    },
  ],

  whatIWouldDoDifferently: [
    "If I could go back, I would have pushed harder for starting Design System work earlier. The organization did have plans to begin this at some point, but with a very small development team already stretched across maintaining over 200 different systems, it was hard to prioritize. On top of that, a lot was still unclear internally, including what level a Design System should even be built at for an organization with that many systems and that few resources.",
    "It's a good reminder that a Design System isn't just a design decision, it also depends on the organization having the capacity and clarity to actually support it. I would still advocate for it earlier next time, but I'd also come with a more realistic starting point, something small and useful enough to prove its value quickly, rather than waiting for the ideal conditions that may never arrive.",
  ],

  methods: ["Lightweight discovery", "Co-design workshops", "Usability testing", "Lean Design"],
};
