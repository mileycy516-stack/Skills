---
name: react-architecture
description: Master modern React architecture, including Composition patterns, Hooks, Server Components (RSC), and Next.js best practices.
allowed-tools: Code Editor
---

# React Architecture & Patterns

Expert guidance on building scalable, maintainable, and performant React applications.

## Use this skill when
- Designing complex component hierarchies.
- Refactoring "Prop Drilling" or massive components.
- Implementation Compound Components.
- Optimizing re-renders and state management.
- Migrating to React Server Components (RSC).

## 1. Composition Patterns

### Compound Components
Encapsulate flexible parent-child relationships where they share implicit state.

```tsx
// Usage
<Select>
  <Select.Trigger />
  <Select.List>
    <Select.Option value="1">Option 1</Select.Option>
  </Select.List>
</Select>

// Implementation
const SelectContext = createContext();
function Select({ children }) { ... }
Select.Option = function Option({ value, children }) { ... }
```

### Slots (Render Props)
Pass UI as data to avoid layout coupling.

```tsx
function Layout({ header, content, footer }) {
  return (
    <div className="grid">
      <header>{header}</header>
      <main>{content}</main>
      <footer>{footer}</footer>
    </div>
  )
}
```

## 2. State Management Rules
1.  **Local State (useState)**: UI interactions (isOpen, inputValue).
2.  **URL State**: Search params, filters, pagination. (Use `useSearchParams`).
3.  **Server State**: API data (Use `TanStack Query` or `SWR`).
4.  **Global State**: Only for verified global needs (Theme, User Session). Use `Zustand` or `Jotai`. Do NOT use Redux unless legacy.

## 3. Performance & Hooks
- **Memoization**: Only use `useMemo` / `useCallback` for expensive calculations or referential stability in massive lists.
- **Custom Hooks**: Extract logic (`useWindowSize`, `useAuth`) to keep components view-focused.

## 4. Next.js / Server Components
- **Fetch on Server**: Make DB calls directly in async Server Components.
- **Client Islands**: Push interactivity (`useState`) down the tree to the leaves (`'use client'`).

## Resources
- [React Beta Docs](https://react.dev)
- [Patterns.dev](https://www.patterns.dev/)
