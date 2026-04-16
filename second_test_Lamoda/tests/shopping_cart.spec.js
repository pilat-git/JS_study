import { test, expect } from '@playwright/test';
import { main_page_class } from '../source/pages/main_page_class';
import { search_results_page_class } from '../source/pages/search_results_page_class';
import { product_page_class } from '../source/pages/product_page_class';
import { shopping_cart_page_class } from '../source/pages/shopping_cart_page_class';
import { shopping_cart_data } from '../source/data/shopping_cart_data';

test.describe('shopping cart functionality tests', () => 
{
    let main_page;
    let results_page;
    let product_page;
    let shopping_cart_page;

    test.beforeEach(async ({ page }) => 
    {
        main_page = new main_page_class(page);
        results_page = new search_results_page_class(page);
        product_page = new product_page_class(page);
        shopping_cart_page = new shopping_cart_page_class(page);

        await main_page.open_home_page();
    });

    test('user can add product to cart and see it there', async () => 
    {
        const data = shopping_cart_data.product_to_add;

        await main_page.header.search_for_product(data.search_term);
        await results_page.click_first_product_card();
        
        // const expected_category = await product_page.get_product_category();

        await product_page.select_any_size();
        await product_page.add_product_to_cart();
        await product_page.close_confirmation_modal();
        await product_page.header.click_cart_icon();

        const actual_full_title = await shopping_cart_page.get_cart_product_title();
        const lower_actual = actual_full_title.toLowerCase();

        expect(lower_actual).toContain(data.search_term.toLowerCase());
        // expect(lower_actual).toContain(expected_category.toLowerCase());
    });
});