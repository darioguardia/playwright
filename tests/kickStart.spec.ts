import {test,expect} from "@playwright/test"


//test("Kick Start with Playwright",()=>{  //arrow function means anonymous function
test("Kick Start with Playwright",async({page})=>{ 

    await page.goto("https://www.google.com")
    await page.getByRole('button', { name: 'Apps de Google' }).click()
    console.log("First Test")

}) 


test("Locator Practice",async({page})=>{ // https://playwright.dev/docs/locators 

    await page.goto("https://www.saucedemo.com")
    await expect(page).toHaveTitle(/Swag Labs/);

    //XPATH
    await page.locator("//input[@name='user-name']").fill("standard_user")

    //CSS SELECTOR => htmltag.classvalue / .classvalue || htmltag#idValue / #idValue || htmltag[attributeName=attributeValue] / [attributeName=attributeValue]
    await page.locator("input#password").fill("secret_sauce") //when is an id we use #
    //await page.locator("input.submit-button").click() //when is a class we use the dot
    await page.locator("input[value='Login']").click()

    //TEXT LOCATOR -> text='textValue' or text=textValue, first one is case sensitive, 2nd one not
    await page.locator("text='Sauce Labs Backpack'").click()
    //await page.locator("text=Sauce LABS Backpack").click()

    //CUSTOM PLAYWRIGHT=id|data-test|data-test-id|data-testid

    // await page.locator("id=add-to-cart").click()
   await page.locator("data-test=add-to-cart").click()

    console.log("Second Test")

}) 

test("Locator with Options", async({page})=>{

    await page.goto("https://www.saucedemo.com")

    //has locator
    await page.locator("//div[@class='form_group']",{has:page.locator("//input[@name='user-name']")}).click()
    await page.locator("//div[@class='form_group']",{has:page.locator("//input[@name='user-name']")}).pressSequentially("standard_user")
    //await page.locator(".form_group",{has:page.locator("input#username")})

    //hasNot locator
    await page.locator("//div[@class='form_group']",{hasNot:page.locator("//input[@name='user-name']")}).click()
    await page.locator("//div[@class='form_group']",{hasNot:page.locator("//input[@name='user-name']")}).pressSequentially("secret_sauce")
   
    //hasText Locator 
    await page.locator("input[value='Login']").click()
    await page.locator("//a",{hasText:"Sauce Labs Backpack"}).click()
    await page.goBack()

    //hasNotText Locator https://www.geeksforgeeks.org/javascript/javascript-regexpregular-expression/ 
    await page.locator(".inventory_item_name",{hasNotText:/Sauce.*/}).click()

    console.log("Third Test")


})




