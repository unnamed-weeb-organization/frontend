<script lang="ts">
	export let label: string | null = null;
	export let styleType: keyof typeof styles = "default";

	const styles = {
		default: "default",
		hoverable: "default hoverable",
		iconButton: "iconButton",
		labelButton: "padded labelButton",
		bordered: "default padded bordered",
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
		rounded transition-colors ease-in duration-150 gap-2
		font-head text-sm;
	}

	button:disabled {
		@apply cursor-not-allowed opacity-50;
	}

	button.padded {
		@apply px-4 py-1;
	}

	button.default {
		@apply text-custom-300 fill-current;
	}

	button.hoverable {
		@apply hover:text-accent-300;
	}

	button.iconButton {
		@apply fill-custom-400 active:bg-custom-secondary;
	}

	button.labelButton {
		@apply text-accent-300 bg-accent-secondary hover:bg-accent-tertiary;
	}

	button.bordered {
		@apply border-2 border-custom-tertiary hover:border-accent-tertiary hover:text-accent-300;
	}
</style>
