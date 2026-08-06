"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <a
          href="#acasa"
          className="text-xl font-semibold tracking-wide"
        >
          Brows & Lashes
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">

          <a
            href="#servicii"
            className="transition hover:text-[#8a7261]"
          >
            Servicii
          </a>

          <a
            href="#galerie"
            className="transition hover:text-[#8a7261]"
          >
            Galerie
          </a>

          <a
            href="#despre"
            className="transition hover:text-[#8a7261]"
          >
            Despre
          </a>

          <a
            href="#contact"
            className="transition hover:text-[#8a7261]"
          >
            Contact
          </a>

        </nav>

        <a
          href="https://wa.me/40722808515"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#8a7261] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#6f5d50] md:block"
        >
          Programează-te
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-3xl md:hidden"
          aria-label="Deschide meniul"
        >
          ☰
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-neutral-200 bg-white md:hidden">

          <a
            href="#servicii"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-6 py-4"
          >
            Servicii
          </a>

          <a
            href="#galerie"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-6 py-4"
          >
            Galerie
          </a>

          <a
            href="#despre"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-6 py-4"
          >
            Despre
          </a>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-6 py-4"
          >
            Contact
          </a>

          <a
            href="https://wa.me/40722808515"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-4 font-medium text-[#8a7261]"
          >
            Programează-te
          </a>

        </nav>
      )}
    </header>
  );
}