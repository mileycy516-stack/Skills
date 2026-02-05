---
name: design-system-architect
description: Master design system architecture to create consistent, maintainable, and scalable UI foundations. Establish design tokens, theming hierarchies, type scales, and brand identity codes.
allowed-tools: Code Editor
---

# Design System Architect

Master design system architecture to create consistent, maintainable, and scalable UI foundations across web and mobile applications.

## When to Use This Skill
- Creating design tokens (colors, type, spacing).
- Establishing token hierarchies (Primitive -> Semantic -> Component).
- Defining visual foundations (8pt grid, modular type scales).
- Implementing light/dark theme switching.
- Architecting consistent component libraries.
- **Brand Implementation**: Translating Brand Guidelines (Colors, Voice) into code.

## Core Concepts

### 1. Token Hierarchy (The "3-Layer Cake")
Understanding the relationship between layers is critical for scalability.

*   **Layer 1: Primitive Tokens (Raw)**
    *   *Definition*: Agnostic raw values.
    *   *Example*: `--color-blue-500: #3b82f6`, `--space-4: 1rem`
    *   *Goal*: The "Palette" available to the system.

*   **Layer 2: Semantic Tokens (Intent)**
    *   *Definition*: Contextual meaning; references primitives.
    *   *Example*: `--text-primary: var(--color-gray-900)`, `--status-critical: var(--color-red-500)`
    *   *Goal*: The "Voice" of the system. Allows theming (remapping).

*   **Layer 3: Component Tokens (Specific)**
    *   *Definition*: Specific component usage.
    *   *Example*: `--button-bg-hover: var(--interactive-primary-hover)`
    *   *Goal*: Isolation. Changing a button shouldn't break a card.

### 2. Visual Foundations

**Typography Scale**
Use a modular scale (e.g., Major Third 1.250).
```css
:root {
  --text-xs: 0.75rem;   /* 12px */
  --text-base: 1rem;    /* 16px */
  --text-xl: 1.25rem;   /* 20px */
}
```
*   **Rules**: Line height 1.5 for body, 1.2-1.1 for headings.

**Spacing System (8pt Grid)**
Avoid magic numbers. Everything is a multiple of 4px or 8px.
*   `--space-1`: 0.25rem (4px)
*   `--space-2`: 0.5rem (8px)
*   `--space-4`: 1rem (16px) - *The base unit*

### 3. Aesthetics & Brand Identity
*   **Styles**: Support for Glassmorphism, Aurora UI, Linear/Vercel Aesthetic.
*   **Framework**: Refer to `resources/ai-design-framework.md` for specific palettes and patterns.
*   **Gradients**: Define brand gradients as tokens (`--gradient-brand: linear-gradient(...)`).
*   **Shadows**: Use layered shadows for depth (`--shadow-elevation-low`, `--shadow-elevation-high`).

### 4. Implementation Architecture

**Theming Infrastructure (React)**
1.  **Storage**: Persist in `localStorage` to avoid FOUC.
2.  **System Sync**: Listen to `prefers-color-scheme`.
3.  **Injector**: Apply `.dark` class to `<html>`.

**Component Variants (CVA)**
Use `class-variance-authority` for type-safe variants.
```typescript
const button = cva("rounded font-medium transition-colors", {
  variants: {
    intent: {
      primary: "bg-brand-500 text-white hover:bg-brand-600",
      secondary: "bg-surface-200 text-text-primary"
    },
    // ...
  }
});
```

## Best Practices
- **Name by Purpose**: `text-danger` ✅ vs `text-red` ❌.
- **Private Primitives**: Developers should use `surface-subtle`, not `gray-50`.
- **Accessibility**: Ensure Semantic tokens meet WCAG 2.1 AA (4.5:1) by default.
