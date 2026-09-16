"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Intro" },
  { id: "about", label: "Approach" },
  { id: "services", label: "Services" },
  { id: "selected-projects", label: "Work" },
];

export default function SectionIndex() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observed = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: "-12% 0px -45% 0px" },
    );

    observed.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="section-index" aria-label="Page sections">
      <span className="section-index-line" />
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`section-index-link ${active === section.id ? "section-index-link-active" : ""}`}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{section.label}</span>
        </a>
      ))}
    </aside>
  );
}
