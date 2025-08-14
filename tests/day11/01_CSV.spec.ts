import { test } from '@playwright/test';
import {parse} from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';


const records = parse(fs.readFileSync(path.join(__dirname,"logindata.csv")),{
      columns:true,
      skip_empty_lines:true

});

for (const record of records){

test(`login using CSV from ${record.test_case}`,async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.fill("#username",record.username);
    await page.fill("#password",record.password);
    await page.click("#Login");

    console.log("Login is done successfully");
});

}