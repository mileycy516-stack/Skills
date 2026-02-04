---
name: web-component-design
description: Master React, Vue, and Svelte component patterns including CSS-in-JS, composition strategies, and reusable component architecture. Use when building UI component libraries, designing component APIs, or implementing frontend design systems.
---

# Web Component Design

Build reusable, maintainable UI components using modern frameworks with clean composition patterns and styling approaches.

## When to Use This Skill
- Designing reusable component libraries or design systems
- Implementing complex composition patterns (Compound Comps, Slots, Render Props)
- Choosing CSS-in-JS solutions (Tailwind, Styled Components)
- Building accessible, responsive UI
- Refactoring legacy components

## Workflow
1.  **Define API**: Design the Props interface (semantic naming, defaults).
2.  **Choose Strategy**: Compound component vs Monolithic configuration?
3.  **Implement**: Build structure, styles (CVA), and behavior.
4.  **Refine**: Add Accessibility (ARIA) and Forward Refs.

## Instructions

### 1. Component Composition Patterns
**Compound Components (React)**:
Allow flexible layouts by breaking components into parts sharing state internally.
```tsx
<Select>
  <Select.Trigger>Choose</Select.Trigger>
  <Select.Options>...</Select.Options>
</Select>
```

**Slots (Vue/Svelte)**:
Named content injection points for flexible templates.
```html
<Card>
  <template #header>Title</template>
  <template #content>Body</template>
</Card>
```

### 2. Styling Approaches
*   **Tailwind + CVA**: Best for modern Design Systems. Type-safe variants.
*   **CSS Modules**: Best for isolating styles in legacy apps.
*   **Styled-Components**: Good for dynamic JS-driven styles.

### 3. Component API Design (Props)
*   **Boolean Flags**: `isLoading`, `isDisabled` (is[Adjective]).
*   **Variants**: `variant="primary"`, `size="lg"`.
*   **Composition**: Always accept `children` or `slots`.
*   **Overrides**: Always accept `className` or `style` to allow user customization.

### 4. Framework Examples
*   **React**: [CVA Button Example](examples/react-cva-button.md)
*   **React Compound**: [Accordion Pattern](examples/react-compound-accordion.md)
*   **Svelte**: Snippets & Runes for reactive props.

## Resources
- [Best Practices Checklist](references/component-best-practices.md)
