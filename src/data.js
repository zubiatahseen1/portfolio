const iconBase = "/icons";

export const profile = {
  name: "Zubia Tahseen",
  title: "Frontend Developer",
  location: "Toronto, Canada",
  status: "Open to work",
  linkedin: "https://www.linkedin.com/in/zubia-tahseen",
  github: "https://github.com/zubiatahseen1",
  email: "tahseenzubia4@gmail.com",
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
      { name: "shadcn/ui" },
      { name: "HeroUI" },
    ],
  },
  {
    group: "Data & Backend",
    items: [
      { name: "GraphQL", icon: `${iconBase}/graphql-plain.svg` },
      { name: "REST APIs" },
      { name: "TanStack Query" },
      { name: "Zod" },
      { name: "PostgreSQL", icon: `${iconBase}/postgresql-original.svg` },
      { name: "Supabase", icon: `${iconBase}/supabase-original.svg` },
      { name: "PHP", icon: `${iconBase}/php-original.svg` },
      { name: "MySQL", icon: `${iconBase}/mysql-original.svg` },
    ],
  },
  {
    group: "Testing & Tools",
    items: [
      { name: "Vitest", icon: `${iconBase}/vitest-original.svg` },
      { name: "Playwright", icon: `${iconBase}/playwright-original.svg` },
      { name: "BrowserStack", icon: `${iconBase}/browserstack-original.svg` },
      { name: "Git", icon: `${iconBase}/git-original.svg` },
      { name: "GitHub Actions", icon: `${iconBase}/githubactions-original.svg` },
      { name: "AWS", icon: `${iconBase}/aws-plain.svg` },
    ],
  },
  {
    group: "Design & Mobile",
    items: [
      { name: "Figma", icon: `${iconBase}/figma-original.svg` },
      { name: "Photoshop", icon: `${iconBase}/photoshop-original.svg` },
      { name: "Illustrator", icon: `${iconBase}/illustrator-original.svg` },
      { name: "Swift / SwiftUI", icon: `${iconBase}/swift-original.svg` },
    ],
  },
];

export const experience = [
  {
    id: "majorel",
    role: "Web Developer",
    company: "Majorel (now Teleperformance)",
    type: "Full-time",
    period: "Jan 2022 – Sep 2024",
    highlights: [
      "Built the frontend of an internal operations platform for project, HR, finance and campaign teams: a React, Vite, Tailwind CSS and HeroUI single-page app with 250+ pages and 100+ reusable components.",
      "Developed reporting dashboards for time tracking, utilization, profitability and PTO with ApexCharts, virtualized tables and one-click Excel/PDF export, cutting manual report preparation by 60%.",
      "Created 30+ in-app tools for email, content and engineering teams, including HTML/CSS validators, a code editor, email-to-image rendering and AI proofreading, cutting campaign QA time by 40%.",
      "Implemented role-based route and component guards, dark mode and WCAG AA-aligned UI, plus an external app for encrypted client file shares, backed by 85 unit-test files.",
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
      "A mood-based movie finder, rebuilt from a framework-free JavaScript v1 into a full-stack Next.js app. Accounts, a watchlist and recommendations that adapt to each user's picks, with server-side caching, Row Level Security and CI running unit and end-to-end tests on every push.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "PostgreSQL", "Playwright"],
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
      "A wardrobe manager and outfit planner for iPhone. Catalogue your clothes, put together outfits, and plan what to wear, with everything stored on the device.",
    tags: ["Swift", "SwiftUI", "SwiftData"],
    repo: "https://github.com/zubiatahseen1/vestiaire",
    demo: "",
    image: "",
  },
];
