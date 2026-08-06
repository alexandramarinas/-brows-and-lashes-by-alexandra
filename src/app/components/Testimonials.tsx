export default function Testimonials() {
  const reviews = [
    {
      name: "Andreea",
      text: "Alexandra este foarte atentă la detalii. Sprâncenele mele arată natural și exact cum îmi doream.",
    },
    {
      name: "Bianca",
      text: "Am făcut laminare de gene și rezultatul a fost peste așteptări. Recomand din toată inima!",
    },
    {
      name: "Cristina",
      text: "Salon elegant, atmosferă relaxantă și servicii impecabile. Cu siguranță voi reveni.",
    },
  ];

  return (
    <section className="bg-[#fdf9f5] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">

        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Recenzii
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Ce spun clientele
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <p className="text-yellow-500 text-xl">
                ★★★★★
              </p>

              <p className="mt-5 leading-7 text-neutral-600">
                "{review.text}"
              </p>

              <p className="mt-8 font-semibold">
                {review.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}