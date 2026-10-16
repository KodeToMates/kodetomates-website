---
name: Frontend Architecture
description: Next.js component and rendering strategy.
---

## Rules
- **Server Components**: Prefer React Server Components (RSC) by default.
- **Client Components**: Only use `'use client'` when hooks or interactivity (e.g., `useState`, `onClick`) are required.
- **Structure**: Place primitives in `components/ui/`, layout wrappers in `components/layout/`, and major sections in `components/sections/`.
