import {test,expect} from "@playwright/test"


test("Mouse Hover", async({page})=>{
await page.goto('https://mobalytics.gg/diablo-4/builds/necromancer-world-war-z');
await page.getByRole('link', { name: 'Builds' }).first().hover()
await page.getByRole('link', { name: 'Builds Builds' }).click();

})