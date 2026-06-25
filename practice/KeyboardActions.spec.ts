import {test,expect} from "@playwright/test"

test("Keyboard Actions Practice", async({page})=>{ //https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values

    await page.goto("https://testpages.eviltester.com/pages/forms/html-form/")

    const username = page.locator('input[name="username"]')
    const textArea = page.getByText('Comments...')

    await textArea.press("Control+a")
    await textArea.press("Backspace")
    await textArea.press("a+B+c")
    await textArea.press("Control+a+x")
    await username.press("Control+v")
    await username.press("ArrowLeft+ArrowLeft+ArrowLeft")
    await username.press("Z")

    await page.keyboard.press("PageDown")
    await page.keyboard.press("PageUp")
 
})