import {test,expect} from "@playwright/test"

test.use({storageState:{cookies:[],origins:[]}}) //this is to reset cookies auth

test.beforeEach("Login",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // await page.getByRole('textbox', { name: 'Username' }).fill("Admin")
    // await page.getByRole('textbox', { name: 'Password' }).fill("admin123")
    // await page.getByRole('button', { name: 'Login' }).click()
    // await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    // await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
})

test("Verify timesheet card navigation on Dashboard page",async({page,context})=>{
    await context.clearCookies() //this will not use auth cookies
    await expect(page.locator("#app")).toContainText("Quick Launch")
    await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible()
    await page.getByRole('button', { name: 'Timesheets' }).click()
    await expect(page.getByLabel('TopBar Menu').getByRole('list')).toContainText("Timesheets")
})

test("Add candidate for recruitment",async({page})=>{
    await page.getByRole('link', { name: 'Recruitment' }).click()
    await page.getByRole('button', { name: ' Add' }).click() 
    await expect(page.locator('#app')).toContainText("Add Candidate")
    await page.getByRole('textbox', { name: 'First Name' }).fill("Dario")
    await page.getByRole('textbox', { name: 'Middle Name' }).fill("Exequiel")
    await page.getByRole('textbox', { name: 'Last Name' }).fill("Guardia")
    await page.getByRole('textbox', { name: 'Type here' }).first().fill("rimuu48@gmail.com")
    await page.getByRole('button', { name: 'Save' }).click()
    await expect(page.locator("#app")).toContainText("Dario Exequiel Guardia")
    await expect(page.getByText('Dario Exequiel Guardia', { exact: true })).toBeVisible()

})

test("Verify Apply Leave card navigation on dashboard page",async({page})=>{
    await expect(page.locator("#app")).toContainText("Quick Launch")
    await expect(page.getByRole('link', { name: 'Leave' })).toBeVisible()
    await page.getByRole('link', { name: 'Leave' }).click()
    await expect(page.getByRole('link', { name: 'My Leave' })).toBeVisible()

})

