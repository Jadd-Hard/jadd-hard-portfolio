"use client";

import { useSyncExternalStore } from "react";

function formatTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function subscribe(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 1000);
  return () => window.clearInterval(id);
}

export default function Clock() {
  const time = useSyncExternalStore(subscribe, formatTime, () => null);

  if (!time) return <span className="font-mono text-[11px] text-graphite">--:--:--</span>;

  return <span className="font-mono text-[11px] tabular-nums text-graphite">{time}</span>;
}
