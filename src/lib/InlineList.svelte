<script lang="ts">
	export let list: string[];
</script>

<ul>
	{#each list as element}
		<li>{element}</li>
	{/each}
</ul>

<style></style>
