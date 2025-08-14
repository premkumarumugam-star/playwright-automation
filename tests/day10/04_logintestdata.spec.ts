import {test} from "@playwright/test";

import logindata from "../../test-data/salesforcedata.json";

test("Login using data from json file",async ({page}) => {

    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", logindata.username);
    await page.fill("#password", logindata.password);
    await page.click("#Login");
    
});