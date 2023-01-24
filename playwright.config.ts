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
    reporter: 'html',
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
        video: 'on-first-retry',
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
            name: 'Pixel5',
            use: {
                ...devices['Pixel 5'],
            },
        },
        {
            name: 'Iphone12',
            use: {
                ...devices['iPhone 12'],
            },
        },
        {
            name: 'GalaxyS5',
            use: {
                ...devices['"Moto G4'],
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