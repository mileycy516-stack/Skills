---
name: data-validation
description: Master data validation strategies using Zod, Joi, or Yup. Ensure data integrity, type safety, and security across boundaries (API inputs, Forms, DB).
allowed-tools: Code Editor
---

# Data Validation Specialist

Strategies for ensuring data correctness, type safety, and security at system boundaries.

## When to Use This Skill
- Validating API request bodies (headers, params, JSON).
- Handling Form submissions in Frontend.
- Validating configuration (Environment variables).
- Parsing unknown data (e.g., external API responses).
- Implementing "Parse, don't validate" philosophy.

## Tools & Libraries
- **TypeScript First**: `Zod` (Recommended standard).
- **Legacy/JS**: `Joi`, `Yup`.
- **Runtime**: `Ajv` (JSON Schema).

## Core Concepts

### 1. Parse, Don't Validate
Instead of checking variables ad-hoc, use a parser that fails or returns a strongly-typed object.

```typescript
// ❌ Check style
function process(input: any) {
  if (!input.email) throw Error("Missing email");
  // input is still 'any'
}

// ✅ Parse style (Zod)
const UserSchema = z.object({
  email: z.string().email(),
  age: z.number().min(18)
});

function process(input: unknown) {
  const safeUser = UserSchema.parse(input);
  // safeUser is typed { email: string, age: number }
}
```

### 2. Layers of Validation
1.  **Transport Layer**: Input structure (Is it JSON? Correct shape?).
2.  **Domain Layer**: Business constraints (Is age > 18? Is username unique?).
3.  **Database Layer**: Integrity constraints (Foreign Keys, Unique Indexes).

### 3. Sanitization vs Validation
*   **Validation**: Rejects invalid input ("Email is invalid").
*   **Sanitization**: Modifies input to be valid (Trimming whitespace, lowercasing).
*   *Best Practice*: Validate strict structural requirements. Sanitize minor formatting issues (whitespace).

## Patterns

### Zod for APIs
```typescript
import { z } from 'zod';

const CreatePostSchema = z.object({
  title: z.string().min(5).max(100).trim(),
  tags: z.array(z.string()).max(5).optional(),
  published: z.boolean().default(false),
});

// Inference
type CreatePost = z.infer<typeof CreatePostSchema>;

// Middleware usage
app.post('/posts', validate(CreatePostSchema), (req, res) => {
  // req.body is typed CreatePost
});
```

### Environment Variables
Validate `process.env` at startup to crash early if config is missing.
```typescript
const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'production', 'test']),
});

const env = EnvSchema.parse(process.env);
declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof EnvSchema> {}
  }
}
```

## Best Practices
- **Single Source of Truth**: Define the Schema first, then derive the Type (`z.infer`).
- **Detailed Error Messages**: Map validation errors to user-friendly messages.
- **Strict by Default**: Disallow unknown keys (`.strict()`) in API inputs to prevent pollution.
- **Fail Fast**: Validate at the entry point (Controller/Resolver).

## Resources
- [Zod Documentation](https://zod.dev/)
- [Parse, Don't Validate](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/)
