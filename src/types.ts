export interface Phonetics {
	text?: string;
	audio: string;
	sourceUrl?: string;
}

export interface Definiton {
	definition: string;
	synonyms: string[];
	antonyms: string[];
	example?: string;
}

export interface Meaning {
	partOfSpeech: string;
	definitions: Definiton[];
	synonyms: string[];
	antonyms: string[];
}

export interface SuccessData {
	word: string;
	phonetic?: string;
	phonetics: Phonetics[];
	sourceUrls: string[];
	meanings: Meaning[];
}

export interface FailureData {
	title: string;
	message: string;
	resolution: string;
}

export type WordData = SuccessData[] | FailureData;
