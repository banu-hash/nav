# Design Brief

## Direction

**Cool Serene Institutional** — Modern campus navigation app using ocean-deep blue primary with teal wayfinding accents on soft cool backgrounds.

## Tone

Trustworthy, navigational, modern institutional — no sterile greys, no trendy AI aesthetics. Geometric fonts and medium roundness convey tech-forward clarity.

## Differentiation

Card-based zone hierarchy with interactive map as hero; subtle grid-based layout emphasizes navigational intent; teal accent used sparingly for wayfinding highlights.

## Color Palette

| Token      | OKLCH           | Role                                    |
| ---------- | --------------- | --------------------------------------- |
| background | 0.98 0.008 230  | Primary surface — cool off-white        |
| foreground | 0.18 0.015 230  | Primary text — cool charcoal            |
| card       | 1.0 0.004 230   | Elevated card surface                   |
| primary    | 0.42 0.14 240   | CTA, interactive, navigation accents    |
| accent     | 0.6 0.15 170    | Wayfinding, route highlights, emphasis  |
| muted      | 0.94 0.01 230   | Secondary backgrounds, disabled states  |
| border     | 0.9 0.008 230   | Subtle dividers, input borders          |

## Typography

- Display: Space Grotesk — headings, CTAs, navigation labels. Geometric, tech-forward, 600–700 weight.
- Body: Figtree — paragraphs, form labels, descriptions. Open counters, friendly, 400–600 weight.
- Scale: hero `text-5xl md:text-7xl font-bold`, h2 `text-3xl md:text-4xl font-bold`, h3 `text-2xl font-semibold`, label `text-xs font-semibold uppercase`.

## Elevation & Depth

Subtle shadow hierarchy: cards with `shadow-sm` (light), interactive surfaces with `shadow-md` (elevated). No glow or neon. Single-plane layout avoids depth confusion.

## Structural Zones

| Zone    | Background              | Border            | Notes                                                 |
| ------- | ----------------------- | ----------------- | ----------------------------------------------------- |
| Header  | card (1.0 0.004 230)    | border-b subtle   | Navigation bar with brand, links. Sticky on mobile.   |
| Content | background (off-white)  | —                 | Map hero + card sections. Alternating card groups.    |
| Footer  | secondary (0.95)        | border-t subtle   | Links, legal, contact. Lower visual weight.           |

## Spacing & Rhythm

Spacious padding (1.5–2rem sections). Card groups stacked with 1rem gaps. Input/button padding 0.75–1rem. Micro-spacing 0.25–0.5rem for tighter control.

## Component Patterns

- Buttons: Rounded lg (8px), primary blue on white, 600 weight. Hover: slight shadow lift, text remains bold. Secondary: outlined.
- Cards: Rounded lg, 1px border, subtle shadow. Used for building list, route info, contact.
- Dropdowns: Rounded lg, border-border, teal accent on focus.

## Motion

- Entrance: Fade + scale 0.95→1.0 over 300ms on page load for card sections.
- Hover: `transition-smooth` (0.3s cubic-bezier) on all interactive elements.
- Decorative: None — focus on clarity.

## Constraints

- No vibrant gradients or decorative blur effects.
- Maintain AA+ contrast in light mode (primary 0.42 on background 0.98 = ∆L 0.56).
- Mobile-first responsive: dropdowns full-width on `sm`, grid on `md+`.
- No custom fonts beyond Space Grotesk + Figtree.

## Signature Detail

Teal accent paired with ocean primary creates navigational + approachable tension — every route destination gets a teal highlight badge, signaling the journey's endpoint in the map interface.
