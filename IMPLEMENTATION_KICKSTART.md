# IMPLEMENTATION KICKSTART: Apex Horizon Realty

This document outlines the core technical strategy and design imperatives for the Apex Horizon Realty landing page.

## 1. Technical Stack & SEO Optimization
- **Framework**: Next.js 15 (App Router) using React 19.
- **Rendering Strategy**: Default to Server Components for static architecture; Client Components only for interaction (Search, Form, Accordion).
- **SEO Strategy**:
    - **Dynamic Metadata**: Implementing `generateMetadata` for precise page indexing.
    - **OpenGraph & Twitter**: High-fidelity social previews for London real estate luxury.
    - **Structured Data**: `LocalBusiness` and `RealEstateAgent` JSON-LD for rich snippets.
    - **Performance**: Edge-cached static content ensuring Load-to-Interactive (LTI) < 1.2s.

## 2. Design System: Antigravity "Glass" Primitives
We will implement a custom, premium design system in `/components/ui/` following these tokens:

### Color Palette
- `brand-ink`: `#080808` (Primary background, evokes luxury)
- `brand-stone`: `#F5F5F5` (Secondary sections, adds depth)
- `brand-amber`: `#FFB800` (Strictly for buttons and active CTAs)

### Glassmorphism Constants
- **Surface**: `backdrop-blur: 12px` + `bg-white/5`
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`
- **Shadow**: Subtle deep-depth soft shadows for elevated elements.

## 3. Sectional Implementation Plan (London)
Each section will be implemented as a modular component in `/components/sections/`:

1. **HeroV1**: Conversational London-centric headline + Address Valuation Form.
2. **StatsBar**: Animated London property metrics (Days on Market: 8).
3. **ComparisonPane**: Flat-fee vs. Traditional commission breakdown.
4. **GuaranteeCards**: Lucide-driven "Apex Promise" layout.
5. **SuccessGrid**: 2x2 Case Study grid (London neighborhoods).
6. **FAQAccordion**: Interaction-rich objection handling.
7. **ReadyCTA**: Focused final conversion point.

## 4. Assets & Media
- **High-Res Visuals**: Architectural shots of high-end London residential properties generated via `generate_image`.
- **Icons**: Lucide icons for crisp, minimalist visual communication.

---
> [!IMPORTANT]
> **The One CTA Rule**: Ensure no element distracts from the Valuation input. All primary interactions must point to property data retrieval.
