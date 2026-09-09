import Image from "next/image";

export default function HeroPortrait({ name }: { name: string }) {
  return (
    <div className="pointer-events-none absolute left-1/2 inset-y-0 z-20 w-[34vw] max-w-[260px] min-w-[140px] -translate-x-1/2 overflow-hidden border border-line bg-line shadow-[0_0_60px_rgba(0,0,0,0.5)] md:w-[18vw]">
      <Image
        src="/portrait.png"
        alt={name}
        fill
        priority
        sizes="(min-width: 768px) 18vw, 34vw"
        className="object-cover grayscale"
      />
    </div>
  );
}
