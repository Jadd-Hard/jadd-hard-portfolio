"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "@/content/site";

const navItems = [
  { number: "01", label: "Home", href: "/" },
  { number: "02", label: "About", href: "/about" },
  { number: "03", label: "Work", href: "/work" },
  { number: "04", label: "Contact", href: "/#footer" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="container-page sticky top-0 z-50 flex items-center justify-between bg-ink/90 py-6 backdrop-blur">
      <Link href="/" className="font-display text-sm font-medium uppercase tracking-wide2">
        {profile.shortName}
        <span className="text-brass">.</span>
      </Link>

      <nav className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="nav-link">
            <span className="text-graphite">{item.number}</span> {item.label}
          </Link>
        ))}
      </nav>

      <div className="hidden items-center gap-4 md:flex">
        {profile.socials.instagram && (
          <a href={profile.socials.instagram} className="nav-link" target="_blank" rel="noreferrer">
            Instagram
          </a>
        )}
        {profile.socials.linkedin && (
          <a href={profile.socials.linkedin} className="nav-link" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
      </div>

      <button
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex flex-col gap-1.5 md:hidden"
      >
        <span className={`h-px w-6 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`h-px w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`h-px w-6 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {open && (
        <div className="fixed inset-0 top-[73px] z-40 flex flex-col justify-between bg-ink p-8 md:hidden">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl uppercase tracking-tightest"
              >
                <span className="mr-3 font-mono text-sm text-graphite">{item.number}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-6">
            {profile.socials.instagram && <a href={profile.socials.instagram} className="nav-link">Instagram</a>}
            {profile.socials.behance && <a href={profile.socials.behance} className="nav-link">Behance</a>}
            {profile.socials.linkedin && <a href={profile.socials.linkedin} className="nav-link">LinkedIn</a>}
          </div>
        </div>
      )}
    </header>
  );
}
