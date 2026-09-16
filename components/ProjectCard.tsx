import Image from "next/image";
import Link from "next/link";
import { Project } from "@/content/site";

export default function ProjectCard({ project, priority = false, index = 0 }: { project: Project; priority?: boolean; index?: number }) {
  return (
    <Link href={`/work/${project.slug}`} className={`project-card project-card-${project.category.toLowerCase()} group block`}>
      <div className="project-card-image relative aspect-[4/5] w-full overflow-hidden bg-line">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="project-card-index">{String(index + 1).padStart(2, "0")} / {project.category}</span>
        <span className="project-card-arrow">View piece ↗</span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-accent text-xl font-medium uppercase tracking-wide2 text-amber">{project.title}</h3>
          <p className="mt-1 text-sm text-graphite">{project.subtitle}</p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-wide2 text-paper/50">{project.role}</p>
        </div>
        <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-wide2 text-graphite transition-colors group-hover:text-amber">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
