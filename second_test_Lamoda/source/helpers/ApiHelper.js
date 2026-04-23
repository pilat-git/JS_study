export class ApiHelper {
	static getSuggestPayload(query, overrides = {}) {
		return {
			query: query,
			limit: 10,
			gender: 'women',
			// eslint-disable-next-line camelcase
			with_sis_suggests: false,
			...overrides,
		};
	}

	static getProductParams(sku) {
		return {
			sku: sku,
			// eslint-disable-next-line camelcase
			city_aoid: '16733',
		};
	}
}
