export default function Footer() {
  return (
    <footer className="bg-[#2b2420] py-12 text-center text-white">

      <h3 className="text-2xl font-semibold">
        Brows & Lashes by Alexandra
      </h3>

      <p className="mt-4 text-white/70">
        Sprâncene • Gene • Masaj facial
      </p>

      <div className="mt-8 flex justify-center gap-8">

        <a
          href="tel:+40722808515"
          className="hover:text-white/70"
        >
          Telefon
        </a>

        <a
          href="https://wa.me/40722808515"
          target="_blank"
          className="hover:text-white/70"
        >
          WhatsApp
        </a>

        <a
          href="https://instagram.com/brows_and_lashes_by_alexandra"
          target="_blank"
          className="hover:text-white/70"
        >
          Instagram
        </a>

      </div>

      <p className="mt-10 text-sm text-white/50">
        © {new Date().getFullYear()} Brows & Lashes by Alexandra.
        Toate drepturile rezervate.
      </p>

    </footer>
  );
}