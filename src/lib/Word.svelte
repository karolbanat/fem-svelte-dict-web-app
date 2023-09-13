<script lang="ts">
	import type { SuccessData } from '../types';
	import Meaning from './Meaning.svelte';

	export let word: SuccessData;
</script>

<article>
	<header>
		<h3>{word.word}</h3>
		<p class="phonetic">{word.phonetic}</p>
	</header>

	{#each word.meanings as meaning}
		<Meaning {meaning} />
	{/each}

	<footer>
		<p>Source</p>
		<div class="links">
			{#each word.sourceUrls as source}
				<a href={source} target="_blank" rel="noreferrer noopener">
					<span>{source}</span>
					<img src="/assets/images/icon-new-window.svg" alt="" />
				</a>
			{/each}
		</div>
	</footer>
</article>

<style>
	article {
		display: grid;
		gap: clamp(var(--spacer-rem-800), 1rem + 3vw, var(--spacer-rem-900));
		margin-block-start: clamp(var(--spacer-rem-600), 6.25vw, var(--spacer-rem-900));
	}

	h3 {
		font-size: var(--fz-700);
	}

	footer {
		display: grid;
		gap: var(--spacer-rem-200);
		padding-block: var(--spacer-rem-500);

		font-size: var(--fz-200);
		border-top: 1px solid var(--clr-section-line);
	}

	footer p {
		color: var(--clr-neutral-400);
	}

	footer a {
		display: inline-flex;
		gap: var(--spacer-rem-200);
		text-decoration: none;
		color: inherit;
	}

	footer a:is(:hover, :focus) {
		text-decoration: underline;
	}

	footer .links {
		display: grid;
		gap: var(--spacer-rem-400);
	}

	.phonetic {
		font-size: var(--fz-600);
		line-height: 1.1;
		color: var(--clr-accent-400);
	}

	@media only screen and (min-width: 30em) {
		footer {
			grid-auto-flow: column;
			grid-template-columns: auto 1fr;
			gap: var(--spacer-rem-600);
		}
	}
</style>
