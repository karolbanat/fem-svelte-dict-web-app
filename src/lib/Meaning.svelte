<script lang="ts">
	import type { Meaning } from '../types';
	import DefinitionList from './DefinitionList.svelte';
	import InlineList from './InlineList.svelte';

	export let meaning: Meaning;
</script>

<section>
	<h4>{meaning.partOfSpeech}</h4>
	<h5>Meaning</h5>
	{#if meaning.definitions.length > 0}
		<DefinitionList definitions={meaning.definitions} />
	{/if}

	{#if meaning.synonyms.length > 0}
		<div>
			<h5>Synonyms</h5>
			<InlineList list={meaning.synonyms} />
		</div>
	{/if}

	{#if meaning.antonyms.length > 0}
		<div>
			<h5>Antonyms</h5>
			<InlineList list={meaning.antonyms} />
		</div>
	{/if}
</section>

<style></style>
