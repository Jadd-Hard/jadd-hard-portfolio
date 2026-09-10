type MarqueeRowProps = {
  words: string[];
  direction: "left" | "right";
  tone: "paper" | "amber";
  speed: number; // seconds per loop
};

function MarqueeRow({ words, direction, tone, speed }: MarqueeRowProps) {
  // Repeat the word group enough times to comfortably fill wide screens,
  // then duplicate the whole group once so the loop can be seamless:
  // animating exactly -50% moves it by precisely one group-width.
  const group = Array.from({ length: 4 }).flatMap(() => words);
  const track = [...group, ...group];

  const colorClass = tone === "amber" ? "text-amber" : "text-paper";
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max items-center will-change-transform ${animationClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {track.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={`mx-4 shrink-0 whitespace-nowrap font-display text-[20vw] uppercase leading-[0.85] tracking-tightest md:mx-6 md:text-[10vw] ${colorClass}`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HeroMarquee({ rows }: { rows: string[][] }) {
  const directions: Array<"left" | "right"> = ["left", "right", "left"];
  const tones: Array<"paper" | "amber"> = ["paper", "amber", "paper"];
  const speeds = [100, 120, 85];

  return (
    <div aria-hidden="true" className="flex select-none flex-col gap-0">
      {rows.map((words, i) => (
        <MarqueeRow
          key={i}
          words={words}
          direction={directions[i % directions.length]}
          tone={tones[i % tones.length]}
          speed={speeds[i % speeds.length]}
        />
      ))}
    </div>
  );
}
