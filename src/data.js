const iconBase = "/icons";

export const profile = {
  name: "Zubia Tahseen",
  title: "Web & Mobile Developer",
  location: "Toronto, Canada",
  status: "Open to work",
  linkedin: "https://www.linkedin.com/in/zubia-tahseen",
  github: "https://github.com/zubiatahseen1",
  // Add your email to show an "Email me" button in Contact. Leave "" to hide it.
  email: "",
};

export const techStack = [
  { name: "JavaScript", icon: `${iconBase}/javascript-original.svg` },
  { name: "React", icon: `${iconBase}/react-original.svg` },
  { name: "HTML", icon: `${iconBase}/html5-original.svg` },
  { name: "CSS", icon: `${iconBase}/css3-original.svg` },
  { name: "Swift", icon: `${iconBase}/swift-original.svg` },
  { name: "Kotlin", icon: `${iconBase}/kotlin-original.svg` },
  { name: "Git", icon: `${iconBase}/git-original.svg` },
  { name: "Figma", icon: `${iconBase}/figma-original.svg` },
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
    description: "Description coming soon.",
    tags: ["JavaScript", "HTML", "CSS"],
    repo: "",
    demo: "",
    image: "",
  },
  {
    id: "vestiaire",
    name: "Vestiaire",
    platform: "iOS",
    description:
      "A wardrobe manager and outfit planner for iPhone. Catalogue your clothes, put together outfits, and plan what to wear.",
    tags: ["Swift", "SwiftUI", "SwiftData"],
    repo: "",
    demo: "",
    image: "",
  },
  {
    id: "superpodcast",
    name: "SuperPodcast",
    platform: "Android",
    description:
      "An Android podcast player that searches the iTunes catalogue, lets you subscribe to shows, and plays episodes.",
    tags: ["Kotlin", "Retrofit", "Glide", "RecyclerView"],
    repo: "https://github.com/zubiatahseen1/AndroidApp4",
    demo: "",
    image: "",
  },
];
