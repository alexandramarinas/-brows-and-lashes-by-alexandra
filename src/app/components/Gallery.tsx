export default function Gallery() {
  const images = [
    {
      src: "/images/pensat.jpeg",
      title: "Pensat",
    },
    {
      src: "/images/pensatbunny.jpeg",
      title: "Pensat + vopsit",
    },
    {
      src: "/images/pensatalexandra.jpeg",
      title: "Rezultat natural",
    },
  ];

  return (
    <section
      id="galerie"
      className="bg-[#fdf9f5] px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Galerie
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Rezultate reale
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
            Fiecare fotografie reprezintă o clientă și un rezultat
            realizat în studio.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {images.map((image) => (
            <div
              key={image.src}
              className="group overflow-hidden rounded-[28px] bg-white shadow-sm transition duration-300 hover:shadow-xl"
            >
              <img
                src={image.src}
                alt={image.title}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-6">
                <h3 className="text-lg font-medium">
                  {image.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-500">
                  Brows & Lashes by Alexandra
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}