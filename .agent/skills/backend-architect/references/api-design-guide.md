# RESTful API Design Guide

## Resource Naming
*   **Collection**: `/users`, `/products`
*   **Singleton**: `/users/123`, `/products/99`
*   **Sub-collection**: `/users/123/orders`

## HTTP Verbs
*   `GET`: Read (Safe, Idempotent).
*   `POST`: Create (Unsafe, Not Idempotent).
*   `PUT`: Replace/Update (Idempotent).
*   `PATCH`: Partial Update (Not Idempotent strictly, but usually treated as such).
*   `DELETE`: Delete (Idempotent).

## Status Codes
*   `200 OK`: Success (GET, PUT, PATCH).
*   `201 Created`: Success (POST).
*   `202 Accepted`: Task queued (Async background job).
*   `204 No Content`: Success (DELETE).
*   `400 Bad Request`: Validation error.
*   `401 Unauthorized`: Missing/invalid token.
*   `403 Forbidden`: ID known, but not allowed.
*   `429 Too Many Requests`: Rate limit hit.

## Pagination
Use cursor-based pagination for large datasets (faster than offset).
```json
{
  "data": [...],
  "meta": {
    "next_cursor": "c2RmbGtzZGZ..."
  }
}
```
