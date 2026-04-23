import { test as setup } from '@playwright/test';

setup('accept cookies and save state', async ({ page }) => {
	await page.goto('/');

	const acceptButton = page.getByRole('button', { name: 'Принять' });

	await acceptButton.waitFor({ state: 'attached', timeout: 2000 }).catch(() => {});

	if (await acceptButton.isVisible()) {
		await acceptButton.click();
		await page.waitForTimeout(500);
	}

	await page.context().storageState({ path: '.auth/cookies.json' });
});
