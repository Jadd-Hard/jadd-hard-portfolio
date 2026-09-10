import Image from "next/image";

export default function HeroPortrait({ name }: { name: string }) {
  return (
    <div className="pointer-events-none absolute left-1/2 inset-y-0 z-20 w-[56vw] max-w-[440px] min-w-[210px] -translate-x-1/2 overflow-hidden border border-line bg-line shadow-[0_0_60px_rgba(0,0,0,0.5)] md:w-[30vw]">
      <Image
        src="/portrait.png"
        alt={name}
        fill
        priority
        sizes="(min-width: 768px) 30vw, 56vw"
        className="object-cover grayscale"
      />
    </div>
  );
}
