<script lang="ts">
	import type { Song } from "$lib/typings/server/song";
	import Button from "$lib/components/common/Button.svelte";
	import VerticalMenuIcon from "$lib/assets/icons/vertical_menu.svg?component";
	import { RoutePoint, withParameter } from "$lib/routes.js";

	export let songs: Song[];

	const getTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time - minutes * 60);
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};
</script>

<div class="flex flex-col w-full {$$props.class}">
	{#each songs as song, i}
		<div class="flex h-12 items-center text-sm border-b-2 border-custom-secondary px-2">
			<span class="text-xs text-custom-400 mr-4">{i + 1}</span>
			<a
				href={withParameter(RoutePoint.Song, { id: song.id }).route}
				class="text-custom-200 flex-1"
			>
				{song.name}
			</a>
			<div class="flex gap-1 text-custom-300">
				{#each song.artists as { id, name }, i}
					<a href={withParameter(RoutePoint.Artist, { id }).route}>{name}</a>
					{#if i < song.artists.length - 1}
						<span>,</span>
					{/if}
				{/each}
			</div>
			<span class="ml-8 mr-4 text-custom-300">{getTime(song.length)}</span>
			<Button styleType="iconButton" class="h-8 w-8 fill-custom-400">
				<VerticalMenuIcon class="h-5 w-5" />
			</Button>
		</div>
	{/each}
</div>
