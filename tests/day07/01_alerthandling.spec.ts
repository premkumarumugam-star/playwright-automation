import {test} from '@playwright/test';


test('Handling Alert',async({page})=>{


    await page.goto("https://leafground.com/alert.xhtml");
    await page.waitForTimeout(5000);


    
    // page.once('dialog',async dialog=>{
    //     const message = dialog.message();
    //     console.log(message);
    //     const type= dialog.type();
    //     console.log(type);
    //     dialog.accept();
    // })

    //simple alert
    await page.locator('text=Show').first().click();

    await page.waitForTimeout(5000);


    page.once('dialog',async dialog=>{
        const message = dialog.message();
        console.log(message);
        const type= dialog.type();
        console.log(type);
        dialog.dismiss();
    })

    //prompt alert
    console.log("This is Confirmation Alert action");
    const card = page.locator('.card').filter({hasText:" Alert (Confirm Dialog)"});
    await card.locator('button').filter({hasText:"Show"}).click();
    await page.waitForTimeout(5000);

    page.once('dialog',async dialog=>{
        const message = dialog.message();
        console.log(message);
        const type= dialog.type();
        console.log(type);
        dialog.accept("My name is Prem Kumar");
    })


    // //prompt Alert
    // console.log("This is Prompt Alert action");
    // const prompt = page.locator('.card').filter({hasText:" Alert (Prompt Dialog)"});
    // await prompt.locator('button').filter({hasText:'Show'});
    // await page.waitForTimeout(5000);


})