# KodeToMates AI Agent Configuration

This directory (`.agent/`) contains the necessary configurations, guidelines, and skills that define how AI coding agents should interact with this repository.

## Files and Directories

- **`AGENTS.md` (Root Level):** The primary instruction file. It sets the baseline rules, project mission, technical standards, and workflow that AI agents must obey on every task.
- **`UI_RULES.md` (Root Level):** A concise UI/UX checklist that agents must follow when executing UI changes to ensure consistency with the KodeToMates design system.
- **`skills/`:** Contains domain-specific rules (Skills) that are automatically loaded by the AI agent when working on related tasks.

## Skills

The `skills/` directory contains individual Markdown files (`SKILL.md`) structured with YAML frontmatter. These are triggered automatically based on context:

- **`ui-ux-standards/`**: Visual layout, hierarchy, spacing, and typography rules.
- **`design-system/`**: Token-first CSS approaches, color palette, and component constraints.
- **`accessibility/`**: Semantic HTML, a11y standards, WCAG compliance, and keyboard navigation.
- **`frontend-architecture/`**: React/Next.js App Router structural rules, data fetching, and state management.
- **`performance/`**: JavaScript minimization, Core Web Vitals, and asset optimization.

## Workflow Instructions for Agents

1. **Read `AGENTS.md` first:** Agents must always operate under the rules defined in `AGENTS.md`.
2. **Apply Skills Contextually:** Use the knowledge contained within the specific `skills/` folders when working on relevant domains.
3. **Verify with `UI_RULES.md`:** When completing frontend tasks, agents must ensure all changes adhere to the 25 rules listed in `UI_RULES.md`.
