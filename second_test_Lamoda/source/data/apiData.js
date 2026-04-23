export const apiData = {
	invalid: {
		sku: 'invalid_sku_format',
		city: '1q2w3e4r5t',
		randomString: '1q2w3e4r5t',
	},

	product: {
		defaultSku: 'MP002XM00S10', // temporary stopgap
		expectedSchema: {
			title: 'string',
			price: 'number',
			sku: 'string',
			brandName: 'string',
		},
	},
};
