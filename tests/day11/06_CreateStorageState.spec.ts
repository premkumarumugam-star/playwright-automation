import { test } from "@playwright/test";


test("Login to Salesforce",async ({page}) => {

    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "premkumarplaywright@gmail.com");
    await page.fill("#password", "Playwright2@24492");
    await page.click("#Login");
    await page.context().storageState({path:"creds/sf-login-storage.json"})
})