<script lang="ts">
	import type { PageData } from "./$types";
	import { getFormattedDate } from "$lib/utils";
	import { goto, RoutePoint } from "$lib/routes";
	import { preferredTitleLocale } from "$lib/settings";
	import { getArtistTypeName } from "$lib/typings/server/artist";
	import type { ArtTileListData } from "$lib/typings/client/component";
	import { CTXType, getCountryName, getValidName } from "$lib/typings/server/general";

	import ArtTileList from "$lib/components/ArtTileList.svelte";
	import ArtContainer from "$lib/components/common/ArtContainer.svelte";
	import KeyValueColumn from "$lib/components/common/KeyValueColumn.svelte";
	import EntryDetailsLayout from "$lib/components/layouts/EntryDetailsLayout.svelte";

	export let data: PageData;

	const altNames = data.artist.alt_names.map((name) => getValidName(name, $preferredTitleLocale));
	const detailColumns: Array<[string, string | number | null]> = [
		["Type", getArtistTypeName(data.artist.type)],
		["Location", data.artist.based_on ? getCountryName(data.artist.based_on) : null],
		["Founded on", data.artist.founded_on ? getFormattedDate(data.artist.founded_on) : null],
	];

	const releaseTileData: ArtTileListData[] = data.releases.map((release) => ({
		id: release.id,
		ctx: CTXType.RELEASE,
		label: getValidName(release.name, $preferredTitleLocale),
		imageURL: "",
	}));

	const goToReleaseList = () => {
		goto(RoutePoint.Releases, { artist: data.artist.id });
	};
</script>

<EntryDetailsLayout id={data.artist.id} ctxType={CTXType.ARTIST} externalSites={data.externalSites}>
	<div class="contents" slot="info_container">
		<ArtContainer imageURL="" link={null} />
		<div class="title_container">
			<h1>{getValidName(data.artist.name, $preferredTitleLocale)}</h1>
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
			{#if value}
				<KeyValueColumn {key} {value} />
			{/if}
		{/each}
	</div>

	<div class="contents" slot="content_container">
		<div class="h-fit w-full lg:max-w-3xl 2xl:max-w-4xl md:pr-8 pb-8 md:pb-0">
			<ArtTileList heading="Releases" tiles={releaseTileData} onAllClick={goToReleaseList} />
		</div>
	</div>
</EntryDetailsLayout>

<style>
	.title_container {
		--at-apply: flex flex-col items-center md: items-start font-head;
	}

	.title_container h1 {
		--at-apply: text-4xl font-medium text-custom-100;
	}

	.alt_name_container {
		--at-apply: flex items-center h-6 text-sm text-custom-300;
	}
</style>
