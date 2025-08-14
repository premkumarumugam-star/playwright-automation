import {chromium, test} from "playwright/test";
test("to launch the broswer", async()=>{
const browserInstance = await chromium.launch({headless: false, channel: "chrome"});
const broswercontext = await browserInstance.newContext();
const page = await broswercontext.newPage();
await page.goto("http://leaftaps.com/opentaps/control/main");

await page.locator("#username").fill("Demosalesmanager");

await page.locator("#password").fill("crmsfa");

await page.locator(".decorativeSubmit").click();

const urlval= page.url();
console.log("The Current URL is " +urlval);

const pagetitle= await page.title();
console.log("The title of page is " +pagetitle);

await page.waitForTimeout(5000);
});