import {test,expect} from "@playwright/test"
import dataArray from "../testdata/testdata1.json" with {type:"json"}
import loginData from "../testdata/logindata.json" with {type:"json"}


test.beforeEach("Login", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByRole('textbox', { name: 'Username' }).fill(loginData.username)
    await page.getByRole('textbox', { name: 'Password' }).fill(loginData.password)
    await page.getByRole('button', { name: 'Login' }).click()
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
})

test("Verify timesheet card navigation on Dashboard page",async({page})=>{
    await expect(page.locator("#app")).toContainText("Quick Launch")
    await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible()
    await page.getByRole('button', { name: 'Timesheets' }).click()
    await expect(page.getByLabel('TopBar Menu').getByRole('list')).toContainText("Timesheets")
})

dataArray.forEach((data) => {

    test(`Add candidate for recruitment ${data.fname}`, async({page})=>{
        await page.getByRole('link', { name: 'Recruitment' }).click()
        await page.getByRole('button', { name: ' Add' }).click() 
        await expect(page.locator('#app')).toContainText("Add Candidate")
        await page.getByRole('textbox', { name: 'First Name' }).fill(data.fname)
        await page.getByRole('textbox', { name: 'Middle Name' }).fill(data.mname)
        await page.getByRole('textbox', { name: 'Last Name' }).fill(data.lname)
        await page.getByRole('textbox', { name: 'Type here' }).first().fill(data.email)
        await page.getByRole('button', { name: 'Save' }).click()
        await expect(page.getByText("Application Stage")).toBeVisible()
        // await expect(page.locator("#app")).toContainText("Dario Exequiel Guardia")
        // await expect(page.getByText('Dario Exequiel Guardia', { exact: true })).toBeVisible()
    })

})

// for (const data of dataArray) {
//        test(`Add candidate for recruitment ${data.fname}`, async({page})=>{
//         await page.getByRole('link', { name: 'Recruitment' }).click()
//         await page.getByRole('button', { name: ' Add' }).click() 
//         await expect(page.locator('#app')).toContainText("Add Candidate")
//         await page.getByRole('textbox', { name: 'First Name' }).fill(data.fname)
//         await page.getByRole('textbox', { name: 'Middle Name' }).fill(data.mname)
//         await page.getByRole('textbox', { name: 'Last Name' }).fill(data.lname)
//         await page.getByRole('textbox', { name: 'Type here' }).first().fill(data.email)
//         await page.getByRole('button', { name: 'Save' }).click()
//         await expect(page.getByText("Application Stage")).toBeVisible()
//         // await expect(page.locator("#app")).toContainText("Dario Exequiel Guardia")
//         // await expect(page.getByText('Dario Exequiel Guardia', { exact: true })).toBeVisible()
//     })
// }




