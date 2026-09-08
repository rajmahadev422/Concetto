export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-24 text-center md:pb-14 md:pt-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--primary)] opacity-10 blur-3xl" />

      {/* Eyebrow */}
      <div className="mb-5 flex items-center justify-center gap-4">
        <span className="h-px w-12 bg-[var(--primary)] opacity-60 md:w-16" />

        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
          Concetto '26
        </p>

        <span className="h-px w-12 bg-[var(--primary)] opacity-60 md:w-16" />
      </div>

      {/* Main Heading */}
      <h1 className="text-6xl font-black uppercase leading-[0.92] tracking-tight text-[var(--heading-text)] md:text-7xl lg:text-8xl">
        Our
        <span className="block text-[var(--primary)]">Team</span>
      </h1>

      {/* Gradient Accent */}
      <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/60 to-transparent" />

      {/* Description */}
      <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-base md:leading-8">
  Every great experience begins with a great team. Meet the passionate
  students and dedicated faculty shaping{" "}
  <span className="font-semibold text-[var(--primary)]">
    CONCETTO '26
  </span>{" "}
  — bringing together vision, creativity, and a shared drive to create
  an experience that goes beyond expectations.
</p>
    </section>
  );
}