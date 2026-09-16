"use client";

import { useEffect, useRef, useState, type HTMLAttributes } from "react";

type ScrollRevealProps = HTMLAttributes<HTMLElement>;

export default function ScrollReveal({ className = "", children, ...props }: ScrollRevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={elementRef} className={`section-reveal ${isVisible ? "section-reveal-visible" : ""} ${className}`} {...props}>
      {children}
    </section>
  );
}
