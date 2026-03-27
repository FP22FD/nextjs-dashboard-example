# TypeScript in React

- Always type props: `type Props = { ... }`.
- Prefer type aliases for standalone props; interface if extending.
- Use `React.FC` only if necessary, avoid by default.
- Type state with `useState<Type>()`.
- Avoid `any`; use `unknown` if type is uncertain.
- Use union types, enums, and discriminated unions when needed.
