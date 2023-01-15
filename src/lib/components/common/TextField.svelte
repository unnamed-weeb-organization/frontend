<script lang="ts">
	import type { TextFieldType } from "$lib/typings/client/component";

	export let name: string;
	export let type: TextFieldType = "text";
	export let placeholder: string;
	export let value: string = "";
</script>

<input {name} {type} {placeholder} {value} class={$$props.class} />

<style lang="postcss">
	input {
		@apply w-full h-10 px-2 rounded
        transition-colors duration-150
        font-head text-sm text-custom-200;
	}

	input::placeholder {
		@apply font-head text-sm text-custom-400;
	}

	input:focus {
		@apply bg-custom-tertiary;
	}
</style>
