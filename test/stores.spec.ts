import { get } from 'svelte/store';
import { preferences, update } from '../src/stores';

describe('Preferences store', () => {
	test('Should have default font set to sans', () => {
		const font = get(preferences).font;
		expect(font).toEqual('sans');
	});

	test('Should correctly update preferred font', () => {
		let font = get(preferences).font;
		expect(font).toEqual('sans');

		update(state => ({ ...state, font: 'mono' }));
		font = get(preferences).font;
		expect(font).toEqual('mono');
	});
});
