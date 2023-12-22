<script lang="ts">
	import type { Song } from "$lib/typings/server/song";
	import type { Artist } from "$lib/typings/server/artist";
	import SongListItem from "$lib/components/common/SongListItem.svelte";

	export let songs: Song[];
	export let artists: Map<string, Artist[]>;
</script>

<div class="flex flex-col w-full {$$props.class}">
	{#each songs as song, i}
		<SongListItem {song} artists={artists.get(song.id) ?? []} itemNo={i + 1} />
	{/each}
</div>
