import Image from "next/image";
import Icon from "@/components/Icon";
import { whatsappLink } from "@/lib/site";

const benefits = [
  "Evaluación inicial de la propiedad.",
  "Publicación en canales digitales.",
  "Filtro de interesados.",
  "Coordinación de visitas.",
  "Acompañamiento hasta el cierre.",
];

export default function SellCTA() {
  return (
    <section id="vende" className="relative overflow-hidden bg-petrol-950 py-20 lg:py-28">
      {/* textura sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #cda659 0, transparent 35%), radial-gradient(circle at 80% 0%, #4a7f87 0, transparent 30%)",
        }}
        aria-hidden="true"
      />
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
            Para propietarios
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
            ¿Quieres vender o arrendar tu propiedad?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-petrol-100/80">
            Déjanos ayudarte a gestionar tu propiedad con una estrategia clara,
            difusión profesional y acompañamiento personalizado.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-white/90">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-400 text-petrol-950">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-petrol-950 shadow-card transition hover:bg-gold-300 hover:-translate-y-0.5"
            >
              Solicitar evaluación de mi propiedad
            </a>
            <a
              href={whatsappLink(
                "Hola, quiero solicitar una evaluación de mi propiedad."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Propietaria recibiendo asesoría inmobiliaria"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-5 shadow-card sm:block">
            <p className="font-serif text-3xl text-petrol-900">+250</p>
            <p className="text-xs font-medium uppercase tracking-wide text-petrol-500">
              propiedades gestionadas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
