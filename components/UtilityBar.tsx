import Link from "next/link";

const links = [
  { href: "/about", label: "About MechTech" },
  { href: "/contact", label: "Technical Support" },
  { href: "/contact", label: "Warranty & Returns" },
  { href: "/contact", label: "Logistics/Delivery" },
  { href: "/blog", label: "Engineering Blog" },
];

export default function UtilityBar() {
  return (
    <div className="bg-charcoal text-white/60 text-xs">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2">
        <ul className="flex gap-5">
          {links.map((link) => (
            <li key={link.label} className="hidden lg:block">
              <Link
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="rounded border border-accent/50 bg-accent/10 px-3 py-1 text-accent transition hover:bg-accent/20"
            >
              Developer Discord
            </a>
          </li>
        </ul>
        <div className="hidden items-center gap-4 sm:flex">
          <span className="flex items-center gap-1.5">
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Saved Components (0)
          </span>
          <span className="text-white/20">|</span>
          <button className="transition hover:text-white">
            Developer Sign In / Account Setup ▾
          </button>
        </div>
      </div>
    </div>
  );
}
