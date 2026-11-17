import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Press" };

const LOGO = {
  wapo: "/images/press/imgres-2-1.png",
  cnn: "/images/press/imgres-1-1.png",
  quartz: "/images/press/imgres-1.png",
  mashable: "/images/press/imgres-2.png",
  aljazeera: "/images/press/imgres-3.png",
};

// kind: "logo" = outlet logo on white, "photo" = news photo filling the card
const PRESS = [
  {
    outlet: "CNN",
    title: "Trump in 2008: Hillary Clinton will ‘go down at a minimum as a great senator’",
    url: "http://www.cnn.com/2016/10/19/politics/trump-ny1-clintons/",
    image: LOGO.cnn,
    kind: "logo",
  },
  {
    outlet: "The Washington Post",
    title: "Former Clinton debate moderator: ‘Perhaps if she was a man I would have pushed a little more’",
    url: "https://www.washingtonpost.com/news/the-fix/wp/2016/09/24/former-clinton-debate-moderator-perhaps-if-she-was-a-man-i-would-have-pushed-a-little-more/",
    image: LOGO.wapo,
    kind: "logo",
  },
  {
    outlet: "SFGate",
    title: "Donald Trump praises Hillary Clinton as a great senator and wife in newly discovered video",
    url: "http://www.sfgate.com/politics/article/Trump-praises-Hillary-Clinton-great-NY1-video-9997813.php",
    image: "/images/press/920x920.jpg",
    kind: "photo",
  },
  {
    outlet: "Quartz",
    title: "In newly released 2008 footage, Trump says Clinton haters were “jealous as hell”",
    url: "http://qz.com/814073/trump-praises-hillary-clinton-in-newly-released-footage-of-a-2008-ny1-interview/",
    image: LOGO.quartz,
    kind: "logo",
  },
  {
    outlet: "Mashable",
    title: "Past interview includes Trump praising ‘nasty woman’ Hillary Clinton",
    url: "http://mashable.com/2016/10/20/trump-praising-hillary-clinton/",
    image: LOGO.mashable,
    kind: "logo",
  },
  {
    outlet: "Newstalk ZB",
    title: "Dominic Carter: Trump TV Coming Soon?",
    url: "http://www.newstalkzb.co.nz/on-air/mike-hosking-breakfast/audio/dominic-carter-trump-tv-coming-soon/",
    image: "/images/press/crop.jpg",
    kind: "photo",
  },
  {
    outlet: "The Washington Post",
    title: "Donald Trump wonders whether Hillary Clinton was ‘loyal’ to Bill. She’s responded to that question before.",
    url: "https://www.washingtonpost.com/news/the-fix/wp/2016/10/03/donald-trump-wonders-whether-hillary-clinton-was-loyal-to-bill-shes-responded-to-that-question-before/",
    image: LOGO.wapo,
    kind: "logo",
  },
  {
    outlet: "WTVR",
    title: "Trump in 2008: Hillary Clinton will ‘go down at a minimum as a great senator’",
    url: "http://wtvr.com/2016/10/19/trump-in-2008-hillary-clinton-will-go-down-at-a-minimum-as-a-great-senator/",
    image: "/images/press/resize.jpg",
    kind: "photo",
  },
  {
    outlet: "The Washington Post",
    title: "5 things to know about presidential debate moderator Lester Holt",
    url: "https://www.washingtonpost.com/news/the-fix/wp/2016/09/25/5-things-to-know-about-presidential-debate-moderator-lester-holt/",
    image: LOGO.wapo,
    kind: "logo",
  },
  {
    outlet: "Al Jazeera",
    title: "Clinton and Trump fail to impress black voters",
    url: "http://www.aljazeera.com/indepth/features/2016/11/clinton-trump-black-voters-161101201835060.html",
    image: LOGO.aljazeera,
    kind: "logo",
  },
];

const OUTLET_LOGOS = [
  { name: "CNN", src: LOGO.cnn },
  { name: "The Washington Post", src: LOGO.wapo },
  { name: "Quartz", src: LOGO.quartz },
  { name: "Mashable", src: LOGO.mashable },
  { name: "Al Jazeera", src: LOGO.aljazeera },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        label="Press"
        title="In the news"
        intro="Coverage of Dominic Carter’s reporting — including his widely cited 2008 NY1 interview with Donald Trump."
      />

      {/* Logo strip */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-5 py-10 md:justify-between">
          <span className="w-full text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted md:w-auto">
            Featured in
          </span>
          {OUTLET_LOGOS.map((o) => (
            <div key={o.name} data-reveal className="relative h-10 w-36 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0">
              <Image src={o.src} alt={o.name} fill sizes="144px" className="object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRESS.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="card group flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-black/5 bg-white">
                {p.kind === "photo" ? (
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 368px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={p.image}
                    alt={p.outlet}
                    fill
                    sizes="(min-width: 1024px) 368px, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-10 transition duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{p.outlet}</p>
                <h2 className="mt-3 flex-1 font-serif text-lg font-bold leading-snug group-hover:text-accent">
                  {p.title}
                </h2>
                <p className="mt-5 text-sm font-semibold text-muted group-hover:text-ink">Read article ↗</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
