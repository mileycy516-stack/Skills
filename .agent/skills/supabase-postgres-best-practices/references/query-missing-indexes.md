# Query: Missing Indexes

**Priority**: CRITICAL
**Category**: Query Performance

## Why it matters
Missing indexes on frequently queried columns (especially foreign keys and WHERE clause columns) can lead to sequential scans, causing slow performance and high CPU usage.

## Incorrect Example

```sql
-- Selecting orders by customer_id without an index
SELECT * FROM orders WHERE customer_id = 123;
```

## Correct Example

```sql
-- Create an index on the foreign key column
CREATE INDEX CONCURRENTLY idx_orders_customer_id ON orders(customer_id);

SELECT * FROM orders WHERE customer_id = 123;
```
