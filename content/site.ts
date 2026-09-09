/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT
 * ─────────────────────────────────────────────────────────────
 *  This is the only file you need to edit to update the site:
 *  your info, your projects, your skills.
 *
 *  TO ADD A NEW PROJECT:
 *  1. Drop your images in /public/work/your-slug/
 *  2. Copy one of the objects in the `projects` array below,
 *     paste it, and change the values.
 *  3. Save, commit, push — Vercel redeploys automatically.
 * ─────────────────────────────────────────────────────────────
 */

export const marqueeWords: string[][] = [
  ["Event Mngmnt", "Graphics", "Design", "Motion"],
  ["Illustration", "Digital", "Corporate", "Audio"],
  ["Visual", "Tech", "Websites", "Engineer"],
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  gallery: string[];
  liveUrl?: string;
  year: string;
  role: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "aurora",
    title: "Aurora",
    subtitle: "Generative light studies for a museum installation",
    coverImage: "/work/aurora/cover.jpg",
    gallery: ["/work/aurora/cover.jpg"],
    liveUrl: "https://example.com",
    year: "2026",
    role: "Art Direction, Motion",
    featured: true,
  },
  {
    slug: "monolith",
    title: "Monolith",
    subtitle: "Editorial identity for an architecture journal",
    coverImage: "/work/monolith/cover.jpg",
    gallery: ["/work/monolith/cover.jpg"],
    liveUrl: "https://example.com",
    year: "2025",
    role: "Brand Identity, Print",
    featured: true,
  },
  {
    slug: "glasswork",
    title: "Glasswork",
    subtitle: "Interactive 3D product configurator",
    coverImage: "/work/glasswork/cover.jpg",
    gallery: ["/work/glasswork/cover.jpg"],
    liveUrl: "https://example.com",
    year: "2025",
    role: "Web Development, UI",
    featured: false,
  },
  {
    slug: "paperlight",
    title: "Paperlight",
    subtitle: "Illustrated packaging system for a stationery brand",
    coverImage: "/work/paperlight/cover.jpg",
    gallery: ["/work/paperlight/cover.jpg"],
    liveUrl: "https://example.com",
    year: "2024",
    role: "Illustration, Packaging",
    featured: false,
  },
];

export const profile = {
  name: "Jadd Steinhard",
  shortName: "JS",
  role: ["Production Director", "Multimedia Designer", "Creative Lead"],
  location: "Johannesburg, South Africa",
  email: "jadd.steinhard@gmail.com",
  phone: "+27 67 581 1732",
  socials: {
    // Add real profile URLs here when ready — links only render when filled in.
    instagram: "",
    behance: "",
    linkedin: "https://linkedin.com/in/jadd-steinhard",
  },
  heroHeadline: "Twenty-two years running the show and designing everything around it.",
  aboutTeaser:
    "I’M NOT REALLY A “ONE THING” PERSON.I design. I build. I produce. I engineer. I create. For over two decades, I’ve moved between design studios, stages, venues, control rooms, production floors and creative projects, often occupying several roles at once.
That’s shaped the way I work: think creatively, understand the technology, solve the problem and get the job done.I’m Jadd Steinhard. Welcome to my work.",
  aboutFull: [
    "I am a multidisciplinary creative-production professional who works at the intersection of design, multimedia and live event delivery. My background spans more than two decades across advertising, touring, festivals, luxury hospitality, brand activations and independent productions. That breadth means I understand not only how to create compelling visual and multimedia work, but also how it needs to function in the real world, on screens, on stage, in venues, in campaigns and under live production pressure. I bring hands-on capability in graphic design, video and motion, live visuals, sound, lighting and AV, combined with event management, supplier coordination, artist liaison and production planning.",
  ],
  cvUrl: "/resume.pdf",
  skills: [
    { name: "Live Production", level: 5 },
    { name: "Brand & Campaign Design", level: 5 },
    { name: "Motion & Multimedia", level: 4 },
    { name: "Illustration & Layout", level: 4 },
    { name: "AI-Augmented Workflows", level: 4 },
  ],
  services: [
    {
      title: "Live Event Production",
      items: ["Technical Direction", "International Touring", "AV & Lighting Systems", "Vendor & Budget Management"],
      image: "/portrait.png",
    },
    {
      title: "Brand & Campaign Design",
      items: ["Campaign Artwork", "Illustration", "Typography & Layout", "Print & Digital Design"],
      image: "/work/monolith/cover.jpg",
    },
    {
      title: "Motion & Multimedia",
      items: ["Motion Graphics", "Video Production", "Show Visuals & Playback", "Experiential Design"],
      image: "/work/glasswork/cover.jpg",
    },
    {
      title: "AI-Augmented Creative",
      items: ["Concept Generation", "Rapid Prototyping", "Workflow Automation", "AI-Assisted Content"],
      image: "/work/aurora/cover.jpg",
    },
  ],
  footerNote: "Open to global relocation.",
};
