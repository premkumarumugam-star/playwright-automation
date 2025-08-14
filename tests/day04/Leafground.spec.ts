import{test,expect,chromium} from "@playwright/test"

test("leafground validation",async({page})=>{

    await page.goto("https://leafground.com/input.xhtml");

    const name= page.getByPlaceholder("Babu Manickam");
    await expect(name).toBeEnabled();

    await name.fill("prem kumar");

    const company = page.getByPlaceholder("Disabled");
    await expect(company).toBeDisabled();





})