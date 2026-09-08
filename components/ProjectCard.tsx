import Image from "next/image";
import Link from "next/link";
import { Project } from "@/content/site";

export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-line">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl uppercase tracking-tightest">{project.title}</h3>
          <p className="mt-1 text-sm text-graphite">{project.subtitle}</p>
        </div>
        <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-wide2 text-graphite transition-colors group-hover:text-brass">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
