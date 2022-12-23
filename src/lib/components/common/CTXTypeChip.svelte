<script lang="ts">
	import { type CTXType, getCTXTypeName } from "$lib/typings/server/general";

	export let selected: boolean;
	export let ctxType: CTXType;
</script>

<!--suppress HtmlWrongAttributeValue
 	Probably an issue with webstorm where boolean isn't a valid aria-select value.
 -->
<button
	role="option"
	class="chip"
	class:selected={selected}
	aria-selected={selected}
	on:click|preventDefault
>
	{getCTXTypeName(ctxType)}
</button>

<style lang="postcss">
	.chip {
		@apply flex items-center w-fit h-fit px-1 rounded
        font-head text-xs text-custom-400
        border border-custom-400
		transition-colors duration-150;
	}

	.chip.selected {
		@apply bg-accent-tertiary text-accent-100 border-accent-400;
	}
</style>
