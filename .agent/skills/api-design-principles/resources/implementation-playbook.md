# API Implementation Playbook

## 1. REST Design Patterns

### Resource Naming
- Use Nouns (Plural): `/users`, `/orders`
- Kebab-case for URLs: `/customer-orders`
- CamelCase for JSON fields: `firstName`, `orderStatus`

### Methods
- `GET`: Retrieve
- `POST`: Create (Not idempotent)
- `PUT`: Replace (Idempotent)
- `PATCH`: Update partial
- `DELETE`: Remove

### Filtering & Pagination
- `?page=1&limit=20` (Offset)
- `?cursor=eyJpZCI6MTB9` (Cursor - for feeds)
- `?sort=-created_at`

## 2. GraphQL Design Patterns

### Naming
- Query: `getUser`, `listProducts`
- Mutation: `createUser`, `updateOrderStatus`

### Best Practices
- Use **Input Types** for arguments.
- Always implement **Pagination** (Connection pattern) for lists.
- Return **Payload types** for mutations (e.g., `CreateUserPayload` containing `user` and `errors`).

## 3. Error Handling Checklist

- [ ] Use standard HTTP codes (200, 201, 400, 401, 403, 404, 429, 500).
- [ ] Return consistent error structure:
  ```json
  {
    "code": "validation_error",
    "message": "Invalid email address",
    "details": [{"field": "email", "issue": "format"}]
  }
  ```

## 4. Versioning Strategy

- **URL Versioning**: `GET /v1/users` (Clear, explicit)
- **Header Versioning**: `Accept: application/vnd.myapi.v1+json` (Cleaner URLs, harder to test in browser)
- **Evolution**: Add fields freely, never remove/rename without major version.
