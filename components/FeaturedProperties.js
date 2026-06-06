import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";
import { properties } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export default function FeaturedProperties() {
  return (
    <section id="propiedades" className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Propiedades destacadas"
            title="Una selección pensada para ti"
            description="Casas, departamentos, oficinas y terrenos en venta y arriendo. Cada propiedad cuenta con asesoría dedicada."
          />
          <a
            href={whatsappLink("Hola, quiero ver más propiedades disponibles.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-petrol-200 px-6 py-3 text-sm font-semibold text-petrol-800 transition hover:border-gold-400 hover:bg-gold-400 hover:text-petrol-950 sm:inline-flex"
          >
            Ver todas las propiedades
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <a
            href={whatsappLink("Hola, quiero ver más propiedades disponibles.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-petrol-200 px-6 py-3 text-sm font-semibold text-petrol-800 transition hover:border-gold-400 hover:bg-gold-400 hover:text-petrol-950"
          >
            Ver todas las propiedades
          </a>
        </div>
      </div>
    </section>
  );
}
