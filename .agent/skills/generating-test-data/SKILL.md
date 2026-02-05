---
name: generating-test-data
description: Generate realistic test data for software development. Create users, products, orders, and custom schemas for comprehensive testing, database seeding, and mock fixtures.
allowed-tools: Read, Write, Edit, Grep, Glob, Bash
version: 1.0.0
---

# Generating Test Data

## Overview
This skill empowers the agent to generate realistic and diverse test data, streamlining software testing and development workflows. It produces data sets tailored to specific needs, from user profiles to complex business transactions, using standard libraries (like `faker`, `mock`) or custom scripts.

## When to Use This Skill
- **Database Seeding**: Populating a database with realistic data for dev/staging.
- **QA & Testing**: Creating large datasets for integration or load testing (k6/JMeter).
- **Authentication**: Generating 500+ fake users with valid emails/passwords.
- **E-Commerce**: Creating mocks for products, orders, and transactions.
- **Privacy**: Anonymizing production data for lower environments.

## How It Works

### Step 1: Identify Requirements
Determine the schema, volume, and format.
- **Volume**: How many records? (e.g., 50 vs 1,000,000)
- **Constraint**: Foreign keys? Unique constraints?
- **Locale**: en_US? es_ES? (Affects names, phones, addresses)
- **Format**: JSON, SQL, CSV, or direct DB insertion script.

### Step 2: Generation Strategy

**Option A: Quick JSON/CSV (Ad-hoc)**
Use for unit tests or frontend mocks.
```json
[
  { "id": 1, "name": "John Doe", "email": "john@example.com", "role": "admin" },
  { "id": 2, "name": "Jane Smith", "email": "jane@test.co", "role": "user" }
]
```

**Option B: Scripted Generation (Faker/Mage)**
Use for large datasets or complex relationships.
```javascript
// generate-users.js
const { faker } = require('@faker-js/faker');
const fs = require('fs');

const users = Array.from({ length: 1000 }).map(() => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  createdAt: faker.date.past().toISOString()
}));

fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
```

**Option C: SQL Seed Files**
Use for database initialization.
```sql
INSERT INTO products (name, price, stock) VALUES
('Ergonomic Chair', 299.99, 50),
('Standing Desk', 450.00, 20);
```

### Step 3: Integration
- **Frontend**: Save as `src/mocks/data.json`.
- **Backend (Prisma)**: Add to `prisma/seed.ts`.
- **Load Testing**: Save as `tests/load/data.csv` for k6.

## Best Practices
- **Deterministic**: set a seed (`faker.seed(123)`) so tests are reproducible.
- **Realistic constraints**: Don't generate infinite strings if DB is `VARCHAR(50)`.
- **Edge cases**: Include nulls, empty strings, and special characters in a subset of data.
- **Privacy**: NEVER use real user data. Always generate synthetic data.

## Examples

### Example 1: User Profile Generation
**Request**: "Generate 50 test users with realistic Spanish names and addresses."
**Output**: `users.json` containing:
```json
{
  "name": "María García",
  "address": "Calle Gran Vía 12, Madrid",
  "phone": "+34 612 345 678"
}
```

### Example 2: E-Commerce Orders
**Request**: "Create 100 orders with linked user IDs."
**Strategy**:
1. Generate Users first.
2. Pick random User IDs for the Orders.
3. Generate Order Items.

## Tools References
- JS/TS: `@faker-js/faker`, `mock-service-worker (MSW)`
- Python: `faker`, `factory_boy`
- Go: `gofakeit`
