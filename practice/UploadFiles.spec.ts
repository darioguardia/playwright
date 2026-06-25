import {test,expect} from "@playwright/test"

test("Upload Files Practice", async({page})=>{ 

    await page.goto("https://the-internet.herokuapp.com/upload")

    // await page.locator("//input[@id='file-upload']").setInputFiles("testdata/image-example.jpg") //single file
    const fileChoosePromise = page.waitForEvent("filechooser")
    await page.locator("//div[@id='drag-drop-upload']").click()
    const fileChooseResolve = await fileChoosePromise
    await fileChooseResolve.setFiles("testdata/image-example.jpg")
    // await page.getByRole('button', { name: 'Upload' }).click()

  
 
})

test("Upload Files 2 Practice", async({page})=>{ 

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    await page.locator("//input[@id='filesToUpload']").setInputFiles(["testdata/image-example.jpg","testdata/logindata.json"]) //multiple files
    await page.locator("//input[@id='filesToUpload']").setInputFiles([]) //removes files
  
 
})