<script lang="ts">
	import type { PageData } from "./$houdini";
	import SearchBar from "$lib/components/common/SearchBar.svelte";
	import { artist } from "$lib/placeholders";
	import type { Artist } from "$lib/typings/server/artist";
	import { CTXType, getValidName } from "$lib/typings/server/general";
	import { preferredTitleLocale } from "$lib/settings";
	import ItemCard from "$lib/components/common/ItemCard.svelte";

	export let data: PageData;

	// $: ({ Artists } = data);
	let searchString: string;
	let Artists: Artist[] = new Array(5).fill(artist);

	$: {
		if (searchString) {
			Artists = new Array(searchString?.length).fill(artist);
		}
	}
</script>

<div class="flex flex-col p-4">
	<div class="flex flex-col gap-2 font-head">
		<h1 class="text-xl text-custom-100">Artists</h1>
		<SearchBar
			bind:value={searchString}
			differentiateMobile={false}
			placeholder="Search Artists"
			styleType="bordered"
		/>
	</div>
	<div class="flex flex-row flex-wrap gap-4 mt-4">
		{#if Artists}
			{#each Artists as artist}
				<ItemCard
					data={{
						type: CTXType.ARTIST,
						id: artist.id,
						label: getValidName(artist.name, $preferredTitleLocale)
					}}
				/>
			{/each}
		{/if}
	</div>
</div>
