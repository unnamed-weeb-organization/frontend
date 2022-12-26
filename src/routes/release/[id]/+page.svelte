<script lang="ts">
	import type { PageData } from "./$types";
	import SongList from "$lib/components/SongList.svelte";
	import ExternalSites from "$lib/components/ExternalSites.svelte";

	export let data: PageData;

	const columnItems = [
		["Release Date", 2013],
		["Type", data?.release.release_type],
		["Language", "Japanese"],
		["Tracks", 9],
		["Length", "47 Minutes, 52 Seconds"]
	];
</script>

<div class="flex flex-col md:flex-row w-full py-6 overflow-y-auto">
	<div class="details_container">
		<div class="info_container">
			<div class="art_container" />
			<div class="title_container">
				<h1>{data.release.name}</h1>
				<span>{data.artist.name}</span>
			</div>
		</div>
		<div class="column_container">
			{#each columnItems as [key, value]}
				<div class="column_item">
					<span>{key}</span>
					<span>{value}</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex flex-col w-full px-4 mt-8 gap-4 md:px-0 md:mt-0 xl:contents">
		<SongList songs={data.songs} class="h-fit lg:max-w-3xl 2xl:max-w-4xl md:pr-8" />
		<ExternalSites sites={data.externalSites} />
	</div>
</div>

<style lang="postcss">
	.details_container {
		@apply relative z-10 flex flex-col md:w-fit md:px-8;
	}

	.info_container {
		@apply flex flex-col items-center gap-4 md:items-start;
	}

	.art_container {
		@apply h-64 w-64 min-h-[16rem]
        bg-custom-secondary rounded
        shadow-md hover:shadow-lg
        transition-shadow duration-150 ease-in-out;
	}

	.title_container {
		@apply flex flex-col items-center md:items-start
        font-head;
	}

	.title_container h1 {
		@apply text-4xl font-medium text-custom-100;
	}

	.title_container span {
		@apply text-sm text-custom-200;
	}

	.column_container {
		@apply grid grid-cols-2 md:grid-cols-1 gap-4
        justify-items-center text-center md:justify-items-start md:text-start
        mt-8;
	}

	.column_item {
		@apply flex flex-col font-head text-sm text-custom-200;
	}

	.column_item > :first-child {
		@apply text-custom-300;
	}
</style>
