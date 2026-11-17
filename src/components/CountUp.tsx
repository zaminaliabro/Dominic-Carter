"use client";

import { useEffect, useRef } from "react";

// Number ko 0 se asal value tak ginti karte hue dikhata hai.
// Ginti tab shuru hoti hai jab number scroll ho kar screen par nazar aaye (scroll-triggered).
// "30+" -> 0..30 phir "+",  "NY1" -> "NY0".."NY1".
// Server par asal value hi render hoti hai, is liye JavaScript na ho to bhi sahi number nazar aata hai.
export default function CountUp({
  value,
  duration = 8000,
  delay = 0,
}: {
  value: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^(\D*)(\d+)(.*)$/);
    if (!el || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    let frame = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    // Screen par aane tak 0 dikhao
    el.textContent = `${prefix}0${suffix}`;

    const run = () => {
      let start = 0;
      const tick = (now: number) => {
        if (!start) start = now;
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out: shuru mein tez, aakhir mein dheema
        el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect(); // sirf ek dafa chalao
        timer = setTimeout(run, delay);
      },
      { threshold: 0.6 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value, duration, delay]);

  return <span ref={ref}>{value}</span>;
}
