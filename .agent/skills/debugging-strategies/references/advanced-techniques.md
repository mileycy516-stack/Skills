# Advanced Debugging Techniques

## Technique 1: Binary Search Debugging (Git Bisect)
Use git to find the exact commit that introduced a bug.
```bash
git bisect start
git bisect bad                    # Current commit is bad
git bisect good v1.0.0            # v1.0.0 was good
# Git checks out middle commit... test it
git bisect good   # if it works
git bisect bad    # if it's broken
git bisect reset  # when done
```

## Technique 2: Differential Debugging
Compare working vs broken environments/states side-by-side.
*   **Environment**: Dev vs Prod?
*   **Node Version**: 18 vs 20?
*   **Data**: Empty DB vs populated?

## Technique 3: Trace Debugging (Decorators)
Wrap functions to log inputs and outputs automatically.
```typescript
function trace(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Call ${key}`, args);
    const result = original.apply(this, args);
    console.log(`Return ${key}`, result);
    return result;
  };
  return descriptor;
}
```

## Technique 4: Memory Leak Detection
*   **Chrome**: Compare Heap Snapshots.
*   **Node**: Check `process.memoryUsage().heapUsed`.
*   **Tests**: Monitor memory diff between `beforeEach` and `afterEach`.
