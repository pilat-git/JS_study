import { test, expect } from '@playwright/test';
import { main_page_class } from '../source/pages/main_page_class';
import { locations } from '../source/data/locations';

test.describe('regionality tests', () => 
{
    let main_page;

    test.beforeEach(async ({ page }) => 
    {
        main_page = new main_page_class(page);
        await main_page.open_home_page();
    });

    for (const city of locations.cities) 
    {
        test(`user can change city to ${city} and continue shopping`, async () => 
        {
            await main_page.header.change_city(city);

            const currentCity = await main_page.header.get_current_city();
            expect(currentCity).toContain(city);

            await expect(main_page.page).toHaveURL(/https:\/\/(www\.)?lamoda\.by\//);
        });
    }
});