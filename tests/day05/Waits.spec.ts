import {test,expect} from '@playwright/test'


test('testleaf waits test',async({page})=>{

    await page.goto('https://leafground.com/waits.xhtml');
    //Check Visiblity of Element
    const visibleelement = page.locator('.card').filter({hasText:'Wait for Visibility'});
    const clickvisible = visibleelement.getByRole("button").filter({hasText:'Click'});

    await clickvisible.click();
    const buttontocheck = visibleelement.getByRole("button").filter({hasText:'I am here'});
    await expect(buttontocheck).toBeVisible({timeout:10000});

    //Check invisible
    const invisibleelement = page.locator('.card').filter({hasText:'Wait for Invisibility'});
    const clickinvisible = invisibleelement.getByRole("button").filter({hasText:'Click'});

    await clickinvisible.click();
    const buttontocheckin = invisibleelement.getByRole("button").filter({hasText:'I am about to hide'});
    await expect(buttontocheckin).toBeHidden({timeout:10000});
    

    // const textelement = page.locator('.card').filter({hasText:'Wait for Text Change'});
    // const clicktextchange= textelement.getByRole("button").filter({hasText:'Click'});

    // await clicktextchange.click();
    // const buttontochecktext = clicktextchange.getByRole("button").filter({hasText:'Did you notice?'});
    // await expect(buttontochecktext).toContainText('Did you notice?',{timeout:80000});
    
    

})