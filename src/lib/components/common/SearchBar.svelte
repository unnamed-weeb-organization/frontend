<script lang="ts">
	import SearchIcon from "$lib/assets/icons/magnifier.svg?component";
	import Button from "$lib/components/common/Button.svelte";
</script>

<div class="search_wrapper">
	<Button class="w-6 h-6 md:w-5 md:h-5 bg-transparent fill-custom-400">
		<SearchIcon class="h-6 w-6" />
	</Button>

	<input placeholder="Search" />
</div>

<style lang="postcss">
	.search_wrapper {
		@apply flex items-center justify-center md:justify-start
        h-8 w-8 md:w-56 lg:w-64
        md:bg-custom-secondary rounded-md md:px-2 gap-2
        transition-colors duration-150 ease-in;
	}

	.search_wrapper:active {
		@apply md:bg-custom-tertiary;
	}

	input {
		background: none;
		border-radius: inherit;
		@apply hidden md:block h-8 flex-grow text-custom-200 font-head text-sm;
	}

	input::placeholder {
		@apply text-custom-400;
	}
</style>
