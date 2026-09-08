"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);

  // Render nothing until mounted client-side to avoid a server/client time mismatch
  if (!time) return <span className="font-mono text-[11px] text-graphite">--:--:--</span>;

  return <span className="font-mono text-[11px] tabular-nums text-graphite">{time}</span>;
}
