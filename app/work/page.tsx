import Link from "next/link";
import { redirect } from "next/navigation";
import { profile, projects } from "@/content/site";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: `Work — ${profile.name}`,
};

export default async function WorkPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category: searchCategory } = await searchParams;
  const category = searchCategory?.toLowerCase();

  if (!category || category === "events") redirect("/events");
  if (category !== "corporate") redirect("/events");

  const filteredProjects = projects.filter((project) => project.category.toLowerCase() === category);
  const isCorporate = category === "corporate";
  const heading = "Corporate";
  const intro = "Brand, digital and visual systems built to communicate clearly across real-world platforms.";

  return (
    <section className="archive-page archive-corporate container-page py-16 md:pt-16">
      <div className="archive-header">
        <div>
          <p className="eyebrow mb-4">Archive / Corporate</p>
          <h1 className="font-display text-[13vw] font-medium uppercase leading-[0.92] tracking-tightest md:text-[6.5vw]">
            {heading}
          </h1>
        </div>
        <p className="archive-intro max-w-sm text-base leading-relaxed text-graphite md:text-lg">{intro}</p>
      </div>

      <nav className="archive-switcher" aria-label="Project categories">
        <Link href="/events">Events</Link>
        <Link href="/work?category=corporate" className={isCorporate ? "archive-switcher-active" : ""}>Corporate</Link>
      </nav>

      <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} priority={i < 2} index={i} />
        ))}
      </div>
    </section>
  );
}
