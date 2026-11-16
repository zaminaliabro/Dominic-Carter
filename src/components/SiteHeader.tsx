"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/site";
import { Logo } from "@/components/Logo";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="group" aria-label="Dominic Carter — home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden gap-7 text-sm font-medium lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative py-1 transition ${
                isActive(n.href) ? "text-white" : "text-slate-400 hover:text-white"
              } group`}
            >
              {n.label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded bg-gradient-to-r from-accent to-accent-2 transition-transform duration-300 ${
                  isActive(n.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="rounded-md border border-white/20 px-3 py-1.5 text-sm lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="animate-fade-up border-t border-white/10 px-5 pb-4 [animation-duration:0.35s] lg:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-white/5 py-3 text-base ${
                isActive(n.href) ? "text-accent" : "text-white/85"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
