# Tailwind Config Example (Design Tokens)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"], // Good for headings
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        // Fluid type example
        "fluid-base": "clamp(1rem, 2vw + 0.5rem, 1.125rem)",
        "fluid-xl": "clamp(2rem, 5vw + 1rem, 3.5rem)",
      },
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6", // Primary
          600: "#2563eb", // Primary Hover
          900: "#1e3a8a",
        },
      },
      spacing: {
        18: "4.5rem", // Custom spacing if 8pt grid isn't enough
      },
    },
  },
};
```
