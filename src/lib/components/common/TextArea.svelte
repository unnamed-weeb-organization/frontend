<script lang="ts">
	export let name: string;
	export let placeholder: string;
</script>

<textarea {name} {placeholder} class={$$props.class} />

<style lang="postcss">
	textarea {
		@apply w-full h-20 p-2 rounded
        transition-colors duration-150
        font-head text-sm text-custom-200;
	}

	textarea::placeholder {
		@apply font-head text-sm text-custom-400;
	}

	textarea:focus {
		@apply bg-custom-tertiary;
	}
</style>
