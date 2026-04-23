import { test, expect } from '@playwright/test';
import { MainPage } from '../source/pages/MainPage';
import { SearchResultsPage } from '../source/pages/SearchResultsPage';
import { ProductPage } from '../source/pages/ProductPage';
import { ShoppingCartPage } from '../source/pages/ShoppingCartPage';
import { searchQueries } from '../source/data/searchQueries';

test.describe('Shopping Cart Operations', () => {
	let mainPage;
	let resultsPage;
	let productPage;
	let shoppingCartPage;

	test.beforeEach(async ({ page }) => {
		mainPage = new MainPage(page);
		resultsPage = new SearchResultsPage(page);
		productPage = new ProductPage(page);
		shoppingCartPage = new ShoppingCartPage(page);

		await mainPage.navigate('/');
	});

	test('should successfully add a product to the cart and verify count', async () => {
		const searchTerm = searchQueries.clothing.term;

		await mainPage.header.searchForProduct(searchTerm);
		await resultsPage.firstProductCard.click();

		await productPage.selectAnySize();
		await productPage.addToCartButton.click();
		await productPage.modalCloseButton.click();
		await mainPage.header.clickCartIcon();

		const count = await shoppingCartPage.getCartCountNumber();
		expect(count).toBeGreaterThan(0);
	});
});
