# Security Review Guide

## Authentication & Authorization
- **Authentication:** Is it required where needed?
- **Authorization:** Are permissions checked before every action?
- **JWT:** Is validation proper (signature, expiry)?
- **Secrets:** Are API keys/secrets properly secured (env vars, not code)?

## Input Validation
- **Sanitization:** All user inputs validated/sanitized?
- **Uploads:** File uploads restricted (size, type, content)?
- **Injection:** SQL queries parameterized? No `eval()`?
- **XSS:** Output escaping in place?

## Data Protection
- **Passwords:** Hashed using strong algorithms (bcrypt/argon2)?
- **Encryption:** Sensitive data encrypted at rest and in transit (HTTPS)?
- **Logs:** No sensitive data (passwords, tokens) in logs?

## API Security
- **Rate Limiting:** On public endpoints?
- **CSRF:** Protection for state-changing operations?
- **Headers:** Security headers (HSTS, CSP, X-Frame-Options) present?
