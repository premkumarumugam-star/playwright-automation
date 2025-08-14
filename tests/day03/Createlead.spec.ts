import {test,chromium  } from "@playwright/test";

test("To create Test Lead",async()=>{

    const browinstance= await chromium.launch({headless:false});

    const context= await browinstance.newContext();

    const page =  await context.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("Demosalesmanager");


    await page.locator("#password").fill("crmsfa");

    await page.locator(".decorativeSubmit").click();


    await page.click("a:has-text('CRM/SFA')");

    await page.click("//*[text()='Leads']");

    await page.click("//a[text()='Create Lead']");

    await page.locator("#createLeadForm_companyName").fill("MSC");

    await page.locator("#createLeadForm_firstName").fill("PREMKUMAR");

    await page.locator("#createLeadForm_lastName").fill("A");

    await page.click("//*[@name='submitButton']");

    await page.waitForLoadState("load");

    const url= page.url();
    console.log("The URL of Page is " +url);

    
    const title= await page.title();
    console.log("The URL of Page is " +title);

    await page.waitForTimeout(5000);
    
    

})