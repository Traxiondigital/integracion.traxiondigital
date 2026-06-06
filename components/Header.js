"use client";

import { useEffect, useState } from "react";
import { navLinks, site, whatsappLink } from "@/lib/site";
import Icon from "@/components/Icon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del fondo cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-[72px] items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          aria-label={`${site.name} — Inicio`}
        >
          <span
            className={`grid h-10 w-10 place-items-center rounded-full border text-sm font-serif font-semibold transition-colors ${
              scrolled
                ? "border-petrol-200 bg-petrol-900 text-gold-300"
                : "border-white/30 bg-white/10 text-gold-300 backdrop-blur"
            }`}
          >
            MM
          </span>
          <span className="leading-tight">
            <span
              className={`block font-serif text-base font-semibold tracking-wide transition-colors ${
                scrolled ? "text-petrol-900" : "text-white"
              }`}
            >
              Martínez Mera
            </span>
            <span
              className={`block text-[10px] font-medium uppercase tracking-[0.3em] transition-colors ${
                scrolled ? "text-gold-600" : "text-gold-300"
              }`}
            >
              Propiedades
            </span>
          </span>
        </a>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                scrolled ? "text-petrol-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA escritorio */}
        <div className="hidden items-center lg:flex">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-petrol-950 shadow-soft transition hover:bg-gold-300 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Agendar asesoría
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-lg transition lg:hidden ${
            scrolled ? "text-petrol-900 hover:bg-petrol-50" : "text-white hover:bg-white/10"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`fixed inset-0 top-[72px] bg-petrol-950/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <nav
          className={`absolute inset-x-0 top-[72px] origin-top border-t border-petrol-100 bg-white px-5 py-6 shadow-card transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
          aria-label="Móvil"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-petrol-800 transition hover:bg-petrol-50 hover:text-gold-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-semibold text-petrol-950 shadow-soft transition hover:bg-gold-300"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Contactar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
