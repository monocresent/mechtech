import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <Container size="sm" className="py-20">
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Get in Touch
        </span>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-white/55">
          Have a project in mind, a technical question, or just want to say
          hello? Fill in the form and we&apos;ll get back to you within one
          business day.
        </p>
      </div>

      {/*
        Replace YOUR_FORM_ID with a real Formspree ID (formspree.io)
        or swap the action for your own API route later.
      */}
      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="flex flex-col gap-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-white/70"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-white/15 bg-surface/40 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-accent focus:bg-surface/60"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-white/70"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-white/15 bg-surface/40 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-accent focus:bg-surface/60"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-1.5 block text-sm font-medium text-white/70"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full rounded-lg border border-white/15 bg-surface/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent focus:bg-surface/60 appearance-none"
          >
            <option value="">Select a topic…</option>
            <option>Engineering project inquiry</option>
            <option>Component sourcing & procurement</option>
            <option>Technical support</option>
            <option>Warranty & returns</option>
            <option>General question</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-white/70"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Describe your project, question, or requirement…"
            className="w-full rounded-lg border border-white/15 bg-surface/40 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-accent focus:bg-surface/60 resize-none"
          />
        </div>

        <button
          type="submit"
          className="self-start rounded-lg bg-accent px-8 py-3.5 font-bold text-white transition hover:bg-accent/90 active:scale-[0.98]"
        >
          Send Message →
        </button>
      </form>

      <div className="mt-12 grid gap-4 border-t border-white/10 pt-12 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-surface/20 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            Email
          </p>
          <p className="mt-1 text-sm text-white/60">
            info@mechtechnology.co.za
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-surface/20 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            Response Time
          </p>
          <p className="mt-1 text-sm text-white/60">Within 1 business day</p>
        </div>
      </div>
    </Container>
  );
}
