# MechTechnology — E-Commerce Implementation Plan

This document covers three approaches for adding a full product catalog, shopping cart, and checkout to the existing Next.js 14 / TypeScript / Tailwind codebase.

---

## Current State

The site currently has:
- Static product data in `data/products.json` (15 SKUs)
- Client-side cart state via React Context (`CartContext.tsx`)
- A catalog page (`/catalog`) with filtering and a staged cart drawer

What is NOT yet implemented: persistent cart, payment processing, inventory sync, order management, customer accounts.

---

## Option A — Shopify Storefront API

### How it works
Keep the Next.js frontend exactly as-is. Replace `data/products.json` with live queries to Shopify's GraphQL Storefront API. Shopify handles inventory, orders, payments (via Shopify Payments or PayFast), and customer accounts. Checkout redirects to a Shopify-hosted checkout page.

### Folder changes required
```
lib/
  shopify.ts           ← Storefront API client (Apollo or fetch-based)
app/
  catalog/
    page.tsx           ← fetch products from Shopify instead of JSON
  cart/
    page.tsx           ← redirect to Shopify checkout URL
```

### Pros
- Battle-tested payments, PCI compliance handled by Shopify
- Built-in inventory management, order fulfillment, discount codes
- PayFast integration available for ZAR payments
- No backend server to maintain

### Cons
- Monthly cost: Shopify Basic ~R350/month + transaction fees
- Less control over checkout UX (hosted by Shopify)
- Monthly fees even before first sale

### Complexity: Low — 1–2 weeks to integrate

---

## Option B — Medusa.js + Stripe / PayFast

### How it works
Deploy a self-hosted Medusa.js backend (Node.js) as the commerce engine. Medusa handles products, inventory, cart, orders, and customer accounts via REST/GraphQL APIs. The Next.js frontend calls Medusa APIs instead of static JSON. Payments via Stripe (cards) or PayFast (local ZAR, EFT, SnapScan).

### Folder changes required
```
lib/
  medusa.ts            ← Medusa client SDK wrapper
app/
  catalog/             ← fetch from Medusa product API
  cart/                ← Medusa cart session
  checkout/            ← multi-step checkout page
  account/             ← customer login / orders
backend/               ← separate Medusa repo (or monorepo)
```

### Pros
- Full control over checkout flow and UX
- No per-transaction platform fees
- Self-hostable (Railway, Render, or VPS ~R100–300/month)
- PayFast plugin available
- Can extend Medusa with custom plugins (B2B pricing, quote requests)

### Cons
- Higher engineering effort upfront
- Must maintain backend (updates, security patches)
- More moving parts (Postgres, Redis, S3/Cloudinary for images)

### Complexity: Medium-High — 4–8 weeks for full implementation

---

## Option C — Snipcart (Simplest Drop-In)

### How it works
Snipcart is a JavaScript-based cart that overlays any static site. Add a `<script>` tag and `data-item-*` attributes to product cards. Snipcart handles the cart drawer, checkout, and payment (Stripe, PayPal, or direct PayFast).

### Folder changes required
```
app/
  layout.tsx           ← add Snipcart <script> and <link> tags
app/catalog/
  page.tsx             ← add data-item-* attributes to "Stage Item" buttons
```

### Pros
- Minimal code changes — could be live in days
- No backend required
- Handles PCI compliance, checkout, email receipts
- Flat monthly fee: ~$20 USD (~R370/month) regardless of transaction volume

### Cons
- Less control over checkout styling
- Snipcart branding in cart/checkout
- Monthly fee regardless of revenue
- Harder to build advanced features later (B2B, custom pricing tiers)

### Complexity: Very Low — 2–3 days to integrate

---

## Recommendation

For MechTechnology's current stage:

1. **Short-term (now):** Integrate Snipcart to go live with real transactions quickly. Low risk, minimal code change, proven for small catalogs.

2. **Medium-term (6–12 months, once revenue justifies it):** Migrate to Medusa.js for full control, no per-transaction fees, and the ability to build B2B features (quote requests, account-based pricing) that align with the engineering market.

Shopify is the right choice only if you want a fully managed solution and are willing to pay the ongoing platform cost from day one.

---

## Next Steps (before any option)

- [ ] Add real product images to `/public/images/`
- [ ] Finalise the full product catalog (SKUs, descriptions, stock levels)
- [ ] Set up PayFast merchant account (mechtechnology.co.za)
- [ ] Register for South African VAT (once threshold is reached)
- [ ] Set up Cloudinary or similar for product image management
- [ ] Define shipping zones and rates (nationwide delivery)
