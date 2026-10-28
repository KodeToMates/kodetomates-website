# UI Rules for KodeToMates

This document serves as the top-level UI architecture and design system reference. All agents modifying this project must adhere to these rules.

## Core Directives
1. **Typography Standards (MANDATORY)**:
   - **Always use `font-sans`** (**Plus Jakarta Sans** / `var(--font-jakarta)`).
   - **Never use serif fonts** (`font-serif`, `font-playfair`, `font-instrument`, `font-fraunces`) on any page, heading, tagline, or brand wordmark.
   - **Page `h1` titles**: `font-sans font-bold tracking-[-0.03em] leading-[1.08-1.14]` (same as Home Hero section).
   - **Section `h2` headings**: `font-sans font-bold tracking-[-0.03em]`.
   - **Card `h3` headings**: `font-sans font-bold tracking-[-0.02em]`.
   - **Eyebrows & Badges**: `font-sans font-semibold text-xs sm:text-[13px] tracking-wider uppercase text-[#E4521B]`.
   - **Body text**: `font-sans text-[14px-16px] text-[#6B645E] leading-relaxed`.
2. **Design System First**: Use only the tokens defined in `styles/globals.css`. Never use raw hex values or arbitrary Tailwind colors like `text-blue-500` unless explicitly matching a token.
3. **Component Architecture**: Prefer creating reusable primitives (e.g. Button, Card) over page-specific or duplicated implementations.
4. **Responsive**: Mobile-first design; use defined breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) intentionally.
5. **Accessibility**: All interactive elements need keyboard support and visible focus.
6. **Motion**: Use smooth, subtle Framer Motion transitions matching existing ease curves `[0.16, 1, 0.3, 1]`.

