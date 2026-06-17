"use client";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const { items, isOpen, close, remove, updateQty, total, count } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-charcoal shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 px-6 py-5">
          <div>
            <h2 className="font-bold text-white tracking-tight">
              Active Procurement Manifest
            </h2>
            <p className="mt-0.5 text-xs text-white/50 tabular">
              {count} item{count !== 1 ? "s" : ""} staged
            </p>
          </div>
          <button
            onClick={close}
            className="mt-0.5 flex h-8 w-8 items-center justify-center rounded text-white/50 transition hover:bg-white/10 hover:text-white"
            aria-label="Close manifest"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-white/20">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-sm font-medium text-white/40">Manifest is empty</p>
              <p className="text-xs text-white/25">Add components from the catalog to begin.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 rounded-lg border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white leading-snug line-clamp-2">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs text-white/50 tabular">
                      R{item.price.toFixed(2)} each · R
                      {(item.price * item.qty).toFixed(2)} total
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <button
                      onClick={() => remove(item.id)}
                      className="text-white/25 transition hover:text-accent"
                      aria-label="Remove item"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="flex h-7 w-7 items-center justify-center rounded border border-white/20 text-white/70 transition hover:border-accent hover:text-accent"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-medium text-white tabular">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded border border-white/20 text-white/70 transition hover:border-accent hover:text-accent"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / totals */}
        {items.length > 0 && (
          <div className="border-t border-white/10 px-6 py-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Subtotal ({count} items)</span>
              <span className="font-bold text-white tabular">R{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Estimated Shipping</span>
              <span className="text-white/40 text-xs">Calculated at checkout</span>
            </div>
            <button className="mt-3 w-full rounded-md bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-accent/90 active:scale-[0.98]">
              Proceed to Checkout →
            </button>
            <button
              onClick={close}
              className="w-full rounded-md border border-white/10 px-6 py-2.5 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </>
  );
}
