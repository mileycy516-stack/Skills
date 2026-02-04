# The RED Method (Requests, Errors, Duration)

The "RED Method" is the standard for monitoring services (especially microservices).

## 1. Rate (Throughput)
*   **Metric**: `http_requests_total`.
*   **Query (PromQL)**: `rate(http_requests_total[5m])`.
*   **Why**: Tells you traffic volume. "Are we getting DDOS'd?" or "Did traffic drop to zero?"

## 2. Errors (Reliability)
*   **Metric**: `http_requests_total{status=~"5.."}`.
*   **Query (PromQL)**: `rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m])`.
*   **Why**: Tells you health. "Are 10% of users failing?"

## 3. Duration (Latency)
*   **Metric**: `http_request_duration_seconds_bucket`.
*   **Query (PromQL)**: `histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))`.
*   **Why**: Tells you user experience. "Is it slow?"
*   *Note*: Always measure percentiles (p50, p95, p99), NOT averages. Averages hide outliers.
