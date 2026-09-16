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

  return (
    <section className="container-page py-16 md:pt-16">
      <p className="eyebrow mb-4">Portfolio</p>
      <h1 className="mb-16 font-display text-[13vw] font-medium uppercase leading-[0.92] tracking-tightest md:text-[6.5vw]">
        {heading}
      </h1>

      <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} priority={i < 2} />
        ))}
      </div>
    </section>
  );
}
