<script lang="ts">
	import SearchForm from './SearchForm.svelte';
</script>

<section>
	<SearchForm />
</section>

<style>
	section {
		margin-block-start: var(--spacer-rem-600);
	}

	@media only screen and (min-width: 36em) {
		section {
			margin-block-start: calc(var(--spacer-rem-600) * 2);
		}
	}
</style>
