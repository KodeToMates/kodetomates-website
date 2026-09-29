---
name: design-system
description: KodeToMates design system rules, token approach, and brand foundation
---
Define a token-first approach.

Use CSS variables/design tokens for:

- colors
- spacing
- typography
- radius
- shadows
- motion
- breakpoints

KodeToMates Brand Palette:

Core Swatches:
- Primary / Logo: #DD6E42 (Buttons, links, icons, highlights)
- Hover / Active: #C95732 (Buttons, interactive elements)
- Main Dark: #17202A (Headers, sections, navigation)
- Dark Background: #0F1419 (Hero, full sections, modals)
- Light Background: #F8F7F4 (Pages, sections in light mode)
- Secondary Text: #8A929A (Descriptions, metadata, subheadings)
- Accent / Soft: #F2B49D (Badges, subtle highlights, pill tags)
- Borders: #293139 (Cards, dividers, inputs)

Dark Mode:
- Background (Canvas): #0F1419 (Body background, hero, full sections, modals)
- Surface / Cards: #17202A (Header, section cards, navigation)
- Surface Elevated: #1F2A37 (Elevated cards, dropdowns, popovers)
- Primary Text / Headings: #FFFFFF / #F8F7F4 (High-contrast text on dark backgrounds)
- Secondary Text: #8A929A (Descriptions, metadata, labels)
- Borders / Dividers: #293139 (Card borders, dividers, form inputs)
- Primary Action: #DD6E42 (Buttons, CTA, active links)
- Hover / Active: #C95732 (Button hover, active interactive elements)
- Accent / Soft: #F2B49D (Badges, subtle pill highlights)

Light Mode:
- Background (Canvas): #F8F7F4 (Page background, main body, sections)
- Surface / Cards: #FFFFFF (White cards, elevated sections, modals)
- Primary Text / Headings: #17202A (Main dark for titles, headers, navigation text)
- Secondary Text: #8A929A (Descriptions, metadata, subtitles)
- Borders / Dividers: #293139 with low opacity (10-15%) or #E2E8F0 (Subtle card borders, inputs, separators)
- Primary Action: #DD6E42 (Buttons, CTA, active links, brand icons)
- Hover / Active: #C95732 (Button hover, active interactive elements)
- Accent / Soft: #F2B49D (Badges, soft pill tags, subtle highlights)

Gradients / Accents (Optional):
- Orange Gradient: #DD6E42 -> #C95732 (Hero highlights, primary buttons, accents)
- Dark Gradient: #17202A -> #0F1419 (Dark mode surfaces and sections)
- Soft Gradient: #F2B49D -> #F8F7F4 (Light mode soft hero glows, card accents, pills)

Do NOT introduce new colors randomly.

Components should consume tokens instead of repeatedly hardcoding values.
