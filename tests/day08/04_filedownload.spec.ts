
import {test , chromium, expect} from '@playwright/test'
import path from 'path'


test ( 'File download for File input tag', async({page})=>{

    // for input file Type in DOM 
    await page.goto('https://leafground.com/file.xhtml');
    await page.waitForLoadState('load');
    
    const down =  page.waitForEvent('download');
    
    await page.getByRole('button',{name:'Download'}).click();
    
    const download = await down;

    download.saveAs(path.join("downloads/"+download.suggestedFilename()));

    await page.waitForTimeout(5000);
})

