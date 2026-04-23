import { expect } from '@playwright/test';

export class BasePage {
	constructor(page) {
		this.page = page;
	}

	async navigate(url) {
		await this.page.goto(url);
	}

	async getPageTitle() {
		const title = await this.page.title();
		return title ? title.trim() : '';
	}

	async getElementText(locator) {
		const text = await locator.textContent();
		return text ? text.trim() : '';
	}

	async scrollToElement(locator) {
		await locator.waitFor({ state: 'attached' });
		await locator.scrollIntoViewIfNeeded();
	}

	async expectElementToHaveText(locator, expectedText) {
		await expect(locator).toHaveText(expectedText);
	}
}
