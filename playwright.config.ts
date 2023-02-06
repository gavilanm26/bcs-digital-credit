import {PlaywrightTestConfig, devices } from '@playwright/test'

const config : PlaywrightTestConfig = {
    testDir: './src/tests/',
    timeout: 200 * 1000,
    expect: {
        timeout: 60 * 1000
    },
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    reporter: [['html'], ['allure-playwright']],
    retries: 0,
    use: {
        headless: true,
        viewport: {
            width: 1366,
            height: 768,
        },
        actionTimeout: 0,
        navigationTimeout: 30 * 1000,
        ignoreHTTPSErrors: true,
        video: 'on',
        screenshot: 'only-on-failure',
        baseURL: "https://qa.bancocajasocialsa.org",
        trace: 'on'
    },
    projects: [
        {
            name: 'Chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
        {
            name: 'Firefox',
            use: {
                ...devices['Desktop Firefox'],
            },
        },
        {
            name: 'Webkit',
            use: {
                ...devices['Desktop Safari'],
            },
        },
        /* Test against mobile viewports. */
        {
            name: 'S9',
            use: {
                ...devices['Galaxy S8'],
            },
        },
        {
            name: 'Iphone13pro',
            use: {
                ...devices['iPhone 13 Pro'],
            },
        },
        {
            name: 'iPad',
            use: {
                ...devices['iPad Pro 11'],
            },
        },
        {
            name: 'Nokia320',
            use: {
                ...devices['Nokia Lumia 520'],
            },
        },
        /* Test against branded browsers. */
        {
            name: 'Microsoft-Edge',
            use: {
                channel: 'msedge',
            },
        },
        {
            name: 'Google-Chrome',
            use: {
                channel: 'chrome',
            },
        },
    ],
}

export default config