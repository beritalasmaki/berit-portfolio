import type { CaseStudy, GalleryImage } from "./types";

const gallery: GalleryImage[] = [
  {
    src: "/case/edu-dashboard.png",
    alt: "Teacher home view, concept",
    caption: "Teacher home view, concept",
    width: 2000,
    height: 1899,
  },
  {
    src: "/case/edu-mobile-dashboard.png",
    alt: "Teacher home view on a mobile device, concept",
    caption: "Home view on mobile, concept",
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
    src: "/case/edu-process-admission.jpg",
    alt: "Whiteboard sketch of student admission: how the learner ID, the guardian's application form, the learner profile and the admission decision connect",
    caption: "Student admission, mapped before design",
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
      "Pilot feedback was very positive: teachers and administrative staff praised the platform's ease of use, speed and consistent structure. The platform launched in five municipalities in spring 2026, and a wider rollout across the school network began in autumn 2026.",
  },
  roleLabel: "UX & Product Designer, and later Lead Designer, over a three-year period",
  focusLabel: "Service design, Design Systems, and cross-team design consistency across a multi-vendor public sector platform",
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
    "Feedback from the pilot schools has been largely positive. The platform has been described as easy to use, versatile, and modern. Teachers and administrative staff in particular praised how logical the service felt and how well it supported everyday school routines. Usability and speed stood out specifically, with users reporting that they could find what they needed quickly and easily. Practical use cases, like printing report cards and transferring student data, proved reliable in daily use. End users, including teachers, were also involved directly in acceptance testing, which helped ensure the platform actually fit how teaching work happens in practice. The platform only launched in spring 2026, with a wider school rollout from autumn 2026, so the full impact is still ahead of us — what we do know so far is that we delivered a consistent, accessible foundation that several municipalities are now building their daily school administration on.",
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
      body: "At one point, the project went over budget, and two municipalities withdrew because it became too expensive for them to continue. Trust suffered, both among stakeholders and within the teams. We rebuilt it by staying visible in the right meetings, communicating clearly about what we were doing and why, and writing decisions down so everyone could follow the reasoning. Looking back, planning the design work more carefully from the very start could have prevented some of this friction. Despite the setbacks, the platform launched in the remaining five municipalities in spring 2026, and a wider rollout to schools began in autumn 2026.",
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

  categoryTag: "Public Sector Education System",
  story: {
    facts: [
      { label: "Role", value: ["UX & Product Designer", "Later Lead Designer"] },
      { label: "Timeline", value: ["2021–2024, three years"] },
      {
        label: "Team",
        value: [
          "Across teaching, administration and e-services",
          "Per team: product owner, 3 developers, service designer and me",
          "Technical development manager leading delivery",
        ],
      },
      {
        label: "Methods",
        value: ["Co-design workshops", "User interviews", "Journey mapping", "Usability and acceptance testing"],
      },
      {
        label: "What I did",
        wide: true,
        value: [
          "Facilitated workshops and ran user interviews",
          "Designed the design system's UI kit",
          "Designed the administration service's user interfaces",
          "Kept visual identity and UX consistent across the system",
          "Owned accessibility and helped organise external audits",
          "Kept designs up to date for developers and helped define Jira tickets",
        ],
      },
    ],
    heroImage: shot("edu-dashboard.png"),
    tldr: [
      "Seven municipalities needed one system to replace the outdated tools used in basic and upper secondary education. Over three years I grew from UX & Product Designer to **Lead Designer**, and made sure a platform built by several teams and vendors looked and worked as one product.",
      "The platform was rolled out in **five municipalities in autumn 2026**. Pilot schools describe it as easy to use, fast and consistent.",
    ],
    background: {
      heading: "Seven municipalities, two school worlds",
      paragraphs: [
        "A public sector consortium set out to replace the systems municipalities use to run everyday school life: timetables, student records, absences and assessment. The new platform had to serve both comprehensive schools and upper secondary schools, each with their own processes and rules.",
        "The platform is made up of services: a teaching and administration service for school staff, and an e-service for guardians, used for things like school enrolment. There is also a communication service. Several development teams and third-party vendors built them in parallel. The users are teachers and administrative staff as well as guardians and students, on computers and on mobile devices.",
      ],
    },
    problem: {
      heading: "Many builders, one product",
      statement:
        "The scattered teaching and administration systems of seven municipalities' comprehensive and upper secondary schools had to be brought together in one place, so data would be easier and safer to manage. The result had to feel like one product, even though many vendors were building it.",
      paragraphs: [
        "The old systems followed old logic. Some feature requests were straight copies of how the previous system worked, and some of that was no longer even legal. The new platform had to be built around how schools actually work today. Everything was rebuilt: we kept what worked in the old systems and redesigned the processes that didn't.",
      ],
      constraints: [
        "**Two school worlds:** comprehensive and upper secondary schools have different processes and requirements, and both had to work in the same platform.",
        "**Many builders:** several development teams and a third-party platform worked in parallel, with only 1–3 designers on the project at any time.",
        "**Many voices:** seven municipalities with their own ways of working, and a long list of stakeholders and user groups.",
        "**Law, data protection and accessibility:** GDPR and education legislation set strict limits on what the system was allowed to do. As a public sector service it also had to meet accessibility requirements, so every teacher, guardian and student can use it.",
      ],
    },
    process: {
      heading: "From workshops to a shared visual language",
      steps: [
        {
          title: "Start with how schools actually work",
          paragraphs: [
            "I proposed a three-phase workshop model and facilitated it together with the other designers and the product owner. First we mapped today's pain points, then defined the ideal situation, and finally co-designed concrete concepts with stakeholders. Upper secondary schools had their own working group with representatives from the municipalities.",
            "In total I facilitated around ten workshops. Alongside them I worked closely with end users. Whenever a part I was responsible for needed deeper understanding, I ran quick, lightweight user interviews.",
            "When designing student admission, for example, I contacted the study secretaries who handle admissions at the schools. Before a single screen, we mapped the process: how the learner's ID, the guardian's application, the learner profile and the admission decision connect. Our rule was that if you can't draw a process, it isn't clear yet. When something was unclear, we went back to users and developers, clarified it and drew it again, until user needs and system requirements fitted together. Only then did I design the screens.",
          ],
          figures: [shot("edu-process-admission.jpg"), shot("edu-detail.png")],
        },
        {
          title: "Bring the team into one room",
          paragraphs: [
            "Most of the work was remote, so we also organised in-person days, which we planned and facilitated together. They brought the team closer and made collaboration smoother. On a retro day we reviewed what we had achieved and where to take the work next. On development team days we refined process descriptions, user stories, epics, data models and user interfaces together.",
            "We used play to make ways of working concrete. Lego, collages and a board game about a school day helped us clarify our goal, sharpen how we work and build a shared vocabulary for school terms. After these days, teammates no longer felt distant. We also clarified how the team works: how information flows between design and development, and how to make the work smoother from here on.",
          ],
          figures: [shot("edu-process-retro.jpg"), shot("edu-process-devday.jpg"), shot("edu-process-culture.jpg")],
        },
        {
          title: "One visual language for every service",
          paragraphs: [
            "I worked on both the teaching and administration service and the guardians' e-service, and made sure they share one visual identity and user experience. With few designers and many teams, I couldn't review every screen. Instead I defined a shared visual direction and a UI kit of reusable components, and later led the visual direction of the whole project.",
            "Consistency was about more than looks. I worked closely with developers: I regularly explained why something was built a certain way, listened to their ideas and worked out the technical constraints of each part. My bachelor's degree in software development meant I understood the implementation challenges and could discuss them directly with developers.",
            "In my final year, as Lead Designer, I was responsible for the whole platform looking and working consistently, including the parts built on third-party platforms. These turned out to be harder to customise than expected. With colours and the logo, we still made them fit so the service didn't feel disjointed.",
            "The same went for mobile devices. Guardians and students had often found the old mobile apps confusing, so the mobile views use the same structure and components as desktop, and things are where you expect them on any screen.",
          ],
          figures: [
            [shot("edu-timetable.png"), shot("edu-timetable-edit.png")],
            [shot("edu-mobile-dashboard.png"), shot("edu-mobile-menu.png"), shot("edu-mobile-detail.png")],
          ],
        },
        {
          title: "Accessibility from start to finish",
          paragraphs: [
            "A public sector service has to be accessible, so accessibility ran through the whole design process instead of being a final check. I made sure accessibility requirements were written into developers' tickets, so they were built into every feature.",
            "I helped organise two accessibility audits carried out by an external partner. The first reviewed user journeys and the visual design, the second the technical implementation.",
          ],
          flowLabel: "How accessibility was handled",
          flow: [
            "Accessibility requirements written into developer tickets",
            "Built in as part of every feature",
            "Audit 1: user journeys and visual design",
            "Audit 2: technical implementation",
          ],
        },
        {
          title: "Rebuilding trust when the budget ran over",
          paragraphs: [
            "Midway through the project the budget ran over, and two municipalities withdrew because continuing became too expensive for them. Trust suffered, both among stakeholders and within the teams.",
            "I took an active role in showing the progress and value of the design work. I was present in the right meetings, explained what we were doing and why, and documented decisions so anyone could follow the reasoning. This made collaboration clearer and kept the project moving.",
          ],
        },
      ],
    },
    shipped: {
      eyebrow: "An example of concept work",
      heading: "Teacher home view",
      paragraphs: [
        "The same wish kept coming up in workshops. Teachers wanted a clear home view that brought everything relevant to their work into one place. I started sketching a concept on my own initiative.",
        "Before drawing anything, I worked through a few questions. What does a teacher need most in their work? How do they get to the page, and on what device? In which situations do they open it? How does the view support moving from one lesson to the next? Then I mapped out the view and looked for answers to those questions.",
        "My plan was to take the concept further once it became relevant, but my time on the project ended before that. The concept was not released as such.",
      ],
      listLabel: "From questions to design decisions",
      list: [
        "**Next lesson and attendance at the top:** supports moving from one lesson to the next, because taking attendance at the start of a lesson takes one tap.",
        "**The day's timetable with status labels:** at a glance, the teacher sees which lessons already have attendance recorded and which are still missing it.",
        "**Students who need attention:** absences and falling behind in studies show up early, so the teacher can step in before things get worse.",
        "**Quick links:** the most common tasks, such as study planning, support measures, assessment and messages from guardians, are one step away without menus.",
        "**The same structure on mobile:** teachers aren't always at a computer, so the view had to work on mobile devices too.",
      ],
      closing: [
        "**What I would do differently now:** I would separate the timetable and events more clearly, and give the events section a sharper purpose, such as upcoming exams, so the teacher sees right away when exams are coming up. Above all, I would do more thorough user research, because the concept was based on lightweight user interviews and observations from other workshops.",
      ],
      figures: [shot("edu-dashboard.png"), shot("edu-mobile-dashboard.png")],
    },
    impact: {
      heading: "Live in five municipalities",
      intro: [
        "In the 2024 pilots, a total of 350 future users across Finland tested the platform. In early 2026, dozens of users in different roles, including teachers, tested complete processes spanning several services in acceptance testing. Because no MVP was released, we couldn't test the platform in real use early enough, and no measurable goals could be set. I come back to this in my lessons.",
        "According to the pilot users, the platform is easy to use, versatile and modern. They found the service easy to learn, and it works logically and simply. The clarity of the interface and its fresh look got particular praise. Everyday tasks such as printing report cards and transferring student data work reliably in daily use.",
        "The pilots also produced plenty of development ideas. Users found places where they worked differently than had been assumed, and these were turned into a checklist before rollout.",
        "The platform went into production in pilot schools in spring 2026. Pilot school students received the first report cards produced on the platform, and guardians started using the service too. In the 2026–2027 school year, use is expanding to comprehensive schools in five municipalities, so the full impact will only show later.",
      ],
      highlights: [
        { value: "5", label: "municipalities adopting the platform in the 2026–2027 school year" },
        { value: "10+", label: "workshops with stakeholders and school staff" },
        { value: "3", label: "years on the project, ending as Lead Designer" },
      ],
    },
    reflections: {
      heading: "What I would do differently",
      items: [
        {
          title: "A real MVP",
          body: "We didn't build the smallest version worth releasing, but something close to a finished product that tried to cover every need from day one. It showed in both the timeline and the workload. A released MVP would have brought real users in earlier, and let us set metrics and follow how development progresses over time.",
        },
        {
          title: "Metrics from day one",
          body: "If we had known from the start what we were aiming for and how to measure it, prioritising would have been easier. With a released MVP, we could have measured task success rate, and used funnel analysis to see where users drop out of a multi-step process such as student admission. Together they would have shown where and why users fail. Metrics would also have helped when we had to rebuild the municipalities' trust, because numbers make the value of design visible to decision-makers. In hindsight, the technical project manager also suggested tracking legal compliance as a metric, meaning which requirements are already met and which aren't yet.",
        },
        {
          title: "Legal expertise from the start",
          body: "Some feature requests copied the old system, and not all of it was legal anymore. If a GDPR and education law expert had been involved from the start, I could have designed the screens with legal requirements in mind from the first sketch. Instead, some screens had to be redesigned when the requirements became clear later.",
        },
        {
          title: "A design system in code too",
          body: "A design system has to exist in code, not only in design files. Our components were based on the Chakra library and collected in Storybook, but the same components were still sometimes coded more than once. As the project went on this got clearer, and I made sure developers used components that were already coded, such as buttons. Now I would organise the design system work better from the start, and push for enough resources for design and for developing DesignOps.",
        },
        {
          title: "A designer in vendor selection",
          body: "When ready-made platforms are put out to tender, a designer should help assess whether the service can flex to the platform's visual identity and user experience. That assessment belongs before the decision, not after it. It would have spared us some difficult compromises later.",
        },
      ],
    },
  },
};
