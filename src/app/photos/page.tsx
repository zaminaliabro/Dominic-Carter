import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Photos" };

const PHOTOS = [
  { src: "/images/photos/trump.jpg", name: "President Donald Trump" },
  { src: "/images/photos/nelson-mandela.jpg", name: "Nelson Mandela" },
  { src: "/images/photos/hillary-clinton.jpg", name: "Hillary Clinton" },
  { src: "/images/photos/charles-schumer.jpg", name: "Senator Charles Schumer" },
  { src: "/images/photos/kirsten-gillibrand.jpg", name: "Senator Kirsten Gillibrand" },
  { src: "/images/photos/gloria-steinem.jpg", name: "Gloria Steinem" },
  { src: "/images/photos/whoopi-goldberg.jpg", name: "Whoopi Goldberg" },
  { src: "/images/photos/geraldo-rivera.jpg", name: "Geraldo Rivera" },
  { src: "/images/photos/jerry-springer.jpg", name: "Jerry Springer" },
];

export default function PhotosPage() {
  return (
    <>
      <PageHero
        label="Photos"
        title="On the job"
        intro="Moments with world leaders, politicians and public figures from Dominic Carter’s career."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p) => (
            <a
              key={p.src}
              href={p.src}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-ink shadow-sm ring-1 ring-black/5 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent/20"
            >
              {/* blurred copy fills the card, so small photos never look stretched */}
              <Image src={p.src} alt="" aria-hidden fill sizes="200px" className="scale-125 object-cover opacity-60 blur-2xl" />
              <Image
                src={p.src}
                alt={`${p.name} with Dominic Carter`}
                fill
                sizes="(min-width: 1024px) 368px, (min-width: 640px) 50vw, 100vw"
                className="object-contain drop-shadow-2xl transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-16 text-white">
                <p className="font-serif text-xl font-bold transition duration-300 group-hover:-translate-y-1">{p.name}</p>
                <p className="text-sm text-gold/90">with Dominic Carter</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
