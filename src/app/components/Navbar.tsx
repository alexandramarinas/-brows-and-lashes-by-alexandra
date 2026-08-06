"use client";

import { useEffect, useState } from "react";

const links = [["Acasă", "#acasa"], ["Servicii", "#servicii"], ["Galerie", "#galerie"], ["Despre", "#despre"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const close = () => setOpen(false);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? "border-b border-stone-200 bg-white/95 backdrop-blur" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <a href="#acasa" onClick={close} className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-tight">Brows & Lashes</a>
        <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.18em] md:flex">{links.map(([label, href]) => <a key={href} href={href} className="transition hover:text-[#745644]">{label}</a>)}</nav>
        <a href="https://wa.me/40722808515" target="_blank" rel="noreferrer" className="hidden bg-[#745644] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#2c211b] md:block">Programează-te</a>
        <button type="button" onClick={() => setOpen(!open)} aria-label="Deschide meniul" className="text-2xl md:hidden">{open ? "×" : "☰"}</button>
      </div>
      {open && <nav className="border-t border-stone-200 bg-white px-6 py-4 md:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={close} className="block py-3 text-sm">{label}</a>)}<a href="https://wa.me/40722808515" target="_blank" rel="noreferrer" className="mt-2 block bg-[#745644] px-4 py-3 text-center text-xs uppercase tracking-wider text-white">Programează-te</a></nav>}
    </header>
  );
}
