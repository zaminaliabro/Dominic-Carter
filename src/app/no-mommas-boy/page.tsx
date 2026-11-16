import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel } from "@/components/ui";
export const metadata: Metadata = { title: "No Momma’s Boy" };

const COVER = "/images/book-cover.png";

const THEMES = [
  {
    title: "A secret kept for decades",
    text: "After years of keeping his story private, one of New York’s best-known political reporters tells the truth about his childhood.",
  },
  {
    title: "The records",
    text: "After his mother’s death, he obtained her psychiatric records — and learned how severe her mental illness had been.",
  },
  {
    title: "From survivor to journalist",
    text: "The book follows his path into journalism, from White House events to interviewing Nelson Mandela.",
  },
];

export default function BookPage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden text-white">
        <div className="grid-lines pointer-events-none absolute inset-0" />
        <div className="animate-blob pointer-events-none absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-accent/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-[1fr_1.3fr] md:py-28">
          <div className="animate-fade-in mx-auto w-full max-w-xs">
          <div className="animate-float relative">
            <div className="absolute -inset-4 -rotate-3 rounded-2xl bg-gradient-to-br from-accent to-accent-2" />
            <div className="relative aspect-[280/438] overflow-hidden rounded-xl bg-white shadow-2xl">
              <Image src={COVER} alt="No Momma's Boy book cover" fill priority sizes="320px" className="object-cover" />
            </div>
          </div>
          </div>
          <div className="animate-fade-up delay-1">
            <SectionLabel>The memoir · 2007</SectionLabel>
            <h1 className="font-serif text-5xl font-bold leading-tight sm:text-6xl">
              No Momma’s <span className="text-gradient">Boy</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Dominic Carter’s memoir of surviving abuse at the hands of his mother — and of how he went on to become a
              successful journalist.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="http://www.nomommasboy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                Visit the book site ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20" data-reveal="left">
        <SectionLabel>About the book</SectionLabel>
        <div className="space-y-6 text-lg leading-relaxed text-slate-600">
          <p>
            For most of his life, Dominic Carter kept his childhood to himself. In <em>No Momma’s Boy</em>, he tells
            the story of the abuse he suffered at the hands of his mother.
          </p>
          <p>
            After her death, he obtained her psychiatric records. He had always known she was mentally ill, but not how
            serious her condition was. The records describe a diagnosis of paranoid schizophrenia, many suicide
            attempts, and an attempt on his life when he was an infant. Through the process, Carter recovers memories of
            the physical and sexual abuse he endured as a child.
          </p>
          <p>
            The book is also the story of what came next: how he built a career as a journalist, attended White House
            events and interviewed Nelson Mandela.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 pb-20 md:grid-cols-3">
          {THEMES.map((t, i) => (
            <div key={t.title} className="card rounded-2xl p-7" data-reveal>
              <p className="text-gradient font-serif text-4xl font-bold">0{i + 1}</p>
              <h2 className="mt-3 font-serif text-xl font-bold">{t.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent-gradient relative overflow-hidden text-white">
        <div className="grid-lines pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center" data-reveal>
          <p className="font-serif text-3xl font-bold sm:text-4xl">Turning his story into advocacy</p>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            Today Dominic speaks across the country on child abuse prevention, foster care and mental health.
          </p>
        </div>
      </section>
    </>
  );
}
