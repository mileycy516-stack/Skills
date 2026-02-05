---
name: api-tester
description: Validate API endpoints (REST/GraphQL) for correctness, performance, and security. Mastering tools like curl, Postman/Newman, and automated testing frameworks.
allowed-tools: curl, hurl, node, python
---

# API Tester

Comprehensive strategy for verifying backend services, ensuring reliability, security, and performance of REST and GraphQL APIs.

## When to Use This Skill
- Verifying new API endpoints during development.
- Debugging integration issues between frontend and backend.
- Automating regression tests for CI/CD.
- Validating error handling and edge cases.
- Performance checking (Response time).

## Core Methodologies

### 1. Functional Testing
**Happy Path**
Verify the endpoint works as expected with valid data.
*   *Check*: Status 200/201, correct JSON schema, data persistence.

**Edge Cases**
*   Invalid inputs (e.g., negative numbers, empty strings).
*   Missing required fields.
*   Type mismatches.

**Error Handling**
*   Verify standard error structures (Status 400, 401, 403, 404, 500).
*   Ensure no stack traces leak in production.

### 2. Testing Tools Strategy

**Manual / Ad-hoc (CLI)**
Use `curl` or `hurl` for quick checks.
```bash
# SImple GET
curl -i https://api.example.com/users/1

# POST with JSON
curl -X POST -H "Content-Type: application/json" \
     -d '{"name": "Test"}' \
     https://api.example.com/users
```

**Automated (Code-Based)**
Use `Supertest` (Node) or `pytest-requests` (Python) for robust suites.
```typescript
// Jest + Supertest Example
describe('POST /api/users', () => {
  it('should create a user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'John' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});
```

**E2E / Workflows**
Use **Postman/Newman** for complex scenarios (Login -> Get Token -> Fetch Data).

### 3. Security Validation
*   **Auth**: Try accessing without header, with invalid token, with expired token.
*   **Permissions**: Try accessing Admin routes as User.
*   **Injection**: Send basic SQLi/XSS payloads in parameters.

### 4. Checklist
- [ ] **Status Codes**: Are they semantic? (201 Created vs 200 OK).
- [ ] **Headers**: Content-Type, CORS, Security headers.
- [ ] **Payload**: JSON correctness, unnecessary fields removed.
- [ ] **Performance**: Response time < 200ms (P95).

## Resources
- [Postman Learning Center](https://learning.postman.com/)
- [Supertest Documentation](https://github.com/ladjs/supertest)
- [Hurl.dev](https://hurl.dev/)
