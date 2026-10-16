# KodeToMates Project Structure & AI Instructions

## 1. AI Instruction Files
The project contains several files dedicated to guiding AI agents during development:

- **`AGENTS.md`**: Contains Next.js-specific agent rules. It warns about breaking changes in Next.js versions and directs agents to read the relevant Next.js documentation before writing code.
- **`CLAUDE.md`**: Contains `@AGENTS.md`, serving as a pointer for the Claude assistant (and others) to reference `AGENTS.md`.
- **`UI_RULES.md`**: Serves as the top-level UI architecture and design system reference. It mandates using design system tokens, building reusable primitives, ensuring responsiveness and accessibility, and avoiding `framer-motion` for now.
- **`.agent/README.md`**: Instructs agents to consult the relevant `SKILL.md` files before executing tasks related to UX, Accessibility, Architecture, or Performance.
- **`.agent/skills/`**: Contains specialized skill modules for agents:
  - `accessibility/SKILL.md`: A11y rules for semantic HTML and WCAG compliance.
  - `design-system/SKILL.md`: Usage of tokens and Tailwind variables.
  - `frontend-architecture/SKILL.md`: Next.js component and rendering strategy.
  - `performance/SKILL.md`: Performance requirements and optimizations.
  - `ui-ux-standards/SKILL.md`: Guidelines for visual hierarchy, whitespace, and consistency.

## 2. Project Folder Structure
The file system is organized as follows:

```
c:\kodeToMates\company-website\
├── .agent/             # AI agent configuration and skills
│   └── skills/         # Specialized AI agent skills
├── .github/            # GitHub configuration
│   └── workflows/      # CI/CD pipelines
├── app/                # Next.js App Router
│   ├── (marketing)/    # Route group for marketing pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── insights/
│   │   ├── mates/
│   │   ├── projects/
│   │   └── what-we-do/
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   └── not-found.tsx
├── components/         # Reusable React components
│   ├── cards/
│   ├── common/
│   └── layout/
├── config/             # Global configuration files
│   ├── metadata.ts
│   ├── navigation.ts
│   └── site.ts
├── data/               # Static data and mock content
│   ├── insights.ts
│   ├── mates.ts
│   └── projects.ts
├── features/           # Feature-specific logic and UI modules
│   ├── about/
│   ├── contact/
│   ├── home/
│   ├── insights/
│   ├── mates/
│   └── projects/
├── hooks/              # Custom React hooks (currently empty)
├── lib/                # Shared utilities and helpers
│   ├── constants.ts
│   ├── utils.ts
│   └── validations/
├── public/             # Static assets
│   ├── fonts/
│   ├── icons/
│   └── images/
├── styles/             # Global style configurations (currently empty)
└── types/              # TypeScript type definitions
    ├── common.ts
    ├── insight.ts
    ├── mate.ts
    └── project.ts
```

## 3. Next.js Architecture
- **App Router & Route Organization**: The `app/` directory handles routing. The `(marketing)` folder is a route group that keeps the URL structure clean (e.g., `/about` instead of `/marketing/about`) while logically separating the marketing content.
- **Pages and Layouts**: Main layouts, error states, and generic pages exist at the root of `app/`. Specific pages belong in their respective feature folders within the `(marketing)` group.
- **Reusable Components**: Agnostic UI components (like buttons, specific card designs, and layouts) belong in the `components/` directory, organized by category (`cards`, `common`, `layout`).
- **Feature-Specific Logic**: Code that is specific to a domain or business feature (e.g., specific workflows for "mates" or "projects") resides in the `features/` directory.
- **Shared Utilities, Types, and Data**: Utility functions belong in `lib/`, shared interfaces and type definitions in `types/`, and statically defined content (like lists of projects) in `data/`.
- **Assets**: Static files such as images and fonts are served from the `public/` directory.
- **AI Governance**: AI instructions in `UI_RULES.md` and the `.agent/skills` dictate how code is formatted, which design tokens to use, and how Next.js features should be implemented, ensuring a cohesive and standardized codebase.

## 4. Cleanup Result
- **Existing Files**: The standard Next.js App Router foundation (`app/layout.tsx`, `app/globals.css`, etc.) exists. Reusable component directories and feature slice directories have been cleanly established.
- **Restored/Recreated Files**: The `types/`, `config/`, and `data/` directories correctly contain their foundation files as per the recent git operations.
- **Missing Items**: No critically expected files are missing. `hooks/` and `styles/` exist but are currently empty, ready for future development.
- **Match with Instructions**: The current file structure perfectly aligns with standard modern Next.js project architecture and the provided agent rules.
