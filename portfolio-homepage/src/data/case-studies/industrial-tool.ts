import type { CaseStudy, GalleryImage } from "./types";


const calc = (n: number, alt: string, caption: string): GalleryImage => ({
  src: `/case/kem-calc-${n}.png`,
  alt,
  caption,
  width: 2086,
  height: 1468,
});

/** Reconstructed calculation tool steps (no original screenshots survive). */
export const calcShots: GalleryImage[] = [
  calc(1, "Step 1 of the calculation modal: choosing the site, process area, dosing unit and calculation type", "Reconstruction · 1 Target"),
  calc(2, "Step 2: choosing the time range and picking datapoints from a searchable table of 312", "Reconstruction · 2 Data"),
  calc(3, "Step 3: input values filled in from the data, each marked with where it came from", "Reconstruction · 3 Input values"),
  calc(4, "Step 4: choosing the standard formula or writing a custom, spreadsheet-style formula", "Reconstruction · 4 Formula"),
  calc(5, "Step 5: results with the recommended dose, a summary of the inputs and saving to a report", "Reconstruction · 5 Results"),
];

const gallery: GalleryImage[] = [
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
];

function screen(file: string): GalleryImage {
  const image = gallery.find((g) => g.src === `/case/${file}`);
  if (!image) throw new Error(`industrial-tool: no gallery image ${file}`);
  return image;
}

export const industrialTool: CaseStudy = {
  slug: "industrial-tool",
  title: "Industrial Data & Expert Interface Design",
  label: "INDUSTRIAL DATA TOOLS · 2021–2023",
  headline: "Complex industrial data made clear for eight user groups",
  description:
    "I improved the user experience of an international chemicals company's data platform in 2021–2023 as its only designer. The platform is used to monitor chemical tanks and equipment at customers' plants, calculate chemical dosing and consumption, and create reports.",
  thumbnail: "/case/kemira-card.png",
  thumbnailAlt: "Dashboard of an industrial data platform",
  projectCount: "2",
  industry: "Industrial",
  ctaLabel: "Explore the full case study",
  otherCaseStudyDescription:
    "Built practical expert tools for industrial data workflows, making complex calculations and monitoring more reliable for specialists.",

  intro: [
    "An industrial platform for monitoring and reporting had grown complex over time, with expert users struggling through long text lists and manual calculations. I joined as the sole designer, taking over from a previous one, to make the tool work the way specialists actually needed it to.",
  ],
  glance: {
    problem:
      "A monitoring and reporting platform for industrial specialists had become hard to use: long text lists, calculations done by hand, work lost to missed saves, and a design library stuck in an old tool.",
    role:
      "Sole UX designer on the platform, 2021–2023. I took over from the previous designer and owned the whole experience.",
    decisionsLabel: "Solutions and hands-on work",
    outcomeLabel: "Outcome and impact",
    decisions: [
      "**Readable information:** I condensed complex data and long lists into clear visual blocks, so the essentials can be found at a glance.",
      "**Simpler processes:** I split heavy, multi-step tasks into guided, step-by-step flows (wizards).",
      "**Confidence in the tool:** I improved continuity of work and reduced users' load by adding auto-save to the views.",
      "**Design system overhaul:** I migrated the design system from Sketch to Figma and rebuilt the components to scale.",
    ],
    outcome:
      "Specialists grasped the data they needed quickly, and running complex calculations became reliable and easy for the whole team. Thanks to auto-save, work was no longer lost.\n\nMoving designers and developers into one shared tool made collaboration clearer, and both the development team and the project manager told me their day-to-day work became noticeably smoother.",
  },
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

  gallery,
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
      body: "A big part of the challenge was simply logistics. Stakeholder interviews often involved people based in the US, which meant working around significant time differences and staying flexible with my own schedule. Having the project manager, who already had strong relationships with these stakeholders, involved in the conversations made it much easier to build trust and get people engaged.",
    },
    {
      number: "03",
      title: "Modernizing the Design System",
      body: "The existing Design System lived in Sketch, an older tool that made collaboration with the rest of the team harder. Alongside the day-to-day design work, I took on migrating the library over to Figma, cleaning up and rebuilding components along the way rather than just copying them over as-is, so the team ended up with a more usable and maintainable design foundation to build on going forward.",
    },
  ],

  whatIWouldDoDifferently: [
    "Looking back, I would approach the technical side of this project differently today. Instead of relying on static mockups handed off to developers, I'd use AI tools like Claude Design to build working prototypes directly, closing the gap between design and implementation much faster. I'd also structure the Design System from the start with code-level implementation in mind, working closely with developers and building with Claude Code, so it would be not just a well-organized component library in Figma, but something developers could pull from directly.",
    "The team itself worked well together throughout the project, and I don't think our size or setup was ever the real issue. The growth I see now is more about how I'd use today's tools and ways of working to close that design-to-development gap earlier and more effectively.",
  ],

  story: {
    facts: [
      { label: "Role", value: ["UX Designer", "The platform's only designer"] },
      { label: "Timeline", value: ["2021–2023"] },
      {
        label: "Team",
        value: ["Project manager and scrum master", "Two frontend and two backend developers", "Me as the only designer"],
      },
      {
        label: "Methods",
        value: ["Co-design with experts", "Stakeholder interviews", "Usability testing", "Discovery research"],
      },
      {
        label: "What I did",
        wide: true,
        value: [
          "Took over from the previous designer and owned the whole platform's user experience",
          "Interviewed users in Europe and North America",
          "Designed the calculation tool together with a calculation expert",
          "Designed auto-save for the data and report views",
          "Designed an alert system for tank levels and fault situations",
          "Moved the design system's UI kit from Sketch to Figma and rebuilt the components",
        ],
      },
    ],
    heroImage: {
      src: "/case/kem-dash.png",
      alt: "Dashboard of the platform with KPI, trend, gauge and chart widgets",
      caption: "",
      width: 1043,
      height: 734,
    },
    tldr: [
      "An international chemicals company's data platform has **more than eight user groups**, from plant process operators to sales and data analysts, and each needs something different from it. I was the platform's only designer in 2021–2023.",
      "Experts used to do demanding calculations in Excel. Together with an expert I turned them into a **five-step calculation tool** that still allows a custom formula when the standard steps aren't enough. Auto-save stopped work from getting lost, an alert system warns when a tank is filling up or a device fails, and moving the UI kit to Figma put designers and developers in the same tool.",
    ],
    background: {
      heading: "Remote data from customers' plants",
      paragraphs: [
        "The company supplies chemicals to industry and water treatment plants. Its chemical tanks and dosing equipment sit at customers' plants, and their data is monitored remotely.",
        "Before the platform, the data lived in many separate databases. The platform was built to collect, view and analyse it in one place. Customers use it to follow their own processes, and the company's experts help them with analysis and troubleshooting. Sales uses the data to support selling services.",
        "I joined the ongoing project in 2021 after the previous designer. I was the platform's only designer, so I was responsible for the whole user experience.",
      ],
      listLabel: "Users",
      list: [
        "Plant process operators who follow tanks and equipment day to day",
        "Field service experts who visit plants and make sure the equipment works",
        "Production managers and plant managers",
        "Calculation experts and data analysts who assess the data and plan and order based on it",
        "Sales people who present and sell the platform to customers",
      ],
    },
    problem: {
      heading: "One platform, very different users",
      statement: "Complex data had to serve very different users, from the plant process operator to the data analyst.",
      paragraphs: [
        "The platform had grown over the years. Dashboard panels were long text lists, calculations were done by hand in Excel, and work was lost if someone forgot to save or the connection dropped.",
      ],
      constraints: [
        "Users were in different countries and time zones, and some worked remotely at plants.",
        "Calculations needed deep expertise, and not everything could be standardised.",
        "The data was time-critical, so errors and lost work were costly.",
        "The design system lived in Sketch, which made collaboration with developers harder.",
      ],
    },
    process: {
      heading: "Continuous development with experts",
      steps: [
        {
          title: "Quick improvements first",
          paragraphs: [
            "I picked up the previous designer's work and started with the views where the problem was most obvious. I turned the dashboard panels from text lists into visual cards, so the situation is clear at a glance.",
          ],
          figures: [screen("kem-dash-menu.png")],
        },
        {
          title: "Interviews across time zones",
          paragraphs: [
            "Interviews often included users in the United States, so I fitted my schedule around large time differences. The project manager, who already had good relationships with these stakeholders, joined the conversations. That made it easier to build trust and get people involved.",
          ],
        },
        {
          title: "A calculation tool designed with an expert",
          paragraphs: [
            "A calculation expert did chemical dosing and consumption calculations in Excel. They wanted a tool that splits the calculation into clear steps. The result was a five-step calculation tool that opens in a modal from a Make a calculation button.",
            "We designed it together. We went through the steps of the calculation and worked out in which order the information is needed. I finished the designs on my own and showed them to the expert before development.",
            "Not everything could be standardised. So the tool lets you write your own formula when the standard steps aren't enough. That way it guides the usual cases but doesn't stop the expert in exceptional ones.",
            "No screenshots of the tool survive, so the images are a reconstruction. The steps match the original, but details may differ.",
          ],
          flowLabel: "How the calculation tool was designed",
          flow: ["The expert's Excel calculation", "Co-design", "Finishing the designs", "Review with the expert", "Into development"],
          figures: [
            [calcShots[0], calcShots[1], calcShots[2]],
            [calcShots[3], calcShots[4]],
          ],
        },
        {
          title: "Auto-save",
          paragraphs: [
            "In the data and report views, work was lost if a user forgot to save or the connection dropped. That was especially hard for people working remotely at plants. I designed auto-save for these views and improved the structure and content of the reports at the same time.",
          ],
          figures: [screen("kem-dash-edit.png")],
        },
        {
          title: "An alert system as a side project",
          paragraphs: [
            "With a separate budget, I designed a system that warns when a tank is filling up or a device has another fault. The alert goes to both the plant's process operator and field service.",
          ],
          figures: [screen("kem-tank.png")],
        },
        {
          title: "The design system to Figma",
          paragraphs: [
            "The design system lived in Sketch, which made collaboration with developers harder. Alongside the day-to-day design work, I moved the library to Figma. I cleaned up and rebuilt the components instead of copying them as they were.",
          ],
        },
      ],
    },
    shipped: {
      heading: "The finished platform",
      paragraphs: ["Everything shown in this case was released. The platform also works on mobile devices."],
      figures: [screen("kem-datapoints.png"), screen("kem-mob-a2.png"), screen("kem-mob-b.png")],
    },
    impact: {
      heading: "Less manual work, more trust in the tool",
      intro: [
        "After releases we went through feedback and tested features with users. No precise metrics were collected, so the impact is based on feedback from users and the team.",
        "Experts no longer had to read long text lists to find what they needed. More people in the team could run calculations, not only the most experienced. Work was no longer lost because of a forgotten save or a dropped connection.",
        "Developers and the project manager said work went clearly smoother once design and development used the same tool.",
        "The company's goal was to bring separate databases into one platform and use the data to support selling services. A clearer platform serves both. Sales can show customers the data in an understandable form, and experts spend less time calculating by hand.",
      ],
      highlights: [
        { value: "8+", label: "user groups, from plant process operators to sales and data analysts" },
        { value: "5", label: "steps in the calculation tool that replaced Excel" },
        { value: "1", label: "designer for the whole platform" },
      ],
    },
    reflections: {
      heading: "What I would do differently",
      items: [
        {
          title: "Metrics from the start",
          body: "I would measure things like time spent on calculations, calculation errors and support requests about lost work, before and after the changes. Then the impact could be shown in numbers, not only as feedback.",
        },
        {
          title: "Documenting the process",
          body: "I have no sketches, workshop photos or images of the old views from this project. Today I would save them from the start, because they show how the solutions came about.",
        },
        {
          title: "Working prototypes",
          body: "Instead of static images, I would build working prototypes with AI tools. The expert could try the calculation tool with real data before development.",
        },
        {
          title: "A design system in code too",
          body: "I would build the design system closely with developers, so that it is used in code and not only in Figma.",
        },
      ],
    },
  },

  methods: ["User interviews", "Co-design workshops", "Usability testing", "Discovery research"],
};
