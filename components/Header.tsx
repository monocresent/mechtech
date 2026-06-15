import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Mech<span className="text-accent">Technologie</span>
        </Link>
        <ul className="flex gap-6 text-sm font-medium text-foreground/80">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-accent">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
