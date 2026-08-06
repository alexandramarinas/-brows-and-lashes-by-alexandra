import Image from "next/image";
import { Allura } from "next/font/google";
const allura = Allura({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return <section id="acasa" className="relative isolate overflow-hidden bg-white">
    <Image src="/images/frunza.jpeg" alt="" fill priority sizes="100vw" className="-z-20 object-cover object-right opacity-[0.72]" />
    <div className="absolute inset-0 -z-10 bg-white/55" />
    <div className="mx-auto grid min-h-screen max-w-[1440px] items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1fr_.9fr] lg:px-12">
      <div className="max-w-2xl"><p className="mb-8 text-[11px] font-medium uppercase tracking-[0.28em] text-[#255463]">Beauty Studio • București</p><h1 className="font-[family-name:var(--font-cormorant)] text-6xl leading-[.82] sm:text-7xl lg:text-[6.5rem]">Frumusețea<br />începe cu <span className={`${allura.className} mt-7 block text-7xl leading-[.5] text-[#255463] sm:text-8xl lg:text-[7.5rem]`}>naturalețea</span></h1><p className="mt-12 max-w-xl text-[15px] leading-8 text-stone-700">Evidențiez frumusețea naturală prin stilizarea sprâncenelor, laminarea genelor și ritualuri faciale personalizate.</p><div className="mt-10 flex flex-wrap gap-4"><a href="https://wa.me/40722808515" target="_blank" rel="noreferrer" className="bg-[#255463] px-6 py-4 text-[11px] font-medium uppercase tracking-[.16em] text-white">Programează-te</a><a href="#servicii" className="border border-[#255463] px-6 py-4 text-[11px] font-medium uppercase tracking-[.16em]">Vezi serviciile</a></div><div className="mt-16 flex gap-8 border-t border-stone-400 pt-7 sm:gap-14"><div><p className="font-[family-name:var(--font-cormorant)] text-4xl">3+</p><p className="mt-1 text-[10px] uppercase tracking-[.16em] text-stone-600">ani experiență</p></div><div className="border-l border-stone-400 pl-8 sm:pl-14"><p className="font-[family-name:var(--font-cormorant)] text-4xl">Beauty</p><p className="mt-1 text-[10px] uppercase tracking-[.16em] text-stone-600">Brows • Lashes • Facial</p></div></div></div>
      <div className="justify-self-center lg:justify-self-end"><Image src="/images/logo.png" alt="Brows & Lashes by Alexandra" width={650} height={650} priority className="w-[min(78vw,590px)] object-contain" /></div>
    </div>
  </section>;
}
