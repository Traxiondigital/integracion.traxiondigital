import Image from "next/image";
import Icon from "@/components/Icon";
import { whatsappLink } from "@/lib/site";

function Feature({ icon, value, label }) {
  if (!value) return null;
  return (
    <div className="flex items-center gap-2 text-sm text-petrol-700">
      <Icon name={icon} className="h-4 w-4 text-gold-600" />
      <span className="font-medium">{value}</span>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default function PropertyCard({ property }) {
  const operationStyle =
    property.operation === "Venta"
      ? "bg-petrol-900 text-white"
      : "bg-gold-400 text-petrol-950";

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-petrol-100 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={`${property.title} en ${property.commune}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${operationStyle}`}>
            {property.operation}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-petrol-800 backdrop-blur">
            {property.type}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-petrol-500">
          <Icon name="pin" className="h-4 w-4 text-gold-600" />
          {property.commune}
        </div>

        <h3 className="mt-2 font-serif text-lg leading-snug text-petrol-900">
          {property.title}
        </h3>

        <p className="mt-2 text-xl font-semibold text-gold-600">{property.price}</p>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-petrol-100 pt-4">
          <Feature icon="area" value={`${property.area} m²`} label="Metros cuadrados" />
          {property.bedrooms > 0 && (
            <Feature icon="bed" value={`${property.bedrooms} dorm.`} label="Dormitorios" />
          )}
          {property.bathrooms > 0 && (
            <Feature icon="bath" value={`${property.bathrooms} baños`} label="Baños" />
          )}
        </div>

        <a
          href={whatsappLink(
            `Hola, quiero más información sobre "${property.title}" en ${property.commune} (${property.operation}).`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-petrol-200 px-5 py-2.5 text-sm font-semibold text-petrol-800 transition hover:border-gold-400 hover:bg-gold-400 hover:text-petrol-950"
        >
          Ver detalle
        </a>
      </div>
    </article>
  );
}
