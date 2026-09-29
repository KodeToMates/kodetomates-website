---
name: ui-ux-standards
description: KodeToMates visual principles, layout, typography, and component standards
---
# KodeToMates UI/UX Standards

## Visual Principles

Every interface should prioritize:

- clarity
- hierarchy
- consistency
- simplicity
- intentional motion
- accessibility
- responsiveness
- visual balance

Avoid:

- random gradients
- excessive shadows
- excessive rounded cards
- unnecessary animations
- visual clutter
- inconsistent spacing
- arbitrary colors
- decorative elements that don't support the content

## Layout

Use:

- consistent max-width containers
- predictable horizontal padding
- responsive grids
- intentional whitespace
- clear alignment

Never allow accidental horizontal overflow.

## Typography

Use a clear type hierarchy:

- display
- heading
- subheading
- body
- caption
- metadata

Avoid too many font families.

Maintain readable line lengths.

## Spacing

Use a consistent spacing scale.

Prefer design tokens over arbitrary values.

## Components

Components must have:

- clear purpose
- consistent states
- hover state where appropriate
- focus state
- disabled state where applicable
- responsive behavior

## Buttons

Buttons must clearly communicate:

- primary action
- secondary action
- tertiary action

Use consistent height, radius, typography and spacing.

## Forms

Forms must provide:

- labels
- clear validation
- helpful errors
- focus states
- keyboard navigation
- accessible controls

## Responsive

Every UI must work across:

- mobile
- tablet
- laptop
- desktop

Do not simply shrink desktop layouts.

Adapt composition where necessary.

## Motion

Motion should communicate hierarchy and interaction.

Prefer:

- subtle easing
- stagger
- spring-like movement
- opacity/transform animation

Avoid:

- excessive movement
- distracting loops
- animation that blocks usability

Respect prefers-reduced-motion.

## Theme & Color Standards

Always strictly follow the design system tokens for both Dark and Light modes:

### Dark Mode (Default)
- Canvas / Background: `#0F1419`
- Cards / Surfaces: `#17202A`
- Elevated Surfaces: `#1F2A37`
- Headings & Primary Text: `#FFFFFF` / `#F8F7F4`
- Secondary Text: `#8A929A`
- Borders & Dividers: `#293139`

### Light Mode
- Canvas / Background: `#F8F7F4`
- Cards / Surfaces: `#FFFFFF`
- Headings & Primary Text: `#17202A` (Main Dark)
- Secondary Text: `#8A929A`
- Borders & Dividers: `#293139` (with subtle opacity 10-15%) or `#E2E8F0`

### Brand Elements & Accents (Both Modes)
- Primary / Logo: `#DD6E42` (CTA buttons, icons, highlights)
- Hover / Active: `#C95732` (Interactive button hovers)
- Accent / Soft: `#F2B49D` (Badges, pills, subtle highlights)
- Approved Gradients:
  - Orange Gradient: `#DD6E42` -> `#C95732`
  - Dark Gradient: `#17202A` -> `#0F1419`
  - Soft Gradient: `#F2B49D` -> `#F8F7F4`
