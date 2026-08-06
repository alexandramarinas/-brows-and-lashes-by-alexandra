export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center mb-16">

          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Te aștept cu drag!
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
            Pentru programări mă poți contacta telefonic,
            pe WhatsApp sau pe Instagram.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-[#fdf9f5] p-10">

            <h3 className="text-2xl font-semibold">
              Date de contact
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-sm uppercase text-neutral-400">
                  Telefon
                </p>

                <a
                  href="tel:+40722808515"
                  className="text-lg font-medium"
                >
                  0722 808 515
                </a>
              </div>

              <div>
                <p className="text-sm uppercase text-neutral-400">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/40722808515"
                  target="_blank"
                  className="text-lg font-medium"
                >
                  Trimite mesaj
                </a>
              </div>

              <div>
                <p className="text-sm uppercase text-neutral-400">
                  Instagram
                </p>

                <a
                  href="https://instagram.com/brows_and_lashes_by_alexandra"
                  target="_blank"
                  className="text-lg font-medium"
                >
                  @brows_and_lashes_by_alexandra
                </a>
              </div>

              <div>
                <p className="text-sm uppercase text-neutral-400">
                  Adresă
                </p>

                <p className="text-lg font-medium">
                  Strada Avionului 5
                  <br />
                  București
                </p>
              </div>

            </div>

          </div>

          <div className="overflow-hidden rounded-3xl shadow-lg">

            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=Strada+Avionului+5+Bucuresti&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              style={{ border: 0 }}
            />

          </div>

        </div>

      </div>
    </section>
  );
}