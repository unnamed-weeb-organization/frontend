<script lang="ts">
	import { CTXType } from "$lib/typings/server/general";
	import ItemCardList from "$lib/components/ItemCardList.svelte";
	import type { ItemCardData } from "$lib/typings/client/general";

	let RACTXType = CTXType.Album;
	let RAData: ItemCardData[] = [
		{
			type: CTXType.Album,
			label: "Eureka",
			link: "",
			imageURL: "",
			alt: { label: "きのこ帝国", link: "", type: CTXType.Artist },
		},
		{
			type: CTXType.Album,
			label: "これでいいんだよ",
			link: "",
			imageURL: "",
			alt: { label: "Yuko Ando", link: "", type: CTXType.Artist }
		}
	];
</script>

<div class="mt-4 flex flex-col gap-2 px-4">
	<ItemCardList label="Recently Added" selected={RACTXType} items={RAData} />
</div>
