import { searchQueries } from '../data/searchQueries';

export class DataFactory {
	static getAllCategories() {
		return Object.keys(searchQueries);
	}

	static getSearchData(category) {
		const data = searchQueries[category];
		if (!data) {
			throw new Error(`[DataFactory] Category "${category}" not found in searchQueries.js`);
		}
		return data;
	}

	static getFirstCategoryData() {
		const [firstCategory] = Object.keys(searchQueries);
		return searchQueries[firstCategory];
	}
}
