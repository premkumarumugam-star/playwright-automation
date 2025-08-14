import { chromium, expect, test } from "@playwright/test";

test ("window handling ", async({page,context})=>{


    await page.goto("https://leafground.com/window.xhtml");

    const windowpromise = context.waitForEvent("page"); 

    await page.getByText("Open",{exact:true}).click();

    //resolve the promise
    const window = await windowpromise;
    await expect(window).toHaveURL("https://leafground.com/dashboard.xhtml");
    console.log(window.url());

    await window.fill("#email","rr7@gmail.com");
    await window.close();

    await page.bringToFront();
    await page.locator(`i[class='pi pi-home']`).click();
    
    await page.waitForTimeout(5000);

})