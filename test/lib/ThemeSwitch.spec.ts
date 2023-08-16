import { render, screen } from '@testing-library/svelte';
import '../mocks/matchMedia.mock';
import ThemeSwitch__SvelteComponent_ from '../../src/lib/ThemeSwitch.svelte';

describe('ThemeSwitch Component', () => {
	test('Should render two radio inputs', () => {
		render(ThemeSwitch__SvelteComponent_);
		expect(screen.getAllByRole('radio').length).toBe(2);
		expect(screen.getByLabelText('Dark')).toBeTruthy();
		expect(screen.getByLabelText('Light')).toBeTruthy();
	});

	test('Should one be selected on render', () => {
		render(ThemeSwitch__SvelteComponent_);
		const checkedInputs: HTMLElement[] = (screen.getAllByRole('radio') as HTMLInputElement[]).filter(el => el.checked);
		expect(checkedInputs.length).toBe(1);
	});

	test('Should render moon icon', () => {
		render(ThemeSwitch__SvelteComponent_);
		expect(document.querySelector('svg')).toBeTruthy();
	});
});
