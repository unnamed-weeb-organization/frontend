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
			gap-2 font-head text-sm;
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
		--at-apply: hover: text-accent-300;
	}

	button.iconButton {
		--at-apply: fill-custom-400 active: bg-secondary;
	}

	button.labelButton {
		--at-apply: text-accent-300 bg-accent-secondary hover: bg-accent-tertiary;
	}

	button.bordered {
		--at-apply: border-2 border-custom-tertiary hover: border-accent-tertiary hover: text-accent-300;
	}
</style>
