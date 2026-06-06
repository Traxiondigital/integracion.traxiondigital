import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/data";

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold-400" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="m12 17.3-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-petrol-900 py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          light
          eyebrow="Testimonios"
          title="La confianza de quienes ya trabajaron con nosotros"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="flex flex-col rounded-2xl bg-white/[0.06] p-7 ring-1 ring-white/10 transition hover:bg-white/[0.1]"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-petrol-50/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-400 font-serif text-base font-semibold text-petrol-950">
                  {t.author.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-white">{t.author}</span>
                  <span className="block text-xs text-petrol-100/70">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
