import { Allura, Cormorant_Garamond } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <section
      id="acasa"
      className="relative overflow-hidden bg-[#fdf9f5]"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <img
          src="/images/frunza.jpeg"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-[#fdf9f5]/85" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-8 sm:px-10 md:px-16 lg:px-20 xl:px-28">

        <div className="grid min-h-[88vh] items-center gap-16 lg:grid-cols-2">

          {/* LEFT COLUMN */}

          <div className="max-w-[650px]">

            <p className="mb-8 uppercase tracking-[0.35em] text-sm text-[#9b7b62]">
              Beauty Studio • București
            </p>

            <h1
              className={`${cormorant.className}
              text-[52px]
              leading-[0.95]
              text-[#2a211d]
              sm:text-[64px]
              md:text-[72px]
              lg:text-[84px]`}
            >
              Frumusețea
              <br />
              începe cu

              <span
                className={`${allura.className}
                block
                mt-5
                text-[#b27d58]
                text-[64px]
                sm:text-[82px]
                md:text-[94px]
                lg:text-[110px]`}
              >
                naturalețea.
              </span>
            </h1>

            <p className="mt-10 max-w-[560px] text-lg leading-9 text-[#4d4641]">
              Evidențiez frumusețea naturală prin stilizarea
              sprâncenelor, laminarea genelor și ritualuri
              faciale premium într-un spațiu elegant și
              relaxant din București.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#contact"
                className="rounded-full bg-[#9b6b47] px-8 py-4 text-white transition hover:opacity-90"
              >
                Programează-te
              </a>

              <a
                href="#servicii"
                className="rounded-full border border-[#9b6b47] px-8 py-4 transition hover:bg-[#9b6b47] hover:text-white"
              >
                Vezi serviciile
              </a>

            </div>

            <div className="mt-16 flex items-center gap-12">

              <div>

                <p className="text-5xl font-semibold">
                  3+
                </p>

                <p className="mt-2 text-[#6b625c]">
                  ani experiență
                </p>

              </div>

              <div className="h-14 w-px bg-[#d8cfc7]" />

              <div>

                <p
                  className={`${cormorant.className} text-5xl font-semibold`}
                >
                  Beauty
                </p>

                <p className="mt-2 text-[#6b625c]">
                  brows • lashes • facial
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}
                    <div className="flex justify-center lg:justify-end">

            <div className="w-full max-w-[700px]">

              <img
                src="/images/logo.png"
                alt="Brows & Lashes by Alexandra"
                className="mx-auto w-[300px] sm:w-[380px] md:w-[450px] lg:w-[560px] xl:w-[620px]"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}