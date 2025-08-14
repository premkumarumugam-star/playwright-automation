import {test, expect  } from "@playwright/test";

test("To create Test Lead",async({page})=>{

    page.goto("http://leaftaps.com/opentaps/control/main");

    await page.getByLabel("Username").fill("Demosalesmanager");

    await page.getByLabel("Password").fill("crmsfa");

    await page.locator(".decorativeSubmit").click();


    await page.click("a:has-text('CRM/SFA')");

    await page.click("//*[text()='Leads']");

    await page.click("//a[text()='Create Lead']");

    await page.locator("#createLeadForm_companyName").fill("MSC");

    await page.locator("#createLeadForm_firstName").fill("PREMKUMAR");

    await page.locator("#createLeadForm_lastName").fill("A");

    await page.selectOption('#createLeadForm_dataSourceId',{label:'Conference'});

    await page.selectOption('#createLeadForm_marketingCampaignId',{value:'CATRQ_CAMPAIGNS'});
    
    await page.selectOption('#createLeadForm_industryEnumId',{index:2});

    await page.click("//*[@name='submitButton']");

    await page.waitForLoadState("load");

    const url= page.url();
    console.log("The URL of Page is " +url);

    
    const title= await page.title();
    console.log("The URL of Page is " +title);

    //expect(title).toBe("View Lead | opentaps CRM");
    await expect(page).toHaveTitle("View Lead | opentaps CRM");




})