import Image from "next/image";
import Link from "next/link";
import { profile, projects, marqueeWords } from "@/content/site";
import StatusRow from "@/components/StatusRow";
import ProjectCard from "@/components/ProjectCard";
import HeroMarquee from "@/components/HeroMarquee";
import HeroPortrait from "@/components/HeroPortrait";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

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
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-3">Selected</p>
            <h2 className="font-display text-4xl uppercase tracking-tightest md:text-6xl">Projects</h2>
          </div>
          <Link href="/work" className="nav-link hidden md:inline">
            View all projects →
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} priority={i === 0} />
          ))}
        </div>

        <Link href="/work" className="nav-link mt-10 inline-block md:hidden">
          View all projects →
        </Link>
      </section>
    </>
  );
}
