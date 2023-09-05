<script lang="ts">
	import type { SuccessData } from '../types';

	export let word: SuccessData;
</script>

<article>
	<header>
		<h3>{word.word}</h3>
		<p>{word.phonetic}</p>
	</header>
	{#each word.meanings as meaning}
		<section>
			<h4>{meaning.partOfSpeech}</h4>
			<h5>Meaning</h5>
			{#if meaning.definitions.length > 0}
				<ul>
					{#each meaning.definitions as definition}
						<li>
							{definition.definition}
							{#if definition.example}
								<p>{definition.example}</p>
							{/if}
						</li>{/each}
				</ul>
			{/if}

			{#if meaning.synonyms.length > 0}
				<h5>Synonyms</h5>
				<ul>
					{#each meaning.synonyms as synonym}
						<li>{synonym}</li>
					{/each}
				</ul>
			{/if}

			{#if meaning.antonyms.length > 0}
				<h5>Antonyms</h5>
				<ul>
					{#each meaning.antonyms as antonym}
						<li>{antonym}</li>
					{/each}
				</ul>
			{/if}
		</section>
	{/each}
	<footer>
		<p>Source</p>
		{#each word.sourceUrls as source}
			<a href={source}>{source}</a>
		{/each}
	</footer>
</article>

<style></style>
