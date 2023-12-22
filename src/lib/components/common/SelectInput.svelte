<script lang="ts">
	import DropdownMenu from "./DropdownMenu.svelte";

	let isOpen = false;
	let buttonElement: HTMLButtonElement | null = null;
	let dropdownReverse = false;

	export let name: string | null = null;
	export let options: string[];
	export let selected: string;
	export let onSelect: (item: string) => void;

	const onItemSelect = (item: string) => {
		isOpen = false;
		onSelect(item);
	};

	// check whether the dialog should open to top or bottom
	$: if (buttonElement && isOpen) {
		const { innerHeight } = window;
		const { bottom } = buttonElement.getBoundingClientRect();
		const dropdownHeight = 40 * options.length;

		if (innerHeight - bottom < dropdownHeight) {
			dropdownReverse = true;
		} else {
			dropdownReverse = false;
		}
	}
</script>

<div class="relative w-full">
	<button bind:this={buttonElement} on:click|preventDefault={() => (isOpen = !isOpen)}>
		<span class="text-200">{selected}</span>
		<div
			class="i-uil-arrow-down h-6 w-6 fill-300 transition-transform duration-150{isOpen
				? 'rotate-180'
				: 'rotate-0'}"
		/>
	</button>
	{#if name}
		<input {name} type="hidden" value={selected} />
	{/if}
	{#if isOpen}
		<DropdownMenu
			reverse={dropdownReverse}
			class="drp left-0 w-full text-sm{dropdownReverse ? 'bottom-11' : 'top-11'}"
			items={options}
			onSelect={onItemSelect}
			onDismiss={() => (isOpen = false)}
		/>
	{/if}
</div>

<style>
	button {
		--at-apply: relative flex items-center justify-between px-2 outline outline-1
			outline-custom-tertiary rounded h-10 w-full;
	}

	button:active {
		--at-apply: outline-none bg-secondary;
	}

	span {
		--at-apply: font-head text-sm text-200;
	}
</style>
