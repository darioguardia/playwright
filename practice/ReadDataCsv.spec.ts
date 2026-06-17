import {test} from "@playwright/test"
import fs from "fs" 
import {parse} from "csv-parse/sync"

const records: any[] = parse(fs.readFileSync("testdata/testdata.csv"),{
    columns:true,
    skip_empty_lines:true
    // delimiter:","
}) as any[]

records.forEach((record:any) => {

test("Read data from csv file " + record.Id , async({page})=>{
    console.log(records)
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.getByPlaceholder("First Name").fill(record.FirstName) 
    await page.getByPlaceholder("Last Name").fill(record.LastName)
})

})


// for (const record of records) {
//     test("Read data from csv file " + (record as any).Id , async({page})=>{
//         console.log(records)
//         await page.goto("https://demoqa.com/automation-practice-form")
//         await page.getByPlaceholder("First Name").fill((record as any).FirstName) 
//         await page.getByPlaceholder("Last Name").fill((record as any).LastName)
//     })
// }