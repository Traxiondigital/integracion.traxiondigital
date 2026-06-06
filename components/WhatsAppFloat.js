import Icon from "@/components/Icon";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 text-sm font-semibold text-white shadow-card transition hover:brightness-105 hover:-translate-y-0.5"
    >
      <Icon name="whatsapp" className="h-6 w-6" />
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20 group-hover:opacity-0" aria-hidden="true" />
    </a>
  );
}
