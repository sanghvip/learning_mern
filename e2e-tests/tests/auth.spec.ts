import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5173/"

test('should allow the user to signin', async ({ page }) => {
  await page.goto(UI_URL);

  //get the sign in button
  await page.getByRole("link",{name: "Sign In"}).click();

  await expect(page.getByRole("heading",{name:"Sign In"})).toBeVisible();

  await page.locator("[name=email]").fill("testps1@p.com");
  await page.locator("[name=password]").fill("Pratiksan99$");

  await page.getByRole("button",{name: "Login"}).click();

  await expect(page.getByText("Sign In Successful!")).toBeVisible();
  await expect(page.getByRole("link",{name:"My Bookings"})).toBeVisible();
  await expect(page.getByRole("link",{name:"My Hotels"})).toBeVisible();
  await expect(page.getByRole("button",{name:"Sign Out"})).toBeVisible();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
