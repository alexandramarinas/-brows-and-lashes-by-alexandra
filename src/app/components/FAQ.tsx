"use client";

import { useState } from "react";

export default function FAQ() {
  const questions = [
    {
      question: "Cât durează o laminare de sprâncene?",
      answer:
        "Procedura durează aproximativ 60 de minute și include consultarea, stilizarea și recomandările de îngrijire.",
    },
    {
      question: "Cât rezistă laminarea genelor?",
      answer:
        "Rezultatul se menține în general între 6 și 8 săptămâni, în funcție de ciclul natural al genelor.",
    },
    {
      question: "Masajul facial este potrivit pentru oricine?",
      answer:
        "În majoritatea cazurilor da, însă înainte de prima ședință discutăm eventualele contraindicații pentru a alege cea mai bună variantă.",
    },
    {
      question: "Cum mă programez?",
      answer:
        "Mă poți contacta telefonic, pe WhatsApp sau prin mesaj pe Instagram.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#fdf9f5] py-24 px-6 md:px-12">
      <div className="mx-auto max-w-4xl">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Întrebări frecvente
          </h2>
        </div>

        <div className="space-y-4">

          {questions.map((item, index) => (
            <div
              key={item.question}
              className="rounded-2xl bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-medium">
                  {item.question}
                </span>

                <span className="text-2xl">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-neutral-600 leading-7">
                  {item.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}