export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="mb-2 text-4xl font-bold tracking-tight">Get in Touch</h1>
      <p className="mb-10 text-foreground/70">
        Have a project in mind, or just want to say hello? Fill out the form
        below and we&apos;ll get back to you.
      </p>

      {/*
        This form posts to Formspree as a quick no-backend solution.
        Replace YOUR_FORM_ID with a real Formspree form ID (https://formspree.io),
        or swap this action for your own API route later.
      */}
      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="flex flex-col gap-4"
      >
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 outline-none focus:border-accent"
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent/80 sm:w-auto"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
