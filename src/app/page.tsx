import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui";
const IMAGES = {
  headshot: "/images/headshot.jpg",
  book: "/images/book-cover.png",
  bobblehead: "/images/bobblehead.jpg",
};

const STATS = [
  { value: "30+", label: "Years in radio & TV" },
  { value: "2008", label: "Interview with President-Elect Trump" },
  { value: "2007", label: "Memoir “No Momma’s Boy”" },
  { value: "NY1", label: "Host of “Inside City Hall”" },
];

const NOW = [
  {
    role: "Talk Show Host",
    org: "77 WABC Radio",
    text: "Hosting The Dominic Carter Show — conversations on politics, New York and the stories that shape the day.",
    icon: "🎙️",
  },
  {
    role: "Daily Political Commentator",
    org: "Verizon Fios News",
    text: "Sharp, daily analysis of local and national politics for New York viewers.",
    href: "/fios",
    icon: "📺",
  },
  {
    role: "Writer",
    org: "Blog & Huffington Post",
    text: "Commentary on politics, media and public life.",
    href: "/blog",
    icon: "✍️",
  },
];

const TIMELINE = [
  {
    period: "Education",
    title: "SUNY Cortland & Syracuse University",
    text: "BA in Communication and Media Studies from SUNY Cortland, then a master’s in Broadcast Journalism at Syracuse University, where he worked at WAER.",
  },
  {
    period: "Early career",
    title: "Field reporter, WBLS / WLIB",
    text: "Started in New York radio as a field reporter, including coverage of the Jesse Jackson presidential campaign.",
  },
  {
    period: "New York 1",
    title: "“Inside City Hall” & celebrity interviews",
    text: "Became a defining political voice at NY1 as host of “Inside City Hall,” while building a niche in celebrity interviews.",
  },
  {
    period: "2008",
    title: "Interview with President-Elect Trump",
    text: "Interviewed then President-Elect Donald Trump, and later covered the 2016 election and moderated political debates.",
  },
  {
    period: "Today",
    title: "WABC Radio & Verizon Fios News",
    text: "Talk show host on WABC radio and daily political commentator for Verizon Fios news.",
  },
];

const SEEN_ON = [
  "Face the Nation",
  "Hardball with Chris Matthews",
  "CNN",
  "Fox News",
  "The Wendy Williams Show",
  "“Inside Man” — Spike Lee",
  "NY1",
  "77 WABC",
  "Verizon Fios",
];

const WORLD = ["Japan", "Israel", "Somalia", "Persian Gulf"];

const HONORS = [
  "Samuel P. Peabody Award — Citizens’ Committee for Children",
  "Honorary Ph.D — CUNY",
  "Member, Inner Circle",
  "Member, Screen Actors Guild",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden text-white">
        <div className="grid-lines pointer-events-none absolute inset-0" />
        <div className="animate-blob pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent/25 blur-3xl" />
        <div className="animate-blob pointer-events-none absolute -bottom-40 left-1/4 h-[24rem] w-[24rem] rounded-full bg-accent-2/15 blur-3xl [animation-delay:-6s]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <p className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              New York · On Air
            </p>
            <h1 className="animate-fade-up delay-1 font-serif text-5xl font-bold leading-[1.02] sm:text-6xl md:text-7xl">
              Dominic <span className="text-gradient">Carter</span>
            </h1>
            <p className="animate-fade-up delay-2 mt-5 text-xl font-medium text-slate-200 sm:text-2xl">
              Journalist, political commentator &amp; author
            </p>
            <p className="animate-fade-up delay-3 mt-6 max-w-xl leading-relaxed text-slate-400">
              For more than three decades, Dominic Carter has covered New York politics and world events on radio and
              television — today as a talk show host on WABC radio and daily political commentator for Verizon Fios
              news.
            </p>
            <div className="animate-fade-up delay-4 mt-9 flex flex-wrap gap-3">
              <a href="#about" className="btn-primary rounded-full px-7 py-3.5 text-sm font-semibold">
                Read his story
              </a>
              <Link href="/no-mommas-boy" className="btn-ghost rounded-full px-7 py-3.5 text-sm font-semibold">
                No Momma’s Boy →
              </Link>
            </div>
          </div>

          <div className="animate-fade-in delay-2 relative mx-auto w-full max-w-sm">
            <div className="animate-float">
              <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-gradient-to-br from-accent via-rose-600 to-accent-2 opacity-90 blur-[1px]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink-soft shadow-2xl ring-1 ring-white/10">
                <Image
                  src={IMAGES.headshot}
                  alt="Portrait of Dominic Carter"
                  fill
                  priority
                  sizes="(min-width: 768px) 384px, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5 pt-16">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">Now on</p>
                  <p className="font-serif text-lg font-bold">77 WABC · Verizon Fios</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="relative border-t border-white/10 bg-white/[0.02]">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.label} className={`animate-fade-up px-2 delay-${i + 2}`}>
                <dt className="text-gradient font-serif text-4xl font-bold sm:text-5xl">{s.value}</dt>
                <dd className="mt-1 text-sm text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Everything below the hero enters 3 seconds after page load */}
      <div className="animate-after-3s">
      {/* AS SEEN ON — MARQUEE */}
      <section className="marquee-wrap overflow-hidden border-b border-black/5 bg-white py-6">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[...SEEN_ON, ...SEEN_ON].map((s, i) => (
            <span key={i} aria-hidden={i >= SEEN_ON.length} className="flex items-center gap-12 pr-12 font-serif text-xl font-bold text-slate-400 transition hover:text-ink">
              {s}
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </section>

      {/* NOW */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div data-reveal="left">
          <SectionLabel>Right now</SectionLabel>
          <h2 className="font-serif text-3xl font-bold sm:text-5xl">Where to find Dominic</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {NOW.map((n) => {
            const card = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-accent-2/10 text-2xl">
                  {n.icon}
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-accent">{n.org}</p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-ink">{n.role}</h3>
                <p className="mt-3 leading-relaxed text-muted">{n.text}</p>
                {n.href && (
                  <p className="mt-5 text-sm font-semibold text-ink transition group-hover:translate-x-1 group-hover:text-accent">
                    Learn more →
                  </p>
                )}
              </>
            );
            const cls = "card group block rounded-3xl p-8";
            return n.href ? (
              <Link key={n.role} href={n.href} className={cls} data-reveal>
                {card}
              </Link>
            ) : (
              <div key={n.role} className={cls} data-reveal>
                {card}
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1fr_1.4fr]">
          <div data-reveal="left">
            <SectionLabel>About</SectionLabel>
            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-5xl">
              A New York voice, built on <span className="text-gradient">lived experience</span>
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600" data-reveal="right">
            <p>
              Dominic Carter has spent his career asking the questions that matter to New Yorkers — from City Hall to
              the campaign trail to conflict zones overseas. His reporting has taken him to Japan, Israel, Somalia and
              the Persian Gulf.
            </p>
            <p>
              Beyond the newsroom, he is a familiar face across national television, with appearances on Face the
              Nation, Hardball with Chris Matthews, CNN and Fox News — and even a role in Spike Lee’s film “Inside
              Man.”
            </p>
            <p>
              He lives in New York with his wife Marilyn. They have two children, Courtney — herself a broadcast news
              reporter — and Dominic Jr.
            </p>
          </div>
        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section id="career" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-24">
        <div data-reveal="left">
          <SectionLabel>Career</SectionLabel>
          <h2 className="font-serif text-3xl font-bold sm:text-5xl">Three decades on the story</h2>
        </div>
        <ol className="relative mt-14 pl-10">
          <span className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-gradient-to-b from-accent via-accent-2 to-gold" />
          {TIMELINE.map((t) => (
            <li key={t.title} className="relative pb-12 last:pb-0" data-reveal="left">
              <span className="absolute -left-10 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-paper ring-4 ring-accent/20">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t.period}</p>
              <h3 className="mt-1 font-serif text-xl font-bold text-ink sm:text-2xl">{t.title}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-slate-600">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* WORLD + HONORS */}
      <section className="bg-hero relative overflow-hidden text-white">
        <div className="grid-lines pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-2">
          <div data-reveal="left">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Reported from</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {WORLD.map((w) => (
                <span
                  key={w}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-accent hover:bg-accent/20"
                >
                  {w}
                </span>
              ))}
            </div>
            <Link href="/photos" className="mt-10 inline-block text-sm font-semibold text-slate-300 transition hover:translate-x-1 hover:text-white">
              See the photo gallery →
            </Link>
          </div>
          <div data-reveal="right">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Honors</h3>
            <ul className="mt-6 space-y-4 text-slate-200">
              {HONORS.map((h) => (
                <li key={h} className="flex gap-4 border-b border-white/10 pb-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-accent to-gold" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-5" data-reveal="left">
            <div className="group relative aspect-[3/4] -rotate-2 overflow-hidden rounded-2xl bg-white shadow-xl transition duration-500 hover:rotate-0 hover:scale-[1.03]">
              <Image src={IMAGES.book} alt="No Momma's Boy book" fill sizes="(min-width: 768px) 280px, 45vw" className="object-contain p-3" />
            </div>
            <div className="group relative mt-12 aspect-[3/4] rotate-2 overflow-hidden rounded-2xl bg-white shadow-xl transition duration-500 hover:rotate-0 hover:scale-[1.03]">
              <Image src={IMAGES.bobblehead} alt="Dominic Carter bobblehead" fill sizes="(min-width: 768px) 280px, 45vw" className="object-contain p-3" />
            </div>
          </div>
          <div data-reveal="right">
            <SectionLabel>The memoir · 2007</SectionLabel>
            <h2 className="font-serif text-4xl font-bold sm:text-6xl">No Momma’s Boy</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              In his 2007 memoir, Dominic Carter tells the deeply personal story of his relationship with his mother,
              and the road that led him to become one of New York’s best-known political journalists.
            </p>
            <Link href="/no-mommas-boy" className="btn-primary mt-9 inline-block rounded-full px-7 py-3.5 text-sm font-semibold">
              About the book →
            </Link>
          </div>
        </div>
      </section>

      {/* SPEAKING */}
      <section id="speaking" className="bg-accent-gradient scroll-mt-20 relative overflow-hidden text-white">
        <div className="grid-lines pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Speaking &amp; advocacy</p>
          <h2 className="mt-5 font-serif text-4xl font-bold sm:text-7xl">“Each One, Teach One.”</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/90">
            A committed advocate for young people, Dominic travels to speak at NAACP branches, NAMI chapters and social
            service agencies — sharing his own story to help others find their way.
          </p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="bg-hero relative overflow-hidden rounded-[2rem] p-10 text-white md:flex md:items-center md:justify-between md:p-14" data-reveal>
          <div className="animate-blob pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-serif text-3xl font-bold sm:text-5xl">
              Let’s <span className="text-gradient">talk</span>
            </h2>
            <p className="mt-3 max-w-lg text-slate-300">For speaking engagements, interviews and press inquiries.</p>
          </div>
          <div className="relative mt-8 flex flex-wrap gap-3 md:mt-0">
            <Link href="/contact" className="btn-primary rounded-full px-7 py-3.5 text-sm font-semibold">
              Contact
            </Link>
            <Link href="/press" className="btn-ghost rounded-full px-7 py-3.5 text-sm font-semibold">
              Press
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
