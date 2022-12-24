<script lang="ts">
	import { RAData } from "$lib/placeholders";
	import { CTXType } from "$lib/typings/server/general";
	import ItemCardList from "$lib/components/ItemCardList.svelte";

	let RACTXType = CTXType.Release;
</script>

<div class="mt-4 flex flex-col gap-2 px-4">
	<ItemCardList label="Recently Added" selected={RACTXType} items={RAData} />
</div>
