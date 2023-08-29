import { fireEvent, getByLabelText, render, screen } from '@testing-library/svelte';
import SearchForm__SvelteComponent_ from '../../src/lib/SearchForm.svelte';

describe('SearchFrom Component', () => {
	describe('Rendering', () => {
		it('Should display text input field', () => {
			render(SearchForm__SvelteComponent_);
			expect(screen.getByLabelText('Search term')).toBeTruthy();
		});

		it('Should display submit button', () => {
			render(SearchForm__SvelteComponent_);
			expect(screen.getByRole('button')).toBeTruthy();
		});
	});

	describe('Input states', () => {
		test('Should display error when empty field submited', async () => {
			render(SearchForm__SvelteComponent_);
			const input: HTMLInputElement = screen.getByLabelText('Search term');
			const submitBtn: HTMLButtonElement = screen.getByRole('button');

			await fireEvent.change(input, { target: { value: '' } });
			await fireEvent.click(submitBtn);

			expect(screen.getByRole('alert')).toBeTruthy();
			expect(screen.getByText("Whoops, can't be empty...")).toBeTruthy();
		});

		test('Should leave entered text when submitted', async () => {
			render(SearchForm__SvelteComponent_);
			const input: HTMLInputElement = screen.getByLabelText('Search term');
			const submitBtn: HTMLButtonElement = screen.getByRole('button');
			const inputValue: string = 'keyboard';

			await fireEvent.change(input, { target: { value: inputValue } });
			await fireEvent.click(submitBtn);

			expect(input.value).toEqual(inputValue);
		});

		test('Should fetch data on submit', async () => {
			global.fetch = vi.fn();
			render(SearchForm__SvelteComponent_);
			const input: HTMLInputElement = screen.getByLabelText('Search term');
			const submitBtn: HTMLButtonElement = screen.getByRole('button');

			await fireEvent.change(input, { target: { value: 'keyboard' } });
			await fireEvent.click(submitBtn);

			expect(global.fetch).toBeCalled();
			expect(global.fetch).toBeCalledTimes(1);
		});
	});
});
