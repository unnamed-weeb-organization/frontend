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

<div class="relative h-8 max-w-xs flex items-center">
	<div class="i-uil-search absolute inset-y-auto left-2 h-5 w-5 text-300" />
	<input
		bind:value
		{placeholder}
		class="h-8 inline-flex rounded bg-secondary pb-[1px] pl-10 placeholder:(text-sm text-300) focus:(ring-1 ring-accent-300)"
	/>
</div>

<!-- {#if differentiateMobile}
	<div class="flex items-center justify-center md:hidden">
		<Button
			class="h-8 w-8"
			styleType="iconButton"
			aria-label="Search"
			on:click={onMobileSearchButtonClick}
		>
			<div class="i-uil-search h-6 w-6" />
		</Button>
	</div>
{/if}

{#if showMobileSearch && differentiateMobile}
	<div transition:slide={{ duration: 150 }} class="mobile_search">
		<div class="z-10 h-16 flex items-center gap-2 px-4">
			<input bind:value placeholder="Search" class="flex-1" />
			<Button class="h-8 w-8" styleType="iconButton" on:click={() => (showMobileSearch = false)}>
				<div class="i-uil-x h-6 w-6" />
			</Button>
		</div>

		<DismissBackground styleType="dimmed" onDismiss={() => (showMobileSearch = false)} />
	</div>
{/if} -->

<!-- <style>
	.desktop_search {
		--at-apply: flex items-center w-64 rounded-md px-2 gap-2 transition-colors duration-150 ease-in;
	}

	.desktop_search.mobileSupport {
		/* prettier-ignore */
		--at-apply: hidden md:flex;
	}

	.desktop_search.default {
		--at-apply: bg-secondary;
	}

	.desktop_search.bordered {
		--at-apply: border border-tertiary;
	}

	.desktop_search.default:active {
		--at-apply: bg-tertiary;
	}

	.desktop_search.bordered:active {
		--at-apply: bg-secondary border-transparent;
	}

	.mobile_search {
		--at-apply: absolute top-0 left-0 w-full h-full bg-background flex flex-col z-10;
	}

	input {
		background: none;
		border-radius: inherit;
		--at-apply: h-8 flex-grow text-200 text-sm;
	}

	input::placeholder {
		--at-apply: text-400;
	}
</style> -->
