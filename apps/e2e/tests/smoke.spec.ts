import { test, expect } from '@playwright/test';

test('smoke', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.waitForURL('/app');

  // verify dashboard loads:
  await expect(
    page.getByText(/Welcome|Dashboard/i),
  ).toBeVisible();

  // open user menu and sign out:
  await page.getByRole('button', { name: 'Open user menu' }).click();
  await page.getByRole('menuitem', { name: 'Sign Out' }).click();
  await page.waitForURL('/auth/login?redirectTo=%2Fapp');

  // verify we're back at login:
  await expect(
    page.getByRole('heading', { name: /log in|login/i }),
  ).toBeVisible();
});
