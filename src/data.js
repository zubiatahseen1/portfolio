const iconBase = "/icons";

export const profile = {
  name: "Zubia Tahseen",
  title: "Frontend Developer",
  location: "Mississauga, Ontario",
  status: "Open to work",
  linkedin: "https://www.linkedin.com/in/zubia-tahseen",
  github: "https://github.com/zubiatahseen1",
  email: "tahseenzubia4@gmail.com",
  summary:
    "Frontend developer with 5+ years of web development experience, most recently in React, TypeScript, Next.js and Tailwind CSS, building data-heavy internal platforms, dashboards and tools. I write accessible, tested code (WCAG AA, Vitest, Playwright) and also build full-stack apps with Next.js and PostgreSQL.",
};

// Grouped to match the resume. Leave out `icon` for a text-only pill.
export const techStack = [
  {
    group: "Frontend",
    items: [
      { name: "JavaScript", icon: `${iconBase}/javascript-original.svg` },
      { name: "TypeScript", icon: `${iconBase}/typescript-original.svg` },
      { name: "React", icon: `${iconBase}/react-original.svg` },
      { name: "Next.js", icon: `${iconBase}/nextjs-original.svg` },
      { name: "Vite", icon: `${iconBase}/vitejs-original.svg` },
      { name: "HTML", icon: `${iconBase}/html5-original.svg` },
      { name: "CSS", icon: `${iconBase}/css3-original.svg` },
      { name: "Tailwind CSS", icon: `${iconBase}/tailwindcss-original.svg` },
      { name: "HeroUI" },
      { name: "shadcn/ui" },
      { name: "WCAG" },
    ],
  },
  {
    group: "Data & APIs",
    items: [
      { name: "GraphQL", icon: `${iconBase}/graphql-plain.svg` },
      { name: "REST APIs" },
      { name: "TanStack Query" },
      { name: "Zod" },
      { name: "ApexCharts" },
      { name: "Data visualization" },
      { name: "Excel/PDF export" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "PHP", icon: `${iconBase}/php-original.svg` },
      { name: "MySQL", icon: `${iconBase}/mysql-original.svg` },
      { name: "PostgreSQL", icon: `${iconBase}/postgresql-original.svg` },
      { name: "Supabase", icon: `${iconBase}/supabase-original.svg` },
    ],
  },
  {
    group: "Mobile",
    items: [
      { name: "Swift", icon: `${iconBase}/swift-original.svg` },
      { name: "SwiftUI" },
      { name: "SwiftData" },
    ],
  },
  {
    group: "Testing",
    items: [
      { name: "Vitest", icon: `${iconBase}/vitest-original.svg` },
      { name: "Playwright", icon: `${iconBase}/playwright-original.svg` },
      { name: "BrowserStack", icon: `${iconBase}/browserstack-original.svg` },
    ],
  },
  {
    group: "Design",
    items: [
      { name: "Figma", icon: `${iconBase}/figma-original.svg` },
      { name: "Photoshop", icon: `${iconBase}/photoshop-original.svg` },
      { name: "Illustrator", icon: `${iconBase}/illustrator-original.svg` },
      { name: "UI design principles" },
    ],
  },
  {
    group: "Tools & Cloud",
    items: [
      { name: "Git", icon: `${iconBase}/git-original.svg` },
      { name: "GitHub" },
      {
        name: "GitHub Actions",
        icon: `${iconBase}/githubactions-original.svg`,
      },
      { name: "AWS", icon: `${iconBase}/aws-plain.svg` },
      { name: "Node.js / npm" },
      { name: "VS Code" },
      { name: "Xcode" },
    ],
  },
];

// location and type are optional.
export const experience = [
  {
    id: "professional-development",
    role: "Professional Development",
    company: "Career break and upskilling",
    location: "Mississauga, ON",
    period: "Sep 2025 – Oct 2026",
    highlights: [
      "Completed Mobile and Web Developer (using AI) diploma at Trios College, covering JavaScript, PHP and MySQL, iOS development, Java and Git.",
      "Rebuilt Mood Swings as a full-stack Next.js and TypeScript app with PostgreSQL, automated testing and CI.",
      "Built Vestiaire, an iOS wardrobe manager and outfit planner, with Swift, SwiftUI and SwiftData.",
    ],
  },
  {
    id: "majorel",
    role: "Web Developer",
    company: "Majorel (now Teleperformance)",
    location: "Kitchener, ON",
    period: "Jan 2022 – Apr 2025",
    highlights: [
      "Built the frontend of an internal operations platform for project, HR, finance and campaign teams: a React, Vite, Tailwind CSS and HeroUI single-page app with 250+ pages and 100+ reusable components.",
      "Developed reporting dashboards for time tracking, utilization, profitability and PTO with ApexCharts, virtualized tables and one-click Excel/PDF export, cutting manual report preparation by 60%.",
      "Created 30+ in-app tools for email, content and engineering teams, including HTML/CSS validators, email-to-image rendering and AI proofreading, cutting campaign QA time by 40%.",
      "Implemented role-based route and component guards, dark mode and WCAG AA-aligned UI, plus an external app for encrypted client file shares, backed by 85 unit-test files.",
    ],
  },
  {
    id: "amazon",
    role: "Front-End Engineer I",
    company: "Amazon",
    location: "Hyderabad, India",
    period: "Apr 2018 – Jul 2020",
    highlights: [
      "Cut average page load time by 35% by lazy-loading images, minifying and bundling JavaScript and CSS, and removing render-blocking requests, tracking results against page-speed metrics.",
      "Tested features in Chrome, Firefox, Safari and Edge and on mobile devices, fixing browser-specific layout and JavaScript bugs before release and adding unit tests for new UI components.",
      "Built reusable page templates and components in the content management system so content teams could publish routine updates without developer changes, cutting turnaround on update requests by 40%.",
    ],
  },
  {
    id: "ibm",
    role: "Software Developer Intern",
    company: "IBM",
    location: "Hyderabad, India",
    period: "Mar 2017 – Feb 2018",
    highlights: [
      "Developed and maintained web application features using JavaScript, HTML, CSS and Java, working from user stories in an Agile team with two-week sprints.",
      "Wrote unit tests and supported deployments to test environments, documenting changes and taking part in daily stand-ups and sprint demos.",
    ],
  },
];

// repo / demo: leave "" to hide that link.
// image: path to a screenshot in /public (e.g. "/projects/vestiaire.png"), or "" for none.
export const projects = [
  {
    id: "mood-swings",
    name: "Mood Swings",
    platform: "Web",
    description:
      "A mood-based movie finder, rebuilt from a framework-free JavaScript v1 into a full-stack Next.js app. Accounts, a watchlist and recommendations that adapt to each user's picks. Movie API calls run behind cached server-side routes, user data is protected with Row Level Security and Zod validation, and CI runs 19 unit and 18 end-to-end tests on every push.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "PostgreSQL",
      "Playwright",
    ],
    repo: "https://github.com/zubiatahseen1/mood-swings",
    // Add the Vercel URL once it's deployed.
    demo: "",
    image: "",
  },
  {
    id: "vestiaire",
    name: "Vestiaire",
    platform: "iOS",
    description:
      "A wardrobe manager and outfit planner for iPhone. Catalogue your clothes, put together outfits, and plan what to wear, with everything stored on the device using SwiftData.",
    tags: ["Swift", "SwiftUI", "SwiftData"],
    repo: "https://github.com/zubiatahseen1/vestiaire",
    demo: "",
    image: "",
  },
];

export const education = [
  {
    id: "trios",
    credential: "Mobile and Web Developer (using AI) Diploma",
    school: "Trios College, Toronto, Canada",
    year: "2026",
  },
  {
    id: "masters",
    credential: "Master's in Computer Science",
    school: "JNTU, Hyderabad, India",
    year: "2016",
  },
  {
    id: "bachelors",
    credential: "Bachelor's in Computer Science",
    school: "JNTU, Hyderabad, India",
    year: "2014",
  },
];
