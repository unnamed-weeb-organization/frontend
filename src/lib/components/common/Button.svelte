<script lang="ts">
	export let label: string | null = null;
	export let styleType: 'default' | 'none' = 'default';

	const styles = {
		default: "font-sans text-sm text-custom-300 fill-current",
		none: ""
	}
</script>

<button on:click|preventDefault class="{styles[styleType]} {$$props.class}">
	<slot />
	{#if label}
		<span>{label}</span>
	{/if}
</button>

<style lang="postcss">
	button {
		@apply flex justify-center items-center
		rounded duration-150 gap-2
	}

	button:hover,
	button:focus,
	button:focus-within {
		@apply transition-colors
	}
</style>
