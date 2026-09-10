"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/content/site";

const navItems = [
  { number: "01", label: "Home", href: "/" },
  { number: "02", label: "About", href: "/about" },
  { number: "03", label: "Work", href: "/work" },
  { number: "04", label: "Contact", href: "/#footer" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socialLinks = [
    { label: "Instagram", href: profile.socials.instagram },
    { label: "Behance", href: profile.socials.behance },
    { label: "LinkedIn", href: profile.socials.linkedin },
  ].filter((s) => s.href);

  return (
    <header className="container-page sticky top-0 z-50 flex items-center justify-between py-6">
      <Link href="/" className="font-display text-sm font-medium uppercase tracking-wide2">
        {profile.shortName}
        <span className="text-amber">.</span>
      </Link>

      <Link
        href="/"
        aria-hidden={scrolled}
        tabIndex={scrolled ? -1 : 0}
        className={`absolute inset-x-0 top-1/2 w-full -translate-y-1/2 text-center whitespace-nowrap font-display text-[clamp(2.25rem,7vw,6rem)] uppercase leading-none tracking-tightest text-paper/20 transition-opacity duration-300 ${
          scrolled ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        JADD STEINHARD
      </Link>

      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-[70] flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-ink transition-colors hover:border-paper"
      >
        <span className="relative flex h-3 w-4 flex-col justify-between">
          <span
            className={`h-px w-full bg-paper transition-transform duration-300 ${
              open ? "translate-y-[5px] rotate-45" : ""
            }`}
          />
          <span className={`h-px w-full bg-paper transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-full bg-paper transition-transform duration-300 ${
              open ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[55] bg-ink/70 backdrop-blur-sm"
            />
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-y-0 right-0 z-[60] flex w-[88vw] max-w-sm flex-col justify-between bg-paper px-6 py-16 text-ink md:px-8"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-3 py-2"
                    >
                      <span className="font-mono text-xs text-graphite">{item.number}</span>
                      <span className="font-display text-4xl uppercase tracking-tightest transition-colors group-hover:text-amber">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex flex-wrap gap-6"
              >
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-accent text-[11px] uppercase tracking-wide2 text-graphite transition-colors hover:text-ink"
                  >
                    {s.label}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
