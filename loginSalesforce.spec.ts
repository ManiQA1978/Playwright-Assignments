//log in to Salesforce using Playwright with TypeScript
// 1. Open Salesforce login page
// 2. Enter username
// 3. Enter password
// 4. Click on the login button
// 5. Close the browser

import { chromium,test } from "@playwright/test"
test("To log in to Salesforce", async () => {
    const browserInstance = await chromium.launch({ headless: false, channel: "chrome" })
    const browserContext = await browserInstance.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://login.salesforce.com/")
    await page.fill('input[name="username"]', "")
    await page.fill('input[name="pw"]', "")
    await page.click('input[name="Login"]')    
    setTimeout(async () => {      
    }, 10000)   
    console.log("Page Title is : ", await page.title())
    console.log("Current URL is : ", page.url())
    await browserInstance.close();
    })