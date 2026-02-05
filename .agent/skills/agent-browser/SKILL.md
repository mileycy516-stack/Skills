---
name: agent-browser
description: A comprehensive skill for using agent-browser, a CLI tool for browser automation designed for AI agents, developed by Vercel Labs. This skill covers installation, core commands, selectors (refs, CSS, XPath, semantic locators), agent mode, sessions, options, and best practices. Use this skill whenever the user needs to automate browser interactions via CLI commands, especially for AI agents that need to interact with web pages.
license: Complete terms in LICENSE.txt
---

## When to use this skill

Use this skill whenever the user wants to:
- Automate browser interactions via CLI commands
- Use browser automation for AI agents
- Navigate websites and interact with pages using command-line tools
- Use refs-based element selection for deterministic automation
- Integrate browser automation into AI agent workflows
- Capture snapshots of web pages with accessibility trees
- Fill forms, click elements, and extract content via CLI
- Use semantic locators for more reliable element selection
- Work with browser automation in agent mode with JSON output
- Manage multiple browser sessions
- Debug browser automation with headed mode
- Use authenticated sessions with custom headers
- Connect to existing browsers via CDP
- Stream browser viewport for live preview

## How to use this skill

This skill is organized to match the agent-browser official documentation structure (https://github.com/vercel-labs/agent-browser/blob/main/README.md). When working with agent-browser:

1. **Install agent-browser**:
   - Run `npx agent-browser setup` or use `uvx` for one-off commands.

2. **Quick Start**:
   - `npx agent-browser open https://example.com`
   - `npx agent-browser snapshot` (to see the page and element refs)
   - `npx agent-browser click @e1` (using a ref from the snapshot)

3. **Core Workflow**:
   - **Snapshot First**: Always run `snapshot` to get the accessibility tree and element references (`@e1`, `@e2`, etc.).
   - **Interact with Refs**: Use `@e[number]` to interact with elements deterministically.

4. **Agent Mode**:
   - Use the `--json` flag to get responses in structured JSON format, ideal for internal processing.

### Command Reference Summary

| Command | Description |
|---------|-------------|
| `open <url>` | Navigate to a URL |
| `snapshot` | Get the page content and accessibility tree with refs |
| `click <selector>` | Click an element (e.g., `@e1`, `button`, `.link`) |
| `fill <selector> <text>` | Fill an input field |
| `eval  ` | Execute JavaScript in the page context |
| `get <info>` | Retrieve info (title, url, content, etc.) |
| `wait <condition>` | Wait for specific states or elements |

## Multi-Step Examples

### Filling a Search Form
```bash
# 1. Open the page
npx agent-browser open https://google.com

# 2. Get the snapshot to find the search box ref
npx agent-browser snapshot

# 3. Fill the search box (assume it was @e5)
npx agent-browser fill @e5 "agent-browser vercel"

# 4. Press Enter
npx agent-browser press Enter
```

### Extracting Data with Agent Mode
```bash
npx agent-browser --json open https://news.ycombinator.com
npx agent-browser --json snapshot
```

## Best Practices

1. **Use Refs**: Prefer refs (@e1, @e2) over traditional selectors for deterministic automation.
2. **Snapshot First**: Always snapshot before interacting with elements to get refs.
3. **Agent Mode**: Use `--json` flag for machine-readable output in agent mode.
4. **Session Management**: Use `--session` to maintain state across commands.
5. **Interactive Snapshot**: Use `-i` flag for interactive snapshot selection.
6. **Semantic Locators**: Use semantic locators (role/name) when refs are not available.

## Resources

- **GitHub Repository**: https://github.com/vercel-labs/agent-browser
- **Official README**: https://github.com/vercel-labs/agent-browser/blob/main/README.md
