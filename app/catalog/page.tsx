"use client";
import { useState, useMemo } from "react";
import Container from "@/components/Container";
import { useCart } from "@/components/CartContext";
import allProducts from "@/data/products.json";

type StockFilter = "all" | "in-stock" | "lead-time";
type SortKey = "default" | "price-asc" | "price-desc" | "name-asc";

const CATEGORIES = [
  "Microcontrollers & Logic",
  "Signal Modulation Modules",
  "Thermal Regulation Units",
  "Precision Fasteners & Interconnects",
];

const MANUFACTURERS = [
  "Texas Instruments",
  "STMicroelectronics",
  "Nordic Semiconductor",
  "Microchip Technology",
  "NXP Semiconductors",
  "Infineon Technologies",
  "ON Semiconductor",
  "Vishay Intertechnology",
];

const badgeColors: Record<string, string> = {
  Popular: "bg-accent/15 text-accent",
  New: "bg-blue-500/15 text-blue-400",
  "Best Seller": "bg-emerald-500/15 text-emerald-400",
};

function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-0 py-3.5 text-sm font-semibold text-white/80 transition hover:text-white"
      >
        <span>{title}</span>
        <svg
          className={`h-4 w-4 text-white/40 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
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
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
}

function ProductCard({
  product,
}: {
  product: (typeof allProducts)[number];
}) {
  const { add } = useCart();
  const [staged, setStaged] = useState(false);

  function handleStage() {
    add({ id: product.id, name: product.name, price: product.price });
    setStaged(true);
    setTimeout(() => setStaged(false), 1500);
  }

  return (
    <article className="relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-surface/50 transition hover:border-accent/35">
      {product.badge && (
        <span
          className={`absolute left-3 top-3 z-10 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
            badgeColors[product.badge] ?? "bg-white/10 text-white/60"
          }`}
        >
          {product.badge}
        </span>
      )}

      <div className="flex h-36 items-center justify-center bg-white/5 text-[10px] tracking-widest text-white/20">
        PART-CAD-VIEW
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-accent/70">
          {product.category}
        </span>
        <h3 className="mt-1.5 text-sm font-semibold leading-snug line-clamp-3 text-white/90">
          {product.name}
        </h3>
        <p className="mt-1 font-mono text-[10px] text-white/30">{product.sku}</p>

        <div className="mt-2 flex items-center gap-1.5">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              product.stock === "in-stock"
                ? "bg-emerald-400"
                : "bg-yellow-400"
            }`}
          />
          <span className="text-[10px] text-white/40">
            {product.stock === "in-stock"
              ? "Immediate Dispatch"
              : "Lead-Time Fulfilment"}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-black text-accent tabular">
            R{product.price.toFixed(2)}
          </span>
          <button
            onClick={handleStage}
            className={`rounded-md px-3 py-1.5 text-xs font-bold transition active:scale-95 ${
              staged
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-accent text-white hover:bg-accent/90"
            }`}
          >
            {staged ? "✓ Staged" : "Stage Item"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function CatalogPage() {
  const [stockFilter, setStockFilter] = useState<StockFilter>("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [appliedMin, setAppliedMin] = useState<number | null>(null);
  const [appliedMax, setAppliedMax] = useState<number | null>(null);
  const [selectedMfrs, setSelectedMfrs] = useState<Set<string>>(new Set());
  const [sortKey, setSortKey] = useState<SortKey>("default");
  const [activeParams, setActiveParams] = useState<string[]>([]);

  function applyPriceFilter() {
    const min = minPrice !== "" ? parseFloat(minPrice) : null;
    const max = maxPrice !== "" ? parseFloat(maxPrice) : null;
    setAppliedMin(min);
    setAppliedMax(max);

    const params: string[] = [];
    if (min !== null) params.push(`Min: R${min.toFixed(2)}`);
    if (max !== null) params.push(`Max: R${max.toFixed(2)}`);
    setActiveParams(params);
  }

  function resetAll() {
    setStockFilter("all");
    setMinPrice("");
    setMaxPrice("");
    setAppliedMin(null);
    setAppliedMax(null);
    setSelectedMfrs(new Set());
    setSortKey("default");
    setActiveParams([]);
  }

  function toggleMfr(mfr: string) {
    setSelectedMfrs((prev) => {
      const next = new Set(prev);
      if (next.has(mfr)) next.delete(mfr);
      else next.add(mfr);
      return next;
    });
  }

  const displayed = useMemo(() => {
    let list = [...allProducts];

    if (stockFilter !== "all") {
      list = list.filter((p) => p.stock === stockFilter);
    }

    if (appliedMin !== null) {
      list = list.filter((p) => p.price >= appliedMin);
    }
    if (appliedMax !== null) {
      list = list.filter((p) => p.price <= appliedMax);
    }

    switch (sortKey) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return list;
  }, [stockFilter, appliedMin, appliedMax, sortKey]);

  return (
    <Container size="xl" className="py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-xs text-white/40">
        <span>Inventory</span>
        <span>/</span>
        <span>Prototyping Essentials</span>
        <span>/</span>
        <span className="text-accent">Microcontrollers &amp; Logic</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-catalog">
        {/* ── Filter sidebar ── */}
        <aside className="space-y-0 rounded-xl border border-white/10 bg-surface/30 p-5 self-start">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-black uppercase tracking-widest text-white/70">
              System Parameters
            </h2>
            <button
              onClick={resetAll}
              className="rounded border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/40 transition hover:border-accent/40 hover:text-accent"
            >
              Reset Variables
            </button>
          </div>

          {/* Active params */}
          {activeParams.length > 0 && (
            <div className="mb-4 rounded-lg border border-accent/20 bg-accent/5 p-3">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-accent">
                Active Parameters
              </p>
              <ul className="space-y-1">
                {activeParams.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-xs text-white/60"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Inventory state */}
          <AccordionSection title="Inventory State" defaultOpen>
            <div className="space-y-2.5">
              {(
                [
                  { value: "all", label: "All Inventory" },
                  { value: "in-stock", label: "Immediate Dispatch (Local)" },
                  { value: "lead-time", label: "Lead-Time Fulfilment" },
                ] as { value: StockFilter; label: string }[]
              ).map((opt) => (
                <label
                  key={opt.value}
                  className="flex cursor-pointer items-center gap-2.5 text-sm text-white/60 transition hover:text-white"
                >
                  <input
                    type="radio"
                    name="stock"
                    value={opt.value}
                    checked={stockFilter === opt.value}
                    onChange={() => setStockFilter(opt.value)}
                    className="accent-accent"
                  />
                  {opt.label}
                </label>
              ))}
              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-white/30 line-through">
                <input type="radio" disabled className="accent-accent" />
                Backordered
              </label>
            </div>
          </AccordionSection>

          {/* Price range */}
          <AccordionSection title="Monetary Constraints" defaultOpen>
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="mb-1 block text-[10px] text-white/40">
                    Min Value (R)
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full rounded border border-white/15 bg-background px-3 py-2 text-sm text-white placeholder:text-white/25 outline-none focus:border-accent tabular"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-[10px] text-white/40">
                    Max Value (R)
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="999.00"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full rounded border border-white/15 bg-background px-3 py-2 text-sm text-white placeholder:text-white/25 outline-none focus:border-accent tabular"
                  />
                </div>
              </div>
              <button
                onClick={applyPriceFilter}
                className="w-full rounded bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent transition hover:bg-accent/20"
              >
                Apply Filter
              </button>
            </div>
          </AccordionSection>

          {/* Niche tree */}
          <AccordionSection title="Hierarchical Niche Tree">
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <label className="flex cursor-pointer items-center gap-2.5 text-sm text-white/60 transition hover:text-white">
                    <input type="checkbox" className="accent-accent" />
                    {cat}
                  </label>
                </li>
              ))}
            </ul>
          </AccordionSection>

          {/* Manufacturer */}
          <AccordionSection title="Manufacturer Matrix">
            <ul className="space-y-2">
              {MANUFACTURERS.map((mfr) => (
                <li key={mfr}>
                  <label className="flex cursor-pointer items-center gap-2.5 text-sm text-white/60 transition hover:text-white">
                    <input
                      type="checkbox"
                      checked={selectedMfrs.has(mfr)}
                      onChange={() => toggleMfr(mfr)}
                      className="accent-accent"
                    />
                    {mfr}
                  </label>
                </li>
              ))}
            </ul>
          </AccordionSection>
        </aside>

        {/* ── Product engine ── */}
        <section>
          {/* Feed meta bar */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-surface/20 px-5 py-3.5">
            <p className="text-sm text-white/55">
              Displaying{" "}
              <span className="font-bold text-white">
                1–{displayed.length}
              </span>{" "}
              of{" "}
              <span className="font-bold text-accent tabular">2,425</span>{" "}
              components
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/40">Sort:</span>
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value as SortKey)}
                className="rounded border border-white/15 bg-surface/40 px-3 py-1.5 text-sm text-white outline-none focus:border-accent"
              >
                <option value="default">Default Index</option>
                <option value="price-asc">Value: Ascending</option>
                <option value="price-desc">Value: Descending</option>
                <option value="name-asc">Recently Catalogued</option>
              </select>
            </div>
          </div>

          {/* Product grid */}
          <div className="product-grid">
            {displayed.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {displayed.length === 0 && (
            <div className="flex h-64 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 text-center">
              <p className="font-bold text-white/50">No components match your filters.</p>
              <button
                onClick={resetAll}
                className="text-sm text-accent hover:underline"
              >
                Reset all parameters
              </button>
            </div>
          )}

          {/* Pagination placeholder */}
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-white/40">
            <span>Page 1 of 162</span>
            <div className="flex gap-2">
              <button
                disabled
                className="rounded border border-white/10 px-4 py-2 disabled:opacity-30"
              >
                ← Prev
              </button>
              <button className="rounded border border-white/10 px-4 py-2 transition hover:border-accent/40 hover:text-accent">
                Next →
              </button>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
