import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { eventPosters, profile } from "@/content/site";

export const metadata: Metadata = {
  title: `Events — ${profile.name}`,
  description: "A collection of tour posters and live-event artwork by Jadd Steinhard.",
};

export default function EventsPage() {
  return (
    <section className="events-page container-page py-16 md:pt-16">
      <header className="events-header">
        <div>
          <p className="eyebrow mb-4">Archive / Live artwork</p>
          <h1 className="font-display text-[13vw] font-medium uppercase leading-[0.92] tracking-tightest md:text-[6.5vw]">
            Events
          </h1>
        </div>
        <p className="events-intro max-w-sm text-base leading-relaxed text-graphite md:text-lg">
          Tour posters and show artwork made for loud rooms, traveling lineups and live music scenes.
        </p>
      </header>

      <div className="events-meta" aria-label={`${eventPosters.length} tour posters`}>
        <span>Posters</span>
        <span>{String(eventPosters.length).padStart(2, "0")} posters</span>
      </div>

      <div className="events-gallery columns-1 gap-x-8 sm:columns-2 xl:columns-3">
        {eventPosters.map((poster, index) => (
          <figure id={poster.slug} key={poster.slug} className="event-poster mb-8 inline-block w-full break-inside-avoid align-top">
            <div className="event-poster-artwork">
              <Image
                src={poster.image}
                alt={`${poster.title} event poster`}
                width={poster.width}
                height={poster.height}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                sizes="(min-width: 1280px) 30vw, (min-width: 640px) 46vw, 100vw"
                className="event-poster-image block h-auto w-full"
              />
            </div>
            <figcaption className="event-poster-caption">
              <p className="event-poster-index">Poster / {String(index + 1).padStart(2, "0")}</p>
              <h2>{poster.title}</h2>
              <p>{poster.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <footer className="events-footer">
        <Link href="/work" className="nav-link">← Back to selected work</Link>
      </footer>
    </section>
  );
}
