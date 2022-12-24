<script lang="ts">
	import { CTXType } from "$lib/typings/server/general";
	import ItemCardList from "$lib/components/ItemCardList.svelte";
	import type { ItemCardData } from "$lib/typings/client/general";

	let RACTXType = CTXType.Album;
	let RAData: ItemCardData[] = [
		{
			type: CTXType.Album,
			label: "Eureka",
			id: "",
			imageURL: "",
			alt: { label: "きのこ帝国", id: "", type: CTXType.Artist },
		},
		{
			type: CTXType.Album,
			label: "これでいいんだよ",
			id: "",
			imageURL: "",
			alt: { label: "Yuko Ando", id: "", type: CTXType.Artist }
		}
	];
</script>

<div class="mt-4 flex flex-col gap-2 px-4">
	<ItemCardList label="Recently Added" selected={RACTXType} items={RAData} />
</div>
