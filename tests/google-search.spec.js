import { test, expect } from '@playwright/test';

test('searches Google for roboticQA', async ({ page }) => {
  await page.goto('https://www.google.com/');

  const searchBox = page.locator('textarea[name="q"]');
  await searchBox.fill('roboticQA');
  await searchBox.press('Enter');

  await expect(page).toHaveURL(/google\.com\/search\?.*q=roboticQA/);
  await expect(page.locator('textarea[name="q"], input[name="q"]').first()).toHaveValue('roboticQA');
});