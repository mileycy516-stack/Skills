# 🧰 The Master Skill Index

Welcome to your **Vibe Coding** arsenal. This index maps your intent to the specific agentic skill required. Use this as your "Menu" to select the right expert for the job.

## 🎨 1. Frontend & Design Stack
*Create stunning, responsive, and accessible UIs.*

| Skill | Use Case | Sample Prompt |
|-------|----------|---------------|
| [`design-system-architect`](./.agent/skills/design-system-architect/SKILL.md) | **Start a Project** | "Using the 'Linear/Vercel' style from the *AI Design Framework*, design the tokens." |
| [`frontend-developer`](./.agent/skills/frontend-developer/SKILL.md) | **Build Components** | "Create a responsive Dashboard component using our tokens." |
| [`react-architecture`](./.agent/skills/react-architecture/SKILL.md) | **Architecture** | "Refactor this card component to use Compound Component pattern." |
| [`ui-motion-expert`](./.agent/skills/ui-motion-expert/SKILL.md) | **Animate** | "Add a spring transition to this modal entrance." |
| [`web-performance-optimization`](./.agent/skills/web-performance-optimization/SKILL.md)| **Speed Up** | "Analyze the LCP and optimize the hero image lazy loading." |
| [`web-design-guidelines`](./.agent/skills/web-design-guidelines/SKILL.md) | **Review** | "Audit this page for accessibility and whitespace consistency." |

## ⚙️ 2. Backend & Systems Stack
*Build scalable, secure, and robust services.*

| Skill | Use Case | Sample Prompt |
|-------|----------|---------------|
| [`backend-architect`](./.agent/skills/backend-architect/SKILL.md) | **Design System** | "Plan the microservices boundaries for the Order fulfillment domain." |
| [`api-design-principles`](./.agent/skills/api-design-principles/SKILL.md) | **Define Contract** | "Design a REST API for the User profile with proper pagination." |
| [`openapi-spec-generator`](./.agent/skills/openapi-spec-generator/SKILL.md) | **Document** | "Generate the openapi.yaml for this User controller." |
| [`database-schema-designer`](./.agent/skills/database-schema-designer/SKILL.md) | **Model Data** | "Create a normalized ER diagram for an E-commerce system." |
| [`database-specialist`](./.agent/skills/database-specialist/SKILL.md) | **Optimize SQL** | "Explain Analyze this slow query and suggest indexes." |
| [`platform-engineering`](./.agent/skills/platform-engineering/SKILL.md) | **Observe** | "Define RED metrics for the payment service." |

## 🛡️ 3. Security & Compliance Stack
*Defend against threats and ensure compliance.*

| Skill | Use Case | Sample Prompt |
|-------|----------|---------------|
| [`data-validation`](./.agent/skills/data-validation/SKILL.md) | **Input Safety** | "Create a Zod schema to validate the Signup form." |
| [`backend-security`](./.agent/skills/backend-security/SKILL.md) | **Secure Code** | "Review this auth flow and suggest improvements." |
| [`vulnerability-scanner`](./.agent/skills/vulnerability-scanner/SKILL.md) | **Attack/Audit** | "Review this auth flow for OWASP Top 10 vulnerabilities." |
| [`security-auditor`](./.agent/skills/security-auditor/SKILL.md) | **Govern** | "Assess our readiness for SOC2 compliance regarding data storage." |

## 🧪 4. Quality Assurance Stack
*Test it before the users do.*

| Skill | Use Case | Sample Prompt |
|-------|----------|---------------|
| [`test-driven-development`](./.agent/skills/test-driven-development/SKILL.md) | **Write Code** | "Write a failing test for the login logic, then implement it." |
| [`generating-test-data`](./.agent/skills/generating-test-data/SKILL.md) | **Seed Data** | "Generate 500 fake users with Spanish addresses." |
| [`api-tester`](./.agent/skills/api-tester/SKILL.md) | **Verify API** | "Create a script to stress test the /checkout endpoint." |
| [`temporal-integration-testing`](./.agent/skills/temporal-integration-testing/SKILL.md) | **Test Workflow** | "Write an integration test for the Order Workflow mocking the payment activity." |
| [`playwright-browser-automation`](./.agent/skills/playwright-browser-automation/SKILL.md)| **E2E Test** | "Write a Playwright test for the checkout flow." |
| [`debugger`](./.agent/skills/debugger/SKILL.md) | **Fix** | "Analyze this stack trace and find the root cause." |

## 🧠 5. AI Engineering Stack
*Infuse intelligence into your app.*

| Skill | Use Case | Sample Prompt |
|-------|----------|---------------|
| [`prompt-engineering-mastery`](./.agent/skills/prompt-engineering-mastery/SKILL.md) | **Refine AI** | "Optimize this system prompt using Chain-of-Thought." |
| [`rag-architect`](./.agent/skills/rag-architect/SKILL.md) | **Context** | "Design a chunking strategy for PDF legal documents to reduce noise." |

## 🚀 6. Workflows (Slash Commands)
*Orchestrate complex, multi-step tasks.*

| Command | Description |
|---------|-------------|
| `/application-performance-performance-optimization` | **Full Stack Tune-up**. Runs `platform-engineer` (Backend) + `web-performance` (Frontend) + `load-testing`. |
