---
name: openapi-spec-generator
description: Generate, validate, and maintain OpenAPI (Swagger) specifications (v3.0/3.1). Use for "Spec-First" design or documenting existing APIs.
allowed-tools: Code Editor, CLI
---

# OpenAPI Spec Generator

Create robust, machine-readable API documentation using OpenAI Specification (OAS) v3.0 or v3.1.

## When to Use This Skill
- **Spec-First Development**: Defining the API contract *before* writing code.
- **Documentation**: Generating `openapi.yaml` for existing REST APIs.
- **Code Generation**: creating Client SDKs (TypeScript/Python) from a spec.
- **Validation**: Ensure API implementation matches the design contract.

## Core Concepts

### 1. Structure of OAS v3.1
A valid spec requires:
*   **Info**: Title, Version, Description.
*   **Servers**: Base URLs (Dev, Staging, Prod).
*   **Paths**: Endpoints (`/users`, `/login`) and methods (`GET`, `POST`).
*   **Components**: Reusable Schemas (Data Models), Responses, Security Schemes.

### 2. Approaches
*   **Design-First**: Write YAML manually (or use a GUI like Stoplight), then generate server stubs.
    *   *Pro*: Clear contract, independent of language.
    *   *Con*: Needs sync with code.
*   **Code-First**: Write code (e.g., NestJS Decorators, Python FastAPI), generate YAML automatically.
    *   *Pro*: Always in sync.
    *   *Con*: Code becomes cluttered with docs.

## Implementation Guide

### Basic Skeleton (YAML)
```yaml
openapi: 3.1.0
info:
  title: E-Commerce API
  version: 1.0.0
servers:
  - url: https://api.example.com/v1
paths:
  /products:
    get:
      summary: List products
      operationId: listProducts
      responses:
        '200':
          description: A list of products
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Product'
components:
  schemas:
    Product:
      type: object
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
        price:
          type: number
```

### Tips for Better Specs
1.  **Use `$ref`**: Don't repeat schemas. Define a `User` component and reuse it in requests and responses.
2.  **Examples**: Always provide `example` values for fields. It helps mock servers and humans.
3.  **Descriptions**: Use Markdown in description fields for rich docs.
4.  **Security**: Define Bearer Auth globally.

```yaml
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
security:
  - bearerAuth: []
```

## Tools
- **Linting**: `spectral` (Stoplight) to enforce guidelines.
- **Docs**: `Redoc`, `Swagger UI` for visualization.
- **Codegen**: `openapi-generator-cli` to build Typescript Axios clients.
