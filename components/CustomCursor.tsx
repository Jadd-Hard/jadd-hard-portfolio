"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function getCursorSupport() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function subscribeCursorSupport(onStoreChange: () => void) {
  const finePointer = window.matchMedia("(pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  finePointer.addEventListener("change", onStoreChange);
  reducedMotion.addEventListener("change", onStoreChange);

  return () => {
    finePointer.removeEventListener("change", onStoreChange);
    reducedMotion.removeEventListener("change", onStoreChange);
  };
}

export default function CustomCursor() {
  const enabled = useSyncExternalStore(subscribeCursorSupport, getCursorSupport, () => false);
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (!enabled) return;
    const handleMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 bg-amber mix-blend-difference"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)` }}
    />
  );
}
