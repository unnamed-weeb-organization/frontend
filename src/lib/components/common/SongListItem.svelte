<script lang="ts">
	import { getFormattedLength } from "$lib/utils";
	import { RoutePoint, withParameter } from "$lib/routes";
	import { preferredTitleLocale } from "$lib/settings";
	import type { Song } from "$lib/typings/server/song";
	import type { Artist } from "$lib/typings/server/artist";
	import { getValidName } from "$lib/typings/server/general";

	export let song: Song;
	export let artists: Artist[];
	export let itemNo: number;

	const songRouteOptions = withParameter(RoutePoint.Song, { id: song.id });
</script>

<div class="item">
	<span class="text-xs text-400">{itemNo}</span>
	<a class="text-200" href={songRouteOptions.route}>
		{getValidName(song.name, $preferredTitleLocale)}
	</a>
	<div class="flex flex-1 justify-end">
		{#each artists as { id, name }, i}
			<a href={withParameter(RoutePoint.Artist, { id }).route}>
				{getValidName(name, $preferredTitleLocale)}
			</a>
			{#if i < artists.length - 1}
				<span class="mr-1">,</span>
			{/if}
		{/each}
	</div>

	<span>{getFormattedLength(song.length)}</span>
</div>

<style>
	.item {
		--at-apply: relative flex items-center h-12 transition-colors duration-150 text-sm text-300
			border-b-2 border-custom-secondary px-2 gap-4;
	}

	.item:hover {
		--at-apply: bg-secondary;
	}

	.item:last-child {
		--at-apply: border-b-0;
	}
</style>
