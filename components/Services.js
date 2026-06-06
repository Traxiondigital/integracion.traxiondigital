import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export default function Services() {
  return (
    <section id="servicios" className="bg-cloud py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Servicios inmobiliarios"
          title="Soluciones para cada etapa del proceso"
          description="Te acompañamos con una asesoría integral, ya sea que quieras vender, arrendar, comprar o conocer el valor real de tu propiedad."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative flex flex-col rounded-2xl border border-petrol-100 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-petrol-900 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-petrol-950">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-xl text-petrol-900">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-petrol-700/80">
                {service.description}
              </p>
              <a
                href={whatsappLink(
                  `Hola, me interesa el servicio de ${service.title.toLowerCase()}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-petrol-800 transition-colors group-hover:text-gold-600"
              >
                Solicitar información
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
