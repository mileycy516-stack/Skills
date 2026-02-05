---
name: error-handling-expert
description: Master error handling patterns across languages including exceptions, Result types, error propagation, and graceful degradation to build resilient applications. Use when designing error handling systems, APIs, or improving application reliability.
---

# Error Handling Expert

Build resilient applications with robust error handling strategies that gracefully handle failures and provide excellent debugging experiences. This skill consolidates best practices for designing error architectures.

## When to Use This Skill
- Designing error handling for new features or APIs
- Deciding between Exceptions vs Result types
- Implementing retry/circuit breaker patterns
- Improving error messages and debugging context
- Handling async/concurrent errors in distributed systems

## Core Concepts

### 1. Error Handling Philosophies
**Exceptions vs Result Types:**
- **Exceptions:** Traditional try-catch, disrupts control flow. Use for unexpected errors, exceptional conditions (e.g., Network Down, Disk Full).
- **Result Types:** Explicit success/failure, functional approach. Use for expected errors, validation failures (e.g., User Not Found, Invalid Email).
- **Panic/Crash:** Unrecoverable errors, programming bugs (e.g., Index Out of Bounds).

### 2. Universal Resilience Patterns
**Circuit Breaker:**
Stop calling a failing service to prevent cascading failure. Open -> Half-Open -> Closed states.

**Error Aggregation:**
Validate *all* fields and return *all* errors at once, rather than failing on the first one.

**Graceful Degradation:**
Primary fails? -> Try Secondary -> Try Cache -> Return Default.

**Exponential Backoff:**
Retry... wait 1s... retry... wait 2s... retry... wait 4s... stop.

## Language-Specific Patterns

### Python
**Custom Exception Hierarchy:**
```python
class ApplicationError(Exception):
    """Base exception for all application errors."""
    def __init__(self, message: str, code: str = None, details: dict = None):
        super().__init__(message)
        self.code = code
        self.details = details or {}

class ValidationError(ApplicationError):
    """Raised when validation fails."""
    pass
```

**Context Managers:**
Use for cleanup (transactions, streams).
```python
@contextmanager
def database_transaction(session):
    try:
        yield session
        session.commit()
    except Exception:
        session.rollback()
        raise
    finally:
        session.close()
```

### TypeScript/JavaScript
**Result Type Pattern (Functional):**
```typescript
type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };

function parseJSON<T>(json: string): Result<T, SyntaxError> {
  try {
    return { ok: true, value: JSON.parse(json) };
  } catch (error) {
    return { ok: false, error: error as SyntaxError };
  }
}
```

**Async Error Handling:**
ALWAYS use `try/catch` with async/await.
```typescript
async function extractUser(id: string) {
  try {
    const user = await db.find(id);
    if (!user) throw new NotFoundError("User", id);
    return user;
  } catch (err) {
    // Re-throw if critical, or handle gracefully
    if (err instanceof NotFoundError) return null;
    throw err;
  }
}
```

### Rust
**Result and Option Types:**
```rust
fn get_user_age(id: &str) -> Result<u32, AppError> {
    find_user(id)
        .ok_or_else(|| AppError::NotFound(id.to_string()))
        .map(|user| user.age)
}
```

### Go
**Explicit Error Returns:**
```go
func getUser(id string) (*User, error) {
    user, err := db.QueryUser(id)
    if err != nil {
        return nil, fmt.Errorf("failed to query user: %w", err)
    }
    return user, nil
}
```

## Best Practices
- **Fail Fast:** Validate input early.
- **Preserve Context:** Include stack traces and metadata in custom errors.
- **Meaningful Messages:** Explain *how to fix it*, not just what went wrong.
- **Don't Swallow Errors:** Log or re-throw, don't silently ignore.

## Resources
- [Circuit Breaker Pattern](https://martinfowler.com/bliki/CircuitBreaker.html)
- [Railway Oriented Programming](https://fsharpforfunandprofit.com/rop/)
