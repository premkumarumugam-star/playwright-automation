import { chromium, test } from "@playwright/test";

test("Testing for Presistant Broswer",async()=>{

    const userDataDir ='./myUserDataDir'

    const context = await chromium.launchPersistentContext(userDataDir,{
        headless :false,
    });
 
    const page = await context.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "premkumarplaywright@gmail.com");
    await page.fill("#password", "Playwright2@24492");
    await page.click("#Login");
    await page.close();
    await context.close();

})