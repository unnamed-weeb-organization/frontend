<script lang="ts">
	import { slide } from "svelte/transition";
	import DismissBackground from "$lib/components/common/DismissBackground.svelte";

	export let items: string[];
	export let onDismiss: () => void;
	export let onSelect: (item: string) => void;
	export let reverse = false;
</script>

<div transition:slide={{ duration: 150 }} class="wrapper {$$props.class}" class:reverse>
	{#each items as item}
		<option on:click|preventDefault={() => onSelect(item)}>{item}</option>
	{/each}
</div>

<DismissBackground {onDismiss} />

<style>
	.wrapper {
		--at-apply: absolute z-10 max-h-96 min-w-[7rem] max-w-2xl overflow-y-auto bg-custom-secondary
			rounded shadow-md flex flex-col border border-custom-tertiary;
	}

	.wrapper.reverse {
		--at-apply: flex-col-reverse;
	}

	option {
		--at-apply: relative flex flex-grow items-center h-10 px-2 select-none transition-colors
			duration-150 ease-in;
	}

	option:hover {
		--at-apply: bg-accent-secondary text-accent-100;
	}
</style>
