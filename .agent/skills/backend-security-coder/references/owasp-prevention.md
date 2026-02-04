# OWASP Prevention Cheat Sheet

## 1. Broken Access Control (IDOR)
*   **Vuln**: User 1 changes ID in URL to User 2 (`/users/2`).
*   **Fix**: Always check `if (resource.ownerId !== currentUser.id) throw Forbidden`.

## 2. Cryptographic Failures
*   **Vuln**: Data leaked in transit or weak crypto.
*   **Fix**: TLS 1.2+ only. Encrypt sensitive data (SSN, Keys) at REST (AES-256).

## 3. Injection (SQL/Command)
*   **Vuln**: User input executed as code.
*   **Fix**: Strict separation of data and code (Prepared Statements). Sanitize/Escape shell arguments.

## 4. Insecure Design (Business Logic)
*   **Vuln**: Buying items for $0 or negative quantity.
*   **Fix**: Enforce invariants in domain logic. `if (price < 0) throw Error`.
