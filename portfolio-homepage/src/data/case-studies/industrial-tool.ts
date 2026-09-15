import type { CaseStudy } from "./types";

export const industrialTool: CaseStudy = {
  slug: "industrial-tool",
  title: "Industrial Data & Expert Interface Design",
  label: "INDUSTRIAL DATA TOOLS · 2020–2023",
  headline: "Monitoring, calculation and reporting, in one place.",
  description:
    "A platform for monitoring, calculation, reporting and statistical analysis, used by specialists both internally and by customers. I redesigned the full expert experience, from dashboards to data views.",
  thumbnail: "/case/kemira.png",
  thumbnailAlt: "Kemira data tools",
  ctaLabel: "Explore the full case study",
  otherCaseStudyDescription:
    "Built practical expert tools for industrial data workflows, making complex calculations and monitoring more reliable for specialists.",

  intro: [
    "An industrial platform for monitoring and reporting had grown complex over time, with expert users struggling through long text lists and manual calculations. I joined as the sole designer, taking over from a previous one, to make the tool work the way specialists actually needed it to.",
  ],
  roleLabel: "UX Designer (sole designer on the project)",
  focusLabel: "Expert tools, data visualization, and Design System modernization",
  categoryTag: "Industrial Platform",
  skillTags: [
    {
      label: "UX & Interface Design",
      description: "Turned dense data into dashboards that can be read at a glance",
    },
    {
      label: "Design System Migration",
      description: "Rebuilt the component library from Sketch to Figma",
    },
    {
      label: "Data Visualization",
      description: "Designed multi-step calculation flows for expert workflows",
    },
    {
      label: "Stakeholder Research",
      description: "Interviewed specialists and factory workers across time zones",
    },
    {
      label: "Reliability Improvements",
      description: "Solved data-loss issues in remote, time-sensitive work",
    },
    {
      label: "Solo Ownership",
      description: "Sole UX designer responsible for the full platform",
    },
  ],

  gallery: [
    { src: "/case/kem-dash.png", alt: "Dashboard", caption: "Dashboard", width: 1043, height: 734 },
    {
      src: "/case/kem-dash-edit.png",
      alt: "Dashboard editing",
      caption: "Dashboard editing",
      width: 1044,
      height: 814,
    },
    {
      src: "/case/kem-dash-menu.png",
      alt: "Widget menu",
      caption: "Widget menu",
      width: 1044,
      height: 813,
    },
    { src: "/case/kem-tank.png", alt: "Tank detail", caption: "Tank detail", width: 1045, height: 1120 },
    {
      src: "/case/kem-datapoints.png",
      alt: "Datapoints",
      caption: "Datapoints",
      width: 1045,
      height: 687,
    },
    {
      src: "/case/kem-mob-a2.png",
      alt: "Mobile list",
      caption: "Mobile list",
      width: 253,
      height: 468,
    },
    {
      src: "/case/kem-mob-b.png",
      alt: "Mobile navigation",
      caption: "Mobile navigation",
      width: 269,
      height: 495,
    },
  ],
  sneakPeekImages: ["/case/kem-dash.png", "/case/kem-dash-menu.png"],

  impactIntro:
    "After launching new features, we systematically ran feedback and testing sessions with actual users. This continuous loop helped us validate what worked in daily operations, identify areas for refinement, and keep the product evolving based on real user needs.",
  impactCards: [
    {
      number: "01",
      title: "Faster, clearer data at a glance",
      body: "Turning the dashboard's data panels into visual cards meant specialists no longer had to read through long text lists to find what they needed. Information that used to take scanning and interpreting now became something they could understand in seconds, directly speeding up their daily monitoring and reporting work.",
    },
    {
      number: "02",
      title: "Complex calculations, without the guesswork",
      body: "Before this, running a complex calculation required deep expertise and careful manual work. The new calculation window guided specialists through the process step by step, reducing the risk of errors and making it possible for more people on the team to run these calculations confidently, not just the most experienced ones.",
    },
    {
      number: "03",
      title: "Less lost work, more trust in the tool",
      body: "Adding auto-save to data and reporting views removed a real, everyday frustration: losing work due to a missed save or a dropped connection, something that mattered a lot to users working with time-sensitive data from remote factory locations.",
    },
    {
      number: "04",
      title: "A foundation the whole team could build on",
      body: "Migrating the Design System from Sketch to Figma didn't just modernize the tool, it meant developers and designers were finally working in the same environment. That made handing designs over faster and reduced the back-and-forth that came from working across two disconnected design tools, freeing up time developers had previously spent interpreting or translating designs between formats. I received direct, positive feedback from both the developers and the project manager, who noted how much smoother their day-to-day work became as a result.",
    },
  ],

  howItStarted: [
    "I stepped into an ongoing project, picking up work from a previous designer. Some of the first things I focused on were visual improvements to the interface, for example turning the small panels on the dashboard into visual cards instead of plain text lists, which made them much easier to read at a glance. From there, we also designed an auto-save feature for data and reporting views, and improved the structure and content of reports.",
  ],

  challenges: [
    {
      number: "01",
      title: "Designing for complex expert workflows",
      body: "One of the ongoing challenges was clarifying complex work processes for expert users. I designed a calculation window that splits a complex calculation into steps, so specialists could run it through a much simpler interface. What consistently helped was never trying to solve this alone. I worked closely with the specialists and factory workers who used the tool daily, co-designing solutions with them instead of guessing what they needed.",
    },
    {
      number: "02",
      title: "Research across time zones",
      body: "A big part of the challenge was simply logistics. Stakeholder interviews often involved people based in the US or Asia, which meant working around significant time differences and staying flexible with my own schedule. Having the product owner, who already had strong relationships with these stakeholders, involved in the conversations made it much easier to build trust and get people engaged.",
    },
    {
      number: "03",
      title: "Modernizing the Design System",
      body: "The existing Design System lived in Sketch, an older tool that made collaboration with the rest of the team harder. Alongside the day-to-day design work, I took on migrating the library over to Figma, cleaning up and rebuilding components along the way rather than just copying them over as-is, so the team ended up with a more usable and maintainable design foundation to build on going forward.",
    },
  ],

  whatIWouldDoDifferently: [
    "Looking back, I would approach the technical side of this project differently today. Instead of relying on static mockups handed off to developers, I'd use AI tools like Claude Design to build working prototypes directly, closing the gap between design and implementation much faster. I'd also structure the Design System from the start with code-level implementation in mind, working closer with developers using tools like Cursor, not just as a well-organized component library in Figma, but as something developers could pull from directly.",
    "The team itself worked well together throughout the project, and I don't think our size or setup was ever the real issue. The growth I see now is more about how I'd use today's tools and ways of working to close that design-to-development gap earlier and more effectively.",
  ],

  methods: ["User interviews", "Co-design workshops", "Usability testing", "Discovery research"],
};
