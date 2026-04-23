import { BasePage } from './BasePage';
import { Header } from './components/Header';

export class MainPage extends BasePage {
	constructor(page) {
		super(page);
		this.header = new Header(page);

		this.popularTitle = this.page.locator('div[class*="d-recommendations"] div:has-text("Популярное")');
		this.recommendationProduct = this.page.locator('a[href^="/p/"]').first();
	}
}
