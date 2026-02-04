# Secure Authentication Patterns

## 1. Password Storage
*   **Algorithm**: Use `Argon2id` (best) or `bcrypt` (good). Avoid `MD5` or `SHA256` (too fast).
*   **Salting**: Unique salt per user (handled automatically by libraries like `bcrypt`).

## 2. Session Management (JWT vs Cookies)
*   **HttpOnly Cookies**:
    *   *Pros*: Immune to XSS (JS cannot read them).
    *   *Secure Check*: Ensure `Secure: true` (HTTPS only) and `SameSite: Strict`.
*   **Access Tokens (in memory)**:
    *   Short-lived JWTs held in React state (memory). Lost on refresh.
    *   Refreshed via HttpOnly cookie.

## 3. 2FA / MFA
*   **TOTP**: Start with Time-based One Time Password (Google Authenticator).
*   **Backup Codes**: Always generate 10 backup codes for users upon setup.
