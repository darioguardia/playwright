import {test} from "../fixtures/custom-fixtures"

test("Test Fixture 1", async({fixture1,workerFixture})=>{

    console.log(fixture1)
    console.log(workerFixture)


})

test("Test Fixture 2", async({fixture1,workerFixture})=>{

    console.log(fixture1)
    console.log(workerFixture)


    
})