"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";

export default function Header() {
  const [query, setQuery] = useState("");
  const { count, total, open } = useCart();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/catalog?q=${encodeURIComponent(query.trim())}`;
    }
  }

  return (
    <header className="bg-charcoal border-b border-white/10">
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-6 py-4 lg:gap-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="text-xl font-black tracking-tighter text-white">
            MECH
            <span className="text-accent">TECHNOLOGY</span>
          </span>
        </Link>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="flex flex-1 max-w-3xl"
        >
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Query across 2,425 mechanical parts, control boards, and hardware modules..."
            className="w-full rounded-l-md border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-accent focus:bg-white/15"
          />
          <button
            type="submit"
            className="shrink-0 rounded-r-md bg-accent px-5 py-2.5 text-sm font-bold text-white transition hover:bg-accent/90 active:scale-[0.98]"
          >
            SEARCH
          </button>
        </form>

        {/* Cart trigger */}
        <button
          onClick={open}
          className="ml-auto shrink-0 flex items-center gap-3 rounded-md border border-white/20 bg-white/5 px-4 py-2.5 transition hover:border-accent/60 hover:bg-white/10"
        >
          <span className="relative">
            <svg
              className="h-5 w-5 text-white/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white tabular">
                {count > 99 ? "99+" : count}
              </span>
            )}
          </span>
          <div className="hidden text-left sm:block">
            <p className="text-xs text-white/50">
              Active Manifest ({count})
            </p>
            <p className="text-sm font-bold text-white tabular">
              R{total.toFixed(2)}
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}
