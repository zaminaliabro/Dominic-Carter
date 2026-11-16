import type { ReactNode } from "react";

export function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] ${
        light ? "text-white/75" : "text-accent"
      }`}
    >
      <span className={`h-px w-10 ${light ? "bg-white/50" : "bg-gradient-to-r from-accent to-accent-2"}`} />
      {children}
    </p>
  );
}

export function PageHero({ label, title, intro }: { label: string; title: string; intro?: ReactNode }) {
  return (
    <section className="bg-hero relative overflow-hidden text-white">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="animate-blob pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-accent/25 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="animate-fade-up">
          <SectionLabel>{label}</SectionLabel>
        </div>
        <h1 className="animate-fade-up delay-1 font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="animate-fade-up delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{intro}</p>
        )}
      </div>
    </section>
  );
}
