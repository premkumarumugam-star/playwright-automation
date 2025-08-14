import {test,chromium} from '@playwright/test'

test('shadow DOM Accessing' , async({page}) =>{

    await page.goto("https://dev205797.service-now.com/");
    await page.waitForLoadState('load');
    await page.locator('#user_name').fill('admin');
    await page.locator('#user_password').fill('admin');
    await page.locator('#sysverb_login').click();

    // It will access the Shadow Dom - Root (Open) Without any dependicies . 
    await page.getByRole('button',{name:'All'}).click();
    await page.getByPlaceholder('Filter').fill('Incident');
    await page.getByLabel('Incidents', { exact: true }).click();


})