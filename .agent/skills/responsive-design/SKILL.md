---
name: responsive-design
description: Master modern responsive design techniques (Container Queries, Fluid Type, Grid) to create interfaces that adapt seamlessly across all screen sizes. Use when implementing mobile-first layouts, adaptive navigation, and robust component systems.
---

# Responsive Design

Master modern responsive design techniques to create interfaces that adapt seamlessly across all screen sizes and device contexts.

## When to Use This Skill
- Implementing mobile-first responsive layouts
- Component-level responsiveness (Container Queries)
- Fluid typography and spacing scales (clamp)
- Building complex layouts with CSS Grid/Flexbox
- Responsive Images and Media handling
- Designing adaptive navigation

## Workflow
1.  **Mobile First**: Start coding for the smallest screen (< 640px). Add `min-width` queries to enhance for larger screens.
2.  **Fluid**: Use relative units (`%`, `rem`, `vw`) and fluid clamp scales for type/spacing.
3.  **Adaptive**: Use Container Queries (`@container`) for high-reuse components.
4.  **Layout**: Use Grid for 2D layouts and Flexbox for 1D alignment.

## Instructions

### 1. Modern Breakpoint Strategy (Mobile First)
Start with base styles (mobile), then override up.
```css
/* Base: Mobile */
.card { padding: 1rem; }

/* sm: Tablet/Landscape Phone */
@media (min-width: 640px) { .card { padding: 1.5rem; } }

/* md: Tablet */
@media (min-width: 768px) { ... }

/* lg: Laptop */
@media (min-width: 1024px) { ... }
```

### 2. Container Queries (Component-Level)
Make components responsive to their *container*, not the viewport.
```css
.card-container { container-type: inline-size; container-name: card; }

@container card (min-width: 400px) {
  .child-element { display: flex; } /* Change layout based on container width */
}
```

### 3. Fluid Typography & Spacing
Use `clamp(min, preferred, max)` to scale smoothly without breakpoints.
```css
:root {
  /* Scales from 1rem to 1.5rem between 320px and 1280px viewports */
  --text-fluid: clamp(1rem, 0.9rem + 0.5vw, 1.5rem);
}
```

### 4. Common Patterns
*   **Grid Auto-Fit**: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` for automatic card grids.
*   **Responsive Images**: Use `<picture>` or `srcset` to serve smaller images to mobile.
*   **Viewport Units**: Use `dvh` (dynamic viewport height) for mobile 100% height to avoid address bar issues.

## Resources
- [Layout Patterns](references/layout-patterns.md)
- [Responsive Components](references/responsive-components.md)
