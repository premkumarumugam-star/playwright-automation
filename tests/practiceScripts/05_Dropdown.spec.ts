import {test,chromium} from '@playwright/test'

test ("This case is for dropdown",async()=>{

    const broswerinstance = await chromium.launch({headless:false,channel:"chrome"});
    const broswercontext= await broswerinstance.newContext();
    const page = await broswercontext.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByLabel("Username").fill("Demosalesmanager");

    await page.getByLabel("Password").fill("crmsfa");

    await page.locator(".decorativeSubmit").click();


    await page.click("a:has-text('CRM/SFA')");

    await page.click("//*[text()='Leads']");

    await page.click("//a[text()='Create Lead']");

    await page.locator("#createLeadForm_companyName").fill("MSC");

    await page.locator("#createLeadForm_firstName").fill("PREMKUMAR");

    await page.locator("#createLeadForm_lastName").fill("A");

    await page.selectOption('#createLeadForm_dataSourceId',{label:"Direct Mail"})

    await page.selectOption('#createLeadForm_marketingCampaignId',{index:2});

    await page.selectOption("#createLeadForm_currencyUomId",{value:'AOK'});

    await page.waitForTimeout(5000);


})