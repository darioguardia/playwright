import {test as baseTest} from "@playwright/test"

type MyHooksFixtures = {
    loginLogoutFixture: any
}

export const test = baseTest.extend<MyHooksFixtures>({loginLogoutFixture: async({page},use)=>{

        const loginLogoutFixture = undefined
        //Login
        await page.goto("https://www.saucedemo.com")
        await page.getByPlaceholder("Username").fill("standard_user")
        await page.getByTestId("password").fill("secret_sauce") 
        await page.getByText("Login").click() 

        await use(loginLogoutFixture)

        //logout
        await page.getByRole('button', {name: 'Open Menu'}).click()
        await page.getByRole('link',{name: 'logout'}).click()

    }
})

export {expect} from "@playwright/test"