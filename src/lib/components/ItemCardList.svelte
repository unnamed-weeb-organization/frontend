<script lang="ts">
	import type { CTXType } from "$lib/typings/server/general";
	import type { ItemCardData } from "$lib/typings/client/component";

	import ItemCard from "$lib/components/common/ItemCard.svelte";
	import CTXTypeChipset from "$lib/components/CTXTypeChipset.svelte";

	export let label: string;
	export let selected: CTXType;
	export let items: ItemCardData[];
</script>

<div class="flex flex-col">
	<div class="mb-2 flex flex-wrap">
		<span class="mr-2 select-none font-medium">{label}</span>
		<CTXTypeChipset singular={true} selected={[selected]} />
	</div>
	<div class="grid grid-flow-col justify-start gap-2 overflow-x-auto">
		{#each items as data}
			<ItemCard {data} />
		{/each}
	</div>
</div>
