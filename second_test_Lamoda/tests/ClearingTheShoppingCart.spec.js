import { test, expect } from '@playwright/test';
import { MainPage } from '../source/pages/MainPage';
import { ProductPage } from '../source/pages/ProductPage';
import { ShoppingCartPage } from '../source/pages/ShoppingCartPage';
import { searchQueries } from '../source/data/searchQueries';

test.describe('Shopping Cart Management', () => {
	let mainPage, productPage, shoppingCartPage;

	test.beforeEach(async ({ page }) => {
		mainPage = new MainPage(page);
		productPage = new ProductPage(page);
		shoppingCartPage = new ShoppingCartPage(page);
		await mainPage.navigate('/');
	});

	test('should verify cart is empty after removal', async () => {
		await mainPage.header.searchForProduct(searchQueries.shoes.term);
		await mainPage.page.locator('a[href^="/p/"]').first().click();

		await productPage.selectAnySize();
		await productPage.addToCartButton.click();
		await productPage.goToCartButton.click();

		await shoppingCartPage.deleteProduct();
		const emptyText = await shoppingCartPage.getElementText(shoppingCartPage.emptyCartMessage);
		expect(emptyText.toLowerCase()).toContain('пустая');
	});
});
