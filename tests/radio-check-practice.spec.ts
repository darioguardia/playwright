import {test,expect} from "@playwright/test"

test("Radio Button Practice",async({page})=>{

    await page.goto("https://artoftesting.com/samplesiteforselenium")
    const maleRadio = page.locator("//input[@id='male']")
    await maleRadio.check()
    await expect(maleRadio).toBeChecked()
    await page.locator("#female").check()
    await expect(maleRadio).not.toBeChecked()
    console.log()

})


test("CheckBox Practice",async({page})=>{

    await page.goto("https://artoftesting.com/samplesiteforselenium")
    await page.locator("//input[@class='Automation']").check()
    await expect(page.locator("//input[@class='Automation']")).toBeChecked()
    await page.locator(".Performance").check()
    await page.locator(".Performance").uncheck()
    await expect(page.locator(".Performance")).not.toBeChecked()

    if(await page.locator("//input[@class='Automation']").isChecked()){
         await page.locator("//input[@class='Automation']").uncheck()
         await expect(page.locator("//input[@class='Automation']")).not.toBeChecked()
         console.log("Automation is unchecked")
    }

})

test("Dropdown Practice",async({page})=>{

    await page.goto("https://artoftesting.com/samplesiteforselenium")
    await page.locator("//select[@id='testingDropdown']").selectOption("Manual") //value atribute
    await page.locator("//select[@id='testingDropdown']").selectOption("Database Testing") //text value
    await page.locator("//select[@id='testingDropdown']").selectOption({value:"Performance"}) //value html tag
    await page.locator("//select[@id='testingDropdown']").selectOption({label:"Automation Testing"}) //label html tag, if doesnt have label tag, you can use the text
    await page.locator("//select[@id='testingDropdown']").selectOption({index:2}) // it selects the postion of the option, starting from 0
    
    // await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label")
    // await page.frameLocator("iframe[name='iframeResult']").getByLabel('Choose a car:').selectOption("Mercedes") //label option
    // // await page.frameLocator("iframe[name='iframeResult']").getByLabel('Choose a car:').selectOption({label:"Audi (Auto Union Deutschland Ingolstadt)"}) //since the label value is present on the code of the page and not in the front of the page, it will not select

})