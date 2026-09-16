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

export type BlockType =
  | "hero"
  | "text"
  | "image-grid"
  | "full-width-media"
  | "two-column"
  | "spacer";

export interface BaseBlock {
  type: BlockType;
  id: string;
}

export interface HeroBlock extends BaseBlock {
  type: "hero";
  title?: string;
  subtitle?: string;
  mediaUrl: string;
  mediaType: "image" | "video";
  overlayOpacity?: number; // 0 to 1
}

export interface TextBlock extends BaseBlock {
  type: "text";
  heading?: string;
  body: string;
  alignment?: "left" | "center";
  width?: "narrow" | "default" | "wide";
}

export interface ImageGridBlock extends BaseBlock {
  type: "image-grid";
  columns: 1 | 2 | 3;
  gap?: "small" | "medium" | "large";
  items: {
    url: string;
    alt?: string;
    caption?: string;
  }[];
}

export interface FullWidthMediaBlock extends BaseBlock {
  type: "full-width-media";
  mediaUrl: string;
  mediaType: "image" | "video";
  caption?: string;
  aspectRatio?: "16/9" | "21/9" | "auto";
}

export interface TwoColumnBlock extends BaseBlock {
  type: "two-column";
  gridConfig: "1:1" | "1:2" | "2:1";
  left: {
    type: "text" | "image" | "video";
    content?: string;
    mediaUrl?: string;
  };
  right: {
    type: "text" | "image" | "video";
    content?: string;
    mediaUrl?: string;
  };
}

export type ProjectBlock =
  | HeroBlock
  | TextBlock
  | ImageGridBlock
  | FullWidthMediaBlock
  | TwoColumnBlock;

export type Project = {
  slug: string;
  title: string;
  category: "Events" | "Corporate";
  subtitle: string;
  coverImage: string;
  year: string;
  role: string;
  featured: boolean;
  liveUrl?: string;
  blocks: ProjectBlock[];
};

export const projects: Project[] = [
  {
    slug: "aurora",
    title: "Aurora",
    category: "Events",
    subtitle: "Generative light studies for a museum installation",
    coverImage: "/work/aurora/02.png",
    year: "2026",
    role: "Art Direction, Motion",
    featured: true,
    blocks: [
      {
        id: "hero-01",
        type: "hero",
        mediaUrl: "/work/aurora/02.png",
        mediaType: "image",
        title: "Aurora Lights",
        subtitle: "A journey through generative photons.",
        overlayOpacity: 0.4,
      },
      {
        id: "intro-text",
        type: "text",
        heading: "The Concept",
        body: "Aurora was commissioned as a site-specific installation... we wanted to bridge the gap between digital generative art and physical light refraction. The installation uses a series of custom-built prismatic arrays that react to real-time data feeds, creating a living, breathing light sculpture.",
        alignment: "center",
        width: "narrow",
      },
      {
        id: "split-01",
        type: "two-column",
        gridConfig: "1:1",
        left: {
          type: "image",
          mediaUrl: "/work/aurora/02.png",
        },
        right: {
          type: "text",
          content: "The Technical Challenge\n\nHandling 120fps generative content across a 40-meter LED surface required a custom playback engine. We developed a proprietary bridge between TouchDesigner and the hardware controllers to ensure zero-latency interaction.",
        },
      },
      {
        id: "full-width-vid",
        type: "full-width-media",
        mediaUrl: "/work/aurora/02.png", // Using image as placeholder for now
        mediaType: "image",
        caption: "Full scale test at the studio warehouse.",
        aspectRatio: "21/9",
      },
      {
        id: "grid-01",
        type: "image-grid",
        columns: 2,
        gap: "medium",
        items: [
          { url: "/work/aurora/02.png", alt: "Detail 1" },
          { url: "/work/aurora/02.png", alt: "Detail 2" },
        ],
      },
    ],
  },
  {
    slug: "monolith",
    title: "Tours",
    category: "Corporate",
    subtitle: "Editorial identity for an architecture journal",
    coverImage: "/work/monolith/cover.jpg",
    year: "2025",
    role: "Brand Identity, Print",
    featured: true,
    blocks: [],
  },
  {
    slug: "glasswork",
    title: "Glasswork",
    category: "Corporate",
    subtitle: "Interactive 3D product configurator",
    coverImage: "/work/glasswork/cover.jpg",
    year: "2025",
    role: "Web Development, UI",
    featured: false,
    blocks: [],
  },
  {
    slug: "paperlight",
    title: "Paperlight",
    category: "Corporate",
    subtitle: "Illustrated packaging system for a stationery brand",
    coverImage: "/work/paperlight/cover.jpg",
    year: "2024",
    role: "Illustration, Packaging",
    featured: false,
    blocks: [],
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
  heroHeadline: "Still learning, still making, and looking forward to what comes next.",
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
      image: "/agencyphoto.JPG",
    },
    {
      title: "Event Management",
      items: ["Concept Development", "Logistics & Hospitality", "Supplier Management", "Budgets", "Schedules", "On-Site Coordination", "Crisis Control","Post-Event Analysis"],
      image: "/eventmanagement.JPG",
    },
    {
      title: "Live Event Production & Technical Direction",
      items: ["FOH Engineering", "Lighting Design & Operation", "Equipment Specification", "Stage Management", "Troubleshooting", "LED Screen Design", "Equipment Specification", "Power Distribution" ],
      image: "/tech1.JPG",
    },
    {
      title: "Artist Management & Talent Booking",
      items: ["Artist Representation", "Talent Booking", "Opportunity Sourcing", "Fee Negotiation", "Contract Management", "Artist Scheduling", "Rider Management", "Performance Coordination"],
      image: "/talent.JPG",
    },
  ],
  footerNote: "Open to global relocation.",
};
