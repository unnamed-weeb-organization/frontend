<script lang="ts">
	import { slide } from "svelte/transition";
	import Button from "$lib/components/common/Button.svelte";

	import SearchIcon from "$lib/assets/icons/magnifier.svg?component";
	import CloseIcon from "$lib/assets/icons/close.svg?component";
	import DismissBackground from "$lib/components/common/DismissBackground.svelte";

	let showMobileSearch = false;
	let searchQuery = "";
</script>

<div class="desktop_search">
	<Button styleType="none" class="w-5 h-5 fill-custom-400">
		<SearchIcon class="h-5 w-5" />
	</Button>
	<input bind:value={searchQuery} placeholder="Search" />
</div>

<div class="flex md:hidden items-center justify-center">
	<Button
		class="w-8 h-8"
		styleType="iconButton"
		aria-label="Search"
		on:click={() => (showMobileSearch = !showMobileSearch)}
	>
		<SearchIcon class="h-6 w-6" />
	</Button>
</div>

{#if showMobileSearch}
	<div transition:slide={{ duration: 150 }} class="mobile_search">
		<div class="flex h-16 items-center px-4 gap-2 z-10">
			<input bind:value={searchQuery} placeholder="Search" class="flex-1" />
			<Button
				class="w-8 h-8"
				styleType="iconButton"
				on:click={() => (showMobileSearch = false)}
			>
				<CloseIcon class="h-6 w-6" />
			</Button>
		</div>

		<DismissBackground styleType="dimmed" onDismiss={() => (showMobileSearch = false)} />
	</div>
{/if}

<style lang="postcss">
	.desktop_search {
		@apply hidden md:flex items-center w-64
        bg-custom-secondary rounded-md px-2 gap-2
        transition-colors duration-150 ease-in;
	}

	.desktop_search:active {
		@apply bg-custom-tertiary;
	}

	.mobile_search {
		@apply absolute top-0 left-0 w-full h-full bg-custom-background flex flex-col z-10;
	}

	input {
		background: none;
		border-radius: inherit;
		@apply h-8 flex-grow
        text-custom-200 font-head text-sm;
	}

	input::placeholder {
		@apply text-custom-400;
	}
</style>
