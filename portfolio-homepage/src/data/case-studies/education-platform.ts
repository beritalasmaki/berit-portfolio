import type { CaseStudy } from "./types";

export const educationPlatform: CaseStudy = {
  slug: "education-platform",
  title: "National Education Administration Platform",
  label: "NATIONAL EDUCATION ADMINISTRATION PLATFORM · 2021–2024",
  headline: "Many teams, many systems.\nOne coherent experience.",
  description:
    "A shared, standardised design foundation for complex municipal education systems, unifying usability and logic across several platforms.",
  thumbnail: "/case/education-new.png",
  thumbnailAlt: "Education platform",
  ctaLabel: "Explore the full case study",
  otherCaseStudyDescription:
    "Brought structure to a massive public sector platform by uniting complex municipal school workflows into a clear, accessible tool for teachers and administrators.",

  intro:
    "A consortium of public sector organizations needed to replace the outdated systems used across basic and upper secondary education, serving many municipalities with different needs. I joined as UX & Product Designer, later becoming Lead Designer, over a three-year period.",
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

  gallery: [
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
  ],
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
      body: "Only 1 to 3 designers worked on this large project at any given time. My job was to make sure every development team used the same visual style and the same reusable building blocks, instead of everyone doing their own thing. Just as important was making sure teams understood why we were building something a certain way, not just how it should look. We held regular sessions with developers to explain the reasoning behind decisions and to hear their ideas too.",
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
    "Involving legal and regulatory expertise earlier. Alongside the design system, the project would have benefited from bringing in a legal or regulatory expert from the very start, to make sure GDPR and basic education legislation were accounted for early on. A number of feature requests were based on how the previous system worked, without realizing that some of it was no longer legally permitted.",
    "Treating the first release as a genuine minimum viable product. In practice we were not building a minimum viable product, meaning the smallest version worth releasing. We were building something closer to a final product that tried to cover every need from day one, which had a real impact on both timeline and workload.",
    "Being present in daily discussions earlier. We had regular daily and weekly meetings, and that rhythm itself was right, but I underestimated early on how much value came from being consistently present in those conversations.",
    "Involving a designer earlier when evaluating third-party solutions. When purchasing ready-made platforms, having a designer assess customization options upfront would have helped avoid some difficult trade-offs later.",
  ],

  methods: ["User interviews", "Co-design workshops", "Usability testing", "Discovery research", "Journey Mapping"],
};
