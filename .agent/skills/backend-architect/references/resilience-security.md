# Resilience & Security

## Circuit Breaker Pattern
Protect your system from cascading failures.
*   **Closed**: Normal operation. Calls go through.
*   **Open**: Too many failures (e.g., >50% error rate). Calls fail immediately (Fast Fail) without hitting the struggling service.
*   **Half-Open**: After a timeout, let one request through to test if the service recovered.

## Rate Limiting
Protect your API from abuse.
*   **Algorithms**: Token Bucket, Leaky Bucket.
*   **Headers**: Return `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After`.

## Security Basics
*   **HTTPS**: Everywhere. NO HTTP.
*   **Authentication**: OAuth2 / OIDC for users.
*   **Authorization**: RBAC (Role Based) or ABAC (Attribute Based) scopes.
*   **Never trust input**: Validate all payloads against a schema (e.g., Zod, Joi) before processing.
