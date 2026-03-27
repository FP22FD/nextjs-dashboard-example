# Frontend Agents Guide

This guide documents the use of AI agents, Copilot, and automation tools in the frontend of the BooksLibrary project.
The frontend is a SPA React application built with Next.js 16, TypeScript 5, and Tailwind CSS 3.

## Purpose

- Accelerate development with AI while maintaining clean code, refactoring standards, and project consistency.
- Provide guidelines for AI-assisted code generation, component creation, and styling in the frontend stack.
- Ensure AI-generated code is reviewed, maintainable, and aligned with project conventions.

## Recommended Practices

- Always review AI-generated code before committing.
- Use AI agents for repetitive tasks: boilerplate components, TypeScript types, Tailwind layouts.
- Keep generated code aligned with the project's `frontend-clean-refactoring.md` standards.
- Document AI-generated logic if complex or non-obvious.
- Avoid over-reliance on AI for critical business logic.
- Use React icons when generating UI elements instead of manual SVGs.
- Optimize generated components to avoid unnecessary re-renders.
- Keep all prompts, agent scripts, and configuration versioned in the repo.

## Example Use Cases

- Generating new React components with Tailwind CSS classes.
- Refactoring existing components for readability and performance.
- Writing reusable TypeScript `type` or `interface` definitions.
- Suggesting responsive layouts, accessible HTML, and ARIA attributes.
- Helping with tests: React Testing Library patterns, unit or integration test suggestions.

## References

- See `guides/frontend-clean-refactoring.md` for clean code and refactoring guidelines.
- Follow project conventions for component structure, naming, and TypeScript types.
- Align AI usage with team practices and code review standards.
