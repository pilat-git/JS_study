import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
	js.configs.recommended,
	{
		files: ['**/*.js'],
		plugins: {
			prettier,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			...configPrettier.rules,
			'prettier/prettier': 'error',
			'brace-style': ['error', '1tbs', { allowSingleLine: true }],
			camelcase: ['error', { properties: 'always' }],
			'no-unused-vars': 'warn',
		},
	},
];
