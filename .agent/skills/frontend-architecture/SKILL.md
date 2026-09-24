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
