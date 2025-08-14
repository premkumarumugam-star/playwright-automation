import { test } from "@playwright/test";
import { LoginPage } from "./08_Loginmain.spec";
import { log } from "console";

test("Page object factory testing", async({page})=>{

    const logincall = new LoginPage();
    await page.goto("https://login.salesforce.com/");
    await logincall.login(page,"premkumarplaywright@gmail.com","Playwright@24492");



})