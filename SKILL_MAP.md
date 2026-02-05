# Skill Integration Map

This document orchestrates the interaction between specialized skills to accomplish complex workflows.

## 🟢 1. Frontend Development Lifecycle
*Use this flow for building or refactoring UI.*

> **🚀 Performance Boost**: Run `/application-performance-performance-optimization` to orchestrate end-to-end tuning (Backend + Frontend + Infra).

1.  **Foundations**: `design-system-architect` (formerly `visual-design` + `design-patterns`)
    *   Define the "3-Layer Cake" of tokens: Primitives -> Semantics -> Components.
    *   Set up the spacing grid and type scale.
2.  **Architecture**: `frontend-developer` + `vercel-composition-patterns`
    *   Plan the component hierarchy.
    *   Decide on Composition vs Configuration (avoid boolean props).
3.  **Optimization**: `web-performance-optimization`
    *   Refine implementation (Server vs Client components, bundle size, Core Web Vitals).
4.  **Polish**: `ui-motion-expert`
    *   Add transitions (Framer Motion), micro-interactions, and "Premium" feel.
5.  **Review**: `web-design-guidelines`
    *   Audit the final UI against external best practices.

## 🔵 2. Reliability & Quality Assurance
*Use this flow for hardening the application.*

1.  **Architecture**: `error-handling-expert`
    *   Design the exception hierarchy or Result type strategy.
2.  **Implementation**: `test-driven-development` (TDD)
    *   **RED**: Write the failing test first.
    *   **GREEN**: Implement minimal code.
    *   **REFACTOR**: Clean up.
3.  **Data**: `generating-test-data`
    *   Create reproducible fixtures (JSON/SQL) and seeds (Faker) for robust testing.
4.  **Integration**: `api-tester`
    *   Validate API contracts (REST/GraphQL) and handling of edge cases.
5.  **Execution**: `playwright-browser-automation`
    *   Run the actual E2E suite locally or in CI.
6.  **Fixing**: `debugger` + `debugging-strategies`
    *   Systematically find root causes if tests fail.

## 🟣 3. Browser Automation Suite
*Select the right tool for the job.*

| Goal | Skill to Use |
|------|--------------|
| **Document Workflows** | `browser-workflow-generator` (Maps out the user journey) |
| **Deterministic CLI** | `agent-browser` (Fast, reliable, uses specific refs) |
| **Robust Testing** | `playwright-browser-automation` (E2E, video, responsive) |
| **AI Agent Tasks** | `browser-use` (LLM-driven navigation) |

## 🔴 4. Backend & Systems
*Scalable server-side development.*

1.  **Design**: `backend-architect` + `api-design-principles`
    *   Plan boundaries (Domains) and API Contracts (REST/GraphQL).
    *   **Artifacts**: Use `openapi-spec-generator` to produce strict endpoint definitions (YAML).
2.  **Security**: `backend-security` + `vulnerability-scanner`
    *   **Input**: Validate proactively (`data-validation` / Zod).
    *   **Auth**: Design the flow (OIDC/JWT) and implement RBAC.
    *   **Audit**: Map attack surface (OWASP Top 10) and scan for supply chain risks.
    *   **Governance**: `security-auditor` for Compliance (SOC2/GDPR) and Threat Modeling.
3.  **Data**: `database-specialist`
    *   **Schema**: Optimize SQL queries (CTEs, Window Functions).
    *   **Performance**: Effective Indexing (B-Tree, GIN) and migration management.
4.  **Operations**: `platform-engineering`
    *   **Observe**: Set up OpenTelemetry traces and RED metrics.
    *   **Optimize**: Analyze bottlenecks (DB/Cache) and load test (k6).

## 🟡 5. AI Engineering Layer
*Integrating Intelligence into the stack.*

1.  **Agent Design**: `prompt-engineering-mastery`
    *   Design the Persona and System Prompt.
    *   Implement CoT (Chain-of-Thought) for complex reasoning.
2.  **Knowledge Injection**: `rag-architect`
    *   Design the ingestion pipeline (PDF -> Chunks -> Embeddings).
    *   Implement Hybrid Search (Vector + Keyword) for retrieval.
3.  **Context**: `context-manager`
    *   Orchestrate long-term memory across interactions.

## 🟠 6. Specialized Domains

*   **TypeScript**: `typescript-expert` (Complex types, monorepos, build speed).
*   **Git**: `git-advanced-workflows` (Rebase, bisect, clean history).
*   **Temporal Workers**: `temporal-integration-testing` (Mocking activities, time skipping).
*   **Business**: `kpi-dashboard-design` (Metric selection and data viz).
