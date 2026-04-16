import { base_page } from './base_page';

export class search_results_page_class extends base_page 
{
    constructor(page) 
    {
        super(page);
        this.search_header = this.page.locator('h2.ui-catalog-search-head-title');
        this.first_product_card = this.page.locator('a[role="link"][href^="/p/"]').first();
    }

    async click_first_product_card() 
    {
        await this.first_product_card.waitFor({ state: 'visible' });
        await this.first_product_card.click();
    }
}