<script lang="ts">
	import { type CTXType, getCTXTypeName } from "$lib/typings/server/general";

	export let selected: boolean;
	export let ctxType: CTXType;
</script>

<option class="chip" class:selected aria-selected={selected} on:click|preventDefault>
	{getCTXTypeName(ctxType)}
</option>

<style lang="postcss">
	.chip {
		@apply flex items-center w-fit h-fit px-1 rounded
        font-head text-xs text-custom-400 select-none
        border border-custom-400
		transition-colors duration-150;
	}

	.chip.selected {
		@apply bg-accent-tertiary text-accent-100 border-accent-400;
	}
</style>
