# Designing Exception Hierarchies

## Principle: Group by Action, Not Source
Design your exceptions based on *how they should be caught*, not just where they came from.

### Recommended Hierarchy Base (Python Example)
```python
class ApplicationError(Exception):
    """Base for all expected app errors."""
    def __init__(self, message, code=None, details=None):
        super().__init__(message)
        self.code = code
        self.details = details or {}

class TransientError(ApplicationError):
    """Errors that might succeed on retry (Network, Timeout)."""

class PermanentError(ApplicationError):
    """Errors that will fail if retried immediately (Validation, NotFound)."""
```

### Usage
- Catch `TransientError` -> Apply Retry policy.
- Catch `PermanentError` -> Return 400 Bad Request to user.
- Catch `Exception` (base) -> Log as 500 Internal Error (Bug).
