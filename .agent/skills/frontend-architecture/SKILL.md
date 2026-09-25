---
name: frontend-architecture
description: KodeToMates React and Next.js frontend architecture guidelines
---
Rules:

- App Router
- server components by default
- client components only when interaction/state/browser APIs require them
- keep components small and composable
- colocate component-specific files where appropriate
- avoid unnecessary global state
- avoid prop drilling where a simpler composition works
- separate data fetching from presentation where appropriate
- use reusable UI primitives
- avoid giant page components
- maintain clear naming

Suggested structure:

app/
components/
  ui/
  layout/
  marketing/
lib/
hooks/
types/
public/

Adapt this to the existing project instead of blindly creating folders.

## Code Quality & Pre-Commit Rules

The agent must adhere to the following standards to ensure the repository remains lint-clean and strictly typed:

1. **Lint After Changes:** Always run `npm run lint` after meaningful code changes.
2. **No Unintentional Errors:** Never knowingly introduce ESLint errors or suppress them casually.
3. **No `eslint-disable`:** Never use `eslint-disable` as a shortcut. Exceptions must be strictly justified and documented.
4. **React Hooks:** Fix React effect/state issues at the root cause (e.g., derive state instead of unnecessary `useEffect` state synchronization).
5. **Effect Cleanup:** Correctly handle effect cleanup and dependencies in `useEffect`. Use current ref values within the cleanup block if utilizing refs.
6. **Images:** Use `next/image` instead of raw `img` where appropriate to optimize performance and prevent ESLint errors.
7. **Accessibility:** Keep accessibility rules satisfied at all times.
8. **TypeScript:** Keep TypeScript strict. Do not weaken strictness configs.
9. **Pre-commit Checks:** Run typecheck (`npm run typecheck`) before commit.
10. **Builds:** Run a production build (`npm run build`) before important releases or PRs.
11. **Clean Commits:** Keep commits lint-clean. The pre-commit quality gate (Husky + lint-staged) will block failing commits.
