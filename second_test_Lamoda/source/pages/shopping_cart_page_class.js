import { base_page } from './base_page';

export class shopping_cart_page_class extends base_page 
{
    constructor(page) 
    {
        super(page);

        this.products_count = this.page.locator('.ui-checkout-cart__products-count');
        
        this.delete_button = this.page.locator('button.x-button svg').first();
        this.confirm_delete_button = this.page.getByRole('button', { name: 'Удалить', exact: true });
        
        this.empty_cart_message = this.page.locator('div[class*="_title_"]:has-text("Корзина пока пустая")');
    }

    async get_cart_status_text() 
    {
        const text = await this.products_count.textContent();
        return text ? text.trim() : '';
    }

    async get_cart_count_number() 
    {
        const text = await this.get_cart_status_text();
        const match = text.match(/\d+/); 
        return match ? parseInt(match[0]) : 0;
    }

    async delete_product() 
    {

        await this.delete_button.click();
        
        await this.confirm_delete_button.waitFor({ state: 'visible' });
        await this.confirm_delete_button.click();
    }

    async get_empty_cart_text() 
    {
        await this.empty_cart_message.waitFor({ state: 'visible' });
        const text = await this.empty_cart_message.textContent();
        return text ? text.trim() : '';
    }
}