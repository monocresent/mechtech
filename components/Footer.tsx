import Link from "next/link";

const catalogLinks = [
  { href: "/catalog?category=automation", label: "Automation & Control" },
  { href: "/catalog?category=prototyping", label: "Prototyping Essentials" },
  { href: "/catalog?category=cnc", label: "Kinematics & CNC" },
  { href: "/catalog?category=tooling", label: "Precision Tooling" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Engineering Blog" },
  { href: "/contact", label: "Contact & Support" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-black tracking-tighter text-white">
              MECH<span className="text-accent">TECHNOLOGY</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-white/50 leading-relaxed">
              Precision engineering components and technical solutions for South
              African engineers, makers, and developers. mechtechnology.co.za
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="rounded-md border border-white/10 px-4 py-2 text-xs text-white/50 transition hover:border-accent/50 hover:text-accent"
              >
                Developer Discord
              </a>
              <a
                href="#"
                className="rounded-md border border-white/10 px-4 py-2 text-xs text-white/50 transition hover:border-accent/50 hover:text-accent"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/30">
              Catalog
            </h3>
            <ul className="space-y-2.5">
              {catalogLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/30">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/30 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} MechTechnology (Pty) Ltd. All
            rights reserved.
          </p>
          <p>mechtechnology.co.za &mdash; South Africa</p>
        </div>
      </div>
    </footer>
  );
}
