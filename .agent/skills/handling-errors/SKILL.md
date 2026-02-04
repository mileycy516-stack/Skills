---
name: handling-errors
description: Master error handling patterns across languages including exceptions, Result types, error propagation, and graceful degradation to build resilient applications. Use when implementing error handling, designing APIs, or improving application reliability.
---

# Error Handling Patterns

Build resilient applications with robust error handling strategies that gracefully handle failures and provide excellent debugging experiences.

## When to Use This Skill
- Implementing error handling in new features
- Designing error-resilient APIs
- Debugging production issues
- Implementing retry/circuit breaker patterns
- Handling async/concurrent errors

## Workflow
1.  **Categorize**: Is it recoverable (network timeout) or unrecoverable (null pointer, corrupt memory)?
2.  **Define Strategy**: Exception hierarchy vs Result types?
3.  **Implement**: Use try/catch contexts, retry logic, or circuit breakers.
4.  **Recover**: Graceful degradation, fallback values, cleanup.

## Instructions

### 1. Core Philosophies
*   **Exceptions**: For unexpected conditions. Disrupts flow. (Python, Java behavior)
*   **Result Types**: For expected failures. Functional, type-safe. (Rust, FP behavior)
*   **Panic/Crash**: Only for impossible states/dev bugs.

### 2. Language-Specific Patterns

**Python:**
*   Use custom exception hierarchies (`ApplicationError` -> `ValidationError`).
*   Example: `raise NotFoundError("User not found", code="404")`.
*   Use `contextmanager` for cleanup (transactions, streams).

**TypeScript/JavaScript:**
*   Async/Await: ALWAYS use `try/catch`.
*   Define custom `class AppError extends Error`.
*   Functional: Consider a `Result<T, E>` type wrapper for operations.

**Rust:**
*   Use `Result<T, E>` for recoverable errors.
*   Use `?` operator to propagate.
*   Use `Option<T>` for nullable values.

### 3. Universal Resilience Patterns
**Circuit Breaker:**
Stop calling a failing service to prevent cascading failure. Open -> Half-Open -> Closed states.

**Error Aggregation:**
Validate *all* fields and return *all* errors at once, rather than failing on the first one.

**Graceful Degradation:**
Primary fails? -> Try Secondary -> Try Cache -> Return Default.

**Exponential Backoff:**
Retry... wait 1s... retry... wait 2s... retry... wait 4s... stop.

## Resources
- [Exception Hierarchy Design](references/exception-hierarchy-design.md)
- [Error Recovery Strategies](references/error-recovery-strategies.md)
