<script lang="ts">
	import { currentWord } from '../stores';
	import DefinitionNotFound from './DefinitionNotFound.svelte';
	import SearchForm from './SearchForm.svelte';
	import Word from './Word.svelte';
</script>

<section>
	<h2 class="visually-hidden">Search for word</h2>
	<SearchForm />
	{#if $currentWord instanceof Array}
		{#each $currentWord as word}
			<Word {word} />
		{/each}
	{:else}
		<DefinitionNotFound data={$currentWord} />
	{/if}
</section>

<style>
	section {
		margin-block-start: var(--spacer-rem-600);
	}

	@media only screen and (min-width: 36em) {
		section {
			margin-block-start: calc(var(--spacer-rem-600) * 2);
		}
	}
</style>
