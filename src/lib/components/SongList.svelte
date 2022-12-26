<script lang="ts">
	import type { Song } from "$lib/typings/server/song";
	import SongListItem from "$lib/components/common/SongListItem.svelte";

	export let songs: Song[];
</script>

<div class="flex flex-col w-full {$$props.class}">
	{#each songs as song, i}
		<SongListItem {song} itemNo={i + 1} />
	{/each}
</div>
