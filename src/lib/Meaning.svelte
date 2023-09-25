<script lang="ts">
	import type { Meaning } from '../types';
	import DefinitionList from './DefinitionList.svelte';
	import InlineList from './InlineList.svelte';

	export let meaning: Meaning;
</script>

<section>
	<h4>{meaning.partOfSpeech}</h4>
	<h5 class="spacer">Meaning</h5>
	{#if meaning.definitions.length > 0}
		<DefinitionList definitions={meaning.definitions} />
	{/if}

	{#if meaning.synonyms.length > 0}
		<div class="double-grid spacer">
			<h5>Synonyms</h5>
			<InlineList list={meaning.synonyms} />
		</div>
	{/if}

	{#if meaning.antonyms.length > 0}
		<div class="double-grid spacer">
			<h5>Antonyms</h5>
			<InlineList list={meaning.antonyms} />
		</div>
	{/if}
</section>

<style>
	h4 {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: var(--spacer-rem-500);

		font-size: var(--fz-600);
		font-weight: var(--fw-bold, 700);
		font-style: italic;
	}

	h4::after {
		content: '';
		display: inline-block;
		width: 100%;
		height: 1px;

		background-color: var(--clr-section-line);
	}

	h5 {
		font-size: var(--fz-500);
		font-weight: var(--fw-regular);
		color: var(--clr-neutral-400);
	}

	.double-grid {
		display: grid;
		align-items: start;
		gap: var(--spacer-rem-600);
		grid-auto-flow: column;
		grid-template-columns: auto 1fr;
	}

	.spacer {
		margin-block-start: 2em;
		margin-block-end: 1em;
	}
</style>
