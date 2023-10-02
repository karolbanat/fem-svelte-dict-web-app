<script lang="ts">
	import { preferences, update } from '../stores';

	function toggleTheme() {
		update(state => ({ ...state, darkThemeOn: !$preferences.darkThemeOn }));
	}
</script>

<div class="theme-container">
	<button on:click={toggleTheme} type="button" role="switch" aria-checked={$preferences.darkThemeOn}>
		<span class="visually-hidden">Dark theme: {$preferences.darkThemeOn ? 'on' : 'off'}</span>
	</button>
	<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
		><path
			fill="none"
			stroke="var(--clr-moon, #838383)"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
		/>
	</svg>
</div>

<style>
	.theme-container {
		display: flex;
		align-items: center;
		gap: var(--spacer-rem-300);
	}

	[role='switch'] {
		--transition-duration: 350ms;
		--padding: var(--spacer-rem-100);

		position: relative;
		min-width: 2.5rem;
		min-height: 1.325rem;

		padding: var(--padding);

		background-color: var(--clr-neutral-400);
		border: none;
		border-radius: var(--borr-pill);
		cursor: pointer;

		transition: background-color var(--transition-duration) ease-in-out;
	}

	[role='switch'][aria-checked='true'] {
		background-color: var(--clr-accent-400);
	}

	[role='switch']::before {
		--size: 0.875rem;

		content: '';
		position: absolute;
		left: var(--padding);
		top: var(--padding);

		width: var(--size);
		aspect-ratio: 1 / 1;

		background-color: var(--clr-neutral-100);
		border-radius: var(--borr-circle, 50%);

		transition: left var(--transition-duration) ease-in-out;
	}

	[role='switch'][aria-checked='true']::before {
		left: calc(100% - var(--padding) - var(--size));
	}
</style>
