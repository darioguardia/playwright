import {test} from "@playwright/test"


//test("Kick Start with Playwright",()=>{  //arrow function means anonymous function
test("Kick Start with Playwright",async({page})=>{ 

    await page.goto("https://www.google.com")
    await page.getByRole('button', { name: 'Apps de Google' }).click()
    console.log("First Test")

}) 


test("Kick Start with Playwright2",()=>{ 

    console.log("Second Test")

}) 




