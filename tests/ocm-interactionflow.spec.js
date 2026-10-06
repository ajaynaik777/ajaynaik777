import { test, expect } from '@playwright/test';

const ocmUrl = 'http://44.195.212.90:8345/';
const username = process.env.OCM_USERNAME ?? 'vishalIW';
const password = process.env.OCM_PASSWORD;

test('opens interactionflow from the Admin app module', async ({ page }) => {
  test.skip(!password, 'Set OCM_PASSWORD before running this test.');

  await page.goto(ocmUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByText('Admin', { exact: true }).click();

  const searchBox = page.locator(
    'input[type="search"], input[placeholder*="Search" i], input[aria-label*="Search" i]'
  ).first();
  await expect(searchBox).toBeVisible();
  await searchBox.fill('app');

  const appModule = page.getByText('App', { exact: true });
  await expect(appModule).toBeVisible();
  await appModule.click();

  const interactionflow = page.getByText('interactionflow', { exact: true });
  await expect(interactionflow).toBeVisible();
  await interactionflow.click();
});