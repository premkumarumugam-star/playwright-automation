import { test} from '@playwright/test'

test('frame handling 1 ', async({page}) =>{

await page.goto("https://leafground.com/frame.xhtml");

const frame1 = page.frame({url:'https://leafground.com/default.xhtml'});

await frame1?.waitForSelector('button#Click');

await frame1?.locator('button#Click').click();

await page.waitForTimeout(5000);

//to get the frame count 

const countofframe = page.frames();

console.log(`No of frames present is ${countofframe.length}`);

await countofframe[4].click('button#Click');

await page.waitForTimeout(5000);



})


test.only('frame handling inner frame ', async({page}) =>{

    await page.goto("https://leafground.com/frame.xhtml");
    
    const inframe1 = page.frameLocator('iframe').first();

    await inframe1.locator('#Click').click();
    await page.waitForTimeout(5000);

    //Inner frame 
    const cardlocator = page.locator('.card').filter({hasText:" Click Me (Inside Nested frame)"});

    const framebutton1 = cardlocator.frameLocator('iframe');

    await framebutton1.frameLocator('iframe').locator('#click').click();

    await page.waitForTimeout(5000);

})