<script lang="ts">
	export let label: string | null = null;
	export let styleType: keyof typeof styles = "default";

	const styles = {
		default: "default",
		hoverable: "default hoverable",
		iconButton: "iconButton",
		labelButton: "padded labelButton",
		bordered: "default padded bordered",
		none: "",
	};
</script>

<button {...$$props} on:click class="{styles[styleType]} {$$props.class}">
	<slot />
	{#if label}
		<span>{label}</span>
	{/if}
</button>

<style>
	button {
		--at-apply: flex justify-center items-center rounded transition-colors ease-in duration-150
			gap-2 text-sm;
	}

	button:disabled {
		--at-apply: cursor-not-allowed opacity-50;
	}

	button.padded {
		--at-apply: px-4 py-1;
	}

	button.default {
		--at-apply: text-300 fill-current;
	}

	button.hoverable {
		/* prettier-ignore */
		--at-apply: hover:text-accent-300;
	}

	button.iconButton {
		/* prettier-ignore */
		--at-apply: fill-400 active:bg-secondary;
	}

	button.labelButton {
		/* prettier-ignore */
		--at-apply: text-accent-300 bg-accent-secondary hover:bg-accent-tertiary;
	}

	button.bordered {
		/* prettier-ignore */
		--at-apply: border-2 border-tertiary hover:border-accent-tertiary hover:text-accent-300;
	}
</style>
