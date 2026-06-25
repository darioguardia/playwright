import {test,expect} from "@playwright/test"

test("Drag and Drop Practice", async({page})=>{
    await page.goto("https://demoqa.com/droppable")

    //Manual Approach
    // await page.getByLabel('Simple').getByText('Drag Me').hover()
    // await page.mouse.down()
    // await page.getByLabel("Simple").locator('#droppable').hover()
    // await page.mouse.up()
    // await expect(page.getByLabel("Simple").locator('#droppable')).toHaveText("Dropped!")

    //dragTo()
    await page.getByLabel('Simple').getByText('Drag Me').dragTo(page.getByLabel("Simple").locator('#droppable'))

    
 
})