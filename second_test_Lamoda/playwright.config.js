const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig(
{
    testDir: './tests',
    fullyParallel: true,
    retries: 1,
    reporter: [['html'], ['list']],

    use: {
        baseURL: 'https://lamoda.by',
        trace: 'on-first-retry',
        // trace: 'on',
        screenshot: 'on-first-retry',
        video: 'on-first-retry',
        // viewport: { width: 1280, height: 720 },
        headless: false,
    },
    
    projects:
    [
        {
            name: 'setup_cookies',
            testMatch: 'state/cookie_accept.spec.js',
            use:
            { 
                ...devices['Desktop Chrome'],
            },
        },

        {
            name: 'chromium',
            use:
            { 
                ...devices['Desktop Chrome'],
                storageState: '.auth/cookies.json',
            },
            testIgnore: 'tests/state/**',
            dependencies: ['setup_cookies'],
        }
    ],
});