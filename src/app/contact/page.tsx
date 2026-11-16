import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { EMAIL } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact" };

const LINKS = [
  { label: "Political Commentator", url: "http://dominiccarter.net", host: "dominiccarter.net" },
  { label: "Public Speaker", url: "http://dominiccarter.org", host: "dominiccarter.org" },
  { label: "No Momma’s Boy", url: "http://www.nomommasboy.com/", host: "nomommasboy.com" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Contact Dominic Carter"
        intro="For speaking engagements, interviews, press and everything else — send a message or reach out directly."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div className="animate-fade-up delay-2 rounded-3xl bg-white p-8 shadow-xl shadow-ink/5 ring-1 ring-black/5 md:p-10">
          <h2 className="font-serif text-2xl font-bold">Send a message</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <aside className="animate-fade-up delay-3 space-y-6">
          <div className="bg-hero relative overflow-hidden rounded-3xl p-8 text-white">
            <div className="animate-blob pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-gold">Email</p>
            <a href={`mailto:${EMAIL}`} className="relative mt-3 block break-all font-serif text-xl font-bold transition hover:text-gold">
              {EMAIL}
            </a>
          </div>
          <div className="card rounded-3xl p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">More from Dominic</p>
            <ul className="mt-4 divide-y divide-black/5">
              {LINKS.map((l) => (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4"
                  >
                    <span>
                      <span className="block font-semibold group-hover:text-accent">{l.label}</span>
                      <span className="text-sm text-muted">{l.host}</span>
                    </span>
                    <span className="text-muted group-hover:text-accent">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
