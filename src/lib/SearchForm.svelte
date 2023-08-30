<script lang="ts">
	let valid: boolean = true;
	let searchTerm: string = '';
</script>

<form on:submit|preventDefault class:invalid={!valid}>
	<label for="search-term" class="visually-hidden">Search term</label>
	<input bind:value={searchTerm} type="text" name="search-term" id="search-term" placeholder="Search for any word..." />
	<button type="submit">
		<img src="/assets/images/icon-search.svg" alt="Search" />
	</button>
	{#if !valid}
		<p role="alert">Whoops, can't be empty...</p>
	{/if}
</form>

<style>
	form {
		display: flex;
		gap: var(--spacer-rem-400, 1em);

		padding-inline: var(--spacer-rem-600, 1em);
		padding-block: clamp(var(--spacer-rem-400), 3.5vw, var(--spacer-rem-500));

		font-size: var(--fz-500);

		background-color: var(--clr-bg-input);
		border-radius: var(--borr-400, 1rem);

		overflow: hidden;
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
	}
</style>
