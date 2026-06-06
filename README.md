# Martínez Mera Propiedades

Landing page de una corredora inmobiliaria boutique, construida con **Next.js (App Router)**, **React** y **Tailwind CSS**.

Diseño premium, sobrio y responsive, enfocado en la conversión hacia WhatsApp y el formulario de contacto.

## Características

- 🎨 Paleta premium: azul petróleo, blanco, gris claro y dorado suave como acento.
- ✍️ Tipografía elegante: *Playfair Display* (serif) para títulos + *Inter* (sans) para textos.
- 📱 Totalmente responsive (mobile-first).
- ♿ Accesibilidad: HTML semántico, foco visible, `aria-*`, soporte de `prefers-reduced-motion`.
- 🔍 SEO básico: metadatos, Open Graph y datos estructurados (`RealEstateAgent`).
- 💬 Integración directa con WhatsApp (botón flotante, CTA y formulario).
- 🧩 Componentes reutilizables, sin librerías innecesarias.

## Secciones

Header sticky · Hero · Franja de confianza · Servicios · Propiedades destacadas ·
Captación de propietarios · Nuestro proceso · Por qué elegirnos · Testimonios ·
Formulario de contacto · Footer.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm start        # servir build
```

## Personalización

| Qué | Dónde |
|-----|-------|
| Nombre, WhatsApp, email, dirección, redes | `lib/site.js` |
| Propiedades, servicios, testimonios, proceso | `lib/data.js` |
| Colores y tipografías | `tailwind.config.js` |

> El formulario de contacto no requiere backend: canaliza la consulta a WhatsApp
> con los datos completados. Para enviar por correo o a un CRM, conecta el
> `handleSubmit` de `components/ContactForm.js` a tu endpoint.

Las imágenes de ejemplo se cargan desde Unsplash; reemplázalas por fotos reales
de las propiedades en `lib/data.js`.
