<script lang="ts"></script>

<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		--max-width: 46rem;
		--padding-inline: clamp(var(--spacer-rem-600), 5.5vw, var(--spacer-rem-900));
		margin-inline: auto;
		width: min(var(--max-width), 100% - 2 * var(--padding-inline));
	}
</style>
