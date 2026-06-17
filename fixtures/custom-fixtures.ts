import {test as baseTest} from "@playwright/test"

//fixtures are used to establish an environment for each test, giving the test everything it needs and nothing else (page, browser, context, browserName, request)

type MyFixtures = {

    fixture1:any,
    //fixture2:any,

}

type MyWorkerFixture = {
    workerFixture:any
}

// baseTest.extend<{fixture1:any}>({
export const test = baseTest.extend<MyFixtures, MyWorkerFixture>({

    fixture1: async({}, use:any)=>{
        const fixture1 = "I am Fixture1"
        console.log("Before part of Fixture 1")
        await use(fixture1)
        console.log("After part of Fixture 1")

    },

     workerFixture: [async({}, use:any)=>{
        const workerFixture = "I am Worker Fixture"
        console.log("Before part of Worker Fixture")
        await use(workerFixture)
        console.log("After part of Worker Fixture")
    },{scope:"worker"}]

    },

)



