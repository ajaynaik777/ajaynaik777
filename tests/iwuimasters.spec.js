import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  await page.goto('http://44.195.212.90:5083/IWIVRUI/Application/Index?dblb=VishalIW#');
  await page.waitForTimeout(30000);
  //await page.locator('#btnDashboardMaster').click();
//   await page.locator('#btnCreateGlobalKeysNavigator').click();
//   await page.getByRole('button', { name: 'window-Maximize' }).click();
//   await page.getByRole('textbox', { name: 'Key' }).click();
//   await page.getByRole('textbox', { name: 'Key' }).fill('auto');
//   await page.getByRole('textbox', { name: 'Value' }).click();
//   await page.getByRole('textbox', { name: 'Value' }).fill('456');
//   await page.getByText('save Save', { exact: true }).click();
//   await page.getByRole('button', { name: 'Yes' }).click();
//   await page.locator('div').filter({ hasText: 'Key added/updated' }).nth(1).click();
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.locator('#btnMaster').click();
//   await page.locator('#btnCreateGlobalKeys').click();
//   await page.getByText('Redirect to OCM').click();
//   await page.getByRole('textbox', { name: 'Value' }).fill('456edit');
//   await page.goto('http://44.195.212.90:5083/IWIVRUI/Application/Index?dblb=VishalIW#');
//   await page.getByRole('textbox', { name: 'Customer Segment' }).fill('testauto');
//   await page.getByRole('textbox', { name: 'Intent' }).fill('6899');
//   await page.getByRole('textbox', { name: 'VDN' }).fill('3457');
});