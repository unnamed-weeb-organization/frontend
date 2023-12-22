<script lang="ts">
	import { slide } from "svelte/transition";
	import Button from "$lib/components/common/Button.svelte";

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
		<div class="h-5 w-5 i-uil-search" />
	</Button>
	<input bind:value {placeholder} />
</div>

{#if differentiateMobile}
	<div class="flex md:hidden items-center justify-center">
		<Button
			class="w-8 h-8"
			styleType="iconButton"
			aria-label="Search"
			on:click={onMobileSearchButtonClick}
		>
			<div class="h-6 w-6 i-uil-search" />
		</Button>
	</div>
{/if}

{#if showMobileSearch && differentiateMobile}
	<div transition:slide={{ duration: 150 }} class="mobile_search">
		<div class="flex h-16 items-center px-4 gap-2 z-10">
			<input bind:value placeholder="Search" class="flex-1" />
			<Button class="w-8 h-8" styleType="iconButton" on:click={() => (showMobileSearch = false)}>
				<div class="h-6 w-6 i-uil-x" />
			</Button>
		</div>

		<DismissBackground styleType="dimmed" onDismiss={() => (showMobileSearch = false)} />
	</div>
{/if}

<style>
	.desktop_search {
		--at-apply: flex items-center w-64 rounded-md px-2 gap-2 transition-colors duration-150 ease-in;
	}

	.desktop_search.mobileSupport {
		--at-apply: hidden md: flex;
	}

	.desktop_search.default {
		--at-apply: bg-custom-secondary;
	}

	.desktop_search.bordered {
		--at-apply: border border-custom-tertiary;
	}

	.desktop_search.default:active {
		--at-apply: bg-custom-tertiary;
	}

	.desktop_search.bordered:active {
		--at-apply: bg-custom-secondary border-transparent;
	}

	.mobile_search {
		--at-apply: absolute top-0 left-0 w-full h-full bg-custom-background flex flex-col z-10;
	}

	input {
		background: none;
		border-radius: inherit;
		--at-apply: h-8 flex-grow text-custom-200 font-head text-sm;
	}

	input::placeholder {
		--at-apply: text-custom-400;
	}
</style>
