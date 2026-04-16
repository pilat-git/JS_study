export class base_page 
{
    constructor(page) 
    {
        this.page = page;
    }

    async navigate(url) 
    {
        await this.page.goto(url);
    }

    async get_page_title()
    {
        const title = await this.page.title();
        return title ? title.trim() : '';
    }

    async expect_element_to_have_text(locator, expected_text) 
    {
        const { expect } = await import('@playwright/test');
        await expect(locator).toHaveText(new RegExp(expected_text));
    }
}