<script lang="ts">
	import DropdownMenu from "./DropdownMenu.svelte";

	let isOpen = false;

    export let options: string[];
    export let selected: string;
    export let onSelect: (item: string) => void;

    const onItemSelect = (item: string) => {
        isOpen = false;
        onSelect(item);
    }
</script>

<div class="w-full relative">
	<button on:click={() => (isOpen = !isOpen)}>
		<span class="text-custom-200">{selected}</span>
	</button>
	{#if isOpen}
		<DropdownMenu
			class="w-full top-11 left-0 font-head text-sm"
			items={options}
			onSelect={onItemSelect}
			onDismiss={() => (isOpen = false)}
		/>
	{/if}
</div>

<style lang="postcss">
	button {
		@apply relative flex items-center px-2
        outline outline-1 outline-custom-tertiary rounded h-10 w-full;
	}

	button:active {
		@apply outline-none bg-custom-secondary;
	}

	span {
		@apply font-head text-sm text-custom-200;
	}
</style>
