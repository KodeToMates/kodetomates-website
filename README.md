This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Code Quality & Pre-Commit Checks

This project enforces a strict quality gate to ensure lint and type issues are caught BEFORE code is committed.

### Scripts
- `npm run lint`: Runs ESLint across the project.
- `npm run lint:fix`: Auto-fixes standard ESLint errors.
- `npm run typecheck`: Available as the TypeScript validation command.
- `npm run check`: Runs lint + typecheck sequentially.
- `npm run build`: Validates the production build.

### Pre-Commit Workflow
- Husky runs automatically on `git commit`.
- `lint-staged` runs ESLint on staged JS/JSX/TS/TSX files.
- ESLint failures block the commit.

### Resolving Lint Errors
Do NOT use `eslint-disable` casually.
- **Hooks (useEffect):** Avoid syncing state if it can be derived during render. Capture refs properly for cleanup.
- **Next.js Images:** Use `<Image />` instead of `<img />`.
- **JSX Entities:** Escape quotes correctly (e.g. `&apos;`, `&quot;`).
