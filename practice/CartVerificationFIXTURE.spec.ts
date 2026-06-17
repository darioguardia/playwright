import {expect} from "@playwright/test"
import {test} from "../fixtures/POM-fixture"


test("Verification of Cart", async({page,loginPage,homePage,cartPage})=>{

    await loginPage.navigate()
    await loginPage.logIn("standard_user","secret_sauce")

    await expect(homePage.homePageHeading).toHaveText("Swag Labs")
    await homePage.backpackAddToCart()
    await expect(homePage.cartIcon).toHaveText("1")
    await expect(homePage.backpackRemoveButton).toBeVisible()
    await homePage.goToCart()

    await expect(cartPage.backpackItemLink).toHaveText("Sauce Labs Backpack")


})