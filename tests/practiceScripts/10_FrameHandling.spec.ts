import {test} from '@playwright/test'

test("This is frame testing",async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml");

    const firstframe= page.frameLocator("iframe").first();
    await firstframe.locator("#Click").click();

    await page.waitForTimeout(5000);
    
    //inner frame 

    const secondframe = page.locator(".card").filter({hasText:"Click Me (Inside Nested frame)"});
    const thirframe = secondframe.frameLocator("iframe");
    await thirframe.frameLocator("iframe").locator("#click").click();
    await page.waitForTimeout(5000);


})