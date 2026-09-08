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
    "I plan and run large-scale live events, and I design the brand campaigns, motion content, and visuals that go with them — one continuous practice, not two separate careers.",
  aboutFull: [
    "I started out in 1999 hand-illustrating tour and festival posters, before moving through the shift into digital design and motion graphics in the 2000s. Today that same design practice runs alongside a full-time career in live event production — most recently leading technical production for 200+ events a year across luxury resorts in the Maldives, Indonesia, China, and Malaysia.",
    "Outside of that role, I run a production and creative studio handling 20+ live productions a year, and take on freelance multimedia design work for agencies and major brands. I'm equally comfortable at the mixing desk, the lighting console, or the design desk — and I've spent the last few years building AI-assisted workflows into both sides of that work to move faster without losing the craft.",
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
