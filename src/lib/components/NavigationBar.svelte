<script lang="ts">
	import AccountIcon from "$lib/assets/icons/account.svg?component";
	import SearchIcon from "$lib/assets/icons/magnifier.svg?component";
</script>

<div class="navbar">
	<span class="hidden sm:block text-md font-head select-none">unnamed_weeb_music_database</span>

	<div class="flex-1" />

	<div class="search_wrapper">
		<div class="icon_wrapper">
			<SearchIcon />
		</div>
		<input placeholder="Search" />
	</div>

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

	.search_wrapper {
		@apply flex items-center h-8 md:w-64 bg-custom-secondary rounded-md px-2 gap-2
		transition-colors duration-150 ease-in;
	}
	.search_wrapper:active {
		@apply bg-custom-tertiary;
	}

	.search_wrapper input {
		background: none;
		border-radius: inherit;
		@apply flex-grow text-custom-200 text-sm;
	}

	.search_wrapper input::placeholder {
		@apply font-head text-sm whitespace-pre-line text-custom-400;
	}

	.search_wrapper .icon_wrapper {
		@apply w-5 h-5 bg-transparent fill-custom-400;
	}

	.icon_wrapper {
		@apply flex justify-center items-center h-10 w-10
        bg-custom-secondary rounded-md overflow-hidden
        fill-current;
	}

	.account {
		@apply fill-custom-400 transition-colors duration-150 ease-in;
	}

	.account:active {
		@apply bg-custom-tertiary fill-custom-300;
	}
</style>
