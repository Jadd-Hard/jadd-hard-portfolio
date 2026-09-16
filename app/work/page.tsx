import Link from "next/link";
import { profile, projects } from "@/content/site";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: `Work — ${profile.name}`,
};

export default function WorkPage({ searchParams }: { searchParams: { category?: string } }) {
  const category = searchParams.category?.toLowerCase();
  const filteredProjects = category
    ? projects.filter((project) => project.category.toLowerCase() === category)
    : projects;
  const heading = category === "events" ? "Events" : category === "corporate" ? "Corporate" : "Featured work";
  const intro = category === "events"
    ? "Fast, visual and experiential work made for live environments, audiences and moments that only happen once."
    : category === "corporate"
      ? "Brand, digital and visual systems built to communicate clearly across real-world platforms."
      : "A working archive across live experience, visual identity, digital systems and multimedia design.";

  return (
    <section className={`archive-page archive-${category || "all"} container-page py-16 md:pt-16`}>
      <div className="archive-header">
        <div>
          <p className="eyebrow mb-4">Archive / {category || "all work"}</p>
          <h1 className="font-display text-[13vw] font-medium uppercase leading-[0.92] tracking-tightest md:text-[6.5vw]">
            {heading}
          </h1>
        </div>
        <p className="archive-intro max-w-sm text-base leading-relaxed text-graphite md:text-lg">{intro}</p>
      </div>

      <nav className="archive-switcher" aria-label="Project categories">
        <Link href="/work" className={!category ? "archive-switcher-active" : ""}>All work</Link>
        <Link href="/work?category=events" className={category === "events" ? "archive-switcher-active" : ""}>Events</Link>
        <Link href="/work?category=corporate" className={category === "corporate" ? "archive-switcher-active" : ""}>Corporate</Link>
      </nav>

      <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} priority={i < 2} index={i} />
        ))}
      </div>
    </section>
  );
}
