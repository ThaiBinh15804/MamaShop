import { test, expect } from '@playwright/test';

test('welcome page loads', async ({ page }) => {
  await page.goto('/');
  
  // verify welcome page renders:
  await expect(
    page.getByRole('heading', { name: /Welcome to Project/i }),
  ).toBeVisible();
});
