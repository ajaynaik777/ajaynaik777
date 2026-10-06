import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.applitools.com/')
  await page.getByRole('textbox', { name: 'Enter your username' }).click();
  await page.getByRole('textbox', { name: 'Enter your username' }).fill('ajay');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('asd');
  await page.getByRole('checkbox', { name: 'Remember Me' }).check();
  await page.getByRole('link', { name: 'Sign in' }).click();
})