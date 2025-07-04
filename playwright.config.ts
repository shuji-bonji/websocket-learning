import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: './tests/e2e',
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: 'html',

	/* Global test timeout */
	timeout: process.env.CI ? 60000 : 30000,

	/* Global timeout for expect assertions */
	expect: {
		/* Maximum time expect() should wait for the condition to be met */
		timeout: process.env.CI ? 20000 : 10000,
		/* Threshold for visual comparisons */
		toHaveScreenshot: { threshold: 0.2, maxDiffPixels: 100 },
		toMatchSnapshot: { threshold: 0.2, maxDiffPixels: 100 }
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},

		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},

		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		},

		/* Test against mobile viewports. */
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] }
		},
		{
			name: 'Mobile Safari',
			use: { ...devices['iPhone 12'] }
		}

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
	webServer: {
		command: 'npm run preview',
		url: 'http://localhost:4173',
		reuseExistingServer: !process.env.CI,
		timeout: 120000
	},

	/* CI-specific environment variables for WebSocket testing */
	use: {
		...(process.env.CI && {
			/* Longer timeouts for CI environment */
			actionTimeout: 15000,
			navigationTimeout: 15000,
			/* Additional CI-specific settings */
			extraHTTPHeaders: {
				'X-CI-Environment': 'true'
			}
		}),
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: 'http://localhost:4173',

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on-first-retry',

		/* Take screenshot on failure */
		screenshot: 'only-on-failure',

		/* Record video on failure */
		video: 'retain-on-failure'

		/* Visual comparisons configured in global expect settings above */
	}
});
