# Schema: Partial Indexes

**Priority**: HIGH
**Category**: Schema Design

## Why it matters
Partial indexes allow you to index only a subset of rows in a table, reducing index size and maintenance overhead. They are especially useful for querying specific statuses or conditions (e.g., active users, pending orders).

## Incorrect Example

```sql
-- Indexing all rows, even though we only query 'active' status
CREATE INDEX idx_users_status ON users(status);
```

## Correct Example

```sql
-- Indexing only 'active' users
CREATE INDEX CONCURRENTLY idx_users_active ON users(id) WHERE status = 'active';
```
