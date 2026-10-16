# UI Rules for KodeToMates

This document serves as the top-level UI architecture and design system reference. All agents modifying this project must adhere to these rules.

## Core Directives
1. **Design System First**: Use only the tokens defined in `styles/globals.css`. Never use raw hex values or arbitrary Tailwind colors like `text-blue-500` unless explicitly matching a token.
2. **Component Architecture**: Prefer creating reusable primitives (e.g. Button, Card) over page-specific or duplicated implementations.
3. **Responsive**: Mobile-first design; use defined breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) intentionally.
4. **Accessibility**: All interactive elements need keyboard support and visible focus.
5. **No Framer Motion (Yet)**: Use pure CSS animations as configured in `globals.css` until a motion library is approved.
