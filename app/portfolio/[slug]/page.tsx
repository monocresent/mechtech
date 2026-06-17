import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import projects from "@/data/projects.json";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: project.title };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <Container size="md" className="py-20">
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-accent"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Portfolio
      </Link>

      <div className="mt-8">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          {project.category}
        </span>
        <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/45">
          {project.client && <span>Client: {project.client}</span>}
          {project.date && (
            <span>
              Completed:{" "}
              {new Date(project.date + "-01").toLocaleDateString("en-ZA", {
                month: "long",
                year: "numeric",
              })}
            </span>
          )}
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-surface/30">
        <div className="flex h-64 items-center justify-center text-xs tracking-widest text-white/20">
          PART-CAD-VIEW
        </div>
      </div>

      <div className="mt-8">
        <p className="text-lg leading-relaxed text-white/65">
          {project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-surface/30 px-4 py-1.5 text-sm text-white/55"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-14 rounded-xl border border-white/10 bg-surface/20 p-8 text-center">
        <h2 className="text-lg font-bold">Interested in a similar project?</h2>
        <p className="mt-2 text-sm text-white/55">
          Get in touch and let&apos;s talk about what you need to build.
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
