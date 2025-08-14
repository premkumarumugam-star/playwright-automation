import {test,chromium} from '@playwright/test'

test("Handling multipel pages with Promise all" , async({page,context})=>{

    let webpage : any ;

     await page.goto("https://leafground.com/window.xhtml");
     await page.waitForLoadState('load');

     const [multipages]= await Promise.all([
        context.waitForEvent('page'),
        page.getByText('Open Multiple',{exact:true}).click(),  
     ]);

     await multipages.waitForLoadState('load');

     const pages = multipages.context().pages();
     console.log(`Number of total pages is ${pages.length}`);

     pages.forEach(tabs=>{
        console.log(tabs.url())
     })

     //const dashboard = await pages[2].bringToFront();

     for (let index = 0; index < pages.length; index++) {
          await pages[index].waitForLoadState('load');
          const title = await pages[index].title();
          console.log(title);

          if(title==='Web Table'){
             webpage= pages[index];
             console.log(`The page number is ${webpage}`);
          }

     }

     await webpage.fill("input[placeholder='Search...']", "Amy Elsner");

     await webpage.waitForTimeout(6000);

})