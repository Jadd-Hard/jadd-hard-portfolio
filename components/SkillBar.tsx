"use client";

import { useState } from "react";

export default function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group flex items-center justify-between border-b border-line py-6 transition-colors hover:border-brass"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] text-graphite">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="font-display text-xl uppercase tracking-tightest md:text-3xl">{name}</h3>
      </div>

      <div className="flex items-center gap-4">
        <span className="hidden font-mono text-[11px] uppercase tracking-wide2 text-graphite md:inline">
          {hover ? `${level}/5` : "Hover"}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-4 rounded-full transition-colors duration-300 ${
                i < level ? (hover ? "bg-brass" : "bg-paper/70") : "bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
