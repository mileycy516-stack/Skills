# Error Recovery Patterns

## 1. Retry with Backoff
**Use when:** The error is likely transient (network blip, database locked).
**Strategy:**
- Immediate Retry? No, may overload system.
- Fixed Delay? Better.
- **Exponential Backoff:** Best. `delay = base * 2^attempt`.

## 2. Fallbacks
**Use when:** Primary service is down but user needs *something*.
**Examples:**
- **Cache:** Serve slightly stale data if live DB unreachable.
- **Defaults:** Show "Guest" profile if User Service fails.
- ** degraded Mode:** Disable "Recommended Products" if ML engine is down, but show the main item.

## 3. Crash-Only / "Let it Crash" (Erlang Philosophy)
**Use when:** State is potentially corrupted.
**Strategy:** Don't try to "fix" a bad variable state. Kill the process/worker and restart fresh (e.g., Kubernetes Pods, Supervisor processes).
