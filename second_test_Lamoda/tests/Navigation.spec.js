import { test, expect } from '@playwright/test';
import { MainPage } from '../source/pages/MainPage';
import { navigationData } from '../source/data/navigationData';

test.describe('Main Navigation - Gender Tabs', () => {
	const genders = navigationData.mainGenders;

	for (const gender of genders) {
		test(`should switch to ${gender} section and verify active state`, async ({ page }) => {
			const mainPage = new MainPage(page);
			await mainPage.navigate('/');

			const tab = mainPage.header.genderTab(gender);
			await tab.click();

			await expect(tab).toHaveAttribute('data-active', 'true');
			await expect(tab).toHaveClass(/_linkActive_/);
		});
	}
});
