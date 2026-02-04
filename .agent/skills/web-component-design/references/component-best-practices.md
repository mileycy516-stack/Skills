# Component Best Practices Checklist

## API Design
- [ ] **Semantic Naming**: Use `isLoading` instead of `loading`, `onOpenChange` instead of `setOpen`.
- [ ] **Composition**: Does it accept `children`? Can I wrap it?
- [ ] **Polymorphism**: Can I render it as an `<a>` tag instead of a `<button>` (the `asChild` pattern)?
- [ ] **Refs**: Is `ref` forwarded to the root DOM element?

## Accessibility (A11y)
- [ ] **ARIA**: proper `aria-expanded`, `aria-label` where needed.
- [ ] **Keyboard**: Can I tab to it? Can I trigger it with Enter/Space?
- [ ] **Contrast**: Do visual states (hover/focus) maintain contrast?

## Performance
- [ ] **Memoization**: Are callbacks stable? Use `useCallback`.
- [ ] **Bundle Size**: Are we importing massive libraries for small features?
- [ ] **Render Count**: Does typing in an input re-render the whole page?

## Quality
- [ ] **Error Boundaries**: Does it crash the whole app if it fails?
- [ ] **Empty States**: Does it handle empty lists gracefully?
- [ ] **Loading States**: Does it show feedback immediately?
