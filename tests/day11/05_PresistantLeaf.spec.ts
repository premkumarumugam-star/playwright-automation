import {test, chromium} from '@playwright/test'

test("leaf tap with username and password", async()=>{


    const userDataDir = './myUserDataDir'
    const context = await chromium.launchPersistentContext(userDataDir,{
        headless :false,
        httpCredentials:{

            username:"admin",
            password:"testleaf",
            origin:"https://leafground.com/auth.xhtml"
        }
    })

    const page = await context.newPage();
    await page.goto("https://leafground.com/auth.xhtml");
    await page.getByRole('button', {name: 'Basic Auth'}).click();
    await page.close();
    await context.close();


})