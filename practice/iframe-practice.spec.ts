import {test} from "@playwright/test"

test("Handle Iframe with Name",async({page})=>{

    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form")
    const w3Frame = page.frame("iframeResult")
    await w3Frame?.locator("//input[@id='fname']").fill("Dario Guardia") // ? operator ask if its null, if it is not it will continue the execution
})

test("Handle Iframe with URL",async({page})=>{

    await page.goto("https://www.w3schools.com/html/html_iframe.asp")
    const w3Frame2 = page.frame({url:"https://www.w3schools.com/html/default.asp"}) //we use /default.asp provided in the source code and have to use the url of the page or it will not work
    await w3Frame2?.getByRole('button', { name: 'Button to open search field' }).click()
    await w3Frame2?.getByRole('textbox', { name: 'Search field' }).fill("Test Code Automate")

})

test("Handle Iframe with frameLocator Method",async({page})=>{

    await page.goto("https://www.w3schools.com/html/html_iframe.asp")
    const w3Frame3 = page.frameLocator("//iframe[@title='W3Schools HTML Tutorial']") //you can use xpath, css
    await w3Frame3?.getByRole('button', { name: 'Button to open search field' }).click()
    await w3Frame3?.getByRole('textbox', { name: 'Search field' }).fill("Test Code Automate")


    // await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label")
    // await page.frameLocator("iframe[name='iframeResult']").getByLabel('Choose a car:').selectOption("Mercedes") 
    // // await page.frameLocator("iframe[name='iframeResult']").getByLabel('Choose a car:').selectOption({label:"Audi (Auto Union Deutschland Ingolstadt)"}) //since the label value is present on the code of the page and not in the front of the page, it will not select


})

test("Handle Iframe with PickLocator Method",async({page})=>{

    //for this one you need to use the pick locator tool on the playwright extension on vscode, it will open a navigator, navigate to the url then click on something. Back on the vsc will give you a locator, copy and paste it
    //adding await.page and you are done

    await page.goto("https://www.w3schools.com/html/html_iframe.asp")
    await page.locator('iframe[title="W3Schools HTML Tutorial"]').contentFrame().getByRole('button', { name: 'Button to open search field' }).click()

    
})