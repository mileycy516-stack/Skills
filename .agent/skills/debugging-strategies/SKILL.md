---
name: debugging-strategies
description: Master systematic debugging techniques, profiling tools, and root cause analysis to efficiently track down bugs across any codebase or technology stack. Use when investigating bugs, performance issues, or unexpected behavior.
---

# Debugging Strategies

Transform debugging from frustrating guesswork into systematic problem-solving with proven strategies, powerful tools, and methodical approaches.

## When to Use This Skill
- Tracking down elusive bugs
- Investigating performance issues or memory leaks
- Analyzing crash dumps and stack traces
- Debugging production or distributed systems
- Profiling application performance

## Workflow
1.  **Reproduce**: Can you replicate it consistently? Create a minimal reproduction case. Document steps.
2.  **Gather Info**: Collect error messages, stack traces, environment details, and recent changes.
3.  **Hypothesize**: Formulate a theory based on observations (What changed? What's different?).
4.  **Test & Verify**: Use binary search, logging, or isolation to prove/disprove the hypothesis.
5.  **Fix**: Address the root cause, not just the symptom. Verify the fix.

## Instructions

### 1. Core Principles
*   **Scientific Method**: Observe -> Hypothesize -> Experiment -> Analyze -> Repeat.
*   **Don't Assume**: verify "impossible" scenarios.
*   **Rubber Ducking**: Explain the code line-by-line to an inanimate object.

### 2. Systematic Process
**Phase 1: Reproduce**
*   Isolate the problem. Remove unrelated code.
*   Check if it happens on all environments/users/browsers.

**Phase 2: Gather Information**
*   **Errors**: Full stack trace, codes.
*   **Environment**: OS, Runtime versions, Env Vars.
*   **Changes**: Git history, deployments.

**Phase 3: Form Hypothesis**
*   Focus on what changed recently.
*   Compare working vs. broken states.

**Phase 4: Test**
*   **Binary Search**: Comment out half the code to isolate the issue.
*   **Logging**: Trace execution flow and variable states.
*   **Diffing**: Compare config/data between working and broken environments.

### 3. Debugging Tools & Techniques

**JavaScript/TypeScript:**
*   `debugger;` statement for breakpoints.
*   `console.table()`, `console.time()`, `console.trace()`.
*   Performance profiling with `performance.mark()`.

**Python:**
*   `pdb` or `ipdb` (`import pdb; pdb.set_trace()`).
*   `breakpoint()` (Python 3.7+).
*   `logging` module over print statements.
*   `cProfile` for performance.

**Go:**
*   `delve` debugger (`dlv debug`).
*   `runtime/debug.PrintStack()`.
*   `pprof` for CPU/Memory profiling.

**Files & Resources:**
- [Advanced Techniques (Git Bisect, Memory Leaks)](references/advanced-techniques.md)
- [Quick Checklist](assets/debugging-checklist.md)

### 4. Common Patterns
*   **Intermittent Bugs**: Add logging, check race conditions, stress test.
*   **Performance**: Profile before optimizing. Look for N+1 queries, loops.
*   **Production**: Reproduce locally with anonymized data. Use feature flags.

## Resources
- `references/debugging-tools-guide.md`: Comprehensive tool documentation
- `references/performance-profiling.md`: Performance debugging guide
