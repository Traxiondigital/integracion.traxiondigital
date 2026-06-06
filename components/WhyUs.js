import Image from "next/image";
import Icon from "@/components/Icon";
import { reasons } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="nosotros" className="bg-white py-20 lg:py-28">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
              alt="Equipo de Martínez Mera Propiedades asesorando a un cliente"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-gold-200 bg-sand px-6 py-4 shadow-soft sm:block">
            <p className="font-serif text-2xl text-petrol-900">Boutique</p>
            <p className="text-xs font-medium uppercase tracking-wide text-gold-600">
              Asesoría cercana
            </p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
            Por qué elegirnos
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-petrol-900 sm:text-4xl">
            Una corredora que acompaña, no solo publica
          </h2>

          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-petrol-900 text-gold-300">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
                <span className="text-base text-petrol-800">{reason}</span>
              </li>
            ))}
          </ul>

          <blockquote className="mt-9 rounded-2xl border-l-4 border-gold-400 bg-cloud p-6">
            <p className="font-serif text-xl italic leading-snug text-petrol-900">
              “No solo publicamos propiedades. Gestionamos oportunidades
              inmobiliarias.”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
