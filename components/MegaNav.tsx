"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const categories = [
  {
    label: "Automation & Control",
    href: "/catalog?category=automation",
    sub: ["Development Boards", "Sensors & Input"],
  },
  {
    label: "Prototyping Essentials",
    href: "/catalog?category=prototyping",
    sub: [],
    active: true,
  },
  {
    label: "Kinematics & CNC",
    href: "/catalog?category=cnc",
    sub: [],
  },
  {
    label: "Precision Tooling",
    href: "/catalog?category=tooling",
    sub: [],
  },
  {
    label: "Hardware Spec Sheets",
    href: "/catalog?category=specs",
    sub: [],
  },
];

const companyLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MegaNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#161b26] border-b border-white/10">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6">
        {/* Desktop — product categories */}
        <ul className="hidden md:flex">
          {categories.map((cat) => (
            <li key={cat.label} className="relative group">
              <Link
                href={cat.href}
                className={`flex items-center gap-1 px-4 py-3 text-sm font-medium transition hover:text-accent hover:bg-white/5 ${
                  pathname?.startsWith("/catalog")
                    ? "text-white/70"
                    : "text-white/70"
                } ${cat.active ? "text-accent border-b-2 border-accent" : ""}`}
              >
                {cat.label}
                {cat.sub.length > 0 && (
                  <svg
                    className="h-3.5 w-3.5 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
              {cat.sub.length > 0 && (
                <div className="absolute left-0 top-full z-50 hidden min-w-52 rounded-b-lg border border-white/10 bg-charcoal shadow-xl group-hover:block">
                  {cat.sub.map((sub) => (
                    <Link
                      key={sub}
                      href={`${cat.href}&sub=${encodeURIComponent(sub)}`}
                      className="block px-4 py-2.5 text-sm text-white/60 transition hover:bg-white/5 hover:text-accent"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop — company links */}
        <ul className="hidden md:flex gap-1 text-sm">
          {companyLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-3 py-3 transition hover:text-accent ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-white/45"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex md:hidden flex-col gap-1.5 py-4"
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-0.5 w-6 bg-white/70 transition-all duration-200 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white/70 transition-all duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white/70 transition-all duration-200 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-charcoal md:hidden">
          <div className="px-6 py-4 space-y-1">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white/30">
              Product Categories
            </p>
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded px-2 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-accent"
              >
                {cat.label}
              </Link>
            ))}
            <div className="my-3 border-t border-white/10" />
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white/30">
              Company
            </p>
            {companyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded px-2 py-2.5 text-sm text-white/50 transition hover:bg-white/5 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
