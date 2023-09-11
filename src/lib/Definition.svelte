<script lang="ts">
	import type { Definiton } from '../types';

	export let definition: Definiton;
</script>

<div>
	<p>{definition.definition}</p>
	{#if definition.example}
		<p>{definition.example}</p>
	{/if}
</div>

<style></style>
