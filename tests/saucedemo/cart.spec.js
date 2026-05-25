const { test, expect } = require('@playwright/test');

test.describe('Cart Tests', () => {

  test.beforeEach(async ({ page }) => {
    // This runs before every test - logs in first
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
  });

  test('TC04 - Add item to cart', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('TC05 - Remove item from cart', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="remove-sauce-labs-backpack"]');
    await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
  });

  test('TC06 - Cart shows correct item', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await expect(page.locator('.inventory_item_name'))
      .toHaveText('Sauce Labs Backpack');
  });

});