# Quick Debugging Checklist

## When Stuck, Check:

- [ ] **Typos**: Variable names, function names (spelling matters!).
- [ ] **Case Sensitivity**: `fileName` vs `filename`.
- [ ] **Null/Undefined**: Accessing properties on null objects?
- [ ] **Off-by-one**: Array loops or index boundaries.
- [ ] **Async Timing**: Are you awaiting promises? Race conditions?
- [ ] **Scope**: Variable hoisting, closures, `this` context.
- [ ] **Types**: Implicit coercion or mismatching types.
- [ ] **Dependencies**: Are `node_modules` stale? `npm install`.
- [ ] **Environment**: Missing `.env` vars? Wrong API URL?
- [ ] **Caching**: Browser cache, build cache, database cache.
- [ ] **Stale Data**: Database state mismatching code expectations.
