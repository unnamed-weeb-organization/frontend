<script lang="ts">
	import type { PageData } from "./$types";
	import { preferredTitleLocale } from "$lib/settings";
	import { goto, RoutePoint, withParameter } from "$lib/routes";
	import { getFormattedDate, getFormattedLength } from "$lib/utils";
	import type { ArtTileListData } from "$lib/typings/client/component";
	import { CTXType, getValidName } from "$lib/typings/server/general";

	import ArtTileList from "$lib/components/ArtTileList.svelte";
	import ArtContainer from "$lib/components/common/ArtContainer.svelte";
	import EntryDetailsLayout from "$lib/components/layouts/EntryDetailsLayout.svelte";
	import KeyValueColumn from "$lib/components/common/KeyValueColumn.svelte";

	export let data: PageData;

	const detailColumns = [
		["Length", getFormattedLength(data.song.length)],
		["Released on", getFormattedDate(data.song.released_on)],
	];

	const releaseTileData: ArtTileListData[] = data.releases.map((release) => ({
		id: release.id,
		ctx: CTXType.RELEASE,
		label: getValidName(release.name),
		imageURL: "",
	}));

	const goToReleases = () => {
		goto(RoutePoint.Releases, { song: data.song.id });
	};
</script>

<EntryDetailsLayout id={data.song.id} ctxType={CTXType.SONG} externalSites={data.externalSites}>
	<div class="contents" slot="info_container">
		<ArtContainer imageURL="" link={null} />
		<div class="title_container">
			<h1>{getValidName(data.song.name, $preferredTitleLocale)}</h1>
			<div class="artists">
				{#each data.artists as { id, name }, i}
					<a href={withParameter(RoutePoint.Artist, { id }).route}>
						{getValidName(name, $preferredTitleLocale)}
					</a>
					{#if i < data.artists.length - 1}
						<span class="mr-1">,</span>
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

	<div class="contents" slot="content_container">
		<div class="h-fit w-full pb-8 2xl:max-w-4xl lg:max-w-3xl md:pb-0 md:pr-8">
			<ArtTileList heading="Releases" tiles={releaseTileData} onAllClick={goToReleases} />
		</div>
	</div>
</EntryDetailsLayout>

<style>
	.title_container {
		--at-apply: flex flex-col items-center md: items-start font-head;
	}

	.title_container h1 {
		--at-apply: text-4xl font-medium text-100;
	}

	.title_container .artists {
		--at-apply: flex pt-1 text-sm text-200;
	}
</style>
