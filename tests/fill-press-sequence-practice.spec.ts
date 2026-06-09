import {test} from "@playwright/test"

test("Form Fill Press Sequence Practice", async({page})=>{

    await page.goto("https://ultimateqa.com/filling-out-forms/")
    await page.locator("//input[@id='et_pb_contact_name_0']").fill("Dario Guardia") //triggers an input event with the entered text (works in input, textarea and contenteditable items)
    await page.locator("//textarea[@id='et_pb_contact_message_0']").pressSequentially("This is a sample text for this text area") //type in the field character by character like a person with a keyboard
    
    await page.goto("https://www.google.com")
    await page.locator("//textarea[@id='APjFqb']").pressSequentially("Playwright",{delay:1000}) //types 1 by 1 with one second delay
    await page.locator("//textarea[@id='APjFqb']").press("ArrowDown+ArrowDown+ArrowDown+ArrowDown+Enter") 
    //ArrowDown,Enter,ArrowUp,Tab,Escape,Backquote,Minus,Equal,Backslash,Backspace,End,Home,Insert,PageDown,PageUp,ArrowRight,F1,Digit0,KeyA,etc
    console.log("")


})