<script lang="ts">
	import Preferences from './Preferences.svelte';
	import Wrapper from './Wrapper.svelte';
</script>

<Wrapper>
	<header>
		<h1 class="visually-hidden">Dictionary Web App</h1>
		<a href="#"><img src="assets/images/logo.svg" alt="Home page" /></a>
		<Preferences />
	</header>
</Wrapper>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding-block-start: var(--spacer-rem-600);
	}

	@media only screen and (min-width: 48em) {
		header {
			padding-block-start: 3.625rem;
		}
	}
</style>
