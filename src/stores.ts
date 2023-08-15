import { get, writable } from 'svelte/store';

interface Preferences {
	font: 'sans' | 'serif' | 'mono';
}

const defaultPreferences: Preferences = {
	font: 'sans',
};
const localPreferences: string = localStorage.getItem('preferences');

const state: Preferences = localPreferences ? (JSON.parse(localPreferences) as Preferences) : defaultPreferences;

export const preferences = writable(state);

export const update = callback => {
	const updatedState = callback(get(preferences));
	preferences.update(() => updatedState);
	localStorage.setItem('preferences', JSON.stringify(updatedState));
};
