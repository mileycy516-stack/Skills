---
name: reviewing-code
description: Master effective code review practices to provide constructive feedback, catch bugs early, and foster knowledge sharing. Use when reviewing pull requests, establishing review standards, or mentoring developers.
---

# Code Review Excellence

Transform code reviews from gatekeeping to knowledge sharing through constructive feedback, systematic analysis, and collaborative improvement.

## When to Use This Skill
- Reviewing pull requests and code changes
- Establishing code review standards for teams
- Mentoring junior developers through reviews
- Conducting architecture reviews
- Creating review checklists and guidelines

## Workflow
1. **Context Gathering (2-3 mins)**: Read PR description, check CI status, understand requirements.
2. **High-Level Review (5-10 mins)**: Verify architecture, file organization, and testing strategy.
3. **Line-by-Line Review (10-20 mins)**: Check logic, security, performance, and maintainability.
4. **Summary & Decision (2-3 mins)**: Summarize findings, decision (Approve/Change Request), and offer pairing.

## Instructions

### 1. The Review Mindset
**Goals:** Catch bugs, ensure maintainability, share knowledge, enforce standards.
**Anti-Goals:** Show off, nitpick formatting (use linters), block unnecessarily.

### 2. Effective Feedback
- **Specific & Actionable:** Instead of "This is wrong", say "This could cause a race condition... consider a mutex."
- **Educational:** "Have you considered the Repository pattern? It helps with testing."
- **Non-blocking (Nits):** "[nit] Consider `userCount` for clarity."

### 3. Review Scope Checklist
**Logic & Correctness:**
- [ ] Edge cases handled?
- [ ] Off-by-one errors?
- [ ] Null/undefined checks?
- [ ] Race conditions?

**Security:**
- [ ] Input validation?
- [ ] SQL injection / XSS risks?
- [ ] Sensitive data exposure?

**Performance:**
- [ ] N+1 queries?
- [ ] Unnecessary loops?
- [ ] Memory leaks?

**Maintainability:**
- [ ] Clear naming?
- [ ] Single responsibility functions?
- [ ] No magic numbers?

### 4. Code Review Templates

**PR Review Comment Template:**
```markdown
## Summary
[Brief overview]

## Strengths
- [Good patterns]

## Required Changes
🔴 [Blocking issue]

## Suggestions
💡 [Improvement idea]

## Questions
❓ [Clarification needed]

## Verdict
✅ Approve / 🔄 Request Changes
```

### 5. Language-Specific Patterns

**Python:**
- Avoid mutable default args (`def foo(items=[])`).
- Be specific with exceptions (`except ValueError`, not `except:`).
- Initialize mutable class attributes in `__init__`.

**TypeScript/JavaScript:**
- Avoid `any`.
- Handle async errors properly (try/catch).
- React: Don't mutate props directly methods.

## Resources
- [references/common-bugs-checklist.md](references/common-bugs-checklist.md)
- [references/security-review-guide.md](references/security-review-guide.md)
