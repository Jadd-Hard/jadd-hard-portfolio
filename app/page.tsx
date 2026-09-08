import Image from "next/image";
import Link from "next/link";
import { profile, projects } from "@/content/site";
import RoleRotator from "@/components/RoleRotator";
import StatusRow from "@/components/StatusRow";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section className="container-page grid gap-10 pb-20 pt-10 md:grid-cols-[1.4fr,1fr] md:pt-16">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <RoleRotator roles={profile.role} />
            <h1 className="mt-6 font-display text-[13vw] font-medium uppercase leading-[0.92] tracking-tightest md:text-[5.2vw]">
              {profile.heroHeadline}
            </h1>
          </div>
          <StatusRow />
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden bg-line md:aspect-auto">
          <Image
            src="/portrait.png"
            alt={profile.name}
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="container-page border-t border-line py-20">
        <div className="grid gap-8 md:grid-cols-[1fr,2fr]">
          <p className="eyebrow">About me</p>
          <p className="max-w-2xl font-display text-2xl uppercase leading-snug tracking-tightest md:text-4xl">
            {profile.aboutTeaser}
          </p>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="container-page border-t border-line py-20">
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

      {/* SERVICES */}
      <section className="container-page border-t border-line py-20">
        <p className="eyebrow mb-3">Services</p>
        <h2 className="mb-12 font-display text-4xl uppercase tracking-tightest md:text-6xl">What I do</h2>

        <div className="grid gap-px overflow-hidden bg-line md:grid-cols-2">
          {profile.services.map((service) => (
            <div key={service.title} className="flex flex-col gap-6 bg-ink p-8">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-line">
                <Image src={service.image} alt={service.title} fill sizes="50vw" className="object-cover" />
              </div>
              <div>
                <h3 className="font-display text-2xl uppercase tracking-tightest">{service.title}</h3>
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
    </>
  );
}
