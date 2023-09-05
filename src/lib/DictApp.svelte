<script lang="ts">
	import { currentWord } from '../stores';
	import SearchForm from './SearchForm.svelte';
	import Word from './Word.svelte';
	$: console.log($currentWord);
</script>

<section>
	<SearchForm />
	{#if $currentWord instanceof Array}
		{#each $currentWord as word}
			<Word {word} />
		{/each}
	{:else}{/if}
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
