import {test} from "@playwright/test"

// https://playwright.dev/docs/test-annotations
test.describe.only("Practice of Describe",async()=>{
    //test.skip() //skips all tests
    //test.skip(browserName==="firefox") //skips tests on firefox browser, need to add browserName parameter in test "async({page,browserName})"
    // test.skip(({browserName})=> browserName==='chromium') //skips all tests in chromium
    test.skip("Practice Test 1",async({page})=>{
        console.log("Starting practice test 1")
        console.log("Engind practice test 1")
    })

    test("Practice Test 2",async({page,browserName})=>{
        test.fail() //make test fail
        test.fail(browserName==='firefox') //make test fail in firefox
        console.log("Starting practice test 2")
        console.log("Engind practice test 2")
    })

    test("Practice Test 3",async({page})=>{
        test.setTimeout(10000) //timeout
        console.log("Starting practice test 3")
        console.log("Engind practice test 3")
    })
})


test.only("Practice Test 4",async({page})=>{
    console.log("Starting practice test 4")
    console.log("Engind practice test 4")
})

test.fixme("Practice Test 5",async({page})=>{
    console.log("Starting practice test 5")
    console.log("Engind practice test 5")
})

test("Practice Test 6",async({page})=>{
    test.slow() //slows 3 times less
    //test.slow(({browserName})=> browserName==='firefox')
    console.log("Starting practice test 6")
    console.log("Engind practice test 6")
})