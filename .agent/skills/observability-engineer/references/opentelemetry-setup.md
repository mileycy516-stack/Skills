# OpenTelemetry (OTel) Setup

## Why OTel?
Vendor lock-in is bad. OTel lets you swap Datadog for Jaeger for Grafana Tempo without changing application code.

## Architecture
1.  **App Instrumentation**: Libraries inside your code (`@opentelemetry/sdk-node`).
2.  **Collector**: A standalone binary (sidecar or central) that receives telemetry, processes it (batch, filter, redact), and exports it.
3.  **Backend**: The storage (Prometheus, Splunk, etc.).

## Auto-Instrumentation (Node.js Example)
```javascript
// instrumentation.ts
import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

const sdk = new NodeSDK({
  traceExporter: new ConsoleSpanExporter(), // or OTLPExporter
  instrumentations: [getNodeAutoInstrumentations()], 
  // Automatically captures HTTP, Express, Postgres, Redis...
});

sdk.start();
```
