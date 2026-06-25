import {test,expect} from "@playwright/test"

test("Annotation Practice",{
    annotation:{
        type:"Jira Story",
        description:"Jira Link"
    }
},async({page})=>{
    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle("Google")
})

test.skip("Annotation Practice 2",{
    tag:"@UI",
    annotation:[{
        type:"Skip Reason",
        description:"Requirement change is going to happen"
    },{
        type:"Jira Story",
        description:"Jira Link"   
    }]
},async({page})=>{
    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle("Google")
})

test.describe("Annotation Practice Describe ",{
    annotation:{
        type:"Jira Story",
        description: "Jira Link"
    }

},async()=>{
    
    test("Practice 1",async()=>{
        console.log("Practice 1")
    })

    test("Practice 2",async()=>{
        console.log("Practice 2")
    })

    test("Practice 3",async()=>{
        console.log("Practice 3")
    })
})