import type { Phonetics, SuccessData } from '../types';

const emptyPhonetic: Phonetics = {
	text: '',
	audio: '',
};

export function getPhonetic(word: SuccessData): Phonetics {
	const matchingPhonetic: Phonetics = word.phonetics.filter(
		phonetic => phonetic.text && phonetic.text === word.phonetic
	)[0];

	const phoneticWithAudio: Phonetics = word.phonetics.filter(
		phonetic => phonetic.text && phonetic.text !== '' && phonetic.audio !== ''
	)[0];

	return phoneticWithAudio || matchingPhonetic || emptyPhonetic;
}
