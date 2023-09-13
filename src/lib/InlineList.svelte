<script lang="ts">
	export let list: string[];
</script>

<ul>
	{#each list as element}
		<li>{element}</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacer-rem-500, 1em);

		list-style: none;
	}

	li {
		font-weight: var(--fw-bold, 700);
		color: var(--clr-accent-400);
	}

	li:hover {
		text-decoration: underline;
		cursor: pointer;
	}
</style>
