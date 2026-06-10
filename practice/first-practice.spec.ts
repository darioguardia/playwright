import {test,expect, Page} from "@playwright/test"


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

    //INTEGRATED IN PLAYWRIGHT=id|data-test|data-test-id|data-testid

    // await page.locator("id=add-to-cart").click()
   await page.locator("data-test=add-to-cart").click()


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

    //Regular Expression -> hasNotText Locator https://www.geeksforgeeks.org/javascript/javascript-regexpregular-expression/ 
    await page.locator(".inventory_item_name",{hasNotText:/Sauce.*/}).click()



})

test("GetBy methods practice",async({page})=>{

    await page.goto("https://sso.crunchyroll.com/es/login")

    //GetBy -> FORM fills
    await page.getByLabel("Dirección de email").fill("rimuu48@gmail.com")
    await page.locator("//input[@type='password']").fill("testing")
    console.log(await page.getByText("¿Olvidaste tu contraseña?",{exact:true}).textContent())
    await logIn(page)
    await page.getByAltText("Sauce Labs Backpack").click()
    //ejemplos no usados
    //await page.getByRole('button',{name: 'Search'}).click()
  

})

test("Assertions Practice", async({page})=>{ // https://playwright.dev/docs/test-assertions

    await page.goto("https://www.saucedemo.com")
    await expect(page.locator("input[value='Login']")).toHaveCount(1) //assert that the login button shows 1 time
    await expect(page.locator("input[value='Login']")).toBeEnabled() 
    //await expect(page.locator("input[value='Login']")).toBeDisabled()
    await expect(page.locator("input[value='Login']")).toBeVisible()
    // await expect(page.locator("input[value='Login']")).toBeHidden()
    await expect(page.locator("input[value='Login']")).toHaveText("Login")
    await expect(page.locator("input[value='Login']")).toHaveAttribute("name","login-button")
    await expect(page.locator("input[value='Login']")).toHaveId("login-button")
    await expect(page).toHaveURL("https://www.saucedemo.com")
    await expect(page).toHaveTitle(/Swag Labs/);

    //non-retrying assertions

    expect(4).toBe(4)

    //negative assertions 
    await expect(page).not.toHaveTitle("Google");
    //await expect(page,"Custom Error Message by Fata").not.toHaveTitle("Swag Labs"); //in case that it fails it will show a custom error message
    //await expect.soft(locator).toHaveText('some text') // .soft will not close the test if it fails



})



async function logIn(page:Page){ //https://playwright.dev/docs/input
    await page.goto("https://www.saucedemo.com")
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByTestId("password").fill("secret_sauce") //works with testid, data-test
    await page.waitForTimeout(1000)
    await page.getByText("Login").click() //can user dblclick() or click({button:'right'}) for context menu. To force a click use locator.dispatchEvent('click')  
    await expect(page).toHaveTitle(/Swag Labs/);

}




