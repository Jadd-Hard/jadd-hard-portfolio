import Image from "next/image";

export default function HeroPortrait({ name }: { name: string }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[42vw] w-[30vw] max-h-[300px] max-w-[220px] min-h-[160px] min-w-[120px] -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-line bg-line shadow-[0_0_60px_rgba(0,0,0,0.5)] md:h-[22vw] md:w-[16vw]">
      <Image
        src="/portrait.png"
        alt={name}
        fill
        priority
        sizes="(min-width: 768px) 16vw, 30vw"
        className="object-cover grayscale"
      />
    </div>
  );
}
