import Clock from "@/components/Clock";
import { profile } from "@/content/site";

export default function StatusRow() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-brass" />
        <span className="font-mono text-[11px] uppercase tracking-wide2 text-paper/80">
          Open to work
        </span>
      </span>
      <span className="font-mono text-[11px] uppercase tracking-wide2 text-graphite">
        Based in {profile.location} ·
      </span>
      <Clock />
    </div>
  );
}
