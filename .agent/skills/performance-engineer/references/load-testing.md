# Load Testing Strategy (k6)

## Scripting a Test
```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp up to 20 users
    { duration: '1m', target: 20 },  // Stay at 20 (Load)
    { duration: '10s', target: 0 },  // Ramp down
  ],
};

export default function () {
  const res = http.get('https://api.example.com/products');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
```

## Types of Tests
1.  **Smoke**: 1 user, confirm script works.
2.  **Load**: Target is expected usage. Checks SLAs (latency).
3.  **Stress**: Target is extreme usage. Checks failure mode (Graceful? Or crash?).
4.  **Soak**: Long duration (12h). Checks memory leaks.
