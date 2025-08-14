import { test,chromium } from "@playwright/test";

/*. Launch a browser
2. Load the URL https://login.salesforce.com/
3. Enter the username as <username>
4. Enter the password as <passwprd>
5. Click the Log In button
6. Get the title of the page
7. Close the browser
*/

test("To launch the salesforce",async()=>{

    const instance= await chromium.launch({headless: false, channel: 'chrome'});
    const context= await instance.newContext();
    const page= await context.newPage();

    await page.goto("https://login.salesforce.com/");

    await page.locator("#username").fill("premkumarplaywright@gmail.com");

    await page.locator("#password").fill("Playwright@24492");

    await page.locator("#Login").click();

    await page.waitForTimeout(5000);

    const urlval= page.url();
    console.log("The URL Val is " +urlval);

    const pagetitle= await page.title();
    console.log("The tile of page is " +pagetitle);

});