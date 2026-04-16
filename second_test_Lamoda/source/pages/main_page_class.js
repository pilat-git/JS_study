import { base_page } from './base_page';
import { header } from './components/header';

export class main_page_class extends base_page 
{
    constructor(page) 
    {
        super(page);
        this.header = new header(page);
        
        this.popular_title = this.page.locator('div[class*="d-recommendations"] div:has-text("Популярное")');
        this.recommendation_product = this.page.locator('a[href^="/p/"]').first();
    }

    async open_home_page() 
    {
        await this.navigate('/');
    }

    async scroll_to_popular_section()
    {
        await this.popular_title.waitFor({ state: 'attached' });
        await this.popular_title.scrollIntoViewIfNeeded();
    }
}