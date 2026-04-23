import { test, expect } from '@playwright/test';
import { MainPage } from '../source/pages/MainPage';
import { CatalogPage } from '../source/pages/CatalogPage';
import { SearchResultsPage } from '../source/pages/SearchResultsPage';
import { searchQueries } from '../source/data/searchQueries';
import { filtersData } from '../source/data/filtersData';

test.describe('Catalog Filtering Operations', () => 
{
	let mainPage, catalogPage, searchResultsPage;

	test.beforeEach(async ({ page }) => 
	{
		mainPage = new MainPage(page);
		catalogPage = new CatalogPage(page);
		searchResultsPage = new SearchResultsPage(page);

		await mainPage.navigate('/');
		await mainPage.header.searchForProduct(searchQueries.kids.term);
		
		await searchResultsPage.waitForCatalogueToLoad();
	});

	test('should successfully apply at least two available filters from the pool', async () => 
	{
		const requiredSuccessCount = 2;
		let successCount = 0;

		for (const filterName of filtersData.acceptableFiltersToCheck) 
		{
			if (successCount >= requiredSuccessCount) 
			{
				break;
			}

			const filterBtn = catalogPage.filterButton(filterName);
			
			if (await filterBtn.isVisible()) 
			{

				await catalogPage.applyFirstAvailableFilter(filterName);
				await catalogPage.resetFilter(filterName);
				await searchResultsPage.waitForCatalogueToLoad();
				
				successCount++;
			}
		}

		expect(successCount, `Expected to test ${requiredSuccessCount} filters`).toBe(requiredSuccessCount);
	});
});
