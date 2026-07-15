import { defineConfig, devices } from '@playwright/test';
import { access } from 'node:fs';
import dotenv from "dotenv"

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
dotenv.config({
  path: process.env.TEST_ENV ? `./env-files/.env.${process.env.TEST_ENV}` : `./env-files/.env.dev`
})
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  //grep: /UI/, //config to run test with tag UI
  // globalSetup: "./global-setup.ts",
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false, //this is to run tests in sequence
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined, //this is to run tests in sequence on CI, change undefined to 2 or more to run in parallel 
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: [['html',{open:'always'}],['github']],
  reporter: [['html',{open:'never'}],['junit',{outputFile:'playwright-report/JunitReport.xml'}]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {  
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    baseURL: "https://restful-booker.herokuapp.com/booking",
    extraHTTPHeaders:{
      Accept:"application/json",
      "Content-Type":"application/json", //we need to use "" because it has a -
      Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: 'on',
    video:'retain-on-failure',
    testIdAttribute: 'data-test',
    trace: 'on',
    headless: true,
    // storageState: "./playwright/.auth/auth.json",
  },
  timeout: 30000,

  /* Configure projects for major browsers */
  projects: [
    // {
    //   //this a project for dependencies to login
    //   name: 'setup',
    //   testMatch:/.*\.setup\.ts/, //regular expression to run all .setup files that we may need
    //   // testMatch: 'global.setup.ts',
    // },
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
      // dependencies: ["setup"], //uses the project above
      // use: { ...devices['Desktop Chrome'],
      //   storageState: "./playwright/.auth/auth.json", //used for login dependencies
      // },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
