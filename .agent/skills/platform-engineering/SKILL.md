---
name: platform-engineering
description: Master Site Reliability Engineering (SRE) practices including Observability (Metrics, Logs, Tracing), Performance Engineering (Load Testing, Caching), and Infrastructure reliability. Use for setting up monitoring, optimizing performance, or debugging production incidents.
---

# Platform Engineering

Consolidates Observability and Performance Engineering to build high-performance, resilient, and observable systems.

## When to Use This Skill
- **Observability**: Setting up Prometheus/Grafana, OpenTelemetry, logging pipelines.
- **Performance**: Debugging latency, optimizing DB queries, caching strategies.
- **Reliability**: Defining SLIs/SLOs, Load Testing, Chaos Engineering.
- **Infrastructure**: Incident response and post-mortems.

## Core Disciplines

### 1. Observability (The "Three Pillars")

**Logs (Events)**
*   *Purpose*: Debugging specific events. "What happened?"
*   *Best Practice*: Structured JSON logging. Application-context only (no noise).

**Metrics (Aggregates)**
*   *Purpose*: Trending and Alerting. "Is it healthy?"
*   *The RED Method*:
    1.  **Rate**: Request throughput (req/sec).
    2.  **Errors**: Error throughput (errors/sec).
    3.  **Duration**: Latency (p50, p99).

**Traces (Context)**
*   *Purpose*: Distributed transactions. "Where is the latency?"
*   *Standard*: **OpenTelemetry (OTel)**. Ensure context propagation (`traceparent` header) across all microservices.

### 2. Performance Engineering

**Optimization Workflow**
1.  **Baseline**: Measure current state (RPS, Latency).
2.  **Profile**: Flame graphs for CPU/RAM. Traces for I/O.
3.  **Optimize**:
    *   **Frontend**: Core Web Vitals (LCP, CLS, INP).
    *   **Backend**: Fix N+1 queries, add DB indexes.
    *   **Caching**: Memoization (L1) -> Redis (L2) -> CDN (L3).
4.  **Verify**: Load test the fix.

**Load Testing (Saturation)**
*   **Smoke Test**: Minimal load to verify logic.
*   **Stress Test**: Find the breaking point (Saturation).
*   **Soak Test**: Long duration to find memory leaks.

### 3. Reliability (SRE)

**SLI / SLO / SLA**
*   **SLI**: The metric (Indicator). "P95 Latency".
*   **SLO**: The goal (Objective). "99.9% of requests < 200ms".
*   **Error Budget**: The allowed failure rate (1 - SLO). Burn this to ship faster.

## Resources
- [OpenTelemetry Best Practices](https://opentelemetry.io/docs/)
- [Google SRE Book](https://sre.google/sre-book/table-of-contents/)
- [RED Method](https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/)
