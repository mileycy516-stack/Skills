# Web Performance Optimization

## Core Web Vitals (CWV)

### 1. Optimize LCP (Largest Contentful Paint)
The main image or text block.
*   **Priority Hint**: `<img src="hero.jpg" fetchpriority="high" />`
*   **Preconnect**: `<link rel="preconnect" href="https://cdn.example.com">`
*   **Compression**: Use `avif` > `webp` > `jpg`.

### 2. Optimize INP (Interaction to Next Paint)
Responsiveness to clicks.
*   **Yield to Main Thread**: Breaking up long tasks.
    ```javascript
    async function doWork() {
       await scheduler.yield(); // or setTimeout(..., 0)
       processNextChunk();
    }
    ```
*   **React Concurrency**: Use `useTransition` for non-urgent updates.

### 3. Build Optimization
*   **Code Splitting**: `import()` dynamic imports for routes.
*   **Tree Shaking**: Ensure side-effects are marked in `package.json`.
*   **Bundle Analysis**: Use `webpack-bundle-analyzer`.
