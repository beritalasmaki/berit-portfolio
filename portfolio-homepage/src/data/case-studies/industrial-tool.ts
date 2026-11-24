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

/** Reconstructed alert system views (a separate app, not part of the main platform).
 * The first is an illustration of the screen on the dosing equipment. */
export const alertShots: GalleryImage[] = [
  {
    src: "/case/kem-alert-illustration.jpg",
    alt: "Illustration of a process operator checking the alert system on a touchscreen mounted on a stainless steel dosing unit in a plant hall",
    caption: "Illustration · The plant screen on the dosing equipment",
    width: 2048,
    height: 1274,
  },
  {
    src: "/case/kem-alert-plant.png",
    alt: "Touch screen version for the plant: an alert banner with a large acknowledge button, the risk forecast, recommendations as large rows, the three process states with their indicators, and a bottom navigation",
    caption: "Reconstruction · Plant touch screen",
    width: 2560,
    height: 1600,
  },
  {
    src: "/case/kem-alert-1.png",
    alt: "Alert system status view: a four-hour risk forecast, recommended actions, colour-coded chemical states with text labels, and dosing trends",
    caption: "Reconstruction · Desktop app, status view",
    width: 2560,
    height: 1560,
  },
  {
    src: "/case/kem-alert-2.png",
    alt: "Alert settings: an active warning with an acknowledge button, normal, mid and warning levels, and recipients for email and text message alerts",
    caption: "Reconstruction · Desktop app, alert settings",
    width: 2560,
    height: 1560,
  },
];

/** The widget panel before the redesign: a plain list (rebuilt from the current screen). */
export const widgetBefore: GalleryImage = {
  src: "/case/kem-widgets-before.png",
  alt: "Before: the Edit dashboard panel lists the widgets only as blue name bars, scrolled through to find the right one",
  caption: "Before (reconstruction) · Widgets as a list",
  tag: "Before",
  width: 1800,
  height: 1386,
};

/** Auto-save in the Edit dashboard panel: before, off and on (original design files). */
export const autosaveShots: GalleryImage[] = [
  {
    src: "/case/kem-autosave-before.png",
    alt: "Before: the Edit dashboard panel has only Cancel and Save buttons, so changes are kept only when the user remembers to save",
    caption: "Before · Changes saved only with the Save button",
    tag: "Before",
    width: 1800,
    height: 1386,
  },
  {
    src: "/case/kem-autosave-off.png",
    alt: "Auto-save off: a toggle reads Auto-save: Off, with Cancel and Save buttons beside it",
    caption: "Auto-save off · Cancel and Save stay available",
    tag: "After · Off",
    width: 1800,
    height: 1446,
  },
  {
    src: "/case/kem-autosave-on.png",
    alt: "Auto-save on: the toggle reads Auto-save: On with the last saved time, and a Back to view mode button replaces Cancel and Save",
    caption: "Auto-save on · Last saved time and a way back to view mode",
    tag: "After · On",
    width: 1800,
    height: 1446,
  },
];

export const industrialTool: CaseStudy = {
  slug: "industrial-tool",
  title: "Industrial Data Platform",
  label: "INDUSTRIAL DATA PLATFORM · 2021–2023",
  headline: "Monitoring, calculation and reporting for industrial processes and equipment in one service",
  description:
    "I designed the user experience of an international chemical company's data platform as its only designer. When industrial sites and water treatment plants could see their processes clearly, they used less chemical, at best under half of what they used before.",
  thumbnail: "/case/kemira-card.png",
  thumbnailAlt: "Dashboard of an industrial data platform",
  projectCount: "2",
  industry: "Industrial",
  ctaLabel: "Explore the full case study",
  otherCaseStudyDescription:
    "Made an industrial data platform clear, so customers can dose chemicals right and use less of them.",

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
      src: "/case/kem-hero-bundle.png",
      alt: "The platform dashboard with KPI, trend, gauge and chart widgets, and a tank view on a mobile device",
      caption: "",
      width: 1181,
      height: 697,
    },
    heroBundle: true,
    tldr: [
      "An international chemical company's data platform has **more than eight user groups**, from plant process operators to sales and data analysts, and each needs something different from it. I was the platform's only designer in 2021–2023.",
      "Experts used to do demanding calculations in Excel. Together with an expert I turned them into a **five-step calculation tool** that still allows a custom formula when the standard steps aren't enough. Auto-save stopped work from getting lost, an alert system warns when a tank is filling up or a device fails, and moving the UI kit to Figma put designers and developers in the same tool.",
    ],
    background: {
      heading: "Remote data from customers' plants",
      paragraphs: [
        "The company supplies chemicals to industry and water treatment plants. Its chemical tanks and dosing equipment sit at customers' plants, and their data is monitored remotely.",
        "Before the platform, the data lived in many separate databases. The platform was built to collect, view and analyse it in one place. Customers use it to follow their own processes, and the company's experts help them with analysis and troubleshooting. Sales uses the data when selling services.",
        "I joined the ongoing project in 2021 after the previous designer. I was the platform's only designer, so I was responsible for the whole user experience.",
      ],
      listLabel: "Users",
      list: [
        "Plant process operators who follow tanks and equipment day to day",
        "Field service experts who visit plants and make sure the equipment works",
        "Production managers and plant managers",
        "Calculation experts and data analysts who analyse the data and plan and place orders based on it",
        "Salespeople who present and sell the platform to customers",
        "Purchasers at the plants who order more chemicals",
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
          title: "Interviews: what different users need",
          paragraphs: [
            "I interviewed three customers, a couple of field service experts who checked equipment at customers' plants, and salespeople. Sales used customers' consumption data to build reports and offer more cost-effective solutions.",
            "I looked into two things. First the dashboard: what experts need from it and how they use it. Then reporting: how reports are built and what they are used for. A salesperson, an expert and the plant's purchaser look for different things in the same report, so I worked out what matters to each.",
            "This was during the pandemic, so the interviews were remote. People were in Europe and the United States, so I fitted my schedule around large time differences. The project manager, who already had good relationships with the customers, joined the conversations, which made it easier to build trust. The team met a few times at the company's office for team days.",
            "**What the interviews showed:** work was lost if someone forgot to save or the connection dropped, and widgets were hard to browse and compare before adding them to the dashboard. These findings shaped the dashboard and auto-save work.",
          ],
        },
        {
          title: "A clearer dashboard",
          paragraphs: [
            "I started with the views where the problem was most obvious. I turned the dashboard panels from text lists into visual cards, so the situation is clear at a glance.",
            "I also redesigned how widgets are added. Before, they were only a list of names that you scrolled through to find the right one. In the new version each widget is shown as a card with a preview, so you can see what it looks like before you drag it onto the dashboard.",
            "I kept the list alongside the cards. Users who were used to the list could still find it, and the move to cards could happen at their own pace. We added tracking to see how many users started using the cards instead of the list, and the cards were taken up well.",
          ],
          figures: [widgetBefore, { ...autosaveShots[0], alt: "After: widgets shown as cards with previews, with a List view option kept beside Card view", caption: "After · Cards with previews, list view still available", tag: "After" }],
        },
        {
          title: "A calculation tool designed with an expert",
          paragraphs: [
            "A calculation expert worked out chemical dosing and consumption in Excel. They wanted a tool that splits the calculation into clear steps. The result was a five-step calculation tool that opens in a modal from the Make a calculation button.",
            "We designed it together. We went through the steps of the calculation and worked out in which order the information is needed. I finished the designs on my own and showed them to the expert before development.",
            "Not everything could be standardised. So the tool lets you write your own formula when the standard steps aren't enough. That way it guides the usual cases but doesn't hold the expert back in the exceptions.",
            "No screenshots of the tool survive, so the images are a reconstruction. The steps match the original, but details may differ.",
          ],
          figures: [
            [calcShots[0], calcShots[1], calcShots[2]],
            [calcShots[3], calcShots[4]],
          ],
        },
        {
          title: "Auto-save",
          paragraphs: [
            "The interviews showed that work was lost if a user forgot to save or the connection dropped. That was especially hard for people working remotely at plants.",
            "Before, changes to a dashboard were kept only when the user pressed Save. I added an auto-save toggle to the Edit dashboard panel. When auto-save is on, the panel shows when changes were last saved, and a Back to view mode button replaces Cancel and Save. When it is off, users save or cancel their changes themselves, as before.",
            "The toggle left the choice to the user, so people who wanted to try changes before keeping them could still work that way. I also improved the structure and content of the reports.",
          ],
          figures: [[autosaveShots[0]], [autosaveShots[1], autosaveShots[2]]],
        },
        {
          title: "An alert system as a side project",
          paragraphs: [
            "With a separate budget, I designed an alert system. It was its own application, not part of the main platform, and it came in two versions: a desktop app, and a version for touch screens mounted on the dosing equipment at the plants. It tracks the chemical state of the process and warns when a tank is filling up or something else goes wrong.",
            "The status view shows the risk forecast for the next four hours, recommended actions and the state of each part of the process. Every state has a text label as well as a colour, so it doesn't rely on colour alone.",
            "In the desktop app, users set three levels for the data: normal (green), mid level (orange) and warning level (red). They also choose who gets alerts by email or text message, and add new recipients by email address. That way an alert reaches both the process operator at the plant and field service.",
            "On the plant screen, alerts always show and are acknowledged right on the screen. The screen is used with a finger, so text, buttons and navigation are larger than in the desktop app. The same information shows at a glance, and the dosing trends have their own tab in the bottom navigation.",
            "The first image is an illustration of the situation of use. No screenshots of the original system survive, so the views are a reconstruction based on one surviving image. Product names have been removed.",
          ],
          figures: [[alertShots[0], alertShots[1]], [alertShots[2], alertShots[3]]],
        },
        {
          title: "The design system to Figma",
          paragraphs: [
            "We started designing in Sketch, but I moved my own design work to Figma because it was faster. I suggested to the client that the whole team move to Figma. The UI kit can be built more clearly there, and prototypes can be made directly in Figma without a separate InVision service.",
            "I moved the UI kit to Figma with an automatic import, but the components broke badly. So I rebuilt them and sorted the components and tokens into their own clear folders.",
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
        "**How my work shaped customers' results.** Industrial sites and water treatment plants use chemicals to treat water. When the dose is exactly right, less chemical is used and costs come down. The right dose comes from following the process with reliable data, and customers and experts made those decisions in the very views I designed.",
        "One plant had been dosing by hand because its old measuring equipment couldn't be trusted. Once dosing became automatic and the process could be followed on the dashboards, the plant's process expert described the change like this: “Now we know what's happening 24 hours a day. There are good dashboards, accurate reports.”",
        "**Reports supported sales.** The company's goal was to bring separate databases onto one platform and use the data in selling services. With the reports, sales and experts can show customers their savings clearly.",
        "These results came from the chemistry, the calculation algorithms, the experts and the user interface working together. My part was making the data and calculations clear enough for customers and experts to follow and base decisions on.",
        "**Feedback from users and the team.** Interviews were short and schedules tight, so no broad usability metrics were set, apart from tracking how the widget cards were taken up. They weren't needed to decide what to fix first, as a few interviews were enough to show what got in the way most. The impact of the changes is therefore based on feedback from users and the team.",
        "Experts no longer had to dig for information in long text lists. More than the most experienced people could run calculations. A forgotten save or a dropped connection no longer lost work.",
        "According to the developers and the project manager, collaboration became noticeably smoother once designers and developers used the same tool.",
      ],
      highlights: [
        {
          value: "55%",
          work: "Calculation tool",
          enabled: "Experts calculated the right amount of chemical step by step",
          label: "less chemical: under half of what was used before",
        },
        {
          value: "15%",
          work: "Calculation tool",
          enabled: "Chemical was dosed only as much as needed",
          label: "less chemical for the same cleaning result",
        },
        {
          value: "19%",
          work: "Dashboards and reports",
          enabled: "The process was visible around the clock, so manual dosing could be dropped",
          label: "less chemical: almost a fifth was no longer needed",
        },
      ],
    },
    reflections: {
      heading: "What I would do differently",
      items: [
        {
          title: "Metrics tied to business numbers",
          body: "The interviews showed what to fix, but not how much a change helped. The company already had KPIs for customers' purchasing behaviour and satisfaction. Now I would tie the design work to them and follow a few light metrics that come straight from the system, without separate research. For example, how many experts do their calculations in the tool instead of Excel, how long a calculation takes, how many support requests come in about lost work, and how often customers open their dashboards.",
        },
        {
          title: "Documenting the process",
          body: "I have images of the old views, but no sketches or workshop photos from this project. Today I would document the whole process from the start, because sketches and workshops are what show how the solutions came about.",
        },
        {
          title: "Working prototypes",
          body: "Instead of static images, I would build working prototypes with AI tools. The expert could try the calculation tool with real data before development.",
        },
        {
          title: "A clear process for the design system",
          body: "The developers used Storybook, so there was a component library in code too. But the work wasn't organised as a design system, and there was no agreed process for things like how a new component makes it into the library. Now I would agree with the team from the start who decides on new components, how they are documented, and how the Figma UI kit and Storybook stay in step.",
        },
      ],
    },
  },

  methods: ["User interviews", "Co-design workshops", "Usability testing", "Discovery research"],
};
