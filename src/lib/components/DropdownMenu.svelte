<script lang="ts">
	import { slide } from "svelte/transition";

	export let items: string[];
	export let onSelect: (item: string) => void;
	export let onDismiss: () => void;
</script>

<div transition:slide={{ duration: 150 }} class="wrapper {$$props.class}">
	{#each items as item}
		<option class="item" on:click={() => onSelect(item)}>
			{item}
		</option>
	{/each}

	<div class="elevation-layer elevation-background-1" />
</div>

<div
	on:click={onDismiss}
	on:keypress={onDismiss}
	class="z-0 fixed top-0 left-0 opacity-0 w-[100vw] h-[100vh]"
/>

<style lang="postcss">
	.wrapper {
		@apply absolute z-10 max-h-96 min-w-[7rem] max-w-2xl
        overflow-y-auto bg-custom-background
        rounded shadow-xl flex flex-col;
	}

	.item {
		@apply relative flex flex-grow items-center h-10 px-2;
	}

	.item:hover {
		@apply bg-accent-tertiary text-accent-100;
	}
</style>
