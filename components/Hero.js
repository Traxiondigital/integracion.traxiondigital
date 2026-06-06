import Image from "next/image";
import Icon from "@/components/Icon";
import { whatsappLink } from "@/lib/site";

const highlights = [
  "+15 años de experiencia",
  "Atención personalizada",
  "Gestión transparente",
];

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
          alt="Vivienda moderna y elegante"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="container flex min-h-[88vh] flex-col justify-center py-32 sm:min-h-screen">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 backdrop-blur">
            <Icon name="shield" className="h-4 w-4" />
            Corredora inmobiliaria boutique
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Encuentra, vende o arrienda tu propiedad con una asesoría
            inmobiliaria <span className="text-gold-300">confiable</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-petrol-100/90">
            En Martínez Mera Propiedades te acompañamos en cada etapa del
            proceso inmobiliario, con una gestión profesional, cercana y
            enfocada en resultados.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#propiedades"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-petrol-950 shadow-card transition hover:bg-gold-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
            >
              Ver propiedades
            </a>
            <a
              href="#vende"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Quiero vender mi propiedad
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-white/85"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-400/90 text-petrol-950">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA flotante de WhatsApp anclado en hero para mobile-first */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="sr-only"
      >
        Contactar por WhatsApp
      </a>
    </section>
  );
}
