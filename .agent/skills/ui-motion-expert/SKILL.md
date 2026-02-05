---
name: ui-motion-expert
description: Master UI animation for "Premium" feel. Framer Motion, CSS Transitions, View Transitions API, and micro-interactions.
allowed-tools: Code Editor
---

# UI Motion Expert

Create "Premium" user experiences through fluid, physical, and meaningful motion.

## When to Use This Skill
- Adding "Wow" factor to landing pages.
- Implementing complex page transitions.
- Creating micro-interactions (Hover, Click, Toggle).
- Orchestrating staggered entrance animations.
- Improving perceived performance.

## Core Principles
1.  **Informative**: Motion should guide the user's eye and explain relationships (Spatial continuity).
2.  **Physical**: Use spring physics over linear easing for natural feel.
3.  **Performant**: Animate only `transform` and `opacity` to stay on the compositor thread.

## Micro-Interactions Library
*   **Buttons**: Scale up `1.02` on hover, `95%` on click. Lift (`translateY(-2px)`).
*   **Inputs**: Glow ring (2-4px) with brand color, animated label float.
*   **Cards**: "Premium Lift" - `translateY(-4px)` + Shadow Increase + Subtle Tilt.
*   **Lists**: Staggered entrance (100ms delay between items).

## Tool 1: Framer Motion (React Standard)

**Declarative Animations**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
>
  Content
</motion.div>
```

**Layout Animations (Magic Move)**
Automatically animate layout changes when DOM order changes.
```tsx
<motion.div layout>
  {/* Content that resizes */}
</motion.div>
```

## Tool 2: CSS Transitions & Keyframes
For simple micro-interactions involving state changes (`:hover`, `:focus`).

```css
.card {
  transition: transform 0.2s cubic-bezier(0.2, 0, 0, 1), 
              box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-elevation-high);
}
```

## Tool 3: View Transitions API (Modern Web)
Seamless page navigations without framework overhead.

```css
/* Enable view transitions */
@view-transition {
  navigation: auto;
}
```

## "The Premium Feel" Checklist
- [ ] **Staggered Lists**: Don't load everything at once. Stagger items by 50-100ms.
- [ ] **Feedback**: Every interaction (click, tap) has immediate visual feedback.
- [ ] **Exits**: Animate elements *out* (`AnimatePresence` in Framer) before removing them.
- [ ] **Skeleton Loading**: Use shimmering skeletons instead of spinners for layout stability.
