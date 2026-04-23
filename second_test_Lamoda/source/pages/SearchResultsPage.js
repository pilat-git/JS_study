import { BasePage } from './BasePage';

export class SearchResultsPage extends BasePage 
{
	constructor(page) 
	{
		super(page);
		this.searchHeader = this.page.locator('h1, h2.ui-catalog-search-head-title').first();
		this.firstProductCard = this.page.locator('a[role="link"][href^="/p/"]').first();
		this.productsCount = this.page.locator('.ui-catalog-search-head-products-count');
	}

	async waitForCatalogueToLoad() 
	{
		await this.productsCount.waitFor({ state: 'visible', timeout: 10000 });
	}
}
