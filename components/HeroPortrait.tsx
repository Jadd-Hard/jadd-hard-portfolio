import Image from "next/image";

export default function HeroPortrait({ name }: { name: string }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[42vw] w-[42vw] max-h-[380px] max-w-[380px] min-h-[160px] min-w-[160px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-line bg-line shadow-[0_0_60px_rgba(0,0,0,0.5)] md:h-[26vw] md:w-[26vw]">
      <Image
        src="/portrait.png"
        alt={name}
        fill
        priority
        sizes="(min-width: 768px) 26vw, 42vw"
        className="object-cover"
      />
    </div>
  );
}
