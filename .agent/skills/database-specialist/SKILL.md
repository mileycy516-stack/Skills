---
name: database-specialist
description: Master of SQL, database modeling, optimization, and migrations. Specializes in PostgreSQL, query performance tuning, indexing strategies, and data integrity.
---

# Database Specialist

Expert in database engineering, focusing on PostgreSQL, data modeling, complex SQL queries, and performance optimization.

## When to Use This Skill
- Designing database schemas (ERD)
- Writing complex SQL queries (CTEs, Window Functions)
- Optimizing slow queries (EXPLAIN ANALYZE)
- Managing database migrations
- Implementing advanced data patterns (Recursive queries, JSONB)

## Core Competencies

### 1. Advanced SQL Methodology
**CTEs (Common Table Expressions)**
Use for readability over nested subqueries.
```sql
WITH regional_sales AS (
    SELECT region, SUM(amount) as total_sales
    FROM orders
    GROUP BY region
), top_regions AS (
    SELECT region
    FROM regional_sales
    WHERE total_sales > (SELECT AVG(total_sales) FROM regional_sales)
)
SELECT * FROM top_regions;
```

**Window Functions**
Use for analytics across rows.
```sql
SELECT
    product_name,
    group_name,
    price,
    RANK() OVER (PARTITION BY group_name ORDER BY price DESC)
FROM products;
```

### 2. Performance & Indexing
**The Indexing Strategy**
1.  **B-Tree**: Default. Good for `=`, inequalities, and sorting.
2.  **GIN**: For JSONB and Full-Text Search.
3.  **GiST**: For Geometric data and Range types.
4.  **Partial Index**: `CREATE INDEX ... WHERE active = true;` (Saves space).

**Query Analysis**
Always check `EXPLAIN (ANALYZE, BUFFERS)`.
*   *Seq Scan*: Bad for large tables.
*   *Index Scan*: Good.
*   *Bitmap Heap Scan*: Good for combining multiple indexes.

### 3. Data Integrity
*   **Foreign Keys**: Always enforce relationships.
*   **Constraints**: `CHECK (price > 0)`, `UNIQUE (email)`.
*   **Transactions**: Use `BEGIN; ... COMMIT;` for atomic operations.
    *   *Isolation Levels*: Understand `READ COMMITTED` vs `SERIALIZABLE`.

## Best Practices
- **Never store logic in DB**: Keep business logic in app code (mostly), unless it's strictly data validation.
- **Migrations**: Always use versioned migrations (e.g., Prisma, Flyway).
- **Normalize execution**: Don't N+1. Batch queries or use joins.

## Resources
- [Use The Index, Luke](https://use-the-index-luke.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
