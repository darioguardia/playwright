import {test} from "@playwright/test"


// test.beforeEach("Practice of Before Each",async()=>{ //executes before each test
//     console.log("Executing before each")
// })

test("Hooks Test 1",async({page})=>{
    console.log("Starting test ")
    await page.goto("https://www.saucedemo.com/")
    console.log(await page.title())
    console.log("Ending test ")
})

test("Hooks Test 2",async({page})=>{
    console.log("Starting test 2")
    await page.goto("https://www.saucedemo.com/")
    console.log(await page.title())
    console.log("Ending test 2")
})

test("Hooks Test 3",async({page})=>{
    console.log("Starting test 3")
    await page.goto("https://www.saucedemo.com/")
    console.log(await page.title())
    console.log("Ending test 3")
})

test.afterEach(async()=>{
    console.log("Executing of after each") //executes afer each test
})

test.describe("Group",async()=>{

    test.beforeAll("Practice of beforeAll GROUP",async()=>{
    console.log("Executing before all IN A GROUP") 
    })

    test.afterAll("Practice of afterAll GROUP",async()=>{
    console.log("Executing after all IN A GROUP") 
    })

    test.beforeEach("Practice of Before Each",async()=>{ //executes before each test
    console.log("Executing before each")
    })

    test("Hooks Test 4",async({page})=>{
        console.log("Starting test 4")
        await page.goto("https://www.saucedemo.com/")
        console.log(await page.title())
        console.log("Ending test 4")
    })

    test("Hooks Test 5",async({page})=>{
        console.log("Starting test 5")
        await page.goto("https://www.saucedemo.com/")
        console.log(await page.title())
        console.log("Ending test 5")
    })

    test("Hooks Test 6",async({page})=>{
        console.log("Starting test 6")
        await page.goto("https://www.saucedemo.com/")
        console.log(await page.title())
        console.log("Ending test 6")
    })

})


test.beforeAll("Practice of beforeAll",async()=>{
    console.log("Executing before all") //executes before all tests once per worker
})

 test.afterAll("Practice of afterAll ",async()=>{
    console.log("Executing after all ") //executes after all tests once per worker
    })


