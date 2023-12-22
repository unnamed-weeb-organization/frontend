<script lang="ts">
	import { CTXRouteViewLocation, withParameter } from "$lib/routes";
	import type { ArtTileListData } from "$lib/typings/client/component";
	import Button from "$lib/components/common/Button.svelte";
	import ArtTile from "$lib/components/common/ArtTile.svelte";

	export let heading: string;
	export let onAllClick: () => void;
	export let tiles: ArtTileListData[];
</script>

<div class="max-w-full w-fit flex flex-col">
	<div class="flex items-center justify-between pb-1">
		<h3 class="text-base font-medium">{heading}</h3>
		<Button styleType="iconButton" on:click={onAllClick}>
			<div class="i-uil-arrow-right h-8 w-8" />
		</Button>
	</div>

	<div class="flex gap-2 overflow-x-auto">
		{#each tiles as tile}
			<ArtTile
				label={tile.label}
				link={withParameter(CTXRouteViewLocation[tile.ctx], { id: tile.id }).route}
			/>
		{/each}
	</div>
</div>
