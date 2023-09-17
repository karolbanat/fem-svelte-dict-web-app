<script lang="ts">
	import type { FailureData } from '../types';

	export let data: FailureData;
</script>

<section>
	<span class="icon">😕</span>
	<h3>{data.title}</h3>
	<p class="message">{data.message} {data.resolution}</p>
</section>

<style>
	section {
		padding-block: clamp(4rem, 1.5rem + 7.5vw, 8.25rem);
		text-align: center;
	}

	h3 {
		margin-block: var(--spacer-em-800, 1.5em) var(--spacer-em-500, 1em);
		font-size: var(--fz-500);
	}

	.icon {
		font-size: 4rem;
		line-height: 1;
	}

	.message {
		color: var(--clr-neutral-500);
	}
</style>
