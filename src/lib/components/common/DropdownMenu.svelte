<script lang="ts">
	import { slide } from "svelte/transition";
	import DismissBackground from "$lib/components/common/DismissBackground.svelte";

	export let items: string[];
	export let onDismiss: () => void;
	export let onSelect: (item: string) => void;
	export let reverse: boolean = false;
</script>

<div transition:slide={{ duration: 150 }} class="wrapper {$$props.class}" class:reverse>
	{#each items as item}
		<option on:click|preventDefault={() => onSelect(item)}>{item}</option>
	{/each}
	<div class="elevation-layer elevation-background-1" />
</div>

<DismissBackground {onDismiss} />

<style lang="postcss">
	.wrapper {
		@apply absolute z-10 max-h-96 min-w-[7rem] max-w-2xl
        overflow-y-auto bg-custom-background
        rounded shadow-md flex flex-col;
	}

	.wrapper.reverse {
		@apply flex-col-reverse;
	}

	option {
		@apply relative flex flex-grow items-center h-10 px-2 select-none;
	}

	option:hover {
		@apply bg-accent-tertiary text-accent-100;
	}
</style>
