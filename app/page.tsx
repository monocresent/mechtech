import Link from "next/link";
import Container from "@/components/Container";
import products from "@/data/products.json";

const categories = [
  {
    label: "Automation & Control",
    sub: "Development boards, sensors, PLCs",
    href: "/catalog?category=automation",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    label: "Prototyping Essentials",
    sub: "Components, passives, breadboard kits",
    href: "/catalog?category=prototyping",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    label: "Kinematics & CNC",
    sub: "Stepper motors, rails, servo drives",
    href: "/catalog?category=cnc",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx={12} cy={12} r={3} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    label: "Precision Tooling",
    sub: "Measurement, calibration, hand tools",
    href: "/catalog?category=tooling",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    label: "Hardware Spec Sheets",
    sub: "Datasheets, compliance docs, CAD files",
    href: "/catalog?category=specs",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const featuredProducts = products.slice(0, 4);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="border-b border-white/10 bg-gradient-to-b from-charcoal/60 to-transparent">
        <Container size="xl" className="py-20">
          <div className="flex min-h-[55vh] flex-col items-start justify-center gap-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Now Live
            </span>
            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">
              Engineering ideas into{" "}
              <span className="text-accent">real-world solutions</span>.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/60">
              MechTechnology supplies precision engineering components, control
              boards, and industrial hardware — built for South African engineers,
              makers, and developers who build things that work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/catalog"
                className="rounded-md bg-accent px-7 py-3.5 font-bold text-white transition hover:bg-accent/90 active:scale-[0.98]"
              >
                Browse Catalog →
              </Link>
              <Link
                href="/portfolio"
                className="rounded-md border border-white/20 px-7 py-3.5 font-medium transition hover:border-accent/60 hover:text-accent"
              >
                View Our Work
              </Link>
            </div>
            <p className="text-xs text-white/30 tabular">
              2,425 components in stock · Nationwide delivery · Technical support
            </p>
          </div>
        </Container>
      </div>

      {/* Categories */}
      <Container size="xl" className="py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Browse by Category</h2>
            <p className="mt-1 text-sm text-white/50">
              From microcontrollers to precision fasteners.
            </p>
          </div>
          <Link
            href="/catalog"
            className="text-sm text-accent transition hover:text-accent/80"
          >
            All categories →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group flex flex-col gap-4 rounded-xl border border-white/10 bg-surface/40 p-6 transition hover:border-accent/40 hover:bg-surface/60"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent/20">
                {cat.icon}
              </span>
              <div>
                <h3 className="font-semibold leading-snug">{cat.label}</h3>
                <p className="mt-1 text-xs text-white/45 leading-relaxed">
                  {cat.sub}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>

      {/* Featured products */}
      <div className="border-y border-white/10 bg-surface/20">
        <Container size="xl" className="py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Featured Components
              </h2>
              <p className="mt-1 text-sm text-white/50">
                Immediate dispatch, verified quality.
              </p>
            </div>
            <Link
              href="/catalog"
              className="text-sm text-accent transition hover:text-accent/80"
            >
              View all 2,425 →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((p) => (
              <Link
                key={p.id}
                href={`/catalog?sku=${p.sku}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-surface/60 transition hover:border-accent/40"
              >
                {p.badge && (
                  <span className="inline-block self-start m-3 rounded bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent">
                    {p.badge}
                  </span>
                )}
                <div className="flex h-36 items-center justify-center bg-white/5 text-xs text-white/25 tracking-widest">
                  PART-CAD-VIEW
                </div>
                <div className="flex flex-1 flex-col gap-1 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent/70">
                    {p.category}
                  </span>
                  <h3 className="text-sm font-semibold leading-snug line-clamp-2">
                    {p.name}
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="font-bold text-accent tabular">
                      R{p.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-white/30">{p.sku}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Company section */}
      <Container size="xl" className="py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Design",
              desc: "From concept sketches to detailed CAD models — we bring complex mechanical ideas to life with precision.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              ),
            },
            {
              title: "Build",
              desc: "Prototyping, fabrication, and hands-on engineering — turning designs into tested, working products.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
                />
              ),
            },
            {
              title: "Deliver",
              desc: "Reliable execution from kickoff to final delivery — on time, on spec, no surprises.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-surface/30 p-8 transition hover:border-accent/30"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </span>
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* CTA */}
      <div className="border-t border-white/10 bg-charcoal/40">
        <Container size="xl" className="py-16 text-center">
          <h2 className="text-3xl font-black tracking-tight">
            Ready to start your project?
          </h2>
          <p className="mt-3 text-white/55">
            Talk to our engineering team about your requirements.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-accent px-8 py-3.5 font-bold text-white transition hover:bg-accent/90"
            >
              Get in Touch
            </Link>
            <Link
              href="/catalog"
              className="rounded-md border border-white/20 px-8 py-3.5 font-medium transition hover:border-accent/60 hover:text-accent"
            >
              Browse Components
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
