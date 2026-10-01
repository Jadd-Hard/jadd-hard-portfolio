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
    slug: "lowprofile",
    title: "Lowprofile — A Vulgar Tour",
    caption: "A riotous comic-book illustration, bright colors and hand-lettered band names carry this two-date South African bill.",
    image: "/work/tours/lowprofile-durban.jpg",
    width: 678,
    height: 960,
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
    slug: "poster-33423458-1893028400748999-4086253476214996992-n",
    title: "Poster 33423458",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/33423458_1893028400748999_4086253476214996992_n.jpg",
    width: 960,
    height: 540,
  },
  {
    slug: "poster-468833362-10161770603095568-1918542909896405329-n",
    title: "Poster 468833362",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/468833362_10161770603095568_1918542909896405329_n.jpg",
    width: 1586,
    height: 597,
  },
  {
    slug: "poster-472319234-10161902835275568-398745796368262831-n",
    title: "Poster 472319234",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/472319234_10161902835275568_398745796368262831_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-506001475-10162450263915568-9125211471934028151-n",
    title: "Poster 506001475",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/506001475_10162450263915568_9125211471934028151_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-506218286-10162450264810568-2336298253470085597-n",
    title: "Poster 506218286",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/506218286_10162450264810568_2336298253470085597_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-518384333-10162688140775568-7634611341623003048-n",
    title: "Poster 518384333",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/518384333_10162688140775568_7634611341623003048_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-518391699-10162688140720568-4521229455866996683-n",
    title: "Poster 518391699",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/518391699_10162688140720568_4521229455866996683_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-518401773-10162688142335568-7570563339327548733-n",
    title: "Poster 518401773",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/518401773_10162688142335568_7570563339327548733_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-518555689-10162688140755568-2208487363403730370-n",
    title: "Poster 518555689",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/518555689_10162688140755568_2208487363403730370_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-518719991-10162688140765568-6799334811578747240-n",
    title: "Poster 518719991",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/518719991_10162688140765568_6799334811578747240_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-518937303-10162688140980568-415716715419346475-n",
    title: "Poster 518937303",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/518937303_10162688140980568_415716715419346475_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-519571506-10162688140795568-5605857206324954787-n",
    title: "Poster 519571506",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/519571506_10162688140795568_5605857206324954787_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-520298345-10162688140375568-2612592472451331813-n",
    title: "Poster 520298345",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/520298345_10162688140375568_2612592472451331813_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-555439352-24977015341923645-2701365493621225374-n",
    title: "Poster 555439352",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/555439352_24977015341923645_2701365493621225374_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-556835271-24977015158590330-6915838130496432655-n",
    title: "Poster 556835271",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/556835271_24977015158590330_6915838130496432655_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-556905131-24977015295256983-1170324179939046148-n",
    title: "Poster 556905131",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/556905131_24977015295256983_1170324179939046148_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-557416918-24977016531923526-7092400593354587439-n",
    title: "Poster 557416918",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/557416918_24977016531923526_7092400593354587439_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-557535585-24977089521916227-1482047253167474548-n",
    title: "Poster 557535585",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/557535585_24977089521916227_1482047253167474548_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-557630912-24977015261923653-4397306117804014-n",
    title: "Poster 557630912",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/557630912_24977015261923653_4397306117804014_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "asylum-24th",
    title: "Asylum — 24th",
    caption: "A dramatic hard-edged poster with a skull-and-teeth composition and a raw, high-contrast live-show feel.",
    image: "/work/tours/asylum-24th.jpg",
    width: 3508,
    height: 4961,
  },
  {
    slug: "burnout-26th",
    title: "Burnout — 26th April",
    caption: "A bold, high-contrast night poster for Burnout with layered type, clashing color and a heavy underground aesthetic.",
    image: "/work/tours/burnout-26th-poster.jpg",
    width: 2480,
    height: 3508,
  },
  {
    slug: "jadd-gig-copy",
    title: "Jadd Gig Copy",
    caption: "A hand-drawn gig poster built around punchy typography and a rough, stylized live-art aesthetic.",
    image: "/work/tours/jadd-gig-copy.jpg",
    width: 2480,
    height: 3508,
  },
  {
    slug: "lark",
    title: "Lark",
    caption: "A stylized poster using a heavy, hand-rendered treatment and expressive composition with a no-nonsense club-night feel.",
    image: "/work/tours/Lark.jpg",
    width: 630,
    height: 859,
  },
  {
    slug: "red-carpet-burnout",
    title: "Red Carpet Burnout",
    caption: "A dramatic, red-on-black poster designed for a late-night live event with stacked typography and a hard-edged punk look.",
    image: "/work/tours/red-carpet-burnout-front.jpg",
    width: 636,
    height: 904,
  },
  {
    slug: "rock-the-casbah",
    title: "Rock the Casbah",
    caption: "A stylized heritage-style layout built around chunky lettering, expressive composition and a raw archival print feel.",
    image: "/work/tours/rock-the-casbah.jpg",
    width: 1024,
    height: 1232,
  },
  {
    slug: "skate-of-mind",
    title: "Skate of Mind",
    caption: "A layered poster that blends motion, heavy type, and a raw underground visual language into a distorted skate-show identity.",
    image: "/work/tours/skate-of-mind-poster.jpg",
    width: 3579,
    height: 5032,
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

export const galleryPosters: EventPoster[] = [
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
    slug: "lowprofile",
    title: "Lowprofile — A Vulgar Tour",
    caption: "A riotous comic-book illustration, bright colors and hand-lettered band names carry this two-date South African bill.",
    image: "/work/tours/lowprofile-durban.jpg",
    width: 678,
    height: 960,
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

export const archivePosters: EventPoster[] = [
  {
    slug: "poster-33423458-1893028400748999-4086253476214996992-n",
    title: "Poster 33423458",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/33423458_1893028400748999_4086253476214996992_n.jpg",
    width: 960,
    height: 540,
  },
  {
    slug: "poster-468833362-10161770603095568-1918542909896405329-n",
    title: "Poster 468833362",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/468833362_10161770603095568_1918542909896405329_n.jpg",
    width: 1586,
    height: 597,
  },
  {
    slug: "poster-472319234-10161902835275568-398745796368262831-n",
    title: "Poster 472319234",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/472319234_10161902835275568_398745796368262831_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-506001475-10162450263915568-9125211471934028151-n",
    title: "Poster 506001475",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/506001475_10162450263915568_9125211471934028151_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-506218286-10162450264810568-2336298253470085597-n",
    title: "Poster 506218286",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/506218286_10162450264810568_2336298253470085597_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-518384333-10162688140775568-7634611341623003048-n",
    title: "Poster 518384333",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/518384333_10162688140775568_7634611341623003048_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-518391699-10162688140720568-4521229455866996683-n",
    title: "Poster 518391699",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/518391699_10162688140720568_4521229455866996683_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-518401773-10162688142335568-7570563339327548733-n",
    title: "Poster 518401773",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/518401773_10162688142335568_7570563339327548733_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-518555689-10162688140755568-2208487363403730370-n",
    title: "Poster 518555689",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/518555689_10162688140755568_2208487363403730370_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-518719991-10162688140765568-6799334811578747240-n",
    title: "Poster 518719991",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/518719991_10162688140765568_6799334811578747240_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-518937303-10162688140980568-415716715419346475-n",
    title: "Poster 518937303",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/518937303_10162688140980568_415716715419346475_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-519571506-10162688140795568-5605857206324954787-n",
    title: "Poster 519571506",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/519571506_10162688140795568_5605857206324954787_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-520298345-10162688140375568-2612592472451331813-n",
    title: "Poster 520298345",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/520298345_10162688140375568_2612592472451331813_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-555439352-24977015341923645-2701365493621225374-n",
    title: "Poster 555439352",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/555439352_24977015341923645_2701365493621225374_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-556835271-24977015158590330-6915838130496432655-n",
    title: "Poster 556835271",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/556835271_24977015158590330_6915838130496432655_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-556905131-24977015295256983-1170324179939046148-n",
    title: "Poster 556905131",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/556905131_24977015295256983_1170324179939046148_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-557416918-24977016531923526-7092400593354587439-n",
    title: "Poster 557416918",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/557416918_24977016531923526_7092400593354587439_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-557535585-24977089521916227-1482047253167474548-n",
    title: "Poster 557535585",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/557535585_24977089521916227_1482047253167474548_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "poster-557630912-24977015261923653-4397306117804014-n",
    title: "Poster 557630912",
    caption: "Poster artwork from the archive.",
    image: "/work/tours/557630912_24977015261923653_4397306117804014_n.jpg",
    width: 1200,
    height: 1800,
  },
  {
    slug: "asylum-24th",
    title: "Asylum — 24th",
    caption: "A dramatic hard-edged poster with a skull-and-teeth composition and a raw, high-contrast live-show feel.",
    image: "/work/tours/asylum-24th.jpg",
    width: 3508,
    height: 4961,
  },
  {
    slug: "burnout-26th",
    title: "Burnout — 26th April",
    caption: "A bold, high-contrast night poster for Burnout with layered type, clashing color and a heavy underground aesthetic.",
    image: "/work/tours/burnout-26th-poster.jpg",
    width: 2480,
    height: 3508,
  },
  {
    slug: "jadd-gig-copy",
    title: "Jadd Gig Copy",
    caption: "A hand-drawn gig poster built around punchy typography and a rough, stylized live-art aesthetic.",
    image: "/work/tours/jadd-gig-copy.jpg",
    width: 2480,
    height: 3508,
  },
  {
    slug: "lark",
    title: "Lark",
    caption: "A stylized poster using a heavy, hand-rendered treatment and expressive composition with a no-nonsense club-night feel.",
    image: "/work/tours/Lark.jpg",
    width: 630,
    height: 859,
  },
  {
    slug: "red-carpet-burnout",
    title: "Red Carpet Burnout",
    caption: "A dramatic, red-on-black poster designed for a late-night live event with stacked typography and a hard-edged punk look.",
    image: "/work/tours/red-carpet-burnout-front.jpg",
    width: 636,
    height: 904,
  },
  {
    slug: "rock-the-casbah",
    title: "Rock the Casbah",
    caption: "A stylized heritage-style layout built around chunky lettering, expressive composition and a raw archival print feel.",
    image: "/work/tours/rock-the-casbah.jpg",
    width: 1024,
    height: 1232,
  },
  {
    slug: "skate-of-mind",
    title: "Skate of Mind",
    caption: "A layered poster that blends motion, heavy type, and a raw underground visual language into a distorted skate-show identity.",
    image: "/work/tours/skate-of-mind-poster.jpg",
    width: 3579,
    height: 5032,
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
