<script lang="ts">
	import AccountIcon from "$lib/assets/icons/account.svg?component";
	import SearchBar from "$lib/components/SearchBar.svelte";
</script>

<div class="navbar">
	<a href="/" class="font-head select-none">
		<span class="hidden md:block">unnamed_weeb_music_database</span>
		<span class="md:hidden">uwmdb</span>
	</a>

	<div class="links">
		<a href="/artists">Albums</a>
		<a href="/artists">Artists</a>
		<a href="/artists">Anime</a>
		<a href="/artists">Songs</a>
	</div>

	<div class="flex-1" />

	<SearchBar />
	<div class="icon_wrapper account" aria-label="account">
		<AccountIcon class="h-8 w-8" />
	</div>
</div>

<style lang="postcss">
	.navbar {
		@apply fixed top-0 left-0 w-full flex items-center bg-custom-background
        px-6 border-b-2 border-b-custom-tertiary gap-4;
		height: var(--navbar_height);
	}

	.links {
		@apply hidden ml-2 lg:flex items-end gap-2 text-custom-400 text-sm;
	}

	.account {
		@apply h-10 w-10 bg-custom-secondary fill-custom-400
        transition-colors duration-150 ease-in;
	}

	.account:active {
		@apply bg-custom-tertiary fill-custom-300;
	}
</style>
