export default function About() {
  return (
    <section
      id="despre"
      className="bg-white px-6 py-24 md:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

        <div className="overflow-hidden rounded-[32px] shadow-xl">
          <img
            src="/images/alexandra.jpeg"
            alt="Alexandra - Brow Artist"
            className="w-full object-cover"
          />
        </div>

        <div>

          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Despre mine
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            Bună,
            <br />
            sunt Alexandra.
          </h2>

          <p className="mt-8 leading-8 text-neutral-600">
            Cred că frumusețea nu înseamnă schimbare, ci armonie.
            De aceea fiecare procedură este personalizată în funcție
            de trăsăturile și stilul fiecărei cliente.
          </p>

          <p className="mt-6 leading-8 text-neutral-600">
            În studio vei găsi un spațiu liniștit, unde fiecare
            programare este dedicată în totalitate ție. Îmi doresc ca
            fiecare clientă să plece nu doar mulțumită de rezultat,
            ci și relaxată și cu mai multă încredere în sine.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div className="rounded-2xl bg-[#fdf9f5] p-6 text-center">
              <p className="text-3xl font-semibold">3+</p>
              <p className="mt-2 text-sm text-neutral-500">
                ani experiență
              </p>
            </div>

            <div className="rounded-2xl bg-[#fdf9f5] p-6 text-center">
              <p className="text-3xl font-semibold">100%</p>
              <p className="mt-2 text-sm text-neutral-500">
                atenție la detalii
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}