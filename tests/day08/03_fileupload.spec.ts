import {test , chromium, expect} from '@playwright/test'
import path from 'path'


test ( 'File upload for File input tag', async({page})=>{

    // for input file Type in DOM 
    await page.goto('https://leafground.com/file.xhtml');
    await page.waitForLoadState('load');
    
    const fileupload= page.locator('.card').filter({hasText:'Basic Upload'});
    fileupload.locator('input[type="file"]').setInputFiles([path.join(__dirname,'m1000rr.jpg')]);

    await expect(fileupload.locator('.ui-fileupload-filename')).toContainText('m1000rr.jpg');
    await page.waitForTimeout(5000);

})


test ('File upload for complex type without no input type',async({page})=>{

        // for input file Type in DOM 
        await page.goto('https://the-internet.herokuapp.com/upload');
        await page.waitForLoadState('load');

        const filechoose =  page.waitForEvent('filechooser',{timeout:10000});
        await page.locator('#drag-drop-upload').click();
        await page.waitForTimeout(5000);

        const file = await filechoose;
        await file.setFiles([path.join(__dirname,'m1000rr.jpg')]);
        await expect(page.locator("#drag-drop-upload")).toHaveClass('dz-success-mark dz-clickable dz-started');
        await page.waitForTimeout(5000);


})