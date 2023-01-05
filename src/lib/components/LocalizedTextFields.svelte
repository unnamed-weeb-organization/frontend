<script lang="ts">
	import { slide } from "svelte/transition";
	import { validateNameStruct } from "$lib/utils";
	import { getLocaleName, Locale } from "$lib/typings/server/general";

	export let locales: Map<Locale, { id: string; placeholder?: string; value?: string }>;

	let error: string | null = null;
	$: {
		const nameRecord = {
			english: locales.get(Locale.English)?.value,
			native: locales.get(Locale.Native)?.value,
			romanized: locales.get(Locale.Romanized)?.value
		};

		error = validateNameStruct(nameRecord);
	}
</script>

<div class="flex flex-col md:flex-row gap-2 flex-1 {$$props.class}">
	{#if error}
		<span transition:slide={{ duration: 150 }} class="error">
			{error}
		</span>
	{/if}

	{#each [...locales.entries()] as [locale, { id, placeholder, value }] (locale)}
		<label for={id}>
			<h2>{getLocaleName(locale)}</h2>
			<input name={id} type="text" {placeholder} class={$$props.class} bind:value />
		</label>
	{/each}
</div>

<style lang="postcss">
	label {
		@apply h-10 min-h-[2.5rem] flex flex-1 items-center gap-2 
        px-2 rounded bg-custom-secondary
        font-head text-sm
    	transition-colors duration-150 ease-in-out;
	}

	label:focus-within {
		@apply bg-custom-tertiary outline-2 outline-accent-100;
	}

	input {
		@apply w-full text-custom-200 bg-transparent;
	}

	h2 {
		@apply text-sm text-custom-400 w-32;
	}

	span.error {
		@apply mt-1 text-sm font-head text-red-600;
	}

	:global(.dark) span.error {
		@apply text-red-500;
	}
</style>
