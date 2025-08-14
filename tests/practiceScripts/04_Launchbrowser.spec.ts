import {test,chromium} from '@playwright/test'

test ('Test case for browser launch',async()=>{

    const browserInstance = await chromium.launch({headless:false,channel: "chrome"});
    const broswercontext = await browserInstance.newContext();
    const page = await broswercontext.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");

    await page.locator(".decorativeSubmit").click();

    const url = page.url();
    console.log("The page url value is " +url);
    
    const title = await page.title();
    console.log("The Title of page is +" +title  +"printed");

    await page.waitForTimeout(5000);

});