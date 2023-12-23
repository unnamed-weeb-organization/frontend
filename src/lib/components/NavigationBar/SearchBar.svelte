<script lang="ts">
	import { slide } from "svelte/transition";
	import DismissBackground from "$lib/components/common/DismissBackground.svelte";

	let showMobileSearch = false;

	export let value: string;
	export let placeholder = "Search";
</script>

<div class="relative hidden h-8 max-w-xs items-center md:flex">
	<div class="search_icon i-uil-search" />
	<input bind:value {placeholder} class="search_input" />
</div>

<button
	class="h-8 w-8 inline-flex items-center justify-center md:hidden"
	on:click|preventDefault={() => (showMobileSearch = !showMobileSearch)}
>
	<div class="i-uil-search h-5 w-5 text-300" />
</button>

{#if showMobileSearch}
	<div
		transition:slide={{ duration: 150 }}
		class="absolute inset-0 z-20 h-screen w-screen flex flex-col bg-background"
	>
		<div class="z-10 h-16 flex items-center gap-2 px-4">
			<div class="relative inline-flex flex-1 items-center">
				<div class="search_icon i-uil-search" />
				<input bind:value placeholder="Search" class="search_input w-full" />
			</div>

			<button
				class="h-8 w-8 inline-flex items-center justify-center"
				on:click|preventDefault={() => (showMobileSearch = false)}
			>
				<div class="i-uil-x h-6 w-6" />
			</button>
		</div>

		<DismissBackground styleType="dimmed" onDismiss={() => (showMobileSearch = false)} />
	</div>
{/if}

<style>
	.search_icon {
		--at-apply: absolute inset-y-auto left-2 h-5 w-5 text-300;
	}

	.search_input {
		/* prettier-ignore */
		--at-apply: h-8 rounded bg-secondary pb-[1px] pl-10 md:inline-flex;
	}

	.search_input::placeholder {
		--at-apply: text-sm text-300;
	}

	.search_input:focus {
		--at-apply: ring-1 ring-accent-300;
	}
</style>
