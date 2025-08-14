import {test} from '@playwright/test'

test ('This is for Alert Testing',async({page})=>{

    await page.goto("https://leafground.com/alert.xhtml");
    await page.waitForLoadState("load");
    await page.waitForTimeout(5000);


    //prompt  Dialog Alert  
    const prompt = page.locator(".card").filter({hasText:" Alert (Prompt Dialog)"});
    await prompt.locator('button').filter({hasText:"Show"}).click();

    page.once('dialog',async dialog=>{
        const message = dialog.message();
        console.log(message);
        const type= dialog.type();
        console.log(type);
        dialog.accept("My name is prem");
    })

        //Simple Alert  
        const simple = page.locator(".card").filter({hasText:" Alert (Simple Dialog)"});
        await simple.locator('button').filter({hasText:"Show"}).click();
    
        page.once('dialog',async dialog=>{
            const message = dialog.message();
            console.log(message);
            const type= dialog.type();
            console.log(type);
            dialog.accept();
        })

                //Confirm Alert  
                const Confirm = page.locator(".card").filter({hasText:" Alert (Confirm Dialog)"});
                await Confirm.locator('button').filter({hasText:"Show"}).click();
                await page.waitForTimeout(5000);
            
                page.once('dialog',async dialog=>{
                    const message = dialog.message();
                    console.log(message);
                    const type= dialog.type();
                    console.log(type);
                    dialog.accept();
                })


    await page.waitForTimeout(5000);


     



})