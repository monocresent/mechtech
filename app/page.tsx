import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="flex min-h-[70vh] flex-col items-start justify-center gap-6 py-20">
        <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
          Now live
        </span>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Engineering ideas into{" "}
          <span className="text-accent">real-world solutions</span>.
        </h1>
        <p className="max-w-2xl text-lg text-foreground/70">
          MechTechnologie designs, builds, and ships practical engineering and
          digital projects. This site is just getting started — explore our
          portfolio, learn about what we do, and get in touch.
        </p>
        <div className="flex gap-4">
          <Link
            href="/portfolio"
            className="rounded-md bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent/80"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-white/20 px-6 py-3 font-medium transition hover:border-accent hover:text-accent"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="grid gap-8 border-t border-white/10 py-16 sm:grid-cols-3">
        {[
          {
            title: "Design",
            desc: "From concept sketches to detailed CAD models, we bring mechanical ideas to life.",
          },
          {
            title: "Build",
            desc: "Prototyping, fabrication, and hands-on engineering to turn designs into working products.",
          },
          {
            title: "Deliver",
            desc: "Reliable execution from project kickoff to final delivery, on time and on spec.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-lg border border-white/10 p-6">
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <p className="text-foreground/70">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
