# agent-browser Commands API

## Navigation
- `open <url>`: Opens the specified URL.
- `back`: Goes back in history.
- `forward`: Goes forward in history.
- `reload`: Reloads the current page.

## State & Inspection
- `snapshot`: Takes a snapshot of the current page, returning the accessibility tree and element refs (`@e1`, etc.).
- `get title`: Returns the page title.
- `get url`: Returns the current URL.
- `get content`: Returns the full page HTML or text.

## Interaction
- `click <selector>`: Clicks an element.
- `fill <selector> <text>`: Fills an input.
- `press <key>`: Presses a keyboard key (e.g., `Enter`, `Tab`).
- `hover <selector>`: Hovers over an element.

## Logic & Scripting
- `eval <script>`: Evaluates JavaScript in the browser context.
- `wait <selector>`: Waits for an element to appear.
- `wait timeout <ms>`: Waits for a specific amount of time.

## Options
- `--json`: Output result in JSON format.
- `--session <id>`: Use a specific session.
- `--headed`: Show the browser window.
- `--executable-path <path>`: Use a custom browser executable.
