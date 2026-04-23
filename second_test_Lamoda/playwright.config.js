import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	workers: 3,
	reporter: 'html',
	use: {
		baseURL: 'https://www.lamoda.by',
		trace: 'on-first-retry',
	},

	projects: [
		{
			name: 'setupCookies',
			testMatch: 'state/CookieAccept.spec.js',
		},
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
				storageState: '.auth/cookies.json',
			},
			testIgnore: ['state/**', 'api/**'],
			dependencies: ['setupCookies'],
		},
		{
			name: 'api',
			testMatch: 'api/*.spec.js',
			use: {
				extraHTTPHeaders: {
					Accept: 'application/json',
					'User-Agent':
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
					Referer: 'https://www.lamoda.by/',
				},
			},
		},
	],
});
