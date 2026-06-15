# Claude Code Prompt — MechTechnologie Website Build-Out

Paste this whole prompt into Claude Code, run from inside the `mechtech`
project folder.

---

I'm building "MechTechnologie" — a company website that starts as a simple
static "proof of life" site (homepage, portfolio, about, contact) but is
architected so it can grow into a full e-commerce store later (Takealot/Amazon-style
product catalog, cart, and checkout). The project is already scaffolded as a
Next.js 14 (App Router) + TypeScript + Tailwind CSS app, with placeholder
pages at `/`, `/about`, `/portfolio`, and `/contact`, plus shared `Header`
and `Footer` components and a `data/projects.json` file for portfolio items.

Please work through the following, in order, and check in with me before any
step that changes the project structure significantly:

### Phase 1 — Polish the "proof of life" site

1. Review the existing pages (`app/page.tsx`, `app/about/page.tsx`,
   `app/portfolio/page.tsx`, `app/contact/page.tsx`) and components
   (`components/Header.tsx`, `components/Footer.tsx`).
2. Improve the visual design: better spacing, typography hierarchy, subtle
   animations/transitions, and a consistent color palette (currently a dark
   theme with a blue accent — feel free to refine this, but keep it
   professional/technical in feel, suitable for an engineering company).
3. Make the site fully responsive — check mobile, tablet, and desktop layouts.
4. Add a simple mobile navigation menu (hamburger) to the Header for small
   screens.
5. Add a favicon and basic Open Graph / meta tags for social sharing (in
   `app/layout.tsx`).
6. Add a 404 page (`app/not-found.tsx`).
7. Run `npm run dev` and confirm everything renders without errors or console
   warnings.

### Phase 2 — Content structure for growth

8. Expand `data/projects.json` into a more complete schema if needed (e.g.
   add `slug`, `date`, `client`, `images: []`) and create a dynamic route
   `app/portfolio/[slug]/page.tsx` so each project has its own detail page.
9. Add a simple blog/news section scaffold (`app/blog/page.tsx` and a
   `data/posts.json` or MDX-based setup) — doesn't need real content yet,
   just the structure, so it's easy to add posts later.
10. Add a reusable `Section` or `Container` component to keep page layouts
    consistent as more pages get added.

### Phase 3 — E-commerce readiness (do NOT implement yet — just plan)

11. Without writing the implementation, give me a short written plan (as a
    markdown file `docs/ecommerce-plan.md`) covering:
    - Recommended approach for adding a product catalog + cart + checkout to
      this Next.js app (e.g. Shopify Storefront API vs. Medusa.js + Stripe
      vs. Snipcart)
    - What would need to change in the current folder structure to
      accommodate this
    - Rough complexity/cost tradeoffs of each option for a small business

### General guidelines

- Keep all code in TypeScript, use Tailwind for styling, follow the existing
  file/folder conventions (App Router, `components/`, `data/`).
- Don't add new dependencies beyond what's needed for the above — ask me
  first if something significant (like a CMS or e-commerce SDK) seems
  necessary.
- After each phase, summarize what changed and how to view/test it.
- Keep commits small and write clear commit messages if you're using git.

Start with Phase 1, step by step, and pause for my feedback after step 7
before moving to Phase 2.
