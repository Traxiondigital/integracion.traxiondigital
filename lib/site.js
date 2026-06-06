// Configuración central de la marca y datos de contacto.
// Edita estos valores para reflejar la información real de la corredora.

export const site = {
  name: "Martínez Mera Propiedades",
  shortName: "Martínez Mera",
  tagline: "Asesoría inmobiliaria confiable, cercana y enfocada en resultados.",
  // Número en formato internacional sin signos ni espacios (para enlaces wa.me)
  whatsappNumber: "56912345678",
  whatsappDisplay: "+56 9 1234 5678",
  email: "contacto@martinezmera.cl",
  phoneDisplay: "+56 9 1234 5678",
  address: "Av. Providencia 1234, Of. 56 · Santiago, Chile",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
  },
};

// Mensaje predeterminado para WhatsApp
export const whatsappMessage =
  "Hola Martínez Mera Propiedades, me gustaría recibir asesoría inmobiliaria.";

export function whatsappLink(message = whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Servicios", href: "#servicios" },
  { label: "Vende tu propiedad", href: "#vende" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];
