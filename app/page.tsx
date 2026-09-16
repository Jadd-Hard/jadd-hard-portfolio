import Image from "next/image";
import Link from "next/link";
import { profile, projects, marqueeWords } from "@/content/site";
import StatusRow from "@/components/StatusRow";
import ProjectCard from "@/components/ProjectCard";
import HeroMarquee from "@/components/HeroMarquee";
import HeroPortrait from "@/components/HeroPortrait";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  const eventProjects = featured.filter((project) => project.category === "Events");
  const corporateProjects = featured.filter((project) => project.category === "Corporate");

  return (
    <>
      {/* HERO */}
      <section className="border-b border-line pb-16 pt-4 md:pb-20 md:pt-8">
        <div className="relative my-4 md:my-8">
          <HeroMarquee rows={marqueeWords} />
          <HeroPortrait name={profile.name} />
        </div>

        <div className="container-page flex flex-col items-center gap-10 text-center">
          <StatusRow />
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="container-page border-t border-line py-28 text-center md:py-36">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl uppercase leading-tight tracking-tightest md:text-5xl">
            I&apos;M NOT REALLY A <span className="text-amber">&quot;ONE THING&quot;</span> PERSON.
          </h2>
          <p className="mt-8 font-display text-2xl uppercase leading-snug tracking-tightest md:text-4xl">
            I <span className="text-amber">design</span>. I <span className="text-amber">build</span>. I <span className="text-amber">produce</span>. I <span className="text-amber">engineer</span>. I <span className="text-amber">create</span>.
          </p>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-graphite md:text-lg">
            <p>
              For over two decades, I&apos;ve moved between design studios, stages, venues, control rooms, production floors and creative projects — often occupying several roles at once.
            </p>
            <p>
              That&apos;s shaped the way I work: think creatively, understand the technology, solve the problem and get the job done.
            </p>
            <p className="font-accent uppercase tracking-wide2 text-paper">Welcome to my work.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page border-t border-line py-28 md:py-36">
        <p className="eyebrow mb-3">Services</p>
        <h2 className="mb-12 font-display text-4xl uppercase tracking-tightest md:text-6xl">What I do</h2>

        <div className="grid gap-px overflow-hidden bg-line md:grid-cols-2">
          {profile.services.map((service) => (
            <div key={service.title} className="flex flex-col gap-6 bg-ink p-8">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-line">
                <Image src={service.image} alt={service.title} fill sizes="50vw" className="object-cover" />
              </div>
              <div>
                <h3 className="font-accent text-xl font-medium uppercase tracking-wide2 text-amber">{service.title}</h3>
                <ul className="mt-3 flex flex-col gap-1 text-sm text-graphite">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="container-page border-t border-line py-28 md:py-36">
        <div className="mb-16 flex items-end justify-between">
          <div className="max-w-4xl">
            <p className="eyebrow mb-3">Selected Projects</p>
            <h2 className="font-display text-4xl uppercase leading-none tracking-tightest md:text-6xl">
              Two sides of my work. One creative approach.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-graphite md:text-lg">
              <p>
                I&apos;ve always worked across a mix of creative disciplines, but most of my work naturally falls into two areas: <strong className="text-amber">Commercial</strong> and <strong className="text-amber">Events</strong>.
              </p>
              <p>
                They are very different environments, and I approach them differently. Commercial work is generally more focused on the brand, the message and how something needs to communicate across different platforms. Events are faster, more visual and more experiential, where the design has to work as part of a much bigger live experience.
              </p>
              <p>
                My role across both is very hands-on. I&apos;m involved in developing the idea, shaping the visual direction and then actually creating the work — whether that means branding, graphic design, digital content, advertising, event artwork, posters, tour material or multimedia.
              </p>
              <p>
                I enjoy that difference. A corporate campaign might need a completely different visual approach from a punk show poster or a festival identity, but the thinking behind the work is the same: <strong className="text-amber">understand what needs to be communicated, find the right creative direction, and make it work.</strong>
              </p>
              <p>
                Because I also come from an event and technical production background, I tend to think beyond just the design itself. I understand how creative work is going to be used, where it is going to live, who is going to see it and what needs to happen to actually bring it into the real world.
              </p>
              <p>
                So while <strong className="text-amber">Commercial</strong> and <strong className="text-amber">Events</strong> represent two different sides of my portfolio, both show the same thing: <strong className="text-amber">my ability to take an idea and turn it into strong, practical creative work.</strong>
              </p>
            </div>
          </div>
          <Link href="/work" className="nav-link hidden md:inline">
            View all projects →
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden bg-line md:grid-cols-2">
          {[
            ["Events", eventProjects],
            ["Corporate", corporateProjects],
          ].map(([category, categoryProjects]) => {
            const projectsForCategory = categoryProjects as typeof featured;
            const previewProject = projectsForCategory[0];

            return (
              <Link
                key={category as string}
                href={`/work?category=${(category as string).toLowerCase()}`}
                className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden bg-ink p-8"
              >
                <Image
                  src={previewProject.coverImage}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-45 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="relative z-10">
                  <p className="eyebrow mb-3 text-paper/70">{projectsForCategory.length} selected pieces</p>
                  <h3 className="font-display text-5xl uppercase tracking-tightest text-paper md:text-7xl">{category as string}</h3>
                  <span className="mt-8 inline-block font-accent text-[11px] uppercase tracking-wide2 text-amber">
                    Explore {category as string} work →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <Link href="/work" className="nav-link mt-10 inline-block md:hidden">
          View all projects →
        </Link>
      </section>
    </>
  );
}
