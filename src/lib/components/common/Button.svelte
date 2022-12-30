<script lang="ts">
	export let label: string | null = null;
	export let styleType: keyof typeof styles = "default";

	const styles = {
		default: "font-head text-sm text-custom-300 fill-current",
		iconButton: "fill-custom-400 active:bg-custom-secondary",
		labelButton: "font-head text-sm text-accent-300 rounded px-4 py-1 bg-accent-secondary hover:bg-accent-tertiary",
		none: ""
	};
</script>

<button {...$$props} on:click class="{styles[styleType]} {$$props.class}">
	<slot />
	{#if label}
		<span>{label}</span>
	{/if}
</button>

<style lang="postcss">
	button {
		@apply flex justify-center items-center
		rounded duration-150 gap-2;
	}

	button:hover,
	button:focus,
	button:focus-within {
		@apply transition-colors ease-in;
	}
</style>
