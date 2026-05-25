# playwright-automation-framework
E2E test automation framework using Playwright and JavaScript
# 🎭 Playwright Automation Framework

![Playwright Tests](https://github.com/upari-mansi/playwright-automation-framework/actions/workflows/playwright.yml/badge.svg)

An end-to-end test automation framework built with **Playwright** and **JavaScript**, 
testing the [SauceDemo](https://www.saucedemo.com) e-commerce application.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev/) | Test automation framework |
| JavaScript | Programming language |
| GitHub Actions | CI/CD - auto runs tests on every push |
| SauceDemo | Application under test |

---

## 📁 Project Structure
tests/
└── saucedemo/
├── login.spec.js      # Login test cases
├── cart.spec.js       # Shopping cart test cases
├── checkout.spec.js   # Checkout flow test cases
└── sorting.spec.js    # Product sorting test cases
---

## ✅ Test Cases

| # | Test File | Test Case | Description |
|---|---|---|---|
| TC01 | login.spec.js | Valid login | Logs in with correct credentials |
| TC02 | login.spec.js | Invalid login | Verifies error message |
| TC03 | login.spec.js | Empty login | Verifies required field error |
| TC04 | cart.spec.js | Add to cart | Adds item and checks badge |
| TC05 | cart.spec.js | Remove from cart | Removes item and checks badge |
| TC06 | cart.spec.js | Cart contents | Verifies correct item in cart |
| TC07 | checkout.spec.js | Full checkout | Completes entire purchase flow |
| TC08 | checkout.spec.js | Incomplete form | Verifies form validation |
| TC09 | sorting.spec.js | Price sort | Verifies low to high price sort |
| TC10 | sorting.spec.js | Name sort | Verifies A to Z name sort |

---

## 🚀 How to Run Tests

**Run all tests:**
```bash
npx playwright test tests/saucedemo/
```

**Run a specific test file:**
```bash
npx playwright test tests/saucedemo/login.spec.js
```

**View HTML report:**
```bash
npx playwright show-report
```

---

## 🔄 CI/CD

Tests automatically run on every push to `main` via **GitHub Actions**.  
Results are available in the **Actions** tab with a downloadable HTML report.