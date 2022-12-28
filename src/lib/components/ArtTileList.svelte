<script lang="ts">
	import type { ArtTileListData } from "$lib/typings/client/general";
	import { CTXRouteRelation, withParameter } from "$lib/routes.js";
	import Button from "$lib/components/common/Button.svelte";
	import ArtTile from "$lib/components/common/ArtTile.svelte";
	import RightArrowIcon from "$lib/assets/icons/right-arrow.svg?component";

	export let heading: string;
	export let onAllClick: () => void;
	export let tiles: ArtTileListData[];
</script>

<div class="flex flex-col">
	<div class="flex justify-between items-center pb-1">
		<h3 class="font-head font-medium text-base">{heading}</h3>
		<Button styleType="iconButton" on:click={onAllClick}>
			<RightArrowIcon class="h-8 w-8" />
		</Button>
	</div>

	<div class="tile_list">
		{#each tiles as tile}
			<ArtTile
				label={tile.label}
				imageURL={tile.imageURL}
				link={withParameter(CTXRouteRelation[tile.ctx], { id: tile.id }).route}
			/>
		{/each}
	</div>
</div>

<style lang="postcss">
	.tile_list {
		@apply flex flex-row overflow-x-auto justify-between gap-2;
	}
</style>
