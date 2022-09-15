import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
    timeout: 10 * 1000,
    retries: 0,
    testDir: "tests/e2e",
    use: {
        headless: true,
        viewport: {
            width: 1920,
            height: 1080
        },
        actionTimeout: 10 * 1000,
        navigationTimeout: 30 * 1000,
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
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
            name: 'MobileChromePixel5',
            use: {
                ...devices['Pixel 5'],
            },
        },
        {
            name: 'MobileSafariIphone12',
            use: {
                ...devices['iPhone 12'],
            },
        },
        {
            name: 'TabletChromeGalaxyS5',
            use: {
                ...devices['"Moto G4'],
            },
        },
    ],
}

export default config