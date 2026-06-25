import {test,expect} from "@playwright/test"

test("Visual Test", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/tables")
    // await expect(page).toHaveScreenshot() //search for any screenshot on test folder
    // await expect(page).toHaveScreenshot("VisualTesting.png") //search for file with this name, if there is none it creates one
    // await expect(page).toHaveScreenshot(["screenshots","testfolder.png"]) //creates a folder inside test folder
    // await expect(page).toHaveScreenshot("FullName.png",{fullPage:true}) //fullscreen screenshot
    // await expect(page).toHaveScreenshot("mask.png",{mask:[page.locator("//table[@id='table1']//tbody//tr//td[4]")]}) // masks value in screenshot
    // await expect(page).toHaveScreenshot("mask.png",{mask:[page.locator("//table[@id='table1']//tbody//tr//td[4]"),page.locator("#table2")]}) // masks value in screenshot
    await expect(page.locator("#table1")).toHaveScreenshot("locator.png") //locator screenshot



})

test("Visual Test - Iframe", async({page})=>{
    await page.goto("https://demoqa.com/forms")
    await expect(page).toHaveScreenshot("iframe-hide.png",{stylePath:"screenshot.css"}) //iframe hide

})

test("Visual Test - Non image screenshot", async({page})=>{
    await page.goto("https://playwright.dev")
    expect(await page.locator(".hero--primary").textContent()).toMatchSnapshot("HeadingSnapshot.txt")
})

test.only("Visual Test Example", async({page})=>{
    await page.goto("https://www.saucedemo.com")

    await expect(page).toHaveScreenshot("LoginPage.png")

    await page.locator("[data-test='username']").fill("standard_user")
    await page.locator("[data-test='password']").fill("secret_sauce")
    await page.locator("[data-test='login-button']").click()
    await expect(page).toHaveScreenshot("LandingPage.png",{fullPage:true})

    await page.locator("[data-test='shopping-cart-link']").click()
    await expect(page).toHaveScreenshot("CartPage.png")


})


