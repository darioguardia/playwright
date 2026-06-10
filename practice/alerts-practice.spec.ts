import {test,expect} from "@playwright/test"

test("Handle Dialogs",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //dialog handler
    page.on("dialog",dialog =>{
        expect(dialog.type()).toEqual("alert")
        expect(dialog.message()).toEqual("I am a JS Alert")
        dialog.accept()
    })

    await page.locator("//button[@onclick='jsAlert()']").click()
    await expect(page.locator("//p[@id='result']")).toHaveText("You successfully clicked an alert")

})

test("Handle Confirms",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //dialog handler
    page.on("dialog",dialog =>{
        expect(dialog.type()).toEqual("confirm")
        expect(dialog.message()).toEqual("I am a JS Confirm")
        dialog.accept()
        //dialog.dismiss()

    })

    await page.locator("//button[@onclick='jsConfirm()']").click()
    await expect(page.locator("//p[@id='result']")).toHaveText("You clicked: Ok")

})

test("Handle Prompts",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //dialog handler
    page.on("dialog",dialog =>{
        expect(dialog.type()).toEqual("prompt")
        expect(dialog.message()).toEqual("I am a JS prompt")
        // expect(dialog.defaultValue()).toEqual("")
        dialog.accept("testing")
    })

    await page.locator("//button[@onclick='jsPrompt()']").click()

    await expect(page.locator("//p[@id='result']")).toHaveText("You entered: testing")


})