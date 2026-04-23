import { test, expect } from '@playwright/test';
import { searchQueries } from '../../source/data/searchQueries';
import { ApiHelper } from '../../source/helpers/ApiHelper';
import { apiData } from '../../source/data/apiData';

test.describe('Search API - Suggestion Method', () => {
	const [firstCategory] = Object.keys(searchQueries);
	const validQuery = searchQueries[firstCategory].term.toLowerCase();
	const { randomString } = apiData.invalid;

	test('Should return list of suggestions for valid product term', async ({ request }) => {
		const payload = ApiHelper.getSuggestPayload(validQuery);
		const response = await request.post('/api/v1/search/suggest', { data: payload });

		expect(response.status()).toBe(200);

		const responseBody = await response.json();
		expect(responseBody.suggestions).toBeDefined();
		expect(responseBody.suggestions.length).toBeGreaterThan(0);

		const hasQueryWord = responseBody.suggestions.some((item) => item.toLowerCase().includes(validQuery));
		expect(hasQueryWord).toBeTruthy();
	});

	test('Should return empty suggestions array for invalid random query', async ({ request }) => {
		const payload = ApiHelper.getSuggestPayload(randomString);
		const response = await request.post('/api/v1/search/suggest', { data: payload });

		expect(response.status()).toBe(200);

		const responseBody = await response.json();

		expect(responseBody.suggestions).toEqual([]);
		expect(responseBody.suggestions.length).toBe(0);
	});
});
