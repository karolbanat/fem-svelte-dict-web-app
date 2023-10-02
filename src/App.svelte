<script lang="ts">
	import DictApp from './lib/DictApp.svelte';
	import Header from './lib/Header.svelte';
	import Wrapper from './lib/Wrapper.svelte';
	import { preferences } from './stores';
</script>

<svelte:head>
	<link rel="stylesheet" href={`./css/themes/${$preferences.darkThemeOn ? 'dark' : 'light'}-theme.css`} />
	<link rel="stylesheet" href={`./css/fonts/${$preferences.font}-font.css`} />
</svelte:head>

<Header />
<main>
	<Wrapper>
		<DictApp />
	</Wrapper>
</main>

<style>
	main {
		padding-block-end: var(--spacer-rem-800, 2em);
	}
</style>
