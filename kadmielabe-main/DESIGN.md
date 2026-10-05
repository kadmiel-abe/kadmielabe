---
name: Kadmiel Abe Portfolio
colors:
  surface: '#fcf8f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#3d4a3d'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#6d7b6c'
  outline-variant: '#bccbb9'
  surface-tint: '#006e2f'
  primary: '#006e2f'
  on-primary: '#ffffff'
  primary-container: '#22c55e'
  on-primary-container: '#004b1e'
  inverse-primary: '#4ae176'
  secondary: '#006d30'
  on-secondary: '#ffffff'
  secondary-container: '#92f5a4'
  on-secondary-container: '#007233'
  tertiary: '#9e4036'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff8b7c'
  on-tertiary-container: '#76231b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6bff8f'
  primary-fixed-dim: '#4ae176'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005321'
  secondary-fixed: '#95f8a7'
  secondary-fixed-dim: '#79db8d'
  on-secondary-fixed: '#00210a'
  on-secondary-fixed-variant: '#005323'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410001'
  on-tertiary-fixed-variant: '#7f2a21'
  background: '#fcf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  background-main: '#FFFFFF'
  background-alt: '#F5F5F5'
  surface-light: '#DCFCE7'
  text-secondary: '#6B7280'
  dot-grid: '#E5E7EB'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is engineered for a high-end tech portfolio, embodying a "Vercel/Linear" aesthetic that balances technical precision with high-craft execution. The brand personality is professional, sophisticated, and developer-centric, aimed at high-growth startups and tech firms.

The design style utilizes **Glassmorphism** and **Modern Corporate** influences. The UI is built upon a foundation of generous whitespace, a subtle underlying dot grid, and a focus on crisp, functional layouts. Depth is achieved through light-refracting layers, backdrop blurs, and localized "green glow" illumination that signals interactivity. The aesthetic prioritizes clarity and high-performance feel, using smooth motion and subtle gradients to elevate the user experience from a simple website to a high-fidelity application.

## Colors

The palette is rooted in a monochromatic base with highly targeted injections of "Vivid Green." 

- **Primary Green (#22C55E):** Used strictly for actions, primary CTAs, and active states. It represents growth and technical vitality.
- **Dark Green (#15803D):** Reserved for hover states of primary elements and high-contrast accents to ensure legibility.
- **Light Green (#DCFCE7):** Utilized for soft surface backgrounds, subtle badge fills, or low-contrast highlight areas.
- **The Grayscale:** `#0A0A0A` (Black) provides the skeletal structure and high-impact headings, while `#FFFFFF` and `#F5F5F5` provide the clean canvas. `#6B7280` (Text Gray) is the workhorse for long-form body text and metadata, ensuring a soft, modern reading experience that avoids the harshness of pure black-on-white.

## Typography

The typography system uses a pairing of **Plus Jakarta Sans** for headlines and **Inter** for functional text. 

Headlines use a tight letter-spacing and heavy weights to create a "tech-editorial" feel. **Inter** is used for all body copy and UI labels to provide maximum readability and a neutral, systematic tone. For mobile devices, headlines scale down to prevent excessive line-breaking while maintaining the bold, authoritative character of the brand. Use "Label-MD" for section headers and small navigational items to create a clear structural hierarchy.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop, centered on a 1280px max-width container with a 12-column structure. 

- **Grid:** Use a 24px gutter between columns. 
- **Rhythm:** Spacing follows a base-8 scale. Section gaps are generous (120px+) to emphasize the "premium" minimalist aesthetic.
- **Responsive:** On tablet, margins reduce to 40px. On mobile, the grid collapses to a single-column stack with 20px side margins. 
- **Dot Grid:** A global background pattern consists of 1px dots spaced at 24px intervals, colored in `@dot-grid`. This grid should be fixed or parallaxed slightly to add a sense of physical space.

## Elevation & Depth

Depth in this design system is achieved through **Glassmorphism** and light-based hierarchy rather than traditional heavy shadows.

- **Surface Layers:** The primary background is flat white. Secondary layers (cards, navbars) use a semi-transparent white (e.g., `rgba(255, 255, 255, 0.7)`) with a `saturate(180%) blur(20px)` backdrop filter.
- **Interactive Depth:** Hovering over interactive cards or primary buttons triggers a "Green Glow"—a subtle, diffused outer glow using the primary green color at low opacity (`0.15`).
- **Outlines:** Instead of shadows, use 1px solid borders (`#F5F5F5` or `rgba(0,0,0,0.05)`) to define element boundaries, maintaining a crisp, architectural feel.

## Shapes

The shape language is modern and approachable, utilizing a **Rounded (0.5rem)** base.

- **Small Components:** Checkboxes and small tags use `0.25rem`.
- **Standard UI:** Buttons, input fields, and standard cards use `0.5rem`.
- **Large Components:** Feature blocks and hero images use `rounded-xl` (1.5rem) to soften the layout and create a distinct visual container.
- **Buttons:** Primary buttons can optionally use a fully "Pill-shaped" profile if they contain only text or a single icon + text.

## Components

- **Sticky Navbar:** Must be glassmorphic with a 1px bottom border. Content behind the navbar should blur smoothly as the user scrolls.
- **Buttons:** 
  - *Primary:* Solid `#22C55E` with white text. On hover, apply a `box-shadow` of 0 0 20px rgba(34, 197, 94, 0.3).
  - *Outline:* 1px border of `#22C55E` with green text. Background becomes `@surface-light` on hover.
- **Glassmorphic Cards:** White semi-transparent background with a 1px border. Hovering should slightly lift the card (translateY -4px) and intensify the backdrop blur.
- **Timelines:** Use a vertical 2px line in `@background-alt`. Active nodes are marked with a primary green dot and a subtle glow.
- **Accordions:** Flat styling with a simple chevron. When expanded, the background should shift to `@background-alt` to clearly group the content.
- **Input Fields:** Clean, minimal 1px borders. On focus, the border shifts to primary green with a subtle green outer glow.
- **Interactive Chips:** Small, rounded tags using `@surface-light` background and `@secondary_color_hex` text for high legibility.