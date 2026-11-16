"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/site";

// Abhi koi backend nahi hai: form submit karne par visitor ki email app khulti hai
// aur message pehle se bhara hota hai. Baad mein isay API route / Resend / Formspree se jod sakte hain.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "") || `Message from ${name}`;
    const message = String(data.get("message") ?? "");
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const input =
    "w-full rounded-xl border border-black/10 bg-paper px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Your name *</span>
          <input name="name" required className={input} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Your email *</span>
          <input name="email" type="email" required className={input} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Subject</span>
        <input name="subject" className={input} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Your message *</span>
        <textarea name="message" required rows={6} className={input} />
      </label>
      <button
        type="submit"
        className="btn-primary rounded-full px-8 py-3.5 text-sm font-semibold"
      >
        Send message
      </button>
      {sent && <p className="text-sm text-muted">Your email app should open with the message ready to send.</p>}
    </form>
  );
}
