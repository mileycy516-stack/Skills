# Responsive Component Patterns

## 1. Container Query Card
A card that switches from stacked (vertical) to row (horizontal) when it has room.
```css
.card-wrapper {
  container-type: inline-size;
}

.card {
  display: flex;
  flex-direction: column;
}

@container (min-width: 500px) {
  .card {
    flex-direction: row;
    gap: 1rem;
  }
}
```

## 2. Responsive Table (Scroll)
Simple horizontal scroll for complex data.
```html
<div class="table-container">
  <table>...</table>
</div>

<style>
.table-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* Smooth scroll on iOS */
  width: 100%;
}
</style>
```

## 3. Responsive Table (Card View)
Transform rows into cards on mobile via CSS (using `display: block` and `data-label` attributes).
```css
@media (max-width: 600px) {
  td {
    display: flex;
    justify-content: space-between;
  }
  td::before {
    content: attr(data-label);
    font-weight: bold;
  }
}
```
