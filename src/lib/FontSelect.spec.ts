import { fireEvent, render, screen } from '@testing-library/svelte';
import FontSelect__SvelteComponent_ from './FontSelect.svelte';

describe('Font Select', () => {
	test('Should render FontSelect component', () => {
		render(FontSelect__SvelteComponent_);
		expect(screen.getByText('Sans Serif')).toBeTruthy();
	});

	test('Should open dropdown with 3 radio buttons when button clicked', async () => {
		render(FontSelect__SvelteComponent_);
		const button: HTMLButtonElement = document.querySelector('.current-font');
		await fireEvent.click(button);
		expect(screen.getByRole('list')).toBeTruthy();
		expect(screen.getByRole('list').childNodes.length).toBe(3);
		expect(screen.getAllByRole('radio').length).toBe(3);
	});
});
