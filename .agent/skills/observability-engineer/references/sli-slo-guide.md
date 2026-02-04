# SLI / SLO Guide

## Defining an SLO
**Scenario**: An API Endpoint `/checkout`.

1.  **Choose SLI**:
    *   *Availability*: Proportion of requests returning 2xx/3xx/4xx (excluding 5xx).
    *   *Latency*: Proportion of requests faster than 500ms.

2.  **Define SLO**:
    *   "99.5% of requests to /checkout in the last 30 days will succeed."
    *   "99% of requests to /checkout will complete in < 500ms."

3.  **Calculate Error Budget**:
    *   Total Requests = 1,000,000.
    *   Target Success = 99.5% (995,000).
    *   Error Budget = 0.5% (5,000 failures allowed).

## Monitoring the Budget
*   **Burn Rate**: How fast are we consuming the budget?
*   *Alert*: "If burn rate > 10x, alert PagerDuty (we will drain budget in 3 days)."
*   *Action*: If budget is exhausted, halt feature deployments. Focus on reliability.
