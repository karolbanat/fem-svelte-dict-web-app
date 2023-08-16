import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Header__SvelteComponent_ from '../../src/lib/Header.svelte';

describe('Header Component', () => {
	test('Should render logo', () => {
		const header = render(Header__SvelteComponent_);
		const logo = header.getByRole('img');
		expect(logo).toBeTruthy();
	});

	test('Should render logo with alt', () => {
		const header = render(Header__SvelteComponent_);
		const logo = header.getAllByAltText('Home page');
		expect(logo).toBeTruthy();
	});
});
