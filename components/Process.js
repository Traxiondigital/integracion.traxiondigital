import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="bg-cloud py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Nuestro proceso"
          title="Un camino claro hacia el cierre"
          description="Cuatro pasos simples y ordenados para que vivas el proceso inmobiliario con tranquilidad."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className="group relative rounded-2xl border border-petrol-100 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <span className="font-serif text-4xl text-gold-300 transition-colors group-hover:text-gold-500">
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-lg text-petrol-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-petrol-700/80">
                {step.description}
              </p>
              {index < processSteps.length - 1 && (
                <span
                  className="absolute right-6 top-9 hidden text-petrol-200 lg:block"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
