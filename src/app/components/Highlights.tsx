const benefits = [
  ["🍃", "Produse profesionale", "Folosesc doar produse de înaltă calitate."],
  ["♡", "Experiență personalizată", "Fiecare serviciu este adaptat nevoilor tale."],
  ["✦", "Rezultate naturale", "Evidențiem frumusețea ta naturală."],
  ["✿", "Atmosferă relaxantă", "Un spațiu intim pentru o experiență completă."],
];

export default function Highlights() {
  return (
    <section className="bg-white px-6 py-16 lg:px-12">
      <div className="mx-auto grid max-w-[1200px] gap-8 border-y border-stone-200 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(([icon, title, description]) => (
          <div key={title} className="text-center">
            <span className="text-2xl text-[#255463]">{icon}</span>
            <h2 className="mt-3 text-[11px] font-medium uppercase tracking-[.14em]">{title}</h2>
            <p className="mx-auto mt-2 max-w-[190px] text-xs leading-5 text-stone-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
