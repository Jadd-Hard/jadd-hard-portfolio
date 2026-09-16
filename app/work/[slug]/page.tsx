import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/content/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: `${project.title} — ${profile.name}` };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) return notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <section className={`project-hero project-hero-${project.category.toLowerCase()} container-page py-16 md:pt-16`}>
        <div className="flex items-center justify-between gap-4">
          <Link href={`/work?category=${project.category.toLowerCase()}`} className="nav-link">
            ← Back to {project.category}
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-wide2 text-graphite">Archive / {project.category}</span>
        </div>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h1 className="font-display text-[13vw] font-medium uppercase leading-[0.92] tracking-tightest md:text-[6vw]">
            {project.title}
          </h1>
          <span className="font-mono text-[11px] uppercase tracking-wide2 text-graphite">{project.year}</span>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-6">
          <p className="max-w-lg text-lg text-paper/90">{project.subtitle}</p>
          <span className="font-accent text-[11px] uppercase tracking-wide2 text-graphite">{project.role}</span>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="nav-link border border-line px-4 py-2"
            >
              View live site →
            </a>
          )}
        </div>
      </section>

      <section className="container-page grid gap-10 border-t border-line py-16 md:grid-cols-[0.7fr_1.8fr] md:gap-16">
        <aside className="project-notes">
          <p className="eyebrow mb-4">Project notes</p>
          <dl className="space-y-5 font-mono text-[11px] uppercase tracking-wide2">
            <div><dt className="text-graphite">Category</dt><dd className="mt-1 text-amber">{project.category}</dd></div>
            <div><dt className="text-graphite">Year</dt><dd className="mt-1 text-paper">{project.year}</dd></div>
            <div><dt className="text-graphite">Contribution</dt><dd className="mt-1 text-paper">{project.role}</dd></div>
          </dl>
          <p className="mt-10 max-w-xs text-sm leading-relaxed text-graphite">
            A selected piece from a practice built around moving ideas from concept through to finished execution.
          </p>
        </aside>
        <div className="flex flex-col gap-8">
        {project.gallery.map((src, i) => (
          <div key={src + i} className="relative aspect-[16/10] w-full overflow-hidden bg-line">
            <Image
              src={src}
              alt={`${project.title} image ${i + 1}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        </div>
      </section>

      <section className="container-page flex items-center justify-between border-t border-line py-12">
        <p className="eyebrow">Next project</p>
        <Link href={`/work/${next.slug}`} className="font-display text-3xl uppercase tracking-tightest hover:text-amber md:text-5xl">
          {next.title} →
        </Link>
      </section>
    </article>
  );
}
