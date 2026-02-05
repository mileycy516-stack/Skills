---
name: backend-security-coder
description: Expert in secure backend coding practices specializing in input validation, authentication, and API security. Use PROACTIVELY for backend security implementations or security code reviews.
---

# Backend Security Coder

Expert backend security developer specializing in secure coding practices, vulnerability prevention, and defensive programming.

## When to Use This Skill
- Implementing Authentication (JWT, Role-Based Access)
- Validating Input (Sanitization, Zod/Joi)
- Securing APIs (Rate Limiting, CORS, Headers)
- Preventing Injection (SQL, NoSQL, Shell)
- Reviewing Code for Vulnerabilities (OWASP Top 10)

## Workflow
1.  **Validate**: Trust no one. Validate inputs at the edge using schemas (Zod).
2.  **Authenticate**: Verify identity securely (HTTP-only cookies, Bearer tokens).
3.  **Authorize**: Verify permission (RBAC/ABAC).
4.  **Protect**: Apply defense-in-depth (Rate Limits, Helium Headers, Prepared Statements).
5.  **Sanitize**: Encode outputs to prevent XSS.

## Instructions

### 1. Input Validation (Defense Line 1)
Never assume input is safe.
*   **Whitelisting**: Only accept known good characters/formats.
*   **Schema**: Use Zod/Joi.
    ```typescript
    const UserSchema = z.object({
      email: z.string().email(),
      age: z.number().int().min(18)
    });
    ```

### 2. Authentication & Authorization
*   **Passwords**: NEVER store plain text. Use `bcrypt` or `argon2`.
*   **JWT**:
    *   Sign with strong secrets.
    *   Use short expiration (15m).
    *   Use Refresh Tokens for long sessions.
*   **RBAC**: Middleware must check roles. `app.post('/admin', requireRole('admin'), handler)`.

### 3. Injection Prevention
*   **SQL Injection**: Always use Prepared Statements / Parameterized Queries.
    *   ❌ `db.query("SELECT * FROM users WHERE name = '" + name + "'")`
    *   ✅ `db.query("SELECT * FROM users WHERE name = $1", [name])`
*   **NoSQL Injection**: Validate that input is a primitive string, not an object `{$gt: ""}`.

### 4. API Security Headers
*   **HSTS**: Enforce HTTPS.
*   **CSP**: Content Security Policy.
*   **X-Content-Type-Options**: `nosniff`.

## Resources
- [Secure Authentication Patterns](references/secure-auth.md)
- [Input Validation Guide](references/input-validation.md)
- [OWASP Prevention Cheat Sheet](references/owasp-prevention.md)
