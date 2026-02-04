# Playwright E2E Setup Patterns

## Resilient Locators (The "AI" Way)
Don't use `div > span:nth-child(2)`. DOM changes break this.
Use user-facing attributes:

```typescript
// ✅ Good: Resilient
await page.getByRole('button', { name: 'Submit' }).click();
await page.getByLabel('Email').fill('user@example.com');

// ❌ Bad: Fragile
await page.locator('#submit-btn-v2').click();
await page.locator('.form-group > input').fill('...');
```

## Page Object Model (POM)
Encapsulate page structure logic.

```typescript
// tests/pages/LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}

  async login(user, pass) {
    await this.page.getByLabel('User').fill(user);
    await this.page.getByLabel('Pass').fill(pass);
    await this.page.getByRole('button', { name: 'Go' }).click();
  }
}

// tests/login.spec.ts
test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('alice', 'secret');
  await expect(page).toHaveURL('/dashboard');
});
```

## Visual Regression (Snapshot)
```typescript
test('landing page looks correct', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('landing-v1.png');
});
```
