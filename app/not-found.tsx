import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container
      size="md"
      className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center"
    >
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
        404
      </span>
      <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-white/55">
        The page or component you&apos;re looking for doesn&apos;t exist or has
        been moved. Check the URL or return to the catalog.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-md bg-accent px-6 py-3 font-bold text-white transition hover:bg-accent/90"
        >
          Back to Home
        </Link>
        <Link
          href="/catalog"
          className="rounded-md border border-white/20 px-6 py-3 font-medium transition hover:border-accent/60 hover:text-accent"
        >
          Browse Catalog
        </Link>
      </div>
    </Container>
  );
}
