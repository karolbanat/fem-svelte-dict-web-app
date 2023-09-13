<script lang="ts">
	import type { Definiton } from '../types';
	import Definition from './Definition.svelte';

	export let definitions: Definiton[];
</script>

<ul>
	{#each definitions as definition}
		<li>
			<Definition {definition} />
		</li>{/each}
</ul>

<style>
	li {
		margin-inline-start: 0.9em;
		padding-inline-start: var(--spacer-rem-500);
	}

	li:not(:last-child) {
		margin-block-end: var(--spacer-rem-300);
	}

	li::marker {
		color: var(--clr-accent-400);
		font-size: inherit;
	}
</style>
