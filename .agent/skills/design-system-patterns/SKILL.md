---
name: design-system-patterns
description: Build scalable design systems with design tokens, theming infrastructure, and component architecture patterns. Use creating design tokens, implementing theme switching, building component libraries, or establishing design system foundations.
---

# Design System Patterns

Master design system architecture to create consistent, maintainable, and scalable UI foundations across web and mobile applications.

## When to Use This Skill
- Creating design tokens (colors, type, spacing)
- Implementing light/dark theme switching
- Building multi-brand theming systems
- Architecting consistent component libraries
- Establishing design-to-code workflows (Figma -> React)

## Workflow
1.  **Define Primitives**: Define the raw pallets (Core Colors, Font families, Spacing scale).
2.  **Define Semantics**: Create aliases based on intent (`text-primary` vs `gray-900`).
3.  **Build Components**: Use semantic tokens to build component-specific variables (`btn-bg`).
4.  **Implement**: Use CSS Variables, React Context, or a library like `shadcn/ui` / `cva`.

## Instructions

### 1. Token Hierarchy
Understanding the three layers is critical for scalability.
*   **Layer 1: Primitive Tokens**: Raw values. Is agnostic of design intent.
    *   `--color-blue-500: #3b82f6`
    *   `--space-4: 1rem`
*   **Layer 2: Semantic Tokens**: Contextual meaning. References primitives.
    *   `--text-primary: var(--color-gray-900)`
    *   `--interactive-primary: var(--color-blue-500)`
*   **Layer 3: Component Tokens**: Specific usage. References semantics.
    *   `--button-bg: var(--interactive-primary)`

### 2. Theming Infrastructure (React)
*   **Storage**: Persist theme preference in `localStorage` to avoid flash of wrong theme.
*   **System Preference**: Listen to `window.matchMedia("(prefers-color-scheme: dark)")`.
*   **CSS Class**: Toggle a `.dark` class on the `<html>` or `<body>` element.

### 3. Component Architecture (CVA)
Use `class-variance-authority` (CVA) to manage component variants simply.
```typescript
const buttonVariants = cva("base-styles", {
  variants: {
    intent: { primary: "bg-primary", secondary: "bg-secondary" },
    size: { sm: "h-8", md: "h-10" }
  },
  defaultVariants: { intent: "primary", size: "md" }
});
```

### 4. Best Practices
*   **Name by Purpose**: `text-danger` (Good) vs `text-red` (Bad).
*   **Private Primitives**: Don't use `gray-50` directly in components; use `surface-subtle`.
*   **Automation**: Use tools like Style Dictionary to transform tokens for iOS/Android.

## Resources
- [Full Token Example](references/token-architecture.md)
- [React Theme Provider](references/react-theme-provider.md)
- [CVA Component Pattern](references/cva-component-pattern.md)
