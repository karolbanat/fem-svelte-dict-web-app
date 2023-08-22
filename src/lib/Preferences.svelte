<script lang="ts">
	import FontSelect from './FontSelect.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';
</script>

<form on:submit|preventDefault>
	<FontSelect />
	<ThemeSwitch />
</form>

<style>
	form {
		display: flex;
		align-items: center;
		gap: var(--spacer-rem-500);
	}
</style>
