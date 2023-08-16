import { get } from 'svelte/store';
import './mocks/matchMedia.mock';
import { preferences, update } from '../src/stores';

describe('Preferences store', () => {
	test('Should have default font set to sans', () => {
		const font = get(preferences).font;
		expect(font).toEqual('sans');
	});

	test('Should load default theme from system preferences', () => {
		expect(window.matchMedia).toBeCalled();
		expect(window.matchMedia).toBeCalledTimes(1);
	});

	test('Should correctly update preferred font', () => {
		let font = get(preferences).font;
		expect(font).toEqual('sans');

		update(state => ({ ...state, font: 'mono' }));
		font = get(preferences).font;
		expect(font).toEqual('mono');
	});

	test('Should correctly update preferred font', () => {
		update(state => ({ ...state, theme: 'light' }));
		expect(get(preferences).theme).toEqual('light');

		update(state => ({ ...state, theme: 'dark' }));
		expect(get(preferences).theme).toEqual('dark');
	});
});
