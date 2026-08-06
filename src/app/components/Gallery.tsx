import Image from "next/image";

const results = [
  ["/images/ba1.jpg", "Before / After — Brows & Lashes"],
  ["/images/ba2.jpg", "Before / After — Brows"],
  ["/images/ba3.jpg", "Before / After — Brows"],
];

export default function Gallery() {
  return (
    <section id="galerie" className="overflow-hidden bg-[#eee4db] px-6 py-20 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[.28em] text-[#255463]">Galerie</p>
            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl">Before / After</h2>
          </div>
          <p className="text-xs text-stone-500">Glisează pentru mai multe rezultate</p>
        </div>
        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-3">
          {results.map(([src, label]) => (
            <figure key={src} className="min-w-[62vw] snap-start sm:min-w-[300px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-white">
                <Image src={src} alt={label} fill sizes="(min-width: 640px) 300px, 62vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-[10px] uppercase tracking-[.14em] text-stone-600">{label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
