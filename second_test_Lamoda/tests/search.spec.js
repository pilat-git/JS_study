import { test, expect } from '@playwright/test';
import { DataFactory } from '../source/factories/DataFactory';
import { MainPage } from '../source/pages/MainPage';
import { SearchResultsPage } from '../source/pages/SearchResultsPage';

test.describe('Search Functionality', () => {
	const categories = DataFactory.getAllCategories();

	for (const category of categories) {
		test(`should display correct results for category: ${category}`, async ({ page }) => {
			const mainPage = new MainPage(page);
			const searchResultsPage = new SearchResultsPage(page);
			const data = DataFactory.getSearchData(category);

			await mainPage.navigate('/');
			await mainPage.header.searchForProduct(data.term);

			await searchResultsPage.waitForCatalogueToLoad();

			const title = await searchResultsPage.getElementText(searchResultsPage.searchHeader);

			expect(title.toLowerCase()).toContain(data.term.toLowerCase());
		});
	}
});
