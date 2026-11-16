import { useId } from "react";

// "DC" monogram + broadcast waves (radio / TV) in the site's rose → orange gradient.
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Dominic Carter logo">
      <defs>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f43f5e" />
          <stop offset="0.55" stopColor="#e11d48" />
          <stop offset="1" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id={`s${id}`} x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="0.25" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill={`url(#g${id})`} />
      <rect width="48" height="48" rx="13" fill={`url(#s${id})`} />
      {/* broadcast waves */}
      <g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2.4">
        <path d="M35.5 8a4.5 4.5 0 0 1 4.5 4.5" opacity="0.95" />
        <path d="M35.5 3.5a9 9 0 0 1 9 9" opacity="0.55" />
      </g>
      <circle cx="35.5" cy="12.5" r="1.9" fill="#f5b942" />
      {/* monogram */}
      <text
        x="6"
        y="38"
        fill="#fff"
        fontFamily="var(--font-playfair), Georgia, 'Times New Roman', serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="-1"
      >
        DC
      </text>
      {/* underline accent */}
      <rect x="7" y="40" width="16" height="2.2" rx="1.1" fill="#f5b942" />
    </svg>
  );
}

export function Logo({ tagline = true }: { tagline?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="h-10 w-10 shrink-0 drop-shadow-[0_6px_16px_rgba(225,29,72,0.45)] transition duration-500 group-hover:-rotate-6 group-hover:scale-105" />
      <span className="leading-none">
        <span className="block font-serif text-xl font-bold tracking-tight text-white">
          Dominic <span className="text-gradient">Carter</span>
        </span>
        {tagline && (
          <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-slate-400">
            Journalist · New York
          </span>
        )}
      </span>
    </span>
  );
}
