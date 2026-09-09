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
    coverImage: "/work/aurora/02.png",
    gallery: ["/work/aurora/02.png"],
    liveUrl: "https://example.com",
    year: "2026",
    role: "Art Direction, Motion",
    featured: true,
  },
  {
    slug: "monolith",
    title: "Monolith",
    subtitle: "Editorial identity for an architecture journal",
    coverImage: "/work/monolith/01.jpg",
    gallery: ["/work/monolith/01.jpg"],
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
    { name: "Multimedia Design", description: "Illustration, Motion Graphics, Video Editing, 3D Animation, Social Media Content, Layout & Editorial, Visual Communication" },
    { name: "Events & Production", description: "Sound Engineering, Lighting Design, Visuals, Systems Integration, Technical Direction & Management, Vendor & Budget Management" },
    { name: "Business & Leadership", description: "Strategic Planning, Creative Strategy,Team Management, Client Relations, Project Execution" },
    { name: "Software & Tools", description: "Adobe Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Lightroom, Audition, Animate, Logic Pro, Ableton, AutoCAD, Unreal Engine" },
  ],
  services: [
    {
      title: "Digital Marketing & Creative Production",
      items: ["Campaign Strategy", "Corporate Identity", "Brand Activation", "Search Engine Optimization", "Social Media Management", "Content Creation & Curation", "Paid Search", "Analytics & Reporting"],
      image: "/portrait.png",
    },
    {
      title: "Event Management",
      items: ["Concept Development", "Logistics & Hospitality", "Supplier Management", "Budgets", "Schedules", "On-Site Coordination", "Crisis Control","Post-Event Analysis"],
      image: "/work/monolith/cover.jpg",
    },
    {
      title: "Live Event Production & Technical Direction",
      items: ["FOH Engineering", "Lighting Design & Operation", "Equipment Specification", "Stage Management", "Troubleshooting", "LED Screen Design", "Equipment Specification", "Power Distribution" ],
      image: "/work/glasswork/cover.jpg",
    },
    {
      title: "Artist Management & Talent Booking",
      items: ["Artist Representation", "Talent Booking", "Opportunity Sourcing", "Fee Negotiation", "Contract Management", "Artist Scheduling", "Rider Management", "Performance Coordination"],
      image: "/work/aurora/cover.jpg",
    },
  ],
  footerNote: "Open to global relocation.",
};
