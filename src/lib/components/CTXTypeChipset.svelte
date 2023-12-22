<script lang="ts">
	import { type CTXType, getCTXTypes } from "$lib/typings/server/general";
	import CTXTypeChip from "$lib/components/common/CTXTypeChip.svelte";

	export let singular = false;
	export let selected: CTXType[] = [];

	const ctxTypes = getCTXTypes();
	function addCTXType(type: CTXType) {
		if (singular) {
			return (selected = [type]);
		}

		if (selected.includes(type)) {
			selected = selected.filter((t) => t !== type);
		} else {
			selected = [...selected, type];
		}
	}
</script>

<div class="flex gap-1 {$$props.class}">
	{#each ctxTypes as ctxType}
		<CTXTypeChip
			{ctxType}
			selected={selected.includes(ctxType)}
			on:click={() => addCTXType(ctxType)}
		/>
	{/each}
</div>
