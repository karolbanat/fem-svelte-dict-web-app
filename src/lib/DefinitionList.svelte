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

<style></style>
