---
name: visual-design-foundations
description: Apply typography, color theory, spacing systems, and iconography principles to create cohesive visual designs. Use when establishing design tokens, building style guides, or improving visual hierarchy and consistency.
---

# Visual Design Foundations

Build cohesive, accessible visual systems using typography, color, spacing, and iconography fundamentals.

## When to Use This Skill
- Establishing design tokens for a new project
- Refining spacing (8pt grid) and sizing systems
- Selecting and pairing typefaces
- Building accessible color palettes (WCAG)
- Improving visual hierarchy
- Implementing dark mode

## Workflow
1.  **Define Type Scale**: Choose a modular scale (e.g., Major Third). Set base size (16px).
2.  **Define Spacing**: Adopt the 8pt grid (`0.5rem`).
3.  **Define Color Palette**: Define semantic roles (Primary, Secondary, Success, Breakdown).
4.  **Audit**: Check contrast ratios and accessibility.

## Instructions

### 1. Typography Scale
Use a modular scale for consistency.
```css
:root {
  --text-xs: 0.75rem;   /* 12px */
  --text-sm: 0.875rem;  /* 14px */
  --text-base: 1rem;    /* 16px */
  --text-lg: 1.125rem;  /* 18px */
  --text-xl: 1.25rem;   /* 20px */
  --text-4xl: 2.25rem;  /* 36px */
}
```
*   **Rules**: Line height 1.5 for body, 1.2 for headings. Max width 65ch for readability.

### 2. Spacing System (8-point Grid)
Avoid magic numbers. Everything should be a multiple of 4px or 8px.
*   `--space-1`: 4px (0.25rem)
*   `--space-2`: 8px (0.5rem)
*   `--space-4`: 16px (1rem)
*   `--space-8`: 32px (2rem)

### 3. Color System
Use semantic names over hex codes.
*   **Brand**: `--color-primary`
*   **Feedback**: `--color-success`, `--color-error`
*   **Neutral**: `--color-gray-50` to `--color-gray-900`
*   **Contrast**: Text must be 4.5:1 (AA) against background.

### 4. Iconography
Standardize sizes to match line-heights where possible.
*   Small: 16px (matches `text-sm` line-height somewhat)
*   Medium: 20px or 24px (matches `text-base` line-height)

## Resources
- [Tailwind Config Example](references/tailwind-config-example.md)
- [Accessibility Checklist](references/accessibility-checklist.md)
