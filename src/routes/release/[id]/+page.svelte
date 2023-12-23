<script lang="ts">
	import type { PageData } from "./$types";
	import { preferredTitleLocale } from "$lib/settings";
	import { RoutePoint, withParameter } from "$lib/routes";
	import { CTXType, getValidName } from "$lib/typings/server/general";

	import SongList from "$lib/components/SongList.svelte";
	import ArtContainer from "$lib/components/common/ArtContainer.svelte";
	import EntryDetailsLayout from "$lib/components/layouts/EntryDetailsLayout.svelte";
	import KeyValueColumn from "$lib/components/common/KeyValueColumn.svelte";

	export let data: PageData;

	const artistRouteOptions = withParameter(RoutePoint.Artist, { id: data.albumArtist.id });
	const detailColumns = [
		["Release Date", "2013"],
		["Type", data.release.release_type],
		["Language", "Japanese"],
		["Tracks", "9"],
		["Length", "47 Minutes, 52 Seconds"],
	];
</script>

<EntryDetailsLayout
	id={data.release.id}
	ctxType={CTXType.RELEASE}
	externalSites={data.externalSites}
>
	<div class="contents" slot="info_container">
		<ArtContainer imageURL="" link={null} />
		<div class="title_container">
			<h1>{getValidName(data.release.name, $preferredTitleLocale)}</h1>
			<a href={artistRouteOptions.route}>
				{getValidName(data.albumArtist.name, $preferredTitleLocale)}
			</a>
		</div>
	</div>

	<div class="contents" slot="column_container">
		{#each detailColumns as [key, value]}
			<KeyValueColumn {key} {value} />
		{/each}
	</div>

	<div class="contents" slot="content_container">
		<SongList
			songs={data.songs}
			artists={data.artists}
			class="h-fit 2xl:max-w-4xl lg:max-w-3xl md:pr-8"
		/>
	</div>
</EntryDetailsLayout>

<style>
	.title_container {
		/* prettier-ignore */
		--at-apply: flex flex-col items-center md:items-start font-head;
	}

	.title_container h1 {
		--at-apply: text-4xl font-medium text-100;
	}

	.title_container a {
		--at-apply: text-sm text-200;
	}
</style>
