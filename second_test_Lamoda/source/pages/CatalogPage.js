import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class CatalogPage extends BasePage 
{
	constructor(page) 
	{
		super(page);

		this.filterButton = (filterName) => 
			this.page.locator('div[class*="_content_"]').filter({ 
				has: this.page.locator('.ui-desktop-filter-item-title', { hasText: filterName }) 
			});

		this.checkboxItems = this.page.locator('.x-checkbox');
		this.applyButton = this.page.locator('.ui-desktop-apply-filter-button');
		this.appliedValueText = (filterName) => 
			this.filterButton(filterName).locator('.ui-desktop-filter-applied-count');

		this.resetButton = (filterName) => 
			this.filterButton(filterName).locator('.icon__filter_reset');
	}

	async applyFirstAvailableFilter(filterName) 
	{
		await this.filterButton(filterName).click();

		const firstOption = this.checkboxItems.first();
		await firstOption.waitFor({ state: 'visible' });
		
		const optionText = await this.getElementText(firstOption);
		await firstOption.click();

		await expect(this.applyButton).toBeEnabled();
		await this.applyButton.click();

		const appliedLabel = this.appliedValueText(filterName);
		await expect(appliedLabel).toBeVisible();
		await expect(appliedLabel).toHaveText(optionText);
	}

	async resetFilter(filterName) 
	{
		const reset = this.resetButton(filterName);
		await reset.waitFor({ state: 'visible' });
		await reset.click();
		
		await reset.waitFor({ state: 'hidden' });
	}
}
