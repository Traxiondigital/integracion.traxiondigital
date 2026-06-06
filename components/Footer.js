import Icon from "@/components/Icon";
import { navLinks, site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-petrol-950 text-petrol-100">
      <div className="container grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 font-serif text-sm font-semibold text-gold-300">
              MM
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-base font-semibold text-white">
                Martínez Mera
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-gold-300">
                Propiedades
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-petrol-100/70">
            Corredora inmobiliaria boutique. Acompañamos a propietarios,
            compradores y arrendatarios con una gestión cercana y profesional.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-petrol-100 transition hover:bg-gold-400 hover:text-petrol-950"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-petrol-100 transition hover:bg-gold-400 hover:text-petrol-950"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M14 9h3V6h-3c-2.2 0-3 1.6-3 3.4V11H9v3h2v7h3v-7h2.5l.5-3H14V9.6c0-.4.3-.6.6-.6Z" />
              </svg>
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-petrol-100 transition hover:bg-gold-400 hover:text-petrol-950"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M6.5 8A1.5 1.5 0 1 0 5 6.5 1.5 1.5 0 0 0 6.5 8ZM5.5 10h2v8h-2Zm5 0h2v1.1a2.6 2.6 0 0 1 2.3-1.2c1.9 0 2.7 1.2 2.7 3.3V18h-2v-4.2c0-1-.4-1.6-1.3-1.6s-1.4.6-1.4 1.6V18h-2Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links rápidos */}
        <nav aria-label="Enlaces rápidos">
          <h3 className="font-serif text-sm font-semibold uppercase tracking-wide text-white">
            Navegación
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-petrol-100/70 transition hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Servicios */}
        <div>
          <h3 className="font-serif text-sm font-semibold uppercase tracking-wide text-white">
            Servicios
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href="#servicios"
                  className="text-petrol-100/70 transition hover:text-gold-300"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-serif text-sm font-semibold uppercase tracking-wide text-white">
            Contacto
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-petrol-100/70">
            <li className="flex items-start gap-2">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              {site.address}
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-gold-300"
              >
                <Icon name="whatsapp" className="h-4 w-4 shrink-0 text-gold-300" />
                {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 transition hover:text-gold-300"
              >
                <Icon name="tag" className="h-4 w-4 shrink-0 text-gold-300" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-petrol-100/60 sm:flex-row">
          <p>© {year} {site.name}. Todos los derechos reservados.</p>
          <p>
            Las propiedades publicadas son referenciales. Valores y disponibilidad
            sujetos a confirmación.
          </p>
        </div>
      </div>
    </footer>
  );
}
