import { test,expect } from '@playwright/test';
test ( 'Login Elsevier test', async ({ page }) => {
    await page.goto('https://www.elsevier.com/en-in')
    await page.locator('span').filter({ hasText: 'About' }).first().click();
})