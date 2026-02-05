# Playwright Skill API Reference

This document provides a detailed overview of the tools and helpers available in this skill.

## Core Helpers (`lib/helpers.js`)

You can access these via `const helpers = require('./lib/helpers')` in your scripts.

### `detectDevServers()`
Scans common ports (3000, 5173, 8080, etc.) on `localhost` to find running applications.
- **Returns**: `Promise<string[]>` (URLs)

### `createContext(browser, options)`
Standard way to create a Playwright context with custom headers pre-configured.
- **Arguments**:
  - `browser`: Playwright Browser instance
  - `options`: Standard Playwright context options

### `getContextOptionsWithHeaders(options)`
Merges provided options with headers defined in environment variables (`PW_HEADER_NAME`, `PW_HEADER_VALUE`, `PW_EXTRA_HEADERS`).

### `safeClick(page, selector, options)`
Waits for an element to be visible before clicking.
- **Arguments**:
  - `page`: Playwright Page instance
  - `selector`: CSS/Playwright selector
  - `options`: `{ retries: number }`

### `safeType(page, selector, text)`
Clears an input field and types text safely.

### `takeScreenshot(page, name)`
Saves a full-page screenshot to `/tmp/screenshot-<name>-<timestamp>.png`.

### `handleCookieBanner(page)`
Attempts to dismiss common cookie consent dialogs.

### `extractTableData(page, selector)`
Parses a table into a 2D array of strings.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PW_HEADER_NAME` | Name of a custom header to include in all requests |
| `PW_HEADER_VALUE` | Value of the custom header |
| `PW_EXTRA_HEADERS` | JSON string of multiple headers (e.g. `'{"X-Auth":"tok"}'`) |

## Playwright Basics

### Locators
Prefer `page.locator()` over `page.$()` for better resilience.
```javascript
await page.locator('button:has-text("Submit")').click();
```

### Waiting
Avoid `page.waitForTimeout()`. Use:
- `page.waitForSelector(selector)`
- `page.waitForURL(url)`
- `page.waitForLoadState('networkidle')`

### Viewports
```javascript
await page.setViewportSize({ width: 1280, height: 720 });
```
