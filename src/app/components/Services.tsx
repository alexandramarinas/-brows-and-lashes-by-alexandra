export default function Services() {
  const services = [
    {
      category: "SPRÂNCENE",
      title: "Pensat",
      price: "100 lei",
      description:
        "Redăm forma naturală a sprâncenelor prin pensare și adaptare la fizionomia feței.",
    },
    {
      category: "SPRÂNCENE",
      title: "Pensat + vopsit",
      price: "120 lei",
      description:
        "Definire completă prin pensare și pigmentare personalizată.",
    },
    {
      category: "SPRÂNCENE",
      title: "Laminare sprâncene",
      price: "180 lei",
      description:
        "Fire disciplinate și un aspect natural, elegant și ușor de întreținut.",
    },
    {
      category: "SPRÂNCENE",
      title: "Brow Spa",
      price: "160 lei",
      description:
        "Un ritual dedicat îngrijirii sprâncenelor, pentru un aspect impecabil.",
    },
    {
      category: "GENE",
      title: "Laminare gene",
      price: "180 lei",
      description:
        "Ridicare și curbare naturală a genelor fără extensii.",
    },
    {
      category: "MASAJ FACIAL",
      title: "Masaj facial",
      price: "150 lei",
      description:
        "30 minute de relaxare și revitalizare pentru un ten luminos.",
    },
    {
      category: "MASAJ FACIAL",
      title: "Experiență facială",
      price: "250 lei",
      description:
        "60 minute de drenaj, relaxare și tonifiere facială.",
    },
    {
      category: "MASAJ FACIAL",
      title: "Ritual facial",
      price: "350 lei",
      description:
        "90 minute de experiență premium pentru relaxare și efect de lifting.",
    },
  ];

  return (
    <section
      id="servicii"
      className="bg-white px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Servicii
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Servicii & Ritualuri
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
            Fiecare serviciu este adaptat fizionomiei și nevoilor tale,
            pentru un rezultat elegant și natural.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-neutral-200 bg-[#fdf9f5] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                {service.category}
              </p>

              <h3 className="mt-4 text-2xl font-medium">
                {service.title}
              </h3>

              <p className="mt-5 leading-relaxed text-neutral-600">
                {service.description}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-xl font-semibold">
                  {service.price}
                </span>

                <a
                  href="#contact"
                  className="rounded-full bg-[#2b2420] px-4 py-2 text-sm text-white transition hover:opacity-80"
                >
                  Programează-te
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}