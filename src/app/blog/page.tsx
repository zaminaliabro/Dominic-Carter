import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui";
import { ORIGINAL } from "@/lib/site";

export const metadata: Metadata = { title: "Blog" };

type Post = { title: string; date: string; slug: string; summary: string; tag: string; image?: string };

const POSTS: Post[] = [
  {
    title: "Meeting Listeners: Dominic Carter Visits Astoria Queens",
    date: "June 27, 2026",
    slug: "meeting-listeners-dominic-carter-visits-astoria-queens",
    tag: "Community",
    summary: "Meeting people in the community is the most meaningful part of the job — a visit with listeners in Astoria, Queens.",
  },
  {
    title: "Dominic Carter Keynote Speaker | Foster Care & Advocacy",
    date: "April 30, 2026",
    slug: "dominic-carter-keynote-speaker-foster-care-advocacy",
    tag: "Speaking",
    summary: "The 77 WABC Radio host speaks nationally on foster care, resilience and child advocacy.",
    image: "/images/blog/keynote-parade.jpg",
  },
  {
    title: "Hassan Piker’s Praise of China",
    date: "November 15, 2025",
    slug: "hassan-pikers-praise-of-china",
    tag: "Commentary",
    summary: "On the influencer who appeared at Zohran Mamdani’s victory speech and was later seen overseas.",
  },
  {
    title: "Dominic Carter’s Journey: Child Abuse Survivor to Advocate",
    date: "September 27, 2025",
    slug: "dominic-carters-journey-child-abuse-survivor-to-advocate",
    tag: "Advocacy",
    summary: "A profile of his child-abuse and mental-health advocacy, and the story behind his book.",
  },
  {
    title: "Dominic Carter’s Claim: Kimmel’s Career Is Dead Man Walking",
    date: "September 24, 2025",
    slug: "dominic-carters-claim-kimmels-career-is-dead-man-walking",
    tag: "Media",
    summary: "On The Dominic Carter Show, he argues Jimmy Kimmel’s career is in crisis.",
  },
  {
    title: "Jimmy Kimmel, Defiance, and the Death of Comedy",
    date: "September 24, 2025",
    slug: "jimmy-kimmel-defiance-and-the-death-of-comedy",
    tag: "Media",
    summary: "Why Kimmel’s return performance read as defiant rather than apologetic.",
  },
  {
    title: "Dominic Carter: Child Sexual Abuse Prevention & Healing",
    date: "September 22, 2025",
    slug: "dominic-carter-child-sexual-abuse-prevention",
    tag: "Advocacy",
    summary: "His mission on child sexual abuse prevention, from the host of The Dominic Carter Show on 77 WABC.",
  },
  {
    title: "Dominic Carter Calls Out Jimmy Kimmel’s Return to ABC",
    date: "September 22, 2025",
    slug: "dominic-carter-calls-out-jimmy-kimmel",
    tag: "Media",
    summary: "On ABC’s announcement of Kimmel’s return, and the backlash that followed.",
  },
  {
    title: "Dominic Carter: National Voice for Child Abuse Awareness",
    date: "September 19, 2025",
    slug: "dominic-carter-national-voice-for-child-abuse-awareness",
    tag: "Advocacy",
    summary: "A profile of his work as a national keynote speaker on child abuse.",
  },
  {
    title: "Dominic Carter: Confronting Division After Charlie Kirk",
    date: "September 18, 2025",
    slug: "dominic-carter-confronting-division-after-charlie-kirk",
    tag: "Commentary",
    summary: "A reaction to the assassination of Charlie Kirk, and a call for national unity.",
  },
];

const postUrl = (slug: string) => `${ORIGINAL}/${slug}/`;

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHero
        label="Blog"
        title="Dominic Carter’s Blog"
        intro="Commentary on politics, media and community — plus his work as an advocate for children."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        {/* Featured */}
        <a
          href={postUrl(featured.slug)}
          data-reveal
          className="card group grid overflow-hidden rounded-3xl md:grid-cols-2"
        >
          <div className="relative flex min-h-64 items-end overflow-hidden bg-ink p-8">
            {featured.image ? (
              <Image src={featured.image} alt="" fill sizes="(min-width: 768px) 576px, 100vw" className="object-cover opacity-90" />
            ) : (
              <>
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
                <p className="relative font-serif text-5xl font-bold text-white/90">{featured.tag}</p>
              </>
            )}
          </div>
          <div className="p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Latest · {featured.date}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold group-hover:text-accent">{featured.title}</h2>
            <p className="mt-4 leading-relaxed text-muted">{featured.summary}</p>
            <p className="mt-6 text-sm font-semibold">Read post →</p>
          </div>
        </a>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <a
              key={p.slug}
              href={postUrl(p.slug)}
              data-reveal
              className="card group flex flex-col overflow-hidden rounded-2xl p-6"
            >
              {p.image && (
                <div className="relative -mx-6 -mt-6 mb-6 aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 368px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">{p.tag}</span>
                <span className="text-muted">{p.date}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold leading-snug group-hover:text-accent">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
              <p className="mt-5 text-sm font-semibold">Read post →</p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`${ORIGINAL}/dominic-carter/page/2/`}
            className="inline-block rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold transition hover:bg-ink hover:text-white"
          >
            Older posts
          </a>
        </div>
      </section>
    </>
  );
}
