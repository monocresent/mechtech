import projects from "@/data/projects.json";

export default function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-2 text-4xl font-bold tracking-tight">Portfolio</h1>
      <p className="mb-12 text-foreground/70">
        A selection of work. Replace these placeholders with real projects,
        images, and write-ups as they become available.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden rounded-lg border border-white/10"
          >
            <div className="flex h-40 items-center justify-center bg-white/5 text-foreground/40">
              Image placeholder
            </div>
            <div className="p-5">
              <span className="text-xs font-medium uppercase tracking-wide text-accent">
                {project.category}
              </span>
              <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">
                {project.description}
              </p>
              <div className="mt-4 flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-foreground/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
