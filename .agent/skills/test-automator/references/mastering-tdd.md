# Mastering Test-Driven Development (TDD)

## The 3 Laws of TDD
1.  You are not allowed to write any production code unless it is to make a failing unit test pass.
2.  You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
3.  You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

## Workflow: Red-Green-Refactor

### 1. Red (Failing Test)
Write the test as if the API already exists.
```typescript
it('calculates total price with tax', () => {
  const cart = new Cart();
  cart.add({ price: 100 });
  expect(cart.total).toBe(110); // Fails: method doesn't exist or returns undefined
});
```

### 2. Green (Make it Pass)
Write the minimal code. Hardcoding is allowed initially!
```typescript
class Cart {
  total = 110; // "Cheat" to pass the test first
}
```

### 3. Refactor (Clean it up)
Now implement the real logic, ensuring tests stay green.
```typescript
class Cart {
  private items = [];
  add(item) { this.items.push(item); }
  get total() { return this.items.reduce(...) * 1.1; }
}
```

## TDD Schools of Thought
*   **Chicago (Classic)**: Verify state. Uses real objects (no mocks usually). Focus on "what happened".
*   **London (Mockist)**: Verify interaction. Uses mocks. Focus on "who was called".
