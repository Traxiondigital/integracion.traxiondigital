"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { site, whatsappLink } from "@/lib/site";

const queryTypes = [
  "Quiero vender",
  "Quiero comprar",
  "Quiero arrendar",
  "Quiero tasar mi propiedad",
  "Otra consulta",
];

const initialState = {
  name: "",
  phone: "",
  email: "",
  queryType: queryTypes[0],
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Ingresa tu nombre.";
    if (!form.phone.trim()) next.phone = "Ingresa tu teléfono.";
    if (!form.email.trim()) {
      next.email = "Ingresa tu correo.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Correo no válido.";
    }
    if (!form.message.trim()) next.message = "Cuéntanos brevemente tu consulta.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    // Sin backend: la consulta se canaliza por WhatsApp con los datos del formulario.
    const text =
      `Hola ${site.shortName}, soy ${form.name}.%0A` +
      `Tipo de consulta: ${form.queryType}.%0A` +
      `Teléfono: ${form.phone}.%0A` +
      `Correo: ${form.email}.%0A` +
      `Mensaje: ${form.message}`;
    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
        decodeURIComponent(text)
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
    setForm(initialState);
  };

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-petrol-900 outline-none transition placeholder:text-petrol-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30 ${
      errors[field] ? "border-red-400" : "border-petrol-200"
    }`;

  return (
    <section id="contacto" className="bg-cloud py-20 lg:py-28">
      <div className="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Columna informativa */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
            Contacto
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-petrol-900 sm:text-4xl">
            Conversemos sobre tu próxima decisión inmobiliaria
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-petrol-700/80">
            Cuéntanos qué necesitas y te responderemos a la brevedad. También
            puedes escribirnos directamente por WhatsApp.
          </p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Hablar por WhatsApp
          </a>

          <dl className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-gold-600 shadow-soft">
                <Icon name="pin" className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-petrol-500">Oficina</dt>
                <dd className="text-sm font-medium text-petrol-900">{site.address}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-gold-600 shadow-soft">
                <Icon name="whatsapp" className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-petrol-500">Teléfono</dt>
                <dd className="text-sm font-medium text-petrol-900">{site.phoneDisplay}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-gold-600 shadow-soft">
                <Icon name="tag" className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-xs uppercase tracking-wide text-petrol-500">Correo</dt>
                <dd className="text-sm font-medium text-petrol-900">{site.email}</dd>
              </div>
            </div>
          </dl>
        </div>

        {/* Formulario */}
        <div className="rounded-3xl border border-petrol-100 bg-white p-7 shadow-card sm:p-9">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-gold-400/15 text-gold-600">
                <Icon name="check" className="h-8 w-8" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-serif text-2xl text-petrol-900">
                ¡Gracias por contactarnos!
              </h3>
              <p className="mt-2 max-w-xs text-sm text-petrol-700/80">
                Abrimos WhatsApp con tu consulta. Si no se abrió, escríbenos
                directamente y te responderemos a la brevedad.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-semibold text-gold-600 underline-offset-4 hover:underline"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-petrol-800">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={update("name")}
                    className={fieldClass("name")}
                    placeholder="Tu nombre"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-petrol-800">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    className={fieldClass("phone")}
                    placeholder="+56 9 ..."
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-petrol-800">
                  Correo
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  className={fieldClass("email")}
                  placeholder="tucorreo@email.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="queryType" className="mb-1.5 block text-sm font-medium text-petrol-800">
                  Tipo de consulta
                </label>
                <select
                  id="queryType"
                  value={form.queryType}
                  onChange={update("queryType")}
                  className={fieldClass("queryType")}
                >
                  {queryTypes.map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-petrol-800">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className={`${fieldClass("message")} resize-none`}
                  placeholder="Cuéntanos en qué te podemos ayudar"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-petrol-900 px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-petrol-800 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol-900"
              >
                Enviar consulta
              </button>
              <p className="text-center text-xs text-petrol-500">
                Al enviar aceptas ser contactado por nuestro equipo.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
