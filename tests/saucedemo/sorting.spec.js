const { test, expect } = require('@playwright/test');

test.describe('Product Sorting Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
  });

  test('TC09 - Sort products by price low to high', async ({ page }) => {
    await page.selectOption('.product_sort_container', 'lohi');
    const prices = await page.locator('.inventory_item_price').allTextContents();
    const numbers = prices.map(p => parseFloat(p.replace('$', '')));
    for (let i = 0; i < numbers.length - 1; i++) {
      expect(numbers[i]).toBeLessThanOrEqual(numbers[i + 1]);
    }
  });

  test('TC10 - Sort products by name A to Z', async ({ page }) => {
    await page.selectOption('.product_sort_container', 'az');
    const names = await page.locator('.inventory_item_name').allTextContents();
    const sorted = [...names].sort();
    expect(names).toEqual(sorted);
  });

});