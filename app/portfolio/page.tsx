import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import projects from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Portfolio() {
  return (
    <Container size="xl" className="py-20">
      <div className="mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Work
        </span>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Portfolio
        </h1>
        <p className="mt-4 max-w-xl text-white/55">
          A selection of engineering and digital projects. Real details,
          outcomes, and client results will be added as the body of work grows.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-surface/40 transition hover:border-accent/40"
          >
            <div className="flex h-48 items-center justify-center bg-white/5 text-xs tracking-widest text-white/20 transition group-hover:bg-white/[0.08]">
              PART-CAD-VIEW
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                {project.category}
              </span>
              <h3 className="mt-2 text-lg font-bold leading-snug">
                {project.title}
              </h3>
              {project.client && (
                <p className="mt-1 text-xs text-white/40">
                  Client: {project.client}
                </p>
              )}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-5 text-xs font-medium text-accent opacity-0 transition group-hover:opacity-100">
                View project →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-white/10 bg-surface/20 p-10 text-center">
        <h2 className="text-xl font-bold">Have a project in mind?</h2>
        <p className="mt-2 text-white/55">
          We're always interested in interesting engineering challenges.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-accent px-6 py-3 font-bold text-white transition hover:bg-accent/90"
        >
          Start a conversation
        </Link>
      </div>
    </Container>
  );
}
