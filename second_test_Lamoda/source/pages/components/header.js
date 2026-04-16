export class header
{
    constructor(page)
    {
        this.page = page;

        this.search_input = this.page.getByPlaceholder('Поиск');

        this.cart_icon = this.page.locator('a[href*="/cart/"]');

        this.city_chooser = this.page.locator('.js-header-geo-wrapper');
        
        this.select_another_button = this.page.getByRole('button', { name: 'Выбрать другой' });
        
        this.city_search_input = this.page.locator('input[placeholder*="название города"]');
        
        this.city_from_list = (cityName) => this.page.locator(`a[class*="cityLink"][role="button"]`).filter({ hasText: cityName });
        
        this.go_to_shopping_button = this.page.getByRole('button', { name: 'Перейти к покупкам' });
    }

    async search_for_product(product_name)
    {
        await this.search_input.fill(product_name);
        await this.page.keyboard.press('Enter');
    }

    async change_city(cityName)
    {
        await this.city_chooser.hover();
        await this.page.waitForTimeout(500);

        if (await this.select_another_button.isVisible())
        {
            await this.select_another_button.click();
        } 
        else
        {
            await this.city_chooser.click();
        }

        const targetCity = this.city_from_list(cityName);
        await targetCity.waitFor({ state: 'visible' });
        await targetCity.click();

        await this.go_to_shopping_button.waitFor({ state: 'visible' });
        await this.go_to_shopping_button.click();
        
        await this.go_to_shopping_button.waitFor({ state: 'hidden' });
    }

    async get_current_city()
    {
        const text = await this.city_chooser.textContent();
        return text ? text.trim() : '';
    }

    async click_cart_icon()
    {
        await this.cart_icon.waitFor({ state: 'visible' });
        await this.cart_icon.click();
    }
}