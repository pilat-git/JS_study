import { test, expect } from '@playwright/test';
import { MainPage } from '../source/pages/MainPage';
import { locations } from '../source/data/locations';

test.describe('Regionality Configuration', () => {
	let mainPage;

	test.beforeEach(async ({ page }) => {
		mainPage = new MainPage(page);
		await mainPage.navigate('/');
	});

	for (const city of locations.cities) {
		test(`Should change location to ${city} and verify the update`, async () => {
			await mainPage.header.changeCity(city);

			const currentCity = await mainPage.header.getCurrentCity();
			expect(currentCity).toContain(city);

			await expect(mainPage.page).toHaveURL(/https:\/\/(www\.)?lamoda\.by\//);
		});
	}
});
