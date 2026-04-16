import { base_page } from './base_page';
import { header } from './components/header';

export class product_page_class extends base_page 
{
    constructor(page) 
    {
        super(page);
        this.header = new header(this.page);

        this.size_selector = this.page.locator('div[class*="selectWrapper"] div[tabindex="0"]');
        this.size_option = this.page.locator('div[class*="colspan"][class*="enabled"]').first();
        this.add_to_cart_button = this.page.getByRole('button', { name: 'Добавить в корзину' });
        this.modal_close_button = this.page.locator('div[class*="close-button"] div[title*="Закрыть"]');
        this.go_to_cart_button = this.page.locator('a[href="/checkout/cart/"]:has-text("Перейти в корзину")');
    }

    async select_any_size() 
    {
        await this.size_selector.waitFor({ state: 'visible' });
        await this.size_selector.click();
        
        await this.size_option.waitFor({ state: 'visible' });
        await this.size_option.click();
    }

    async add_product_to_cart() 
    {
        await this.add_to_cart_button.click();
    }

    async go_to_cart()
    {
        await this.go_to_cart_button.waitFor({ state: 'visible' });
        await this.go_to_cart_button.click();
    }

    async close_confirmation_modal() 
    {
        await this.modal_close_button.waitFor({ state: 'visible' });
        await this.modal_close_button.click();
    }
}