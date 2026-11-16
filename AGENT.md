# AMF Mart Agent Instructions

This file contains the working rules for coding agents modifying the AMF Mart website. It is an instruction file, not a product database or a user-facing copy source.

## Read Before Editing

Read these sources before implementation or structural changes:

1. `/root/workspace/project/amf-mart/design.md` — visual contract.
2. `/root/workspace/project/amf-mart/wording.md` — approved or proposed user-facing copy.
3. `/root/workspace/project/amf-mart/catalogue/catalog.json` — working prototype catalogue.
4. `/root/workspace/project/amf-mart/IMPLEMENTATION_PLAN.md` — approved implementation sequence and acceptance criteria.
5. `/root/workspace/LLM-Wiki/workspace/project/amf-mart.md` — project decisions, boundaries and open items.

Treat the Wiki project record as the source of truth for decisions and status. Do not revive decisions that were removed or superseded.

## Implementation Scope

- Build the website with one root HTML file: `index.html`.
- Use Tailwind CSS through the official browser CDN script for this single-file prototype. Do not add a build pipeline unless the project scope is explicitly changed.
- Keep website JavaScript inline in `index.html` when JavaScript is required.
- Do not create additional page HTML files, application JS files or standalone CSS files unless explicitly approved.
- Use one separate root config file named `config.js` for mutable store details such as phone number, address, operating hours, social destinations and map destination. Expose the values through one `window.AMF_CONFIG` object and do not duplicate them across the HTML.
- Do not begin a large implementation, install dependencies, start a server or change the project structure without clear approval for that implementation step.

## Chosen Prototype Decisions

- Use hash navigation inside the single HTML file: `#/`, `#/products`, `#/product/<slug>`, `#/cart`, `#/about` and `#/contact`.
- Use `Products` as the navigation label, not `Product`.
- Keep `Cart` as an honest empty-state route. The Login icon opens the temporary prototype Login route; authentication itself is not connected yet.
- Use one static Announcement Bar utility message based on configured operating hours; do not build a rotating announcement carousel.
- Homepage category cards are `Lighting`, `Fans`, `Cables`, `Switches` and `Tools`.
- Render Selected Brands as a static responsive logo grid; do not use an auto-moving marquee.
- Use these prototype Shop by Need groupings: Home Use = Lighting, Fans, Switches and Appliances; Technical Work = Cables, Conduit, Protection, Testing, Tools, Earthing and Data; Industrial Use = Industrial, HVAC & Pumps, Safety and Other.
- Load `catalogue/catalog.json` with `fetch` and resolve its stored product-image values by adding the `catalogue/` prefix from the root HTML document.
- When the prototype is opened directly with `file://`, use the data-only `catalogue/catalog-fallback.js` compatibility snapshot so the page can render without a server. HTTP mode remains canonical and fetches `catalogue/catalog.json`.

## Source and Asset Rules

- Use local project assets. Do not replace available local assets with invented placeholders or unrelated remote images.
- Logo assets are in `assets/logo/`.
- Brand-logo assets are in `assets/brand-logos/`.
- The temporary homepage banner is in `assets/banners/` and must not be treated as a final production-cleared asset or as approval of embedded claims.
- Working product images are in `catalogue/assets/product-images/`.
- `catalogue/catalog-fallback.js` is a generated data-only compatibility snapshot for direct file previews. Regenerate it from `catalogue/catalog.json` when the working catalogue changes; do not edit it as an independent source.
- The working catalogue is `catalogue/catalog.json`, containing 15 primary categories and 30 products: exactly 2 products per category.
- Do not load the full planning catalogue directly into the prototype. The full planning source is under `planning/catalogue/`.
- Catalogue image values currently use `assets/product-images/...`. When resolving them from the root HTML document, prepend `catalogue/` so the final path is `catalogue/assets/product-images/...`.
- Preserve existing product identifiers, names, models, category assignments, image references and source values unless a correction is explicitly requested.

## Product and Content Boundaries

- Display only catalogue fields that contain real values.
- Do not invent prices, stock, availability, ratings, reviews, discounts, delivery status, warranty, promotions, supplier relationships, certifications, statistics, business history or commercial claims.
- Product Cards must use the same design across Homepage, Products and Related Products.
- Product Cards must not show price, stock, rating, review count, discount badges, delivery badges or functional cart actions without verified data and working functionality.
- The prototype uses catalogue browsing and product enquiry patterns; it is not an e-commerce checkout.
- `Add to Cart` remains disabled or unavailable until cart functionality genuinely exists. It must not mutate state or show a false success message.
- For rapid prototyping, the owner may request temporary placeholder destinations. Mark these values as temporary in `config.js` and documentation so they can be replaced later. Current WhatsApp uses the temporary placeholder URL configured there.
- Do not add a contact form, visitor count or policy link that implies a backend or content exists when it does not.

## Required Website Structure

Implement the approved views inside the single HTML file:

- Homepage
- Products / catalogue browsing
- Product Detail
- Cart empty state
- About Us
- Contact
- Login prototype

Keep the global structure consistent:

```text
Announcement Bar
Sticky Main Navbar
Page Content
Footer
```

Current layout rules include:

- Homepage Featured Products: 4 cards in one desktop row.
- Products Page: 3 cards per row and 5 rows per page, 15 cards per page.
- Related Products: same primary category, current product excluded, 4 cards per desktop row.
- Products search covers available name, model, brand, category and specification data.
- Sorting is limited to Relevance, Name A–Z and Name Z–A; do not add price sorting.
- Product Detail must not render empty specification or information sections.

## Visual and Responsive Rules

- Follow `design.md` instead of inventing a second visual system.
- Keep the default light theme and the Light Product-Led Storefront direction.
- Use the defined neutral surfaces, charcoal structure and controlled electrical-red accent.
- Use the defined typography and responsive scale from `design.md`.
- Preserve the white navbar, disappearing announcement bar, sticky main navbar and dark footer direction.
- Design for mobile, tablet, desktop and wide desktop without horizontal overflow.
- Use accessible labels, keyboard-visible focus states, meaningful image alt text and honest unavailable, empty, loading and error states.
- Respect reduced-motion preferences for marquees and other non-essential motion.

## Documentation and Change Control

- Do not rewrite `design.md` or `wording.md` to hide an implementation mismatch.
- When a project decision changes, update the living project record at `/root/workspace/LLM-Wiki/workspace/project/amf-mart.md` and append the change to `/root/workspace/LLM-Wiki/log.md`.
- Keep open decisions and unverified business information explicitly marked as such.
- Do not treat temporary catalogue data or temporary assets as live inventory or production-cleared content.

## Verification Before Reporting Complete

Before reporting implementation work as complete:

1. Run the available syntax or validation checks.
2. Open and exercise the website at desktop and mobile widths.
3. Check navigation, search, filters, sorting, pagination and Product Detail behaviour.
4. Check empty, unavailable, loading, error and image-fallback states.
5. Check for horizontal overflow, broken local asset paths and browser console errors.
6. Check keyboard navigation, focus visibility, accessible labels and image alt text.
7. Re-read this file, `design.md`, `wording.md` and the project acceptance criteria against the actual result.

Do not claim completion based only on a file write or a successful command. Report any unverified or incomplete item plainly.

## Security

**Jangan simpan atau mengekalkan sebarang credentials, API keys, tokens, passwords atau secrets; jika ditemui, gunakan `[REDACTED]`.**

Never place secrets in HTML, JavaScript, config, catalogue data, assets, documentation or version-controlled files.
