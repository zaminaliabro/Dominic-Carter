import Link from "next/link";
import { NAV, ORIGINAL } from "@/lib/site";
import { Logo } from "@/components/Logo";

export default function SiteFooter() {
  return (
    <footer className="bg-hero mt-auto text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link href="/" className="group inline-block" aria-label="Dominic Carter — home">
            <Logo />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Journalist, political commentator, talk show host and author of the memoir “No Momma’s Boy.”
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Pages</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="http://dominiccarter.net" className="hover:text-white">dominiccarter.net</a></li>
            <li><a href="http://dominiccarter.org" className="hover:text-white">dominiccarter.org</a></li>
            <li><a href={`${ORIGINAL}/feed/`} className="hover:text-white">RSS feed</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-white/50">© 2026 Dominic Carter. All rights reserved.</p>
      </div>
    </footer>
  );
}
