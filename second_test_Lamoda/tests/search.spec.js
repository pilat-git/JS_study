import { test, expect } from '@playwright/test';
import { data_factory } from '../source/factories/data_factory';
import { main_page_class } from '../source/pages/main_page_class';

test.describe('Search functionality - Automated Suite', () =>
{
    const categories = data_factory.get_all_categories();

    for (const category of categories)
    {
        test(`Search for ${category}`, async ({ page }) =>
        {
            const main_page = new main_page_class(page);
            const data = data_factory.get_search_data(category);

            await main_page.open_home_page();
            await main_page.header.search_for_product(data.term);
            
            const title = await page.locator('h2').textContent();
            expect(title.toLowerCase()).toContain(data.expected);
        });
    }
});