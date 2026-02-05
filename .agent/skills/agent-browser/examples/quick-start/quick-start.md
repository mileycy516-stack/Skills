# Quick Start with agent-browser

Follow this basic workflow to get started with `agent-browser`.

## 1. Open a website
```bash
npx agent-browser open https://news.ycombinator.com
```

## 2. Get a snapshot with refs
The snapshot command is critical. it tells you what elements are on the page and gives them deterministic IDs like `@e1`.
```bash
npx agent-browser snapshot
```

## 3. Interact using a ref
Look at the output from the snapshot. Find the "Login" link or similar, and click it using its `@e` ID.
```bash
npx agent-browser click @e3
```

## 4. Fill a form
```bash
npx agent-browser fill @e5 "my_username"
npx agent-browser fill @e6 "my_password"
npx agent-browser click @e7
```

## 5. Get the result
```bash
npx agent-browser get title
```
