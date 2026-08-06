import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-white px-6 py-7 text-[#255463] lg:px-12">
      <Image src="/images/frunza.jpeg" alt="" fill sizes="100vw" className="-z-10 object-cover object-center opacity-20" />
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-3 text-[10px] font-medium uppercase tracking-[.16em] sm:flex-row">
        <p>Brows & Lashes by Alexandra</p>
        <p>© {new Date().getFullYear()} Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}
