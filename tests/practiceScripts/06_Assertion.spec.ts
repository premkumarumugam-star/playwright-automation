import {test,expect} from '@playwright/test'

test('This is for Assertion',async({page})=>{

    await page.goto("https://leafground.com/input.xhtml");
    
    const name= await page.getByPlaceholder("Babu Manickam");
    await expect(name).toBeEnabled();

    const place = await page.getByPlaceholder("Disabled");
    await expect(place).toBeDisabled();

    await expect(page).toHaveTitle("Input Components");



})