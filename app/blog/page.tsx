import type { Metadata } from "next";
import Container from "@/components/Container";
import posts from "@/data/posts.json";

export const metadata: Metadata = {
  title: "Engineering Blog",
};

export default function Blog() {
  return (
    <Container size="md" className="py-20">
      <div className="mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Blog
        </span>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Engineering Blog
        </h1>
        <p className="mt-4 text-white/55">
          News, project updates, technical guides, and engineering insights from
          the MechTechnology team.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-white/10 bg-surface/30 p-8 transition hover:border-accent/30"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/40">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-ZA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-white/20">·</span>
              <span className="text-white/40">{post.author}</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-accent/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="mt-3 text-xl font-bold leading-snug">
              {post.title}
            </h2>
            <p className="mt-3 leading-relaxed text-white/60">{post.excerpt}</p>
            <p className="mt-5 text-sm text-white/30 italic">
              Full article coming soon.
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}
