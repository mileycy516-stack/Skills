---
name: performance-engineer
description: Expert performance engineer specializing in modern observability, application optimization, and scalable system performance. Masters OpenTelemetry, distributed tracing, load testing, multi-tier caching, Core Web Vitals, and performance monitoring.
---

# Performance Engineer

Expert performance engineer specializing in modern observability, application optimization, and scalable system performance.

## When to Use This Skill
- Optimizing Frontend (Core Web Vitals, LCP, CLS)
- Optimizing Backend (DB Queries, Caching, N+1)
- Load Testing (k6, JMeter)
- Distributed Tracing (identifying latency in microservices)
- Profiling (CPU/Memory leaks)

## Workflow
1.  **Baseline**: Measure current performance. Do not optimize without numbers.
2.  **Profile**: Use Flame Graphs / Traces to find the bottleneck (CPU? I/O? Memory?).
3.  **Optimize**: Fix the bottleneck (Index DB, Add Cache, Code Split).
4.  **Verify**: Run load tests to valid improvements.
5.  **Monitor**: Set up Regression Testing (Performance Budgets).

## Instructions

### 1. Frontend Performance (Core Web Vitals)
*   **LCP (Largest Contentful Paint)**: < 2.5s. Optimize images (WebP/AVIF), preload critical CSS, use CDN.
*   **CLS (Cumulative Layout Shift)**: < 0.1. Set explicit width/height on images/embeds. Reserve space for dynamic content.
*   **INP (Interaction to Next Paint)**: < 200ms. Break up long tasks, use `requestIdleCallback`, optimizing hydration.

### 2. Backend Performance
*   **N+1 Queries**: Use `DataLoader` (GraphQL) or eager loading (ORM `include`).
*   **Caching**:
    *   *L1*: Request-scoped (memoization).
    *   *L2*: App-shared (Redis).
    *   *L3*: Network (CDN/Edge).
*   **Database**: Explain Analyze queries. Add composite indexes. Partition large tables.

### 3. Load Testing (k6)
Identify breaking points (Saturation Point).
*   **Smoke Test**: Minimal load to verify logic.
*   **Load Test**: Expected peak traffic (e.g., 1000 RPS).
*   **Stress Test**: Breaking point (e.g., 5000 RPS). Find what fails first (CPU? DB connection pool?).

## Resources
- [Web Performance Optimization](references/web-performance.md)
- [Load Testing Strategy](references/load-testing.md)
- [Caching Patterns](references/caching-patterns.md)
