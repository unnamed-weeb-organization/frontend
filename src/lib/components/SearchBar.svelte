<script lang="ts">
	import SearchIcon from "$lib/assets/icons/magnifier.svg?component";
</script>

<div class="search_wrapper">
	<div class="icon_wrapper">
		<SearchIcon />
	</div>
	<input placeholder="Search" />
</div>

<style lang="postcss">
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
</style>
