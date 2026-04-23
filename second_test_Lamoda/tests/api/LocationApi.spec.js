import { test, expect } from '@playwright/test';
import { locations } from '../../source/data/locations';
import { apiData } from '../../source/data/apiData';

test.describe('Location API - City Suggestion Method', () => {
	const cityToSearch = locations.cities[0];
	const { city: invalidCity } = apiData.invalid;

	test('Should return list of cities for valid geographic query', async ({ request }) => {
		const response = await request.get('/api/v1/cities/suggest', {
			params: { query: cityToSearch },
		});

		expect(response.status()).toBe(200);

		const responseBody = await response.json();

		expect(Array.isArray(responseBody)).toBeTruthy();
		expect(responseBody.length).toBeGreaterThan(0);

		const isCityPresent = responseBody.some((item) =>
			item.city.title.toLowerCase().includes(cityToSearch.toLowerCase())
		);

		expect(isCityPresent, `Expected to find "${cityToSearch}" in geo suggestions`).toBeTruthy();
	});

	test('Should return empty array for non-existent location', async ({ request }) => {
		const response = await request.get('/api/v1/cities/suggest', {
			params: { query: invalidCity },
		});

		expect(response.status()).toBe(200);
		const responseBody = await response.json();

		expect(responseBody).toEqual([]);
	});
});
