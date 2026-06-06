export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center mx-auto";

  return (
    <div className={`flex flex-col ${alignment} max-w-2xl gap-4`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? "text-gold-300" : "text-gold-600"
          }`}
        >
          <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl leading-tight sm:text-4xl ${
          light ? "text-white" : "text-petrol-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed ${
            light ? "text-petrol-100/80" : "text-petrol-700/80"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
