const { test, expect } = require('@playwright/test');

test.describe('Login Tests', () => {

  test('TC01 - Login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('TC02 - Login with invalid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'wrong_user');
    await page.fill('#password', 'wrong_pass');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username and password do not match');
  });

  test('TC03 - Login with empty credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username is required');
  });

});