import { BasePage } from './BasePage';

export class ShoppingCartPage extends BasePage {
	constructor(page) {
		super(page);

		this.productsCount = this.page.locator('.ui-checkout-cart__products-count');
		this.deleteButton = this.page.locator('button.x-button svg').first();
		this.confirmDeleteButton = this.page.getByRole('button', { name: 'Удалить', exact: true });
		this.emptyCartMessage = this.page.locator('div[class*="_title_"]:has-text("Корзина пока пустая")');
	}

	async getCartCountNumber() {
		const text = await this.getElementText(this.productsCount);
		const match = text.match(/\d+/);
		return match ? parseInt(match[0]) : 0;
	}

	async deleteProduct() {
		await this.deleteButton.click();
		await this.confirmDeleteButton.waitFor({ state: 'visible' });
		await this.confirmDeleteButton.click();
	}
}
