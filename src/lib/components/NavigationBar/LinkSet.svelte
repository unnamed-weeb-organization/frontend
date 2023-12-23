<script lang="ts">
	import { goto } from "$app/navigation";
	import DropdownMenu from "$lib/components/common/DropdownMenu.svelte";

	let showMore = false;

	const moreRouteItems: Record<string, string> = {
		Artists: "/artists",
		Anime: "/anime",
		Releases: "/releases",
		Songs: "/songs",
	};

	function onMoreItemPress(item: string | number) {
		showMore = false;
		goto(moreRouteItems[item]);
	}
</script>

<div class="relative inline-flex items-end">
	<div class="hidden select-none gap-2 text-sm text-300 md:inline-flex">
		{#each Object.entries(moreRouteItems) as [name, route]}
			<a href={route}>{name}</a>
		{/each}
	</div>

	<button
		class="inline-flex items-center rounded px-1 text-sm text-400 transition-colors md:hidden hover:(bg-secondary text-300)"
		aria-label="More"
		class:expanded={showMore}
		on:click|preventDefault={() => (showMore = !showMore)}
	>
		<span>More</span>
		<div class="i-uil-arrow-down h-4 w-4" />
	</button>

	{#if showMore}
		<DropdownMenu
			class="top-12 -left-2"
			onSelect={onMoreItemPress}
			onDismiss={() => (showMore = false)}
			items={Object.keys(moreRouteItems)}
		/>
	{/if}
</div>

<style>
	.more {
		/* prettier-ignore */
		--at-apply: flex lg:hidden items-center -ml-2 pl-2 rounded fill-current
		text-400 hover:text-300 hover:bg-secondary;
	}

	.more.expanded {
		--at-apply: bg-secondary text-300;
	}
</style>
