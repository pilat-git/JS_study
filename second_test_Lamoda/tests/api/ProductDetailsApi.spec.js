import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../source/helpers/ApiHelper';
import { apiData } from '../../source/data/apiData';

test.describe('Product API - Get Product Details', () => {
	const { defaultSku, expectedSchema } = apiData.product;
	const { sku: invalidSku } = apiData.invalid;

	test('Should verify product data types based on schema from apiData', async ({ request }) => {
		const response = await request.get('/api/v1/product/get', {
			params: ApiHelper.getProductParams(defaultSku),
		});

		expect(response.status()).toBe(200);

		const body = await response.json();

		Object.entries(expectedSchema).forEach(([key, expectedType]) => {
			const actualValue = key === 'brandName' ? body.brand.title : body[key];

			expect(typeof actualValue, `Field "${key}" should be of type "${expectedType}"`).toBe(expectedType);
		});

		expect(body.sku).toBe(defaultSku);
		expect(Array.isArray(body.sizes)).toBeTruthy();
		expect(body.sizes.length).toBeGreaterThan(0);
	});

	test('Should return 400 for invalid SKU format using helper params', async ({ request }) => {
		const response = await request.get('/api/v1/product/get', {
			params: ApiHelper.getProductParams(invalidSku),
		});

		expect(response.status()).toBe(400);
	});
});
