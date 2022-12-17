<script lang="ts">
	import { slide } from "svelte/transition";

	export let items: string[];
	export let onSelect: (item: string) => void;
	export let onDismiss: () => void;
</script>

<div transition:slide={{ duration: 150 }} class="container {$$props.class}">
	{#each items as item}
		<div class="item" on:click={() => onSelect(item)}>
			{item}
		</div>
	{/each}
</div>

<div on:click={onDismiss} class="z-0 fixed top-0 left-0 opacity-0 w-[100vw] h-[100vh]" />

<style lang="postcss">
	.container {
		@apply absolute z-10 max-h-96 min-w-[7rem] max-w-2xl
        overflow-y-auto bg-custom-background
        rounded shadow-xl;
	}

	.item {
		@apply flex items-center h-10 px-2 hover:bg-custom-secondary;
	}
</style>
