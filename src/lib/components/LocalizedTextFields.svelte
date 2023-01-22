<script lang="ts">
	import { slide } from "svelte/transition";
	import { validateNameStruct } from "$lib/utils";
	import { getLocaleName, Locale } from "$lib/typings/server/general";
	import { Level } from "$lib/typings/client/general";

	export let locales: Map<Locale, { id: string; placeholder?: string; value?: string }>;

	let error: string | null = null;
	let warn: string | null = null;
	$: {
		const nameRecord = {
			english: locales.get(Locale.English)?.value,
			native: locales.get(Locale.Native)?.value,
			romanized: locales.get(Locale.Romanized)?.value
		};

		const e = validateNameStruct(nameRecord);

		if (e?.level === Level.Error) {
			error = e.message;
			warn = null;
		} else if (e?.level === Level.Warn) {
			warn = e.message;
			error = null;
		} else {
			error = null;
			warn = null;
		}
	}
</script>

<div class="flex flex-col gap-2 flex-1 {$$props.class}">
	{#if error}
		<span transition:slide|local={{ duration: 150 }} class="error">
			{error}
		</span>
	{/if}
	{#if warn}
		<span transition:slide|local={{ duration: 150 }} class="warn">
			{warn}
		</span>
	{/if}

	<div class="contents gap-2 md:flex">
		{#each [...locales.entries()] as [locale, { id, placeholder, value }] (locale)}
			<label for={id}>
				<h2>{getLocaleName(locale)}</h2>
				<input name={id} type="text" {placeholder} class={$$props.class} bind:value />
			</label>
		{/each}
	</div>
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

	span.warn,
	span.error {
		@apply text-sm font-head;
	}

	span.error {
		@apply text-red-600;
	}

	span.warn {
		@apply text-yellow-600;
	}

	:global(.dark) span.error {
		@apply text-red-500;
	}

	:global(.dark) span.warn {
		@apply text-yellow-500;
	}
</style>
