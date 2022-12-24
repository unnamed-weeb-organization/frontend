<script lang="ts">
	import { RoutePoint, Route, goto } from "$lib/routes";

	import UserCard from "$lib/components/UserCard.svelte";
	import Button from "$lib/components/common/Button.svelte";
	import SearchBar from "$lib/components/common/SearchBar.svelte";

	import AccountIcon from "$lib/assets/icons/account.svg?component";
	import DownArrow from "$lib/assets/icons/down-arrow.svg?component";
	import DropdownMenu from "$lib/components/common/DropdownMenu.svelte";

	let showMore = false;
	let showUserCard = false;

	const moreRouteItems = {
		Artists: RoutePoint.Artists,
		Anime: RoutePoint.AnimeList,
		Releases: RoutePoint.Releases,
		Songs: RoutePoint.Songs
	};

	function onMoreItemPress(item: string | number) {
		showMore = false;
		goto(moreRouteItems[item]);
	}
</script>

<nav>
	<a href={Route[RoutePoint.Home].route} class="font-head select-none">
		<span class="hidden md:block">unnamed_weeb_music_database</span>
		<span class="md:hidden">uwmdb</span>
	</a>

	<div class="links">
		{#each Object.entries(moreRouteItems) as [name, route]}
			<a href={Route[route].route}>{name}</a>
		{/each}

		<button
			class="more"
			class:expanded={showMore}
			on:click|preventDefault={() => (showMore = !showMore)}
		>
			<span>More</span>
			<DownArrow class="h-6 w-6" />
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

	<div class="flex-1" />
	<SearchBar />

	<div class="account">
		<Button
			class="h-10 w-10 bg-custom-secondary focus-within:bg-custom-tertiary focus-within:fill-custom-200"
			on:click={() => (showUserCard = !showUserCard)}
		>
			<AccountIcon class="h-9 w-9" />
		</Button>

		{#if showUserCard}
			<UserCard class="top-14 right-2" onDismiss={() => (showUserCard = false)} />
		{/if}
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply fixed top-0 left-0 w-full flex items-center bg-custom-background
        px-6 border-b-2 border-b-custom-tertiary gap-4;
		height: var(--navbar_height);
	}

	.links {
		@apply ml-2 relative flex items-end gap-2 text-sm select-none;
	}

	.links > * {
		@apply transition-colors duration-200 ease-in-out;
	}

	.links > a {
		@apply hidden lg:block text-custom-400 hover:text-custom-300;
	}

	.more {
		@apply flex lg:hidden items-center -ml-2 pl-2 rounded fill-current
        font-head text-custom-400 hover:text-custom-300
        hover:bg-custom-secondary;
	}

	.more.expanded {
		@apply bg-custom-secondary text-custom-300;
	}

	.account {
		@apply relative flex;
	}
</style>
