import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Corredora inmobiliaria boutique. Te acompañamos a vender, comprar o arrendar tu propiedad con una gestión profesional, cercana y enfocada en resultados.";

export const metadata = {
  metadataBase: new URL("https://martinezmera.cl"),
  title: {
    default: `${site.name} | Asesoría inmobiliaria confiable`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "corredora inmobiliaria",
    "vender propiedad",
    "arrendar propiedad",
    "comprar casa",
    "tasación comercial",
    "asesoría inmobiliaria",
    "Martínez Mera Propiedades",
  ],
  openGraph: {
    title: `${site.name} | Asesoría inmobiliaria confiable`,
    description,
    type: "website",
    locale: "es_CL",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0f2529",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
