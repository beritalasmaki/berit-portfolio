import type { CaseStudy } from "./types";

export const environmentalDataTool: CaseStudy = {
  slug: "environmental-data-tool",
  title: "Modernization of Environmental Data Systems",
  label: "ENVIRONMENTAL DATA SYSTEMS · 2020–2024",
  headline: "Outdated environmental data systems, rebuilt around how researchers work",
  description:
    "Monitoring and reporting tools for environmental data, built so specialists can find, compare and publish results without fighting the interface.",
  thumbnail: "/case/syke-new-card.png",
  thumbnailAlt: "Environmental data systems",
  projectCount: "5+",
  industry: "Environmental research",
  ctaLabel: "Explore the full case study",
  otherCaseStudyDescription:
    "Rebuilt outdated systems as modern tools that help environmental researchers manage and analyze critical data.",

  intro: [
    "An environmental research institute relied on outdated tools to manage and analyze critical data, often defaulting to Excel just to make sense of it. Over several projects between 2020 and 2023, I was brought in as the institute's only UX designer to modernize these tools.",
  ],
  glance: {
    problem:
      "An environmental research institute managed and analysed critical data with outdated tools and often fell back on Excel just to make sense of it.",
    role:
      "Sole UX/UI designer across several projects in 2020–2023, combining UX/UI design with lightweight service design.",
    decisions: [
      "Rethought how the data and workflows should work instead of putting a new interface on the old system",
      "Started with short, lean research directly with the specialists who use the systems",
      "Combined map and table views into one coherent experience",
      "Built analytics views (bar charts, scatter plots) so researchers no longer needed Excel for them",
    ],
    outcome:
      "Several systems were rebuilt around how researchers work. In the largest project, built-in analytics replaced much of the manual Excel work, and saving and tracking samples became simpler. Based on feedback from users during the projects.",
  },
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
    { src: "/case/syke-water-list.png", alt: "Water monitoring: monitoring locations list", caption: "Water monitoring, list", width: 1800, height: 1162 },
    { src: "/case/syke-water-map.png", alt: "Water monitoring: monitoring locations map", caption: "Water monitoring, map", width: 1800, height: 1205 },
    { src: "/case/syke-zooplankton-map.png", alt: "Zooplankton system: sampling sites map", caption: "Zooplankton, map", width: 1800, height: 1205 },
    { src: "/case/syke-diatom-map-v2.png", alt: "Diatom system: observation sites map", caption: "Diatoms, map", width: 1800, height: 1205 },
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
  introVideo: {
    src: "/case/video/syke-prototype.mp4",
    poster: "/case/video/syke-prototype-poster.jpg",
    label: "Walkthrough of the water monitoring prototype: map, filters, site details and list view",
    caption: "Prototype walkthrough: finding monitoring sites on the map, filtering, and opening site details.",
    width: 1440,
    height: 964,
  },
  sneakPeekImages: ["/case/syke-water-map.png", "/case/syke-graph.png"],

  impactIntro: "These impacts are based on feedback gathered directly from users during the projects.",
  impactCards: [
    {
      number: "01",
      title: "Tools rebuilt around how researchers work",
      body: "We did not only modernize the look of old systems. We rebuilt several of them around how researchers work today, including how they combine map and table data, and how they add new results as their work continues.",
    },
    {
      number: "02",
      title: "Data visualization built into the system",
      body: "In the largest of these projects, researchers had relied heavily on Excel to make sense of their data. We built analytics views directly into the system, so they can spot patterns and understand their data faster, without exporting it first.",
    },
    {
      number: "03",
      title: "Easier, clearer sample tracking",
      body: "The improved interfaces made everyday work easier for specialists. Saving new samples and tracking how they changed over time became simpler than it was with the old systems.",
    },
  ],

  howItStarted: [
    "Every system I worked on was outdated and needed to be rebuilt, but rarely as an exact copy of the old one. In most cases we could not recreate the old system with a new interface. We had to rethink how the data and workflows should work, then build something new on top of that. For a couple of the projects, this meant starting with a short round of research myself, close to what is called Lean Design: gather just enough to start, then learn the rest by building. I did that directly with the system's specialists, to get the material I needed before starting on the interface.",
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
      body: "These systems were not static. Users needed to add new sampling results directly into the system, so the data kept growing and changing. I worked closely with the specialists who used these systems daily to make sure the design could handle new data without breaking the structure we'd built.",
    },
    {
      number: "03",
      title: "Working with project structure where it existed",
      body: "Projects differed in structure. One project had a dedicated project manager who kept the work on track and made sure we were solving the right problems, and I supported that work from the design side. Other projects were smaller and looser, closer to informal, ongoing collaborations with the specialists themselves.",
    },
    {
      number: "04",
      title: "Building data analytics views",
      body: "In one of the larger projects, we went further than basic interfaces and built data analytics views, including bar charts, scatter plots and other visualizations. They gave researchers a richer way to explore their data than the old systems offered. Across all of these projects, staying close to the specialists who used the tools day to day made the difference. The work was demanding, and designing side by side with them made it enjoyable too.",
    },
  ],

  whatIWouldDoDifferently: [
    "If I could go back, I would push harder for starting design system work earlier. The organization had plans to begin at some point, but a small development team was already stretched across maintaining over 200 systems, so it was hard to prioritize. A lot was also still unclear internally, including what level a design system should be built at for an organization with that many systems and that few resources.",
    "A design system is not only a design decision. It also depends on the organization having the capacity and clarity to support it. I would still advocate for it earlier next time, but I'd come with a more realistic starting point: something small and useful enough to prove its value quickly, instead of waiting for ideal conditions that may never arrive.",
  ],

  methods: ["Lightweight discovery", "Co-design workshops", "Usability testing", "Lean Design"],
};
