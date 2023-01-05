<script lang="ts">
	import { getLocaleName, type Locale } from "$lib/typings/server/general";
	import { validateNameStruct } from "$lib/utils";

	export let locales: Map<Locale, { id: string; placeholder?: string; value?: string }>;
</script>

<div class="flex flex-col gap-2 {$$props.class}">
	{#each [...locales.entries()] as [locale, { id, placeholder, value }]}
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
</style>
