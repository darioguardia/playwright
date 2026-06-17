import {test,expect} from "../fixtures/hooks-fixtures"



test("Adding / Removing itemo to / from cart verification",async({page,loginLogoutFixture})=>{

       await page.getByText("Sauce Labs Backpack").click()
       await page.getByTestId('add-to-cart').click()
       await page.locator(".shopping_cart_link").click()
       await expect(page.getByRole('link',{name: 'Sauce Labs Backpack'})).toHaveText("Sauce Labs Backpack")
       await expect(page.locator("[data-test='remove-sauce-labs-backpack']")).toBeVisible()
       await page.locator("[data-test='remove-sauce-labs-backpack']").click()
       await expect(page.getByRole('link',{name: 'Sauce Labs Backpack'})).not.toBeVisible()

})

test("Empty Cart Verification",async({page,loginLogoutFixture})=>{

    await page.locator(".shopping_cart_link").click()
    await expect(page.locator(".inventory_item_name")).not.toBeVisible()


})


