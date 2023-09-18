<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';

	export let path: string;
	let audio;

	onMount(() => {
		audio = new Audio(path);
	});

	afterUpdate(() => {
		audio = new Audio(path);
	});
</script>

<button on:click={() => audio.play()} aria-label="Play phonetic audio">
	<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
		<g fill="#A445ED" fill-rule="evenodd">
			<circle cx="37.5" cy="37.5" r="37.5" opacity="var(--icon-opacity, .25)" />
			<path fill="var(--play-fill)" d="M29 27v21l21-10.5z" />
		</g>
	</svg>
</button>

<style>
	button {
		background: none;
		border: none;
		cursor: pointer;
	}

	circle {
		transition: opacity 350ms ease-in-out;
	}

	path {
		transition: fill 350ms ease-in-out;
	}

	button:is(:hover, :focus) circle {
		--icon-opacity: 1;
	}

	button:is(:hover, :focus) path {
		--play-fill: var(--clr-neutral-100, white);
	}
</style>
