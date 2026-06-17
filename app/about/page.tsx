import type { Metadata } from "next";
import Container from "@/components/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  {
    title: "Practical first",
    desc: "We build things that work in the real world, not just on paper. Every solution is tested and validated before it ships.",
  },
  {
    title: "Quality craftsmanship",
    desc: "Every detail matters. We take pride in clean design, solid fabrication, and reliable long-term performance.",
  },
  {
    title: "Honest communication",
    desc: "Clear timelines, transparent pricing, and no surprises. We tell you what we can deliver and we deliver it.",
  },
];

const services = [
  "Mechanical design & CAD modelling (SolidWorks, Fusion 360)",
  "Prototyping & precision fabrication",
  "Embedded systems and control board design",
  "Custom digital tools and technical websites",
  "Engineering consulting and project management",
  "Component sourcing and procurement (mechtechnology.co.za)",
];

export default function About() {
  return (
    <Container size="md" className="py-20">
      {/* Header */}
      <div className="mb-12 border-b border-white/10 pb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Company
        </span>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          About MechTechnology
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-white/60">
          MechTechnology is an engineering and technology venture focused on
          delivering practical, well-built solutions — from mechanical design
          and prototyping to industrial component supply and custom digital
          products.
        </p>
        <p className="mt-4 leading-relaxed text-white/55">
          We're building for South African engineers, makers, and developers
          who need reliable components, honest expertise, and a team that
          understands the constraints of local manufacturing and supply chains.
        </p>
      </div>

      {/* Services */}
      <div className="mb-14">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          What we do
        </h2>
        <ul className="space-y-3">
          {services.map((item) => (
            <li key={item} className="flex items-start gap-3 text-white/65">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Values */}
      <div className="mb-14">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Our values</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-white/10 bg-surface/30 p-6 transition hover:border-accent/30"
            >
              <span className="mb-2 block h-1 w-8 rounded-full bg-accent" />
              <h3 className="mb-2 font-bold">{v.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-14 rounded-xl border border-white/10 bg-surface/20 p-8">
        <h2 className="mb-3 text-xl font-bold">The team</h2>
        <p className="text-white/55 leading-relaxed">
          Founder bios, team profiles, and credentials are coming soon. We'll
          share the people behind the work — backgrounds, qualifications, and
          what drives us to build the things we build.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="rounded-md bg-accent px-6 py-3 font-bold text-white transition hover:bg-accent/90"
        >
          Get in Touch
        </Link>
        <Link
          href="/portfolio"
          className="rounded-md border border-white/20 px-6 py-3 font-medium transition hover:border-accent/60 hover:text-accent"
        >
          View Our Work
        </Link>
      </div>
    </Container>
  );
}
