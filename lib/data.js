// Datos de ejemplo. Reemplaza con propiedades y contenido real.

export const services = [
  {
    id: "venta",
    title: "Venta de propiedades",
    description:
      "Gestionamos la venta de tu propiedad con una estrategia profesional, desde la publicación hasta el cierre.",
    icon: "tag",
  },
  {
    id: "arriendo",
    title: "Arriendo de propiedades",
    description:
      "Te ayudamos a encontrar arrendatarios adecuados y a gestionar el proceso con seguridad y respaldo.",
    icon: "key",
  },
  {
    id: "compra",
    title: "Compra de propiedades",
    description:
      "Acompañamos a compradores en la búsqueda de casas, departamentos o inversiones inmobiliarias.",
    icon: "search",
  },
  {
    id: "tasacion",
    title: "Tasación comercial",
    description:
      "Orientamos el valor de mercado de tu propiedad para ayudarte a tomar mejores decisiones.",
    icon: "chart",
  },
  {
    id: "administracion",
    title: "Administración de propiedades",
    description:
      "Apoyo en la gestión, cobranza y seguimiento de propiedades en arriendo, con reportes claros.",
    icon: "building",
  },
];

export const properties = [
  {
    id: "casa-lo-barnechea",
    title: "Casa familiar con jardín",
    type: "Casa",
    operation: "Venta",
    commune: "Lo Barnechea",
    price: "UF 12.500",
    area: 220,
    bedrooms: 4,
    bathrooms: 3,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "depto-providencia",
    title: "Departamento luminoso y moderno",
    type: "Departamento",
    operation: "Venta",
    commune: "Providencia",
    price: "UF 5.300",
    area: 86,
    bedrooms: 2,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "depto-nunoa",
    title: "Departamento ideal para inversión",
    type: "Departamento",
    operation: "Arriendo",
    commune: "Ñuñoa",
    price: "$680.000 / mes",
    area: 58,
    bedrooms: 2,
    bathrooms: 1,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "oficina-las-condes",
    title: "Oficina corporativa equipada",
    type: "Oficina",
    operation: "Arriendo",
    commune: "Las Condes",
    price: "$1.450.000 / mes",
    area: 120,
    bedrooms: 0,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "casa-la-reina",
    title: "Casa mediterránea con terraza",
    type: "Casa",
    operation: "Venta",
    commune: "La Reina",
    price: "UF 9.800",
    area: 180,
    bedrooms: 3,
    bathrooms: 3,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "terreno-chicureo",
    title: "Terreno urbanizado en condominio",
    type: "Terreno",
    operation: "Venta",
    commune: "Chicureo",
    price: "UF 4.200",
    area: 650,
    bedrooms: 0,
    bathrooms: 0,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
];

export const benefits = [
  {
    title: "Gestión profesional de propiedades",
    description:
      "Procesos ordenados y transparentes en cada etapa de la operación.",
    icon: "shield",
  },
  {
    title: "Acompañamiento en todo el proceso",
    description:
      "Te guiamos desde la primera consulta hasta la firma final.",
    icon: "handshake",
  },
  {
    title: "Publicación estratégica",
    description:
      "Difusión en los principales portales inmobiliarios y canales digitales.",
    icon: "megaphone",
  },
  {
    title: "Atención personalizada",
    description:
      "Para propietarios, compradores y arrendatarios por igual.",
    icon: "users",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Diagnóstico inicial",
    description: "Revisamos tu propiedad, objetivos y situación actual.",
  },
  {
    number: "02",
    title: "Estrategia comercial",
    description: "Definimos precio, presentación y canales de publicación.",
  },
  {
    number: "03",
    title: "Gestión de interesados",
    description:
      "Filtramos consultas, coordinamos visitas y damos seguimiento.",
  },
  {
    number: "04",
    title: "Cierre seguro",
    description: "Te acompañamos en la negociación y documentación final.",
  },
];

export const reasons = [
  "Atención cercana y personalizada.",
  "Conocimiento del mercado inmobiliario.",
  "Gestión ordenada y transparente.",
  "Comunicación clara durante todo el proceso.",
  "Enfoque en resultados reales, no solo publicaciones.",
];

export const testimonials = [
  {
    quote:
      "Me ayudaron a vender mi departamento de forma ordenada y siempre estuvieron disponibles para resolver mis dudas.",
    author: "Carolina V.",
    role: "Vendió su departamento en Providencia",
  },
  {
    quote:
      "Excelente gestión, muy profesionales y claros durante todo el proceso de arriendo.",
    author: "Rodrigo M.",
    role: "Arrendó su propiedad en Ñuñoa",
  },
  {
    quote:
      "Sentí confianza desde el primer contacto. Me guiaron en la compra de mi primera propiedad.",
    author: "Javiera P.",
    role: "Compró su primera vivienda",
  },
];
