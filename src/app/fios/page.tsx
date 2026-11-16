import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Verizon Fios TV" };

const VIDEOS = [
  {
    id: "D2Zu9eUoOs4",
    title: "Battling the Opioid Epidemic",
    text: "Dominic’s report on the opioid epidemic.",
  },
  {
    id: "KJZ5v5DJ5ng",
    start: 104,
    title: "A Second Chance After Prison",
    text: "Dominic interviews journalist George Will, recording artist Usher and Harry Belafonte about a prison second-chance program.",
  },
  {
    id: "orXq6flFif0",
    title: "Inside a New York Housing Project",
    text: "Dominic takes viewers on a tour of a notorious New York City housing project.",
  },
];

export default function FiosPage() {
  return (
    <>
      <PageHero
        label="Verizon Fios TV"
        title="A voice for the voiceless"
        intro="Dominic Carter is a political commentator and television news reporter on Verizon Fios. He went into television to be a voice for the voiceless — here is some of his work."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10">
          {VIDEOS.map((v, i) => (
            <article
              key={v.id}
              data-reveal
              className={`grid items-center gap-8 md:grid-cols-[1.4fr_1fr] ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink shadow-xl ring-1 ring-black/5 transition duration-500 hover:shadow-2xl hover:shadow-accent/25">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}${v.start ? `?start=${v.start}` : ""}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div>
                <p className="text-gradient font-serif text-5xl font-bold">0{i + 1}</p>
                <h2 className="mt-2 font-serif text-3xl font-bold">{v.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{v.text}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-semibold hover:text-accent"
                >
                  Watch on YouTube ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
