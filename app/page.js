import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import FeaturedProperties from "@/components/FeaturedProperties";
import SellCTA from "@/components/SellCTA";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.name,
  description:
    "Corredora inmobiliaria boutique especializada en venta, arriendo, compra y tasación de propiedades.",
  email: site.email,
  telephone: site.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressCountry: "CL",
  },
  areaServed: "Santiago, Chile",
  url: "https://martinezmera.cl",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <FeaturedProperties />
        <SellCTA />
        <Process />
        <WhyUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
