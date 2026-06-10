import {test,expect} from "@playwright/test"

test("New Page Handler",async({context})=>{
    const page = await context.newPage()
    await page.goto("https://testpages.eviltester.com/pages/navigation/windows-names/")
    await expect(page).toHaveTitle("Windows Links Test Page | Test Pages")
    const pagePromise = context.waitForEvent("page")
    await page.locator("//a[@id='gobasicajax']").click()
    const newPage = await pagePromise
    await expect(newPage).toHaveTitle("Linked Page with Window Name | Test Pages")
    await newPage.locator("//button[@id='window-name-button']").click()

    
})
