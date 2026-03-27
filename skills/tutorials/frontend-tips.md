# Frontend Tips & Tricks

## TypeScript

- Prefer `type` for props and `interface` only if extension is needed.
- Use `readonly` for immutable objects.
- Avoid `any`; prefer explicit types or `unknown`.
- Enable `strict` mode in tsconfig.json.

## React

- Keep components pure and predictable.
- Use hooks correctly: `useEffect`, `useMemo`, `useCallback`.
- Prefer React icons over manual SVGs.
- Destructure props in the function signature.

## Tailwind CSS

- Group related utilities: spacing, colors, typography.
- Use responsive classes with a mobile-first approach.
- Break long className strings for better readability.
- Use Tailwind design tokens for consistency.

## Next.js

- Use `getStaticProps` for static data, `getServerSideProps` for dynamic data.
- Prefer `next/image` for optimized images.
- Keep API routes clean and versioned.
- Use `Link` for internal navigation.

## Debugging

- Use React DevTools to inspect the component tree.
- Console.log with clear labels.
- Test across multiple browsers.
- Use breakpoints in VS Code for TypeScript debugging.

## Git

- Follow git flow: `feature/`, `bugfix/`, `hotfix/`.
- Write clear commit messages.
- Rebase before merging to keep history clean.
- Use `.gitignore` for node_modules and environment files.
