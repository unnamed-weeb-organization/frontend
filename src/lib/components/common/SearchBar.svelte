<script lang="ts">
	import { slide } from "svelte/transition";
	import Button from "$lib/components/common/Button.svelte";

	import SearchIcon from "$lib/assets/icons/magnifier.svg?component";
	import CloseIcon from "$lib/assets/icons/close.svg?component";
	import DismissBackground from "$lib/components/common/DismissBackground.svelte";

	export let value: string;
	export let placeholder = "Search";
	export let differentiateMobile = true;
	export let styleType: "default" | "bordered" = "default";

	let showMobileSearch = false;

	const onMobileSearchButtonClick = (e: MouseEvent) => {
		e.preventDefault();
		showMobileSearch = !showMobileSearch;
	};
</script>

<div class="desktop_search {styleType}" class:mobileSupport={differentiateMobile}>
	<Button styleType="none" class="w-5 h-5 fill-custom-400">
		<SearchIcon class="h-5 w-5" />
	</Button>
	<input bind:value={value} {placeholder} />
</div>

{#if differentiateMobile}
	<div class="flex md:hidden items-center justify-center">
		<Button
			class="w-8 h-8"
			styleType="iconButton"
			aria-label="Search"
			on:click={onMobileSearchButtonClick}
		>
			<SearchIcon class="h-6 w-6" />
		</Button>
	</div>
{/if}

{#if showMobileSearch && differentiateMobile}
	<div transition:slide={{ duration: 150 }} class="mobile_search">
		<div class="flex h-16 items-center px-4 gap-2 z-10">
			<input bind:value={value} placeholder="Search" class="flex-1" />
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
		@apply flex items-center w-64
         rounded-md px-2 gap-2
        transition-colors duration-150 ease-in;
	}

	.desktop_search.mobileSupport {
		@apply hidden md:flex;
	}

	.desktop_search.default {
		@apply bg-custom-secondary;
	}

	.desktop_search.bordered {
		@apply border border-custom-tertiary;
	}

	.desktop_search.default:active {
		@apply bg-custom-tertiary;
	}

	.desktop_search.bordered:active {
		@apply bg-custom-secondary border-transparent;
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
