import Icon from "@/components/Icon";
import { benefits } from "@/lib/data";

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-1 bg-petrol-900">
      <div className="container py-12 lg:py-14">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex flex-col gap-3 bg-petrol-900 p-7 transition-colors hover:bg-petrol-800"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-400/15 text-gold-300">
                <Icon name={b.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-serif text-lg text-white">{b.title}</h3>
              <p className="text-sm leading-relaxed text-petrol-100/70">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
