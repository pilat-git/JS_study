export class Header {
	constructor(page) {
		this.page = page;

		this.searchInput = this.page.getByPlaceholder('Поиск');
		this.cartIcon = this.page.locator('a[href*="/cart/"]');
		this.cityChooser = this.page.locator('.js-header-geo-wrapper');
		this.selectAnotherButton = this.page.getByRole('button', { name: 'Выбрать другой' });
		this.citySearchInput = this.page.locator('input[placeholder*="название города"]');
		this.cityFromList = (cityName) =>
			this.page.locator(`a[class*="cityLink"][role="button"]`).filter({ hasText: cityName });
		this.goToShoppingButton = this.page.getByRole('button', { name: 'Перейти к покупкам' });
		this.genderTab = (genderName) => this.page.locator('nav[role="menubar"] a').filter({ hasText: genderName });
	}

	async searchForProduct(productName) {
		const query = productName.toLowerCase();
		await this.searchInput.fill(query);
		await this.page.keyboard.press('Enter');
	}

	async changeCity(cityName) {
		await this.cityChooser.hover();
		await this.page.waitForTimeout(500);

		if (await this.selectAnotherButton.isVisible()) {
			await this.selectAnotherButton.click();
		} else {
			await this.cityChooser.click();
		}

		const targetCity = this.cityFromList(cityName);
		await targetCity.waitFor({ state: 'visible' });
		await targetCity.click();

		await this.goToShoppingButton.waitFor({ state: 'visible' });
		await this.goToShoppingButton.click();
		await this.goToShoppingButton.waitFor({ state: 'hidden' });
	}

	async getCurrentCity() {
		const text = await this.cityChooser.textContent();
		return text ? text.trim() : '';
	}

	async clickCartIcon() {
		await this.cartIcon.waitFor({ state: 'visible' });
		await this.cartIcon.click();
	}
}
