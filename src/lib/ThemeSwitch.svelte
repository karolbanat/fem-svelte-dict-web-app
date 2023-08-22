<script lang="ts">
	import { preferences, update } from '../stores';

	function changeTheme(theme: string) {
		update(state => ({ ...state, theme }));
	}
</script>

<div class="theme-container">
	<div role="radiogroup" class="theme-switch" class:on={$preferences.theme === 'dark'}>
		<label for="theme-light" class="visually-hidden">Light</label>
		<input
			type="radio"
			name="theme-light"
			id="theme-light"
			checked={$preferences.theme === 'light'}
			on:change={() => changeTheme('light')}
		/>
		<label for="theme-dark" class="visually-hidden">Dark</label>
		<input
			type="radio"
			name="theme-dark"
			id="theme-dark"
			checked={$preferences.theme === 'dark'}
			on:change={() => changeTheme('dark')}
		/>
	</div>
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
	.theme-container,
	.theme-switch {
		display: flex;
		align-items: center;
	}

	.theme-container {
		gap: var(--spacer-rem-300);
	}

	.theme-switch {
		--transition-duration: 350ms;
		--transition-delay: calc(var(--transition-duration) / 2);

		gap: var(--spacer-rem-100);
		padding: var(--spacer-rem-100);

		background-color: var(--clr-neutral-400);
		border-radius: var(--borr-pill);

		transition: background-color var(--transition-duration) ease-in-out;
	}

	.theme-switch.on {
		background-color: var(--clr-accent-400);
	}

	input[type='radio'] {
		appearance: none;

		margin: 0;
		width: 0.875rem;
		height: 0.875rem;

		font: inherit;
		color: currentColor;
		background-color: transparent;
		border-radius: var(--borr-circle, 50%);

		cursor: pointer;
		transition: background-color var(--transition-duration) ease-in-out;
	}
	input[type='radio']:checked {
		background-color: var(--clr-neutral-100);
	}

	input[type='radio']:checked {
		transition-delay: var(--transition-delay);
	}
</style>
