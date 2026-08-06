export default function Facial() {
  const rituals = [
    {
      title: "Masaj facial",
      duration: "30 minute",
      price: "150 lei",
      description:
        "Ideal pentru relaxare, stimularea circulației și un ten luminos.",
    },
    {
      title: "Experiență facială",
      duration: "60 minute",
      price: "250 lei",
      description:
        "Un ritual complet de relaxare și tonifiere pentru un aspect odihnit și revitalizat.",
    },
    {
      title: "Ritual facial Signature",
      duration: "90 minute",
      price: "350 lei",
      description:
        "Experiența premium care combină tehnici de lifting, drenaj și relaxare profundă.",
    },
  ];

  return (
    <section className="bg-[#2b2420] px-6 py-24 text-white md:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            Facial Rituals
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Ritualuri faciale premium
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            O experiență creată pentru relaxare, tonifiere și un aspect
            natural luminos.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {rituals.map((ritual) => (
            <div
              key={ritual.title}
              className="rounded-3xl bg-white/10 p-8 backdrop-blur"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                {ritual.duration}
              </p>

              <h3 className="mt-4 text-2xl font-medium">
                {ritual.title}
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                {ritual.description}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-2xl font-semibold">
                  {ritual.price}
                </span>

                <a
                  href="#contact"
                  className="rounded-full bg-white px-5 py-2 text-sm text-[#2b2420]"
                >
                  Rezervă
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}