//TO USE THIS FILE YOU NEED TO UNCOMMENT IN PLAYWRIGHT CONFIG THE FIRST LINE BELOW export default config{ (globalSetup: "./global-setup.ts") 
// AND THE LINE BELOW headless:false (storageState: "./playwright/.auth/auth.json") - THEN MOVE THIS FILE TO ROOT FOLDER OF THE PROJECT

// import { chromium,expect } from "@playwright/test"

// async function globalSetup(){

//     const browser = await chromium.launch()
//     const context = await browser.newContext()
//     const page = await context.newPage()


//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.getByRole('textbox', { name: 'Username' }).fill("Admin")
//     await page.getByRole('textbox', { name: 'Password' }).fill("admin123")
//     await page.getByRole('button', { name: 'Login' }).click()
//     await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
//     await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
//     await page.context().storageState({path: "./playwright/.auth/auth.json"})
// }

// export default globalSetup