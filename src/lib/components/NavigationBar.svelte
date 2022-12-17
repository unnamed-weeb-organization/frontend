<script lang="ts">
	import AccountIcon from "$lib/assets/icons/account.svg?component";
	import SearchBar from "$lib/components/SearchBar.svelte";
</script>

<div class="navbar">
	<span class="hidden sm:block text-md font-head select-none">unnamed_weeb_music_database</span>
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

	.account {
		@apply h-10 w-10 bg-custom-secondary fill-custom-400
        transition-colors duration-150 ease-in;
	}

	.account:active {
		@apply bg-custom-tertiary fill-custom-300;
	}
</style>
