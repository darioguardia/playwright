import {test} from "@playwright/test"

test("Environments",async({page})=>{
    console.log(process.env.URL)    
    console.log(process.env.USERNAME)
    console.log(process.env.PASSWORD)
    const urlVal = <string> process.env.URL
    const urlVal2 = process.env.URL as string
    await page.goto(urlVal)

})