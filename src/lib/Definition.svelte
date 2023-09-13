<script lang="ts">
	import type { Definiton } from '../types';

	export let definition: Definiton;
</script>

<div>
	<p>{definition.definition}</p>
	{#if definition.example}
		<q>{definition.example}</q>
	{/if}
</div>

<style>
	q {
		display: inline-block;
		margin-block-start: var(--spacer-rem-300);
		color: var(--clr-neutral-400);
	}
</style>
