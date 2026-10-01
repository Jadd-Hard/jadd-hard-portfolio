import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { Project, ProjectBlock, ProjectColumnContent } from "@/content/site";

function ProjectMedia({
  src,
  title,
  className,
  sizes,
  mediaType,
}: {
  src: string;
  title: string;
  className?: string;
  sizes: string;
  mediaType?: "image" | "video";
}) {
  if (mediaType === "video" || /\.(mp4|webm|ogg)(?:$|\?)/i.test(src)) {
    return (
      <video
        className={className}
        controls
        playsInline
        preload="metadata"
        aria-label={title}
      >
        <source src={src} />
        Your browser does not support the video element.
      </video>
    );
  }

  return <Image src={src} alt={title} fill sizes={sizes} className={className} />;
}

function TwoColumnContent({
  side,
  projectTitle,
}: {
  side: ProjectColumnContent;
  projectTitle: string;
}): ReactNode {
  if (side.type === "text") {
    return side.content ? <p className="project-block-copy">{side.content}</p> : null;
  }

  if (side.type === "image" && side.mediaUrl) {
    return (
      <div className="project-block-image relative aspect-[4/3] overflow-hidden bg-line">
        <ProjectMedia src={side.mediaUrl} title={`${projectTitle} project image`} sizes="(min-width: 768px) 45vw, 100vw" mediaType="image" />
      </div>
    );
  }

  if (side.type === "video" && side.mediaUrl) {
    return (
      <div className="project-block-video overflow-hidden bg-line">
        <ProjectMedia src={side.mediaUrl} title={`${projectTitle} project video`} sizes="(min-width: 768px) 45vw, 100vw" mediaType="video" />
      </div>
    );
  }

  return null;
}

function ProjectBlockContent({ block, projectTitle }: { block: ProjectBlock; projectTitle: string }) {
  switch (block.type) {
    case "hero":
      return (
        <section className="project-block project-block-hero">
          <div className="project-block-hero-media relative aspect-[16/10] overflow-hidden bg-line">
            <ProjectMedia
              src={block.mediaUrl}
              title={block.title || `${projectTitle} project image`}
              sizes="(min-width: 768px) 80vw, 100vw"
              className="object-cover"
              mediaType={block.mediaType}
            />
            {(block.title || block.subtitle) && (
              <div
                className="project-block-hero-copy"
                style={{ backgroundColor: `rgba(11, 11, 12, ${block.overlayOpacity ?? 0.35})` }}
              >
                {block.title && <h2>{block.title}</h2>}
                {block.subtitle && <p>{block.subtitle}</p>}
              </div>
            )}
          </div>
        </section>
      );

    case "text":
      return (
        <section className={`project-block project-block-text project-text-${block.width ?? "default"} project-text-${block.alignment ?? "left"}`}>
          {block.heading && <h2>{block.heading}</h2>}
          <p className="project-block-copy">{block.body}</p>
        </section>
      );

    case "image-grid":
      return (
        <section
          className="project-block project-block-image-grid"
          style={{ "--project-grid-columns": block.columns } as CSSProperties}
        >
          {block.items.map((item, index) => (
            <figure key={`${block.id}-${item.url}-${index}`} className={`project-grid-item project-grid-gap-${block.gap ?? "medium"}`}>
              <div className="project-block-image relative aspect-[4/3] overflow-hidden bg-line">
                <ProjectMedia
                  src={item.url}
                  title={item.alt || `${projectTitle} project image ${index + 1}`}
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
              {item.caption && <figcaption className="project-grid-caption">{item.caption}</figcaption>}
            </figure>
          ))}
        </section>
      );

    case "full-width-media":
      return (
        <figure className="project-block project-block-full-media">
          <div className={`project-block-image project-media-${(block.aspectRatio ?? "16/9").replace("/", "-")} relative overflow-hidden bg-line`}>
            <ProjectMedia
              src={block.mediaUrl}
              title={`${projectTitle} project image`}
              sizes="(min-width: 768px) 80vw, 100vw"
              mediaType={block.mediaType}
            />
          </div>
          {block.caption && <figcaption className="project-grid-caption">{block.caption}</figcaption>}
        </figure>
      );

    case "two-column":
      return (
        <section className={`project-block project-block-two-column project-columns-${block.gridConfig.replace(":", "-")}`}>
          <div>{TwoColumnContent({ side: block.left, projectTitle })}</div>
          <div>{TwoColumnContent({ side: block.right, projectTitle })}</div>
        </section>
      );

    case "spacer":
      return <div className={`project-block-spacer project-spacer-${block.size ?? "medium"}`} aria-hidden="true" />;
  }
}

export default function ProjectContent({ project }: { project: Project }) {
  if (project.blocks.length === 0) {
    return (
      <div className="project-block project-block-image relative aspect-[16/10] overflow-hidden bg-line">
        <Image src={project.coverImage} alt={`${project.title} project artwork`} fill sizes="(min-width: 768px) 80vw, 100vw" className="object-cover" />
      </div>
    );
  }

  return (
    <div className="project-content">
      {project.blocks.map((block) => (
        <ProjectBlockContent key={block.id} block={block} projectTitle={project.title} />
      ))}
    </div>
  );
}
