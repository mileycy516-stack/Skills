---
name: planning
description: Use when you have a spec or requirements for a multi-step task, before writing implementation code. Helps break down complex features into bite-sized, verifiable tasks.
---

# Planning

## Overview

Write comprehensive implementation plans that break down complex features into bite-sized tasks (2-5 minutes each). Every task must include exact file paths, complete code snippets, and specific verification steps following TDD (Red-Green-Refactor) principles.

## When to Use

- Use after a design has been approved (e.g., via the brainstorming skill).
- Use before starting implementation on any multi-step feature.
- Use when you need to ensure systematic progress and early verification.

## Task Structure

Every task in the plan should follow this structure:

### Task N: [Component/Function Name]

**Files:**
- Create/Modify: `path/to/file`
- Test: `path/to/test_file`

**Step 1: Write the failing test**
Provide the exact test code.

**Step 2: Run test to verify it fails**
Provide the command and expected error.

**Step 3: Write minimal implementation**
Provide the minimal code to pass the test.

**Step 4: Run test to verify it passes**
Provide the command and expected success output.

**Step 5: Commit**
Provide the git command.

## Key Principles

- **Bite-Sized Tasks**: Each task should take 2-5 minutes.
- **Exact File Paths**: Never use placeholders.
- **Complete Code**: Include the actual code, not just descriptions.
- **TDD First**: Always write and verify the test failure before implementing.
- **YAGNI & DRY**: Keep it simple and don't repeat yourself.

## Execution Handoff

After completing the plan, save it to `docs/plans/YYYY-MM-DD-<feature-name>.md` and ask the user if they are ready to begin execution of the first task.
