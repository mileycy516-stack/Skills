# Common Debugging Patterns

## 1. The "Undefined is not an object"
*   **Cause**: Accessing a property on a null/undefined variable.
*   **Debug**: Log the variable *before* the access.
*   **Fix**: Optional chaining (`?.`) or defensive guard clauses.

## 2. The "Infinite Loop" / Stack Overflow
*   **Cause**: Recursion without exit condition or `while` loop with static condition.
*   **Debug**: Check the exit condition change in the loop.
*   **Fix**: Ensure the loop variable is mutated towards the exit condition.

## 3. Async/Await Timing (Race Condition)
*   **Cause**: Assuming a promise resolved when it hasn't, or state updates haven't flushed.
*   **Debug**: Check if `await` is missing. Check `useEffect` dependencies.
*   **Fix**: Ensure proper `await` usage or use `Promise.all` for parallel execution.

## 4. The "It works on my machine"
*   **Cause**: Environment variables, node versions, or uncommitted local files.
*   **Debug**: Compare `env` vars. Run inside Docker (if available) to match CI.
*   **Fix**: Update `.env.example`, sync dependencies (`npm ci`).
