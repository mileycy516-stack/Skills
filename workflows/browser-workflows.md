# Browser Workflows

> Auto-generated workflow documentation for Skills Project
> Last updated: 2026-02-05

## Quick Reference

| Workflow | Purpose | Steps |
|----------|---------|-------|
| Setup Environment | Initialize all skills and dependencies | 3 |
| Discover Skills | Find and inspect available capabilities | 2 |
| Create New Skill | Scaffold a new skill following standards | 4 |
| Test Browser Skill | Verify browser-use or playwright functionality | 3 |

---

## Core Workflows

### Workflow: Setup Environment
> Ensures all skills are ready for use by installing their specific dependencies.

1. Prepare the workspace
   - Navigate to the project root
   - Verify `setup-all.sh` exists and is executable
2. Execute global setup
   - Run `./setup-all.sh`
   - Verify Playwright, agent-browser, and browser-use dependencies are installed
3. Verify installation
   - Check if `node_modules` exists in `playwright-browser-automation`
   - Check if `browser-use` command is available in path

### Workflow: Discover Skills
> Identifies what the assistant can do and how to trigger specific behaviors.

1. List available skills
   - List contents of `.agent/skills/`
   - Read `README.md` for the latest index
2. Inspect a specific skill
   - Read the `SKILL.md` of the target skill
   - Note the triggers and required environment variables (e.g., API keys)

---

## Feature Workflows

### Workflow: Create New Skill
> Scaffolds a new skill that adheres to the Gemini Skill Creator standards.

1. Plan the skill
   - Use `brainstorming` skill to define triggers and scope
   - Use `gemini-skill-creator` to generate the `SKILL.md` frontmatter
2. Create directory structure
   - Create `.agent/skills/[name]`
   - Create subfolders: `scripts`, `examples`, `resources`
3. Implement core logic
   - Write `SKILL.md` with gerund name and 3rd-person description
   - Add supporting implementation files (bash scripts, JS helpers)
4. Register the skill
   - Add the new skill to the root `README.md` index
   - Update `setup-all.sh` if it requires build steps

---

## Edge Case Workflows

### Workflow: Test Browser Skill
> Verifies that the browser automation tools are working correctly on the host system.

1. Test Playwright
   - Run `cd .agent/skills/playwright-browser-automation && node run.js "await page.goto('https://example.com')"`
   - Verify screenshot is generated in `/tmp`
2. Test agent-browser
   - Run `npx agent-browser open https://example.com`
   - Run `npx agent-browser snapshot`
   - Verify accessibility tree is returned
3. Test browser-use
   - Run `browser-use open https://example.com`
   - Run `browser-use screenshot`
   - Verify persistent session stays active
