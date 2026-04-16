import { test, expect } from '@playwright/test';
import { main_page_class } from '../source/pages/main_page_class';
import { product_page_class } from '../source/pages/product_page_class';
import { shopping_cart_page_class } from '../source/pages/shopping_cart_page_class';

test.describe('remove product from cart tests', () =>
{
    let main_page, product_page, shopping_cart_page;

    test.beforeEach(async ({ page }) =>
    {
        main_page = new main_page_class(page);
        product_page = new product_page_class(page);
        shopping_cart_page = new shopping_cart_page_class(page);

        await main_page.open_home_page();
    });

    test('user can remove product and see empty cart message', async () =>
    {
        await main_page.scroll_to_popular_section();

        await main_page.recommendation_product.waitFor({ state: 'visible' });
        await main_page.recommendation_product.click();

        await product_page.select_any_size();
        await product_page.add_product_to_cart();
        await product_page.go_to_cart();

        await shopping_cart_page.delete_product();
        const empty_text = await shopping_cart_page.get_empty_cart_text();
        expect(empty_text.toLowerCase()).toContain('пустая');
    });
});