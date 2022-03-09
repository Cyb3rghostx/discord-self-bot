const { test } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  await page.goto('https://canary.discord.com/login');
  await page.fill('input[name="email"]', 'sparwik.pro@gmail.com');
  await page.fill('input[name="password"]', 'cyberghost$$974');
  await page.click('text=Se connecter');
});

test('first', async ({ page }) => {
  // page is signed in.
  console.log(page)
});

test('second', async ({ page }) => {
  // page is signed in.
  console.log(page)
});