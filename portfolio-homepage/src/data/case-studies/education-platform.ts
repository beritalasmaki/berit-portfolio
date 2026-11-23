import type { CaseStudy, GalleryImage } from "./types";

const gallery: GalleryImage[] = [
  {
    src: "/case/edu-dashboard.png",
    alt: "Teacher home dashboard",
    caption: "Teacher dashboard",
    width: 2000,
    height: 1899,
  },
  {
    src: "/case/edu-mobile-dashboard.png",
    alt: "Teacher home dashboard, mobile",
    caption: "Mobile dashboard",
    width: 339,
    height: 2000,
  },
  { src: "/case/edu-detail.png", alt: "Student administration detail view", caption: "Student details", width: 553, height: 731 },
  {
    src: "/case/edu-timetable.png",
    alt: "Timetable and course offering view",
    caption: "Timetable",
    width: 553,
    height: 623,
  },
  {
    src: "/case/edu-timetable-edit.png",
    alt: "Timetable and course offering, editing selections",
    caption: "Editing selections",
    width: 553,
    height: 623,
  },
  {
    src: "/case/edu-mobile-detail.png",
    alt: "Student administration detail, mobile",
    caption: "Mobile detail",
    width: 369,
    height: 2000,
  },
  {
    src: "/case/edu-mobile-menu.png",
    alt: "Student tabs menu, mobile",
    caption: "Mobile menu",
    width: 410,
    height: 791,
  },
];

/** Photos from workshops and team days. Exported so the Finnish file can reuse the files and sizes. */
export const processShots: GalleryImage[] = [
  {
    src: "/case/edu-process-upper-secondary.jpg",
    alt: "The upper secondary school working group, with representatives of the municipalities, giving a thumbs up after a workshop",
    caption: "Upper secondary workshop",
    width: 736,
    height: 352,
  },
  {
    src: "/case/edu-process-admission.jpg",
    alt: "Whiteboard sketch of student admission: how the learner ID, the guardian's application form, the learner profile and the admission decision connect",
    caption: "Student admission, drawn before designed",
    width: 1125,
    height: 844,
  },
  {
    src: "/case/edu-process-retro.jpg",
    alt: "Retro day collage: a whiteboard of team promises, sticky notes mapped by importance and impact, a Lego model and a magazine collage",
    caption: "Retro day",
    width: 800,
    height: 800,
  },
  {
    src: "/case/edu-process-devday.jpg",
    alt: "Development team day collage: a process diagram, a Jira epic, a use case table and hand-drawn sketches",
    caption: "Processes, epics, use cases",
    width: 800,
    height: 800,
  },
  {
    src: "/case/edu-process-culture.jpg",
    alt: "Ways-of-working workshop collage: writing on sticky notes, a glossary of school terms and a board game about a school day",
    caption: "Shared goal, shared language",
    width: 800,
    height: 800,
  },
];

/** A gallery image by file name, for placing screenshots inside the story. */
function shot(file: string): GalleryImage {
  const image = [...gallery, ...processShots].find((g) => g.src === `/case/${file}`);
  if (!image) throw new Error(`education-platform: no gallery image ${file}`);
  return image;
}

export const educationPlatform: CaseStudy = {
  slug: "education-platform",
  title: "Municipal Education System",
  label: "MUNICIPAL EDUCATION SYSTEM · 2021–2024",
  headline: "Many teams, many systems.\nOne coherent experience.",
  description:
    "A shared, standardised design foundation that unified usability and logic across several platforms.",
  thumbnail: "/case/education-new-card.png",
  thumbnailAlt: "Education platform",
  projectCount: "1",
  industry: "Public education",
  ctaLabel: "Explore the full case study",
  otherCaseStudyDescription:
    "Brought structure to a massive public sector platform by uniting complex municipal school workflows into a clear, accessible tool for teachers and administrators.",

  intro: [
    "The task was to replace the outdated teaching and upper secondary systems of several municipalities with one unified solution for a public sector consortium. I joined the project as UX & Product Designer and, over three years, grew into its Lead Designer.",
  ],
  glance: {
    problem:
      "Outdated teaching and administration systems used in basic and upper secondary education had to be replaced to serve seven municipalities. Several development teams and third-party vendors were building the new system, with many stakeholders and user groups. The platform had to serve two different school environments seamlessly, which meant carefully aligning the processes and functional requirements of comprehensive school and upper secondary school.",
    role:
      "A three-year engagement as UX & Product Designer, later Lead Designer. I was responsible for the product's visual design, user research and the design system's UI kit. I looked after accessibility and kept the design consistent across teams. I worked closely with the product owner and developers, including on defining tickets and requirements.",
    decisionsLabel: "Solution and delivery",
    decisions: [
      "**Clarifying the process:** I ran more than 10 workshops, and a couple of them followed a three-phase process for stakeholders: mapping today's pain points, defining the ideal situation and co-designing the future concepts together. Throughout design and iteration I also held user interviews whenever they were needed. When we built the student admission view, for example, I reached out directly to the study secretaries who handled admissions at the schools. The most important thing was always to hear representatives from each municipality and how they actually worked.",
      "**Consistent design:** I defined a shared visual direction and components for the teams, and explained the reasoning behind decisions in regular sessions with developers.",
      "**Restoring trust:** After a budget overrun, I took an active role in communicating the progress and value of the design work to stakeholders. We rebuilt trust through transparent communication, regular presence and clear documentation of decisions. This made collaboration between the parties clearer and kept the project moving.",
    ],
    outcome:
      "Pilot feedback was very positive: teachers and administrative staff praised the platform's ease of use, speed and consistent structure. The platform launched in five municipalities in spring 2026, and a wider rollout across the school network is now being prepared.",
  },
  roleLabel: "UX & Product Designer, and later Lead Designer, over a three-year period",
  focusLabel: "Service design, Design Systems, and cross-team design consistency across a multi-vendor public sector platform",
  categoryTag: "Public Sector Platform",
  skillTags: [
    {
      label: "Service Design",
      description: "Mapped complex school workflows into one clear experience",
    },
    {
      label: "Design System Leadership",
      description: "Set the visual and functional standard across teams",
    },
    {
      label: "Cross-Vendor Consistency",
      description: "Aligned in-house and third-party platforms into one experience",
    },
    {
      label: "Workshop Facilitation",
      description: "Proposed and ran the three-phase research model the team used",
    },
    {
      label: "Mobile Experience",
      description: "Delivered a mobile app that actually felt easy to use",
    },
    {
      label: "Team Leadership",
      description: "Led visual direction across a team of three designers",
    },
  ],

  gallery,
  sneakPeekImages: ["/case/edu-dashboard.png", "/case/edu-timetable.png"],

  impactIntro:
    "Feedback from the pilot schools has been largely positive. The platform has been described as easy to use, versatile, and modern. Teachers and administrative staff in particular praised how logical the service felt and how well it supported everyday school routines. Usability and speed stood out specifically, with users reporting that they could find what they needed quickly and easily. Practical use cases, like printing report cards and transferring student data, proved reliable in daily use. End users, including teachers, were also involved directly in acceptance testing, which helped ensure the platform actually fit how teaching work happens in practice. The platform only launched in spring 2026, with a wider school rollout this autumn, so the full impact is still ahead of us — what we do know so far is that we delivered a consistent, accessible foundation that several municipalities are now building their daily school administration on.",
  impactCards: [
    {
      number: "01",
      title: "Clearer, more usable interfaces",
      body: "We replaced complex, outdated systems with interfaces that are genuinely easier to understand and use, for teachers, administrators, guardians and students alike, built around real user needs instead of old system logic.",
    },
    {
      number: "02",
      title: "A mobile experience that actually works",
      body: "The old systems had mobile apps, but they were often confusing and frustrating to use. For many guardians and students, this may be the first time managing school-related tasks on a phone actually feels easy instead of like a chore.",
    },
    {
      number: "03",
      title: "One consistent experience, many vendors",
      body: "Despite several development teams and third-party platforms working in parallel, we delivered an experience that looks and behaves consistently, which is genuinely hard to achieve at this scale.",
    },
  ],

  howItStarted: [
    "The project began with a team of three designers (2 UX and 1 Service Designer), running structured workshops as part of a discovery process based on a three-step research model, close to the Double Diamond method. First, we mapped the current state and existing pain points. Second, we explored what an ideal future service could look like. Third, we co-designed concrete concepts with stakeholders, building on insights and sketches from the earlier phases. This research generated a large body of material that became the foundation for the service design and development that followed.",
    "Within the team, I was primarily responsible for the visual design work, creating the concepts and mockups, and making sure the quality of the work held up throughout. I proposed the three-phase workshop model and led it, together with the other designers and the product owner, and later ran the additional workshops we needed whenever we designed the parts of the service that fell under my responsibility.",
  ],

  challenges: [
    {
      number: "01",
      title: "Keeping design consistent across many teams",
      body: "Only 1 to 3 designers worked on this large project at any given time. My job was to make sure every development team used the same visual style and the same reusable building blocks. Just as important was making sure teams understood why we were building something a certain way, not just how it should look. We held regular sessions with developers to explain the reasoning behind decisions and to hear their ideas too.",
    },
    {
      number: "02",
      title: "Turning design into a real product",
      body: "I worked closely with development teams to make sure our designs were actually built the way they were intended. In my final year on the project, as Lead Designer, I was responsible for making sure everything looked and worked consistently across the whole platform, including the parts built by outside companies, which turned out to be harder to customize than we expected.",
    },
    {
      number: "03",
      title: "Facing budget pressure, and rebuilding trust",
      body: "At one point, the project went over budget, and two municipalities withdrew because it became too expensive for them to continue. Trust suffered, both among stakeholders and within the teams. We rebuilt it by staying visible in the right meetings, communicating clearly about what we were doing and why, and writing decisions down so everyone could follow the reasoning. Looking back, planning the design work more carefully from the very start could have prevented some of this friction. Despite the setbacks, the platform launched in the remaining five municipalities in spring 2026, with a wider rollout to schools planned for this autumn.",
    },
  ],

  whatIWouldDoDifferently: [
    "Clearer communication and planning from day one. I would make sure the development team understood not just what we were building, but why, from the very start.",
    "Defining success metrics earlier. Knowing from the outset what we wanted to achieve and how we'd measure it would have made prioritization easier throughout the project. One concrete example, suggested by the project's technical project manager in hindsight, would have been tracking legal compliance directly: which regulatory requirements were already met, and which ones weren't yet, as an actual metric to follow throughout the project.",
    "A more structured Design System from the beginning. This was 2021, and while Design Systems were a known concept, implementing one fully into code at this scale wasn't yet common practice. If I could go back, I would push for building that foundation more deliberately from day one.",
    "Involving legal and regulatory expertise earlier. Alongside the design system, the project would have benefited from bringing in a legal or regulatory expert from the very start, to make sure GDPR and basic education legislation were accounted for early on. A number of feature requests were based on how the previous system worked, and some of it was no longer legally permitted.",
    "Treating the first release as a genuine minimum viable product. In practice we were not building a minimum viable product, meaning the smallest version worth releasing. We were building something closer to a final product that tried to cover every need from day one, which had a real impact on both timeline and workload.",
    "Being present in daily discussions earlier. We had regular daily and weekly meetings, and that rhythm itself was right, but I underestimated early on how much value came from being consistently present in those conversations.",
    "Involving a designer earlier when evaluating third-party solutions. When purchasing ready-made platforms, having a designer assess customization options upfront would have helped avoid some difficult trade-offs later.",
  ],

  methods: ["User interviews", "Co-design workshops", "Usability testing", "Discovery research", "Journey Mapping"],

  story: {
    facts: [
      { label: "Role", value: "UX & Product Designer, later Lead Designer" },
      { label: "Timeline", value: "2021–2024, three years" },
      {
        label: "Team",
        value:
          "In the administration service: a product owner, two front-end and one back-end developer, a service designer and me. A technical development manager ran the whole project.",
      },
      {
        label: "Methods",
        value: "Co-design workshops, user interviews, journey mapping, usability and acceptance testing",
      },
    ],
    heroImage: shot("edu-dashboard.png"),
    tldr: [
      "Seven municipalities needed one system to replace the outdated tools that ran basic and upper secondary education. Over three years I grew from UX & Product Designer to **Lead Designer**, and kept a platform built by several teams and vendors looking and working like one product.",
      "The platform went live in **five municipalities in spring 2026**. Pilot schools describe it as easy to use, fast and logical.",
    ],
    background: {
      heading: "Seven municipalities, two school worlds",
      paragraphs: [
        "A consortium of public sector organisations set out to replace the systems municipalities use to run their schools: timetables, student records, absences and assessment. The new platform had to serve both comprehensive schools and upper secondary schools, which run on different processes and rules.",
        "The platform is made up of services: a teaching and administration service for school staff, and e-services for guardians, such as school enrolment. Several development teams and third-party vendors built them in parallel. The users range from teachers and administrative staff to guardians and students, on computers and on phones.",
      ],
    },
    problem: {
      heading: "Many builders, one product",
      statement:
        "Seven municipalities, two school types and several vendors had to end up with one system that feels like one product.",
      paragraphs: [
        "The old systems followed old logic. Some feature requests were straight copies of how the previous system worked, and some of that was no longer even legal. The new platform had to be built around how schools actually work today.",
      ],
      constraints: [
        "**Two school worlds:** comprehensive and upper secondary schools have different processes and requirements, and both had to work in one platform.",
        "**Many builders:** several development teams and third-party platforms worked in parallel, with only 1–3 designers on the project at any time.",
        "**Many voices:** seven municipalities, each with its own way of working, and a long list of stakeholders and user groups.",
        "**Law and data:** GDPR and education legislation set hard limits on what the system was allowed to do.",
      ],
    },
    process: {
      heading: "From workshops to a shared visual language",
      steps: [
        {
          title: "Start with how schools actually work",
          paragraphs: [
            "I proposed a three-phase workshop model, close to the Double Diamond, and led it with the other designers and the product owner. First we mapped today's pain points, then defined what an ideal service would look like, and finally co-designed concrete concepts with stakeholders. Upper secondary schools had their own working group, with representatives from the municipalities.",
            "In total I ran more than 10 workshops. Whenever a part of the service I owned needed more depth, I went straight to the people doing the work. For student admission, I contacted the study secretaries who handle admissions at the schools. Then we went back to basic tools: if you can't draw a process, it isn't clear yet. Before designing a screen, we drew how the learner's ID, the guardian's application, the learner profile and the admission decision connect.",
          ],
          figures: [
            [shot("edu-process-upper-secondary.jpg"), shot("edu-process-admission.jpg")],
            [shot("edu-detail.png")],
          ],
        },
        {
          title: "Bring the team into one room",
          paragraphs: [
            "Most of the work was remote, where teammates easily stay names on a screen. In-person days changed that, and I used them to bring the team closer. On a retro day we looked at what we'd achieved and where to take the work next. On development team days we refined process diagrams, user stories, epics, data models and UIs together, and used an emotion exercise to release the load that builds up in remote work.",
            "We also used play to make ways of working concrete. Lego, collages and a board game about a school day helped us clarify our goal, sharpen how we work and build a shared vocabulary of school terms. After these days teammates no longer felt distant, and we agreed on how to run better workshops.",
          ],
          figures: [shot("edu-process-retro.jpg"), shot("edu-process-devday.jpg"), shot("edu-process-culture.jpg")],
        },
        {
          title: "One visual language for every service",
          paragraphs: [
            "I worked across the teaching and administration service and the e-services for guardians, and made sure they share one visual identity and one user experience. With few designers and many teams, I couldn't review every screen. Instead I defined a shared visual direction and a UI kit of reusable components, and later led the visual direction across a team of three designers.",
            "Consistency wasn't only about looks. In regular sessions with developers I explained why something was built a certain way, and listened to their ideas. That made the right choice the easy one, even when no designer was in the room.",
            "In my final year, as Lead Designer, I was responsible for the whole platform looking and working consistently, including the parts built on third-party platforms. Those turned out to be harder to customise than we expected.",
          ],
          figures: [shot("edu-timetable.png"), shot("edu-timetable-edit.png")],
        },
        {
          title: "A phone experience people actually want to use",
          paragraphs: [
            "The old systems had mobile apps, but guardians and students often found them confusing. The new mobile views use the same structure and components as the desktop ones, so things are in the same place whatever the screen size.",
          ],
          figures: [shot("edu-mobile-dashboard.png"), shot("edu-mobile-menu.png"), shot("edu-mobile-detail.png")],
        },
        {
          title: "Rebuild trust when the budget broke",
          paragraphs: [
            "Mid-project the budget ran over, and two municipalities withdrew because continuing became too expensive for them. Trust suffered, both among stakeholders and inside the teams.",
            "I took an active role in showing the progress and value of the design work. I stayed visible in the right meetings, explained what we were doing and why, and wrote decisions down so anyone could follow the reasoning. It made the collaboration clearer and kept the project moving.",
          ],
        },
      ],
    },
    shipped: {
      heading: "A platform teachers can run their day from",
      paragraphs: [
        "The teacher's home view brings the day together: today's timetable, upcoming events, quick links and the students who need attention. The same structure carries over to the phone.",
      ],
      figures: [shot("edu-dashboard.png"), shot("edu-mobile-dashboard.png")],
    },
    impact: {
      heading: "Live in five municipalities",
      intro: [
        "The evidence is qualitative: feedback from the pilot schools, and acceptance testing in which teachers and other end users tested the platform themselves. We didn't set measurable success metrics at the start, which is one of my lessons below.",
        "Teachers and administrative staff describe the platform as easy to use, versatile and modern. Speed and logic come up again and again: people find what they need quickly. Everyday tasks such as printing report cards and transferring student data have proved reliable in daily use.",
        "The platform launched in spring 2026, after my time on the project, and a wider rollout across the school network is being prepared. The full impact is still ahead.",
      ],
      highlights: [
        { value: "5", label: "municipalities using the platform since spring 2026" },
        { value: "10+", label: "workshops with stakeholders and school staff" },
        { value: "3", label: "years on the project, growing into Lead Designer" },
      ],
    },
    reflections: {
      heading: "What I'd do differently",
      items: [
        {
          title: "Define success metrics on day one",
          body: "Knowing from the start what we wanted to achieve, and how to measure it, would have made prioritising easier. One concrete idea from the technical project manager, in hindsight: track legal compliance as a metric, with which requirements are met and which aren't yet.",
        },
        {
          title: "Ship a real MVP",
          body: "We weren't building the smallest version worth releasing. We were building something close to a final product that tried to cover every need from day one, and it cost us both time and workload.",
        },
        {
          title: "Bring in legal expertise and a design system early",
          body: "Some feature requests copied the old system, and parts of it were no longer legal. A GDPR and education-law expert from the start, and a design system deliberately built into code from day one, would have saved rework. In 2021 a coded design system at this scale wasn't common practice yet, but today I'd push for it.",
        },
        {
          title: "Put a designer in vendor evaluation",
          body: "When ready-made platforms are bought, a designer should assess how far they can be customised before the decision, not after. It would have spared us some hard trade-offs later.",
        },
      ],
    },
  },
};
