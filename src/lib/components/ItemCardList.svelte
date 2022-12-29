<script lang="ts">
	import type { CTXType } from "$lib/typings/server/general";
	import type { ItemCardData } from "$lib/typings/client/general";

	import ItemCard from "$lib/components/common/ItemCard.svelte";
	import CTXTypeChipset from "$lib/components/CTXTypeChipset.svelte";

	export let label: string;
	export let selected: CTXType;
	export let items: ItemCardData[];
</script>

<div class="flex flex-col">
	<div class="flex flex-wrap mb-2">
		<span class="font-head font-medium select-none mr-2">{label}</span>
		<CTXTypeChipset singular={true} selected={[selected]} />
	</div>
	<div class="grid grid-flow-col justify-start gap-2 overflow-x-auto">
		{#each items as data}
			<ItemCard {data} />
		{/each}
	</div>
</div>
