---
version: beta
name: AMF Mart Light Product-Led Storefront
description: "A light, product-led storefront system for AMF Mart, combining a clear electrical catalogue with a restrained red accent and dark closing surfaces."
colors:
  primary: "#181A20"
  secondary: "#6B7280"
  tertiary: "#FF595B"
  primaryHover: "#E74D50"
  primaryBorder: "#FFB4B6"
  focusRing: "rgba(255, 89, 91, 0.34)"
  surface: "#FFFFFF"
  surfaceWarm: "#FBFCFD"
  surfaceMuted: "#F5F6F8"
  surfaceAccent: "#FFF0F0"
  border: "#E5E7EB"
  onPrimary: "#FFFFFF"
  onDark: "#F7F8FA"
  success: "#1F8A5B"
  successSurface: "#EAF6EF"
  warning: "#8A5200"
  warningSurface: "#FFF4D6"
  error: "#B42318"
  errorSurface: "#FDECEA"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "56px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  h1:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "48px"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  h2:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "32px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body-lg:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  body-md:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.02em"
  nav:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  full: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "72px"
  4xl: "96px"
elevation:
  none: "none"
  cardHover: "0 12px 28px rgba(27, 27, 31, 0.08)"
components:
  shell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
  announcement-bar:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.onPrimary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  navbar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  page-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-border:
    backgroundColor: "{colors.border}"
  card-meta:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.onPrimary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.lg}"
  button-primary-hover:
    backgroundColor: "{colors.primaryHover}"
    textColor: "{colors.onPrimary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.lg}"
  button-disabled:
    backgroundColor: "{colors.surfaceMuted}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  section-accent:
    backgroundColor: "{colors.surfaceAccent}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  divider:
    backgroundColor: "{colors.border}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.onDark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.3xl} {spacing.xl}"
  status-success:
    backgroundColor: "{colors.successSurface}"
    textColor: "{colors.success}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  status-warning:
    backgroundColor: "{colors.warningSurface}"
    textColor: "{colors.warning}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  status-error:
    backgroundColor: "{colors.errorSurface}"
    textColor: "{colors.error}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
---

## Overview

### Status

This file is the current visual and implementation guidance for AMF Mart. The visual direction is approved as a working direction, while exact font loading, final asset permission, production contact destinations and final banner approval remain open.

The system is inspired by the supplied retail reference through composition and colour placement only. It does not copy the reference's logo, wording, product imagery, purple palette, product claims, prices, ratings, promotion blocks or proprietary layout.

### Design Read

Reading this as: a product-led electrical catalogue for household users, technicians, contractors and business needs, in a light retail storefront style with restrained electrical-red emphasis, dial ENERGY 2 / RHYTHM 2 / MOTION 1.

### Visual Direction

- Use a light product-led storefront as the base.
- Keep most surfaces white, warm white or very light neutral grey.
- Use AMF Mart's red as a controlled interaction and identity accent.
- Use charcoal for strong text, navigation contrast and the Footer.
- Let real product imagery and the temporary banner carry visual weight instead of adding decorative effects.
- Use clear left-aligned hierarchy, compact category browsing and structured product grids.
- Use moderate rectangular rounding. Do not make every element a pill.
- Keep the page approachable and catalogue-focused rather than looking like a software dashboard or a dark technology website.

### Confirmed, Proposed and Open Values

Confirmed from the project discussion:

- Navbar uses a white surface.
- Black logo is used on the light navbar.
- White logo is intended for the darker Footer.
- The temporary homepage banner is a visual reference and temporary asset.
- Homepage, Products, Product Detail, Cart, About Us and Contact structures are recorded in the project record.
- Product Cards are shared across Homepage, Products Page and Related Products.
- No prices, stock, ratings, reviews, promotion, warranty or commercial claims may be invented.

Proposed as the implementation baseline in this file:

- Manrope as the primary typeface.
- Light theme as the default and only theme for the initial build.
- The token values in the front matter.
- Three responsive layout states with a wide desktop refinement.
- Low-to-moderate motion and subtle interaction feedback.

Open or deferred:

- Final logo files and approved logo variants.
- Final banner asset, embedded banner copy and publication rights.
- Final product image source and permission.
- Verified phone number, WhatsApp URL, Facebook destination, TikTok destination and map link.
- Whether a second theme should exist after the light theme has been validated.

## Colors

### Palette Roles

- **Primary black:** `#181A20`. Use for headings, body text, strong navigation text and the Footer background.
- **Secondary grey:** `#6B7280`. Use for supporting text, metadata and quiet labels.
- **Electrical red:** `#FF595B`. Use for primary actions, active navigation, selected states and a small number of identity accents.
- **Electrical red hover:** `#E74D50`. Use for hover and pressed states of red actions.
- **White surface:** `#FFFFFF`. Use for the navbar, product cards and the main content surface.
- **Warm surface:** `#FBFCFD`. Use for restrained neutral separation when required.
- **Muted surface:** `#F5F6F8`. Use for disabled controls, quiet containers and neutral separation.
- **Accent surface:** `#FFF0F0`. Use for selected and gentle interaction states. It is not a page-wide background.
- **Border:** `#E5E7EB`. Use for card borders, dividers and input boundaries.

### Interaction States

- **Brand red:** `#FF595B` is reserved for primary actions, active states, focused controls and directional links. Its hover state is `#E74D50`; its quiet border state is `#FFB4B6`.
- **Neutral hover:** Pagination, filters, secondary buttons and catalogue cards use a neutral surface/border hover. They should not turn red merely because the pointer passes over them; red is reserved for active or primary states.
- **Universal control tokens:** Hover uses `#F5F6F8` with no visible border. Active uses `#FFF0F0` with a subtle `1px` `#FF595B` border.
- **Icon colour:** Icons inherit the colour of their parent control. Neutral icons therefore follow the text colour, interactive icons turn red with their action, and disabled icons become muted with the disabled control.
- **WhatsApp:** `#27C166` is exclusive to WhatsApp actions and the floating shortcut. It must not be used as a general success or decorative colour.
- **Social icons:** Brand colours appear only on hover or keyboard focus, keeping the Footer calm at rest.
- **Keyboard focus:** Every interactive control receives the same three-pixel red focus ring. This is intentionally visible for accessibility, rather than a separate decorative state.

### Motion

- **Micro interaction:** `160ms`, standard easing. Use for icon nudges, button colour changes and card borders.
- **Standard interaction:** `220ms`, standard easing. Use for tooltips, control surfaces and dropdowns.
- **Scroll reveal:** `720ms`, smooth easing (`cubic-bezier(.2, .75, .2, 1)`). Use for page blocks as they enter the viewport.
- **Card stagger:** `620ms` per card with a `65ms` interval, limited to three visible steps so long product grids do not feel slow.
- **Navigation underline:** `380ms`, emphasized easing. Keep this slower transition unique to navigation so it reads as deliberate.
- **Movement rules:** Cards and buttons lift by only 1–2px on devices with a precise hover pointer. No hover-only lift is applied to touch devices.
- **Reduced motion:** Respect `prefers-reduced-motion`; continuous brand marquees stop and transitions become effectively instant.

### Usage Rules

- The active visual palette contains three brand colours: charcoal, warm neutral and electrical red. White and grey are structural neutrals.
- Red must remain an accent. Do not use it on every button, heading, icon, card border and background at the same time.
- The temporary red banner is allowed to be visually dominant because it is the homepage focal image. Surrounding sections should return to light surfaces.
- Do not introduce purple, blue-purple gradients, neon glow, rainbow gradients or decorative colour orbs as default styling.
- Semantic status colours are functional exceptions and must be paired with text or an icon. Do not communicate success, warning or error by colour alone.
- Test every text and background pair against WCAG AA before implementation approval. The design token lint is not a substitute for rendered contrast testing.

### Theme

The initial build uses a light theme only. A dark theme is not included as an unimplemented toggle. The dark charcoal Footer is a component surface, not a second application theme.

A second theme may be considered after the light catalogue experience, image treatment, contrast and responsive layout have been validated. If a theme toggle is ever added, both themes must be implemented and tested together.

## Typography

### Typeface

Use Manrope for headings, body copy, navigation, product metadata and controls. A single family keeps the catalogue cohesive while its weight range provides hierarchy without requiring decorative type changes.

Use the fallback stack `Arial, sans-serif` if the webfont is unavailable. Do not claim the font has loaded until the actual implementation verifies the font request and computed style.

### Desktop Type Scale

| Role | Size | Weight | Line height | Use |
|---|---:|---:|---:|---|
| Display | 56px | 800 | 1.05 | Homepage hero heading when the banner composition includes live text |
| H1 | 48px | 800 | 1.10 | Major page or hero heading |
| H2 | 32px | 800 | 1.15 | Section headings |
| H3 | 24px | 700 | 1.20 | Card groups and secondary blocks |
| Body large | 18px | 400 | 1.55 | Supporting copy with emphasis |
| Body | 16px | 400 | 1.55 | Default readable text |
| Body small | 14px | 400 | 1.50 | Metadata and secondary copy |
| Label | 12px | 700 | 1.40 | Compact labels and utility text |
| Navigation | 14px | 600 | 1.40 | Main navigation and compact controls |

### Responsive Type Scale

- Mobile Display: 36px, weight 800, line height 1.08.
- Mobile H1: 32px, weight 800, line height 1.12.
- Mobile H2: 26px, weight 800, line height 1.18.
- Mobile H3: 20px, weight 700, line height 1.22.
- Mobile body: 15px to 16px, line height 1.55.
- Mobile labels: 12px to 13px, line height 1.4.
- Use `clamp()` or deliberate breakpoint steps. Do not preserve desktop heading sizes unchanged on a phone.

### Typography Rules

- Keep headings short enough to survive narrow widths.
- Use sentence case for most headings. Uppercase is reserved for an existing approved label such as `SHOP BY CATEGORY`.
- Do not use wide letter spacing as decoration.
- Do not use monospace typography for a technical mood.
- Do not use colour as the only method of creating text hierarchy.

## Layout

### Container and Spacing

- Maximum content width: 1200px.
- Desktop outer gutter: 24px minimum, increasing to 32px on wide screens when space allows.
- Mobile outer gutter: 16px.
- Use the spacing scale from 8px to 96px. Section spacing should follow content importance, not one repeated value.
- Keep aligned outer edges across Page Header, grids, split layouts and Footer content.
- Use whitespace to separate narrative sections. Do not fill empty space with decorative cards.

### Page Shell

All pages use the shared shell unless a page record explicitly says otherwise:

```text
Announcement Bar
Main Navbar
Page content
Footer
```

The Announcement Bar disappears on scroll. The Main Navbar remains sticky. The shell must remain usable with keyboard navigation and at touch widths.

### Announcement Bar

- Use a slim utility surface above the navbar.
- Keep the text short and grounded in approved AMF Mart wording.
- On desktop, multiple messages may sit in one row if they fit without crowding.
- On mobile, show one message at a time or wrap deliberately. Never create horizontal scrolling.
- Do not use unverified shipping, warranty, price, promotion or service claims.

### Main Navbar

- White background with black logo.
- Logo at the left, primary navigation in the centre or in the available middle region, Login and Cart at the right on desktop.
- Navigation labels follow the wording register and must point to real pages.
- Use a subtle border or low contrast divider. Avoid glass blur and large shadow.
- Active page uses electrical red with a clear non-colour state such as weight or underline.
- Mobile collapses to a labelled menu control. The open menu must trap or manage focus correctly, close with Escape and leave the page scroll state safe.
- Do not add a search control to the navbar. Search belongs to Products Page.

## Page Composition

### Homepage

Use the recorded order:

```text
Banner
SHOP BY CATEGORY
Featured Products
Selected Brands
Shop by Need
Footer
```

- The banner is the first-screen focal point. The temporary banner is an image asset, not proof that its embedded claims are approved copy.
- `SHOP BY CATEGORY` uses five compact category cards or tiles. Keep labels visible with any icon or image.
- Featured Products uses one row of four shared Product Cards on desktop.
- Selected Brands uses a restrained logo row or marquee only when real brand assets and destination meaning are available. It must not imply official partnerships.
- Shop by Need uses three varied but related blocks: `Home Use`, `Technical Work` and `Industrial Use`, subject to the current wording record. Do not turn these into discount or promotion cards.
- Avoid placing a second large hero, fake trust strip or invented statistics on the homepage.

### Products Page

Use the recorded catalogue composition:

```text
Compact Page Header
Search
Result Count and Sort
Category and Filter Area
Product Grid
Pagination
```

- Desktop uses a left filter/sidebar region and a right product grid.
- The grid uses three cards per row and five rows per page, for 15 cards per page.
- Tablet reflows to two columns when three cards no longer provide readable card width.
- Mobile uses a single-column product grid with a filter drawer or full-width filter panel.
- Product Cards omit missing fields rather than creating filler content.
- Search, sort, filter, pagination and states require real behaviour when implemented.

### Product Detail Page

Use the recorded breadcrumb and two-part product section:

```text
Breadcrumb
Product Image or Gallery
Product Information
Product Actions
Product Description
Technical Specifications
Related Products
```

- Product image and product identity are the visual hierarchy.
- Desktop uses an image and information split when the content can fit comfortably.
- Mobile stacks image, information, actions, description, specifications and related products.
- WhatsApp is a primary action only after the real destination is verified.
- Add to Cart remains visibly unavailable until cart capability exists.
- Related Products uses the same Product Card and shows four cards in one desktop row when four valid matches exist.

### Cart Page

Use an honest empty-state composition:

```text
Breadcrumb
Cart heading
Cart icon
Your cart is empty.
No products have been added to your cart yet.
Browse Products
```

Do not create pricing, totals, checkout, payment or order confirmation UI before the cart capability exists.

### About Us Page

Use the recorded composition:

```text
Page Header
About AMF Mart split section
What You Can Find
For Different Needs
Small Visit the Store panel
Looking for Something Specific?
Footer
```

- The main split section uses text on one side and a typographic AMF panel on the other.
- The page describes AMF Mart, not how to use the website.
- Category index is compact and should not become a second heavy catalogue grid.
- Do not add history, team, mission, vision, awards or supplier claims without real content.

### Contact Page

Use the recorded composition:

```text
Page Header
Contact AMF Mart
Visit the Store
Location or Map Panel
Contact CTA
Footer
```

- Desktop uses a contact information and store information split.
- Phone, WhatsApp, Facebook and map links remain unavailable or inactive until verified.
- Do not add a contact form without a real receiving backend, visible validation and success or error behaviour.

## Components

### Product Card

- White surface with a neutral border and moderate radius.
- Product image uses a reserved aspect ratio and contains the product without distortion.
- Product Name is the strongest card text.
- Brand and Model appear only when available.
- Short Description appears only when meaningful and space permits.
- `View Details` is the only current card action.
- Hover may use a small elevation or border contrast. It must have a touch equivalent and must not rely on hover to reveal essential information.
- Do not display price, stock, rating, review, discount, delivery, warranty or promotion without verified data.

### Buttons and Links

- Primary action: electrical red background with white text.
- Hover and pressed action: darker red.
- Secondary action: white or warm surface with charcoal text and a neutral border.
- Disabled action: muted surface with secondary text and an explicit unavailable state.
- Minimum interactive target: 44px by 44px, including icon-only controls.
- Avoid placing decorative arrows on every action. Use an arrow only when it gives a real directional cue.
- Links must have real destinations. Buttons must have real behaviour.

### Cards and Surfaces

- Use cards when the content needs grouping or scanning.
- Use flat surface sections when a card would add unnecessary repetition.
- Use moderate rounding from the token set. Do not make cards, inputs and buttons all pill-shaped.
- Use shadow only for a small elevation change such as card hover or an open drawer.
- Do not use glassmorphism, glow or background grid as a default visual language.

### Icons and Logos

- Use actual WhatsApp, Facebook and TikTok brand icons for their respective destinations.
- Do not redraw brand logos as text or generic icons.
- Use category icons only when a relevant approved asset exists.
- Every icon-only control needs an accessible name.
- An icon must clarify the action or category. Decorative icon collections are not required.

### Images

- Prefer AMF Mart assets and approved catalogue assets.
- The temporary banner path is:

```text
/root/workspace/project/amf-mart/assets/banners/homepage-banner-temporary.png
```

- The banner is 1672 × 941px and remains temporary.
- Do not treat embedded banner text as approved website copy or a verified commercial claim.
- Product images need explicit dimensions or an aspect ratio to prevent layout shift.
- Use meaningful `alt` text for product images and empty alt text for purely decorative visuals.
- Do not create or publish new image assets without confirmation of the asset direction and source.

## Responsive Behaviour

### Breakpoint States

Use content-driven transitions instead of designing for one device model only:

| State | Approximate range | Main behaviour |
|---|---:|---|
| Mobile | below 640px | One-column content, menu control, stacked split sections |
| Tablet | 640px to 1023px | Two-column grids where readable, compact spacing, filter panel transition |
| Desktop | 1024px to 1279px | Full navigation, split layouts, three-column product grid |
| Wide desktop | 1280px and above | Same structure with increased breathing room, never oversized content |

Breakpoints may move when browser testing shows that a component no longer fits. The content determines the breakpoint.

### Grid Rules

- Homepage categories: five across on desktop, three or two on tablet as space requires, two or one on mobile based on label width.
- Homepage Featured Products: four across on desktop, two on tablet, one on mobile.
- Products Page: three across on desktop, two on tablet, one on mobile.
- Related Products: four across on desktop, two on tablet, one on mobile.
- About Us and Contact split layouts stack when either column becomes too narrow for readable content.
- Never use fixed-width child elements that force horizontal scrolling.

### Mobile Interaction Rules

- Keep the Main Navbar compact and make the menu discoverable with a visible label or accessible name.
- Keep tap targets at least 44px with spacing between adjacent controls.
- Give hover interactions a tap or focus equivalent.
- Do not hide essential category labels behind hover tooltips.
- Keep sticky elements from covering content and respect safe-area insets where needed.
- Verify text wrapping at 320px as a stress case, not only at a standard phone width.

## Motion and Interaction

- Default motion is restrained, matching MOTION 1.
- Use transitions around 150ms to 220ms for colour, border and elevation feedback.
- Do not animate every section on scroll.
- A logo marquee is allowed only for the Selected Brands section, must pause on hover and focus, and must provide a reduced-motion static arrangement.
- No endless pulse, bounce, glow or floating animation without a defined user or hierarchy purpose.
- Respect `prefers-reduced-motion: reduce` by removing non-essential movement.
- Every state change needs a visible focus, active, selected, disabled, loading, empty or error treatment as applicable.

## Accessibility and States

- Target WCAG AA contrast for normal text at 4.5:1 and large text at 3:1.
- Do not use colour alone for active, selected, error or success states.
- Use semantic landmarks: `header`, `nav`, `main` and `footer`.
- Use one logical `h1` per page and do not skip heading levels.
- Ensure keyboard navigation follows visual order and has a visible focus indicator.
- Every input needs a visible label. Every icon-only control needs an accessible name.
- Every data-driven surface needs loading, empty and error states where applicable.
- Product listing states include loading, no result, empty category, error, clear filter and image fallback.
- Product detail states include product not found, missing fields, unavailable WhatsApp, unavailable cart and no related products.
- Cart uses the recorded empty state and does not imitate a working checkout.

## Do's and Don'ts

### Do

- Use the AMF red accent with restraint.
- Keep the main canvas light and product-focused.
- Use real product imagery and approved logos.
- Reuse the same Product Card contract across product surfaces.
- Use clear text hierarchy and generous but purposeful whitespace.
- Keep the Footer dark as a closing surface.
- Verify links, contact destinations, asset rights and data before activation.
- Test desktop, tablet, mobile, keyboard, touch and reduced-motion states before delivery.

### Don't

- Do not copy the reference's purple palette, wording, product brands, prices, ratings or trust claims.
- Do not create fake shipping, warranty, original-product, discount, stock or review claims.
- Do not use a full-page red background merely because the banner is red.
- Do not use purple-to-blue gradients, neon glow, glassmorphism or decorative grids as default styling.
- Do not create a dead Contact Form, inactive map link or fake WhatsApp success state.
- Do not create a second Product Card design for the Homepage or Related Products.
- Do not add a dark theme toggle until both themes can be implemented and tested.
- Do not treat this design document as permission to implement the website, copy assets, start a server or create an additional prototype.

## Implementation Handoff

This document is the visual contract for the future implementation. The wording register remains the source for user-facing copy. The project record remains the source for information architecture, capability boundaries, verified and unverified business data, and open decisions.

Before implementation begins:

1. Read this file, the project record and the wording register together.
2. Confirm the final asset set and all publication permissions.
3. Confirm real contact destinations and map link.
4. Map catalogue fields to Product Card, Product Detail and technical specifications.
5. Build the shared shell before page-specific content.
6. Run rendered visual QA at desktop, tablet and mobile widths.
7. Test keyboard interaction, touch targets, reduced motion, loading, empty and error states.
8. Do not report the website as complete until the actual implementation has been run and verified.
