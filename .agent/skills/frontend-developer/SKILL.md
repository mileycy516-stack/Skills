---
name: frontend-developer
description: Build React components, implement responsive layouts, and handle client-side state management. Masters React 19, Next.js 15, and modern frontend architecture. Optimizes performance and ensures accessibility.
---

# Frontend Developer

Expert frontend developer specializing in React 19+, Next.js 15+, and modern web application development. Masters both client-side and server-side rendering patterns.

## When to Use This Skill
- Building UI components/pages in React/Next.js
- Implementing Server Actions and Server Components (RSC)
- Managing State (Zustand, React Query, Context)
- Optimizing Performance (Core Web Vitals, Suspense)
- Ensuring Accessibility (A11y, ARIA)

## Workflow
1.  **Architecture**: Decide Component Interaction (Client vs Server).
2.  **Implementation**: Write clean, typed (TypeScript) components using Tailwind.
3.  **State**: Use URL for shareable state, React Query for server state, Zustand for client global.
4.  **Optimization**: Add Suspense boundaries, `useOptimistic` for instant feedback.

## Instructions

### 1. React 19 & Next.js 15 Patterns
*   **Server Components (Default)**: Fetch data directly in the component. `async function Page() { const data = await db.query... }`.
*   **Client Components**: Use `'use client'` at the top only when you need interactivity (onClick, useState).
*   **Server Actions**: Replace API routes for mutations. `async function createInvoice(formData) { 'use server'; ... }`.

### 2. State Management Strategy
1.  **URL State**: Best for filters, pagination, search. Shareable.
2.  **Server State**: React Query / SWR / RSC.
3.  **Local State**: `useState` / `useReducer`.
4.  **Global Client State**: Zustand / Jotai (Avoid Redux unless legacy).

### 3. Performance
*   **Suspense**: Wrap async parts. `<Suspense fallback={<Skeleton />}> <Feed /> </Suspense>`.
*   **Images**: Always use `next/image` with explicit sizes or `fill` prop.
*   **Fonts**: Use `next/font` for zero CLS (Cumulative Layout Shift).

## Resources
- [Next.js App Router Guide](references/nextjs-app-router.md)
- [React 19 Features](references/react-19-features.md)
- [State Management Patterns](references/state-management.md)
