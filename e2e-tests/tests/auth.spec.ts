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

  await expect(page.getByText("SignIn successful")).toBeVisible();
  await expect(page.getByRole("link",{name:"My Bookings"})).toBeVisible();
  await expect(page.getByRole("link",{name:"My Hotels"})).toBeVisible();
  await expect(page.getByRole("button",{name:"Sign Out"})).toBeVisible();
});

test('should allow the user to register', async ({ page }) => {
  await page.goto(UI_URL);

  //click on signin button
  await page.getByRole("link",{name: "Sign In"}).click();

  await expect(page.getByRole("heading",{name:"Sign In"})).toBeVisible();

  await page.getByRole("link",{name: "Create an account here"}).click();

  await expect(page.getByRole("heading",{name:  "Create an account"})).toBeVisible();
  await page.locator("[name=firstName]").fill("testps2");
  await page.locator("[name=lastName]").fill("testps2");
  await page.locator("[name=email]").fill("testps2@p.com");
  await page.locator("[name=password]").fill("Pratiksan99$");
  await page.locator("[name=confirmPassword]").fill("Pratiksan99$");
  await page.getByRole("button",{name: "Create Account"}).click();
  
  await expect(page.getByText("Registration Success!")).toBeVisible();
  await expect(page.getByRole("link",{name:"My Bookings"})).toBeVisible();
  await expect(page.getByRole("link",{name:"My Hotels"})).toBeVisible();
  await expect(page.getByRole("button",{name:"Sign Out"})).toBeVisible();



});