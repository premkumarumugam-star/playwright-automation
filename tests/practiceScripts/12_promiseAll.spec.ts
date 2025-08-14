import {test} from '@playwright/test'

test ("This is for multiple window handling",async({page,context})=>{

    let webpage:any;

    await page.goto("https://leafground.com/window.xhtml");
    await page.waitForLoadState("load");

    const [multipages] = await Promise.all([

        context.waitForEvent('page'),
        await page.getByText('Open Multiple',{exact:true}).click(),

    ]);

    await multipages.waitForLoadState('load');

    const pages = multipages.context().pages();
    console.log(`The page lenth is ${page}`);

    pages.forEach(tabs=>{
        console.log(tabs.url());
    })

    for(let index=0;index<pages.length;index++){

     await pages[index].waitForLoadState("load");
     const title =await pages[index].title();
     console.log(title);

     if(title ==='Web Table'){
        webpage = pages[index];
     }

    }

    await webpage.fill("input[placeholder='Search...']", "Amy Elsner");

    await webpage.waitForTimeout(6000);


})