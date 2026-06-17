import {test as baseTest} from "@playwright/test"

type MyFixture = {
    loginData: any,
    testData:any
}



export const test = baseTest.extend<MyFixture>({

    loginData:{
        username: "Admin",
        password: "admin123"
    },
    testData:{
        fname:"Dario",
        mname:"Exequiel",
        lname:"Guardia",
        email:"rimuu48@gmail.com"
    }

})

export {expect} from "@playwright/test"

