<script lang="ts">
	import type { PageData } from "./$types";
	import { goto, RoutePoint } from "$lib/routes";
	import type { ArtTileListData } from "$lib/typings/client/general";
	import { getFormattedDate } from "$lib/utils";
	import { getArtistTypeName } from "$lib/typings/server/artist";
	import { CTXType, getCountryName, getNonEmptyName } from "$lib/typings/server/general";

	import ArtTileList from "$lib/components/ArtTileList.svelte";
	import ExternalSites from "$lib/components/ExternalSites.svelte";
	import ArtContainer from "$lib/components/common/ArtContainer.svelte";
	import EntryDetailsLayout from "$lib/components/layouts/EntryDetailsLayout.svelte";
	import KeyValueColumn from "$lib/components/common/KeyValueColumn.svelte";

	export let data: PageData;

	const altNames = data.artist.alt_names.map((name) => getNonEmptyName(name));
	const detailColumns = [
		["Type", getArtistTypeName(data.artist.type)],
		["Location", getCountryName(data.artist.based_on)],
		["Founded on", getFormattedDate(data.artist.founded_on)]
	];

	const goToReleaseList = () => goto(RoutePoint.Releases, { from: data.artist.id });
	const releaseTileData: ArtTileListData[] = data.releases.map((release) => ({
		id: release.id,
		ctx: CTXType.RELEASE,
		label: getNonEmptyName(release.name),
		imageURL: ""
	}));
</script>

<EntryDetailsLayout>
	<div class="contents" slot="info_container">
		<ArtContainer imageURL="" link={null} />
		<div class="title_container">
			<h1>{getNonEmptyName(data.artist.name)}</h1>
			<div class="alt_name_container">
				{#each altNames as name, i}
					<span>{name}</span>
					{#if i < altNames.length - 1}
						<span class="mx-1">/</span>
					{/if}
				{/each}
			</div>
		</div>
	</div>

	<div class="contents" slot="column_container">
		{#each detailColumns as [key, value]}
			<KeyValueColumn {key} {value} />
		{/each}
	</div>

	<div class="contents">
		<div class="h-fit w-full lg:max-w-3xl 2xl:max-w-4xl md:pr-8 pb-8 md:pb-0">
			<ArtTileList
				heading="Releases"
				tiles={releaseTileData}
				onAllClick={goToReleaseList}
			/>
		</div>
		<ExternalSites class="hidden" sites={data.externalSites} />
	</div>
</EntryDetailsLayout>

<style lang="postcss">
	.title_container {
		@apply flex flex-col items-center md:items-start
        font-head;
	}

	.title_container h1 {
		@apply text-4xl font-medium text-custom-100;
	}

	.alt_name_container {
		@apply flex items-center h-6
        text-sm text-custom-300;
	}
</style>
