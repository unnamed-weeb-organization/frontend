<script lang="ts">
	export let label: string | null = null;
	export let styleType: keyof typeof styles = "default";

	const req = "font-head text-sm ";
	const textual = req + "rounded px-4 py-1 ";

	const styles = {
		default: req + "text-custom-300 fill-current",
		iconButton: "fill-custom-400 active:bg-custom-secondary",
		labelButton: textual + "text-accent-300 bg-accent-secondary hover:bg-accent-tertiary",
		bordered: textual + "text-custom-300 border-2 border-custom-tertiary hover:border-accent-tertiary hover:text-accent-300",
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
		rounded transition-colors ease-in duration-150 gap-2;
	}

	button:disabled {
		@apply cursor-not-allowed opacity-50;
	}
</style>
