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
      <section className="container-page py-16 md:pt-16">
        <Link href="/work" className="nav-link">
          ← Back to work
        </Link>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h1 className="font-display text-[13vw] font-medium uppercase leading-[0.92] tracking-tightest md:text-[6vw]">
            {project.title}
          </h1>
          <span className="font-mono text-[11px] uppercase tracking-wide2 text-graphite">{project.year}</span>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-6">
          <p className="max-w-lg text-lg text-paper/90">{project.subtitle}</p>
          <span className="font-mono text-[11px] uppercase tracking-wide2 text-graphite">{project.role}</span>
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

      <section className="container-page flex flex-col gap-8 border-t border-line py-16">
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
      </section>

      <section className="container-page flex items-center justify-between border-t border-line py-12">
        <p className="eyebrow">Next project</p>
        <Link href={`/work/${next.slug}`} className="font-display text-3xl uppercase tracking-tightest hover:text-brass md:text-5xl">
          {next.title} →
        </Link>
      </section>
    </article>
  );
}
