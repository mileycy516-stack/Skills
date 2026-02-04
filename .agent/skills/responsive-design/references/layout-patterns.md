# Layout Patterns

## 1. The Holy Grail (Grid)
Responsive page layout with Header, Footer, Sidebar, Main.
```css
.page-layout {
  display: grid;
  grid-template-areas: "header" "main" "sidebar" "footer";
  gap: 1rem;
}

@media (min-width: 768px) {
  .page-layout {
    grid-template-columns: 1fr 300px;
    grid-template-areas: "header header" "main sidebar" "footer footer";
  }
}
```

## 2. Automatic Card Grid (No Media Queries needed)
The most robust pattern for listings.
```css
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 1.5rem;
}
```

## 3. Sidebar toggle (CSS Only)
Using a hidden checkbox or `:target` to toggle sidebar on mobile.
(Prefer JS for accessibility in production, but CSS is good for prototypes).
