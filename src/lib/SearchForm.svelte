<script lang="ts">
	import { currentWord } from '../stores';

	let valid: boolean = true;
	let searchTerm: string = '';

	function onSubmit() {
		valid = !!searchTerm;

		if (valid) {
			fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
				.then(res => res.json())
				.then(data => currentWord.set(data))
				.catch(err => console.log(err));
		}
	}
</script>

<form on:submit|preventDefault={onSubmit} class:invalid={!valid}>
	<label for="search-term" class="visually-hidden">Search term</label>
	<input
		bind:value={searchTerm}
		on:input={() => (valid = !!searchTerm)}
		type="text"
		name="search-term"
		id="search-term"
		placeholder="Search for any word..."
	/>
	<button type="submit">
		<img src="assets/images/icon-search.svg" alt="Search" />
	</button>
	{#if !valid}
		<p role="alert">Whoops, can't be empty...</p>
	{/if}
</form>

<style>
	form {
		position: relative;
		display: flex;
		gap: var(--spacer-rem-400, 1em);

		padding-inline: var(--spacer-rem-600, 1em);
		padding-block: clamp(var(--spacer-rem-400), 3.5vw, var(--spacer-rem-500));

		font-size: var(--fz-500);

		background-color: var(--clr-bg-input);
		border-radius: var(--borr-400, 1rem);
	}

	form.invalid {
		outline: 1px solid var(--clr-error);
	}

	form:focus-within,
	form:hover {
		outline: 1px solid var(--clr-accent-400);
	}

	input {
		flex: 1;
		min-width: 15ch;

		font-weight: var(--fw-bold, 700);
		color: inherit;

		background-color: inherit;
		border: none;
		caret-color: var(--clr-accent-400);

		cursor: pointer;
	}

	input::placeholder {
		color: var(--clr-search-placeholder);
	}

	button[type='submit'] {
		background: none;
		border: none;
		cursor: pointer;
	}

	[role='alert'] {
		position: absolute;
		bottom: 0;
		left: 0;
		transform: translateY(calc(100% + var(--spacer-rem-200)));

		font-size: var(--fz-500);
		color: var(--clr-error);
	}
</style>
