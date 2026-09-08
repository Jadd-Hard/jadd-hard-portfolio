import Image from "next/image";
import { profile } from "@/content/site";
import StatusRow from "@/components/StatusRow";
import SkillBar from "@/components/SkillBar";

export const metadata = {
  title: `About — ${profile.name}`,
};

export default function AboutPage() {
  return (
    <>
      <section className="container-page pb-16 pt-10 md:pt-16">
        <p className="eyebrow mb-4">About</p>
        <h1 className="font-display text-[13vw] font-medium uppercase leading-[0.92] tracking-tightest md:text-[6.5vw]">
          Know {profile.shortName.toLowerCase()}
        </h1>
        <div className="mt-8">
          <StatusRow />
        </div>
      </section>

      <section className="container-page grid gap-12 border-t border-line py-16 md:grid-cols-[1fr,1.4fr]">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-line">
          <Image
            src={profile.services[0].image}
            alt={profile.name}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-6">
            {profile.aboutFull.map((paragraph, i) => (
              <p key={i} className="max-w-xl text-lg leading-relaxed text-paper/90">
                {paragraph}
              </p>
            ))}
          </div>

          <a
            href={profile.cvUrl}
            download
            className="w-fit border border-paper px-6 py-3 font-mono text-[11px] uppercase tracking-wide2 transition-colors hover:bg-paper hover:text-ink"
          >
            Download CV
          </a>
        </div>
      </section>

      <section className="container-page border-t border-line py-20">
        <p className="eyebrow mb-3">Skills</p>
        <h2 className="mb-10 font-display text-4xl uppercase tracking-tightest md:text-6xl">What I do</h2>

        <div>
          {profile.skills.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
