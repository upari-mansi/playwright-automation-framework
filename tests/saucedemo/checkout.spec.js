const { test, expect } = require('@playwright/test');

test.describe('Checkout Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Login and add item to cart before each test
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
  });

  test('TC07 - Complete full checkout flow', async ({ page }) => {
    await page.click('[data-test="checkout"]');
    await page.fill('[data-test="firstName"]', 'John');
    await page.fill('[data-test="lastName"]', 'Doe');
    await page.fill('[data-test="postalCode"]', '12345');
    await page.click('[data-test="continue"]');
    await page.click('[data-test="finish"]');
    await expect(page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  });

  test('TC08 - Checkout fails without filling form', async ({ page }) => {
    await page.click('[data-test="checkout"]');
    await page.click('[data-test="continue"]');
    await expect(page.locator('[data-test="error"]'))
      .toContainText('First Name is required');
  });

});