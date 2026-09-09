import Image from "next/image";
import Link from "next/link";
import { profile, projects, marqueeWords } from "@/content/site";
import RoleRotator from "@/components/RoleRotator";
import StatusRow from "@/components/StatusRow";
import ProjectCard from "@/components/ProjectCard";
import HeroMarquee from "@/components/HeroMarquee";
import HeroPortrait from "@/components/HeroPortrait";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-line pb-16 pt-10 md:pt-16">
        <div className="container-page">
          <RoleRotator roles={profile.role} />
        </div>

        <div className="relative my-8 md:my-12">
          <HeroMarquee rows={marqueeWords} />
          <HeroPortrait name={profile.name} />
        </div>

        <div className="container-page flex flex-col items-center gap-10 text-center">
          <StatusRow />
        </div>
      </section>

       {/* ABOUT TEASER */}
      <section className="container-page border-t border-line py-28 text-center md:py-36">
        <p className="eyebrow mb-6">About me</p>
        <p className="mx-auto max-w-3xl font-normal text-xl leading-relaxed tracking-normal md:text-2xl whitespace-pre-line">
          {profile.aboutTeaser}
        </p>
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
                <h3 className="font-accent text-xl font-medium uppercase tracking-wide2">{service.title}</h3>
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
