import {test} from "@playwright/test"

//you can run tests with specifics tags: npx playwright test --grep=@tag or skip it with: npx playwright test --grep-invert=@tag 
// OR OPERATOR: POWERSHELL npx playwright test --grep --% "@tag1|@tag2" || BATCH(CMD) npx playwright test --grep "@tag1|@tag2" || BASH npx playwright test --grep "@tag1|@tag2"
// AND OPERATOR: can run tests containing both tags using regex lookaheads npx playwright test --grep "(?=.*@tag1)(?=.*@tag2)"



test.describe("Describe Block 1",{tag:"@sanity"}, async()=>{ 

    test("Tags Practice @UI", async({})=>{ 
        console.log("Practice Test 1")
    })

    test("Tags 2 Practice @API", async({})=>{ 
        console.log("Practice Test 2")
    })

    test("Tags 3 Practice @UI @smoke", async({})=>{ 
        console.log("Practice Test 3")
    })
})



test("Tags 4 Practice",{tag:["@UI","@smoke"]}, async({})=>{ 
    console.log("Practice Test 4")
})

test("Tags 5 Practice",{tag:"@API"}, async({})=>{ 
    console.log("Practice Test 5")
})

test("Tags 6 Practice",{tag:"@API"}, async({})=>{ 
    console.log("Practice Test 6")
})