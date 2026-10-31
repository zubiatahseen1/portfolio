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
    period: "2022 – 2024",
    highlights: [
      "Built React dashboards giving team leads and managers visibility into moderator performance and quality metrics for a trust and safety operation supporting a major social video platform.",
      "Developed interactive HR training modules for staff onboarding.",
      "Developed marketing campaign assets for global consumer and technology brands: landing pages, promotional microsites, sign-up forms, offer cards, sale emails, and newsletters.",
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
    repo: "",
    demo: "",
    image: "",
  },
];
