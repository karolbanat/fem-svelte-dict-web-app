import { get, writable } from 'svelte/store';
import type { WordData } from './types';

/* preferences store */
interface Preferences {
	font: 'sans' | 'serif' | 'mono';
	theme: 'dark' | 'light';
}

const defaultPreferences: Preferences = {
	font: 'sans',
	theme: window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light',
};

const localPreferences: string = localStorage.getItem('preferences');

const state: Preferences = localPreferences ? (JSON.parse(localPreferences) as Preferences) : defaultPreferences;

export const preferences = writable(state);

export const update = callback => {
	const updatedState = callback(get(preferences));
	preferences.update(() => updatedState);
	localStorage.setItem('preferences', JSON.stringify(updatedState));
};

/* word store */
const initalWordData: WordData = [];

export const currentWord = writable(initalWordData);
