<script lang="ts">
	import type { SuccessData } from '../types';
	import Meaning from './Meaning.svelte';

	export let word: SuccessData;
</script>

<article>
	<header>
		<h3>{word.word}</h3>
		<p>{word.phonetic}</p>
	</header>

	{#each word.meanings as meaning}
		<Meaning {meaning} />
	{/each}

	<footer>
		<p>Source</p>
		{#each word.sourceUrls as source}
			<a href={source}>{source}</a>
		{/each}
	</footer>
</article>

<style></style>
