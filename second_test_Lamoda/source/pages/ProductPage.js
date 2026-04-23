import { BasePage } from './BasePage';
import { Header } from './components/Header';

export class ProductPage extends BasePage {
	constructor(page) {
		super(page);
		this.header = new Header(this.page);

		this.sizeSelector = this.page.locator('div[class*="selectWrapper"] div[tabindex="0"]');
		this.sizeOption = this.page.locator('div[class*="colspan"][class*="enabled"]').first();
		this.addToCartButton = this.page.getByRole('button', { name: 'Добавить в корзину' });
		this.modalCloseButton = this.page.locator('div[class*="close-button"] div[title*="Закрыть"]');
		this.goToCartButton = this.page.locator('a[href="/checkout/cart/"]:has-text("Перейти в корзину")');
	}

	async selectAnySize() {
		await this.sizeSelector.waitFor({ state: 'visible' });
		await this.sizeSelector.click();

		await this.sizeOption.waitFor({ state: 'visible' });
		await this.sizeOption.click();
	}
}
