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

export interface ProjectColumnContent {
  type: "text" | "image" | "video";
  content?: string;
  mediaUrl?: string;
}

export interface TwoColumnBlock extends BaseBlock {
  type: "two-column";
  gridConfig: "1:1" | "1:2" | "2:1";
  left: ProjectColumnContent;
  right: ProjectColumnContent;
}

export interface SpacerBlock extends BaseBlock {
  type: "spacer";
  size?: "small" | "medium" | "large";
}

export type ProjectBlock =
  | HeroBlock
  | TextBlock
  | ImageGridBlock
  | FullWidthMediaBlock
  | TwoColumnBlock
  | SpacerBlock;

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

export type EventPoster = {
  slug: string;
  title: string;
  caption: string;
  image: string;
  width: number;
  height: number;
};

export const eventPosters: EventPoster[] = [
  {
    slug: "ashes",
    title: "Ashes — Belgium Hardcore",
    caption: "A fluorescent yellow-and-black show poster pairs oversized distressed lettering with halftone imagery for a Burnout Pub bill in Edenvale.",
    image: "/work/tours/ashes.jpg",
    width: 1273,
    height: 1800,
  },
  {
    slug: "blame-thrower",
    title: "Blame Thrower — New Zealand",
    caption: "Monochrome tour artwork built around a stark, hand-drawn illustration and layered cut-and-paste typography.",
    image: "/work/tours/blame-thrower-new-zealand.jpg",
    width: 1448,
    height: 2048,
  },
  {
    slug: "boargazm",
    title: "Boargazm — South African Tour",
    caption: "Boargazm and Prescription Death share a South African tour bill in a raw black-and-orange layout with mirrored graphic emblems.",
    image: "/work/tours/boargazm.jpg",
    width: 1200,
    height: 628,
  },
  {
    slug: "bowling-for-soup",
    title: "Bowling for Soup — South Africa",
    caption: "A first South African visit is announced with punchy red-and-blue band branding, a run of local dates and a full-band portrait.",
    image: "/work/tours/bowling-for-soup.jpg",
    width: 800,
    height: 1237,
  },
  {
    slug: "cdc",
    title: "CDC — South African Tour",
    caption: "Pennsylvania hardcore band CDC’s South African dates are presented in a lo-fi collage of live photography and tour details.",
    image: "/work/tours/cdc-united-states.jpg",
    width: 604,
    height: 428,
  },
  {
    slug: "drunken-banshees",
    title: "Drunken Banshees — South Africa",
    caption: "A compact red, black and white announcement for the Washington, D.C. punk band’s July 2009 South African dates.",
    image: "/work/tours/drunken-banshees-united-states.jpg",
    width: 200,
    height: 375,
  },
  {
    slug: "half-price",
    title: "Half Price — The Liability Tour",
    caption: "Hand-drawn lettering and a playful pink illustration set the tone for this show at Street Cafe in Edenvale.",
    image: "/work/tours/half-price-durban.jpg",
    width: 707,
    height: 1000,
  },
  {
    slug: "slippery-when-wet",
    title: "Slippery When Wet — Snot a Tour",
    caption: "A fluorescent green skull-and-bottle graphic turns a run of South African dates into a bold, DIY-style tour poster.",
    image: "/work/tours/slippery-when-wet.jpg",
    width: 479,
    height: 726,
  },
  {
    slug: "lionheart",
    title: "Lionheart — South African Tour",
    caption: "Black-and-gold tour artwork layers a dense list of South African dates and supporting acts beneath a heavy metal-inspired masthead.",
    image: "/work/tours/lionheart-united-states.jpg",
    width: 2200,
    height: 4345,
  },
  {
    slug: "lowprofile",
    title: "Lowprofile — A Vulgar Tour",
    caption: "A riotous comic-book illustration, bright colors and hand-lettered band names carry this two-date South African bill.",
    image: "/work/tours/lowprofile-durban.jpg",
    width: 678,
    height: 960,
  },
  {
    slug: "no-turning-back",
    title: "No Turning Back — Unity Through Diversity",
    caption: "Band photography and bold stacked typography introduce the 2009 Unity Through Diversity tour, promoted by Flag Music.",
    image: "/work/tours/no-turning-back-netherlands.jpg",
    width: 1800,
    height: 4230,
  },
  {
    slug: "peasant",
    title: "Peasant — No Love EP Launch",
    caption: "Distressed white type and a muted, textured backdrop frame an EP launch bill at Burnout Pub in Edenvale.",
    image: "/work/tours/peasant-cape-town.jpg",
    width: 678,
    height: 960,
  },
  {
    slug: "teenage-bottlerocket",
    title: "Teenage Bottlerocket — South African Tour",
    caption: "A colorful skull-and-floral illustration anchors the band’s 2019 South African run, with dates in Cape Town, Johannesburg and Durban.",
    image: "/work/tours/teenage-bottlerocket.png",
    width: 500,
    height: 707,
  },
  {
    slug: "through-this-defiance",
    title: "Through This Defiance — South Africa",
    caption: "A tinted live portrait and blackletter title lead this Los Angeles hardcore band’s five-date South African tour in March 2010.",
    image: "/work/tours/through-this-defiance-united-states.jpg",
    width: 360,
    height: 720,
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
