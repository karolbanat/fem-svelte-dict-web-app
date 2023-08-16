<script lang="ts">
	import Header from './lib/Header.svelte';
	import { preferences } from './stores';
</script>

<svelte:head>
	<link rel="stylesheet" href={`./css/themes/${$preferences.theme}-theme.css`} />
</svelte:head>

<Header />
<main />

<style>
</style>
