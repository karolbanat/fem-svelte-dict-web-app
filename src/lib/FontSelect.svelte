<script lang="ts">
	import { fly } from 'svelte/transition';
	import { preferences, update } from '../stores';

	interface Font {
		name: string;
		value: string;
	}

	const fonts: Font[] = [
		{
			name: 'Sans Serif',
			value: 'sans',
		},
		{
			name: 'Serif',
			value: 'serif',
		},
		{
			name: 'Mono',
			value: 'mono',
		},
	];

	let currentFont: Font = fonts.filter(font => font.value === $preferences.font)[0];
	let open: boolean = false;

	function setCurrentFont(font: Font) {
		update(state => ({ ...state, font: font.value }));
		currentFont = font;
	}
</script>

<div class="custom-select">
	<button aria-expanded={open} aria-controls="font-options" class="current-font" on:click={() => (open = !open)}>
		<span class="visually-hidden">Current font: </span>{currentFont.name}
	</button>
	{#if open}
		<ul class="font-options" id="font-options" transition:fly={{ y: 100, duration: 1000 }}>
			{#each fonts as font}
				<li>
					<input
						type="radio"
						name="font"
						value={font.value}
						class="visually-hidden"
						id={font.value}
						checked={$preferences.font === font.value}
						on:change={() => setCurrentFont(font)}
					/>
					<label for={font.value}>{font.name}</label>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.custom-select {
		position: relative;

		color: var(--clr-body);
	}

	.current-font {
		display: inline-flex;
		align-items: center;
		gap: var(--spacer-em-400);

		font-weight: var(--fw-bold, 700);
		font-size: var(--fz-300);
		color: inherit;

		background: none;
		border: none;
		cursor: pointer;
	}

	.current-font::after {
		content: '';
		display: inline-block;
		width: 14px;
		height: 8px;
		z-index: -1;

		background-image: url('/assets/images/icon-arrow-down.svg');
		transition: transform 350ms ease-in-out;
	}

	.current-font[aria-expanded='true']::after {
		transform: rotate(-180deg);
	}

	.font-options {
		position: absolute;
		z-index: 100;
		top: calc(100% + var(--spacer-rem-400));
		right: 0;
		display: grid;
		gap: var(--spacer-rem-400, 1em);
		padding: var(--spacer-rem-600, 1em);
		min-width: 11.5rem;

		background-color: var(--clr-bg-dropdown);
		border-radius: var(--borr-400);
		box-shadow: 0 0 30px var(--clr-dropdown-shadow);

		list-style: none;
	}

	label {
		font-weight: var(--fw-bold, 700);
		cursor: pointer;
	}

	input[type='radio']:is(:hover, :focus) + label,
	label:is(:hover, :focus) {
		color: var(--clr-accent-400);
	}

	input[type='radio']:checked + label {
		color: var(--clr-accent-400);
	}

	input[value='sans'] + label {
		font-family: var(--ff-sans);
	}

	input[value='serif'] + label {
		font-family: var(--ff-serif);
	}

	input[value='mono'] + label {
		font-family: var(--ff-mono);
	}
</style>
