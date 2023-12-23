<script lang="ts">
	import type { TextFieldType } from "$lib/typings/client/component";

	export let name: string;
	export let type: TextFieldType = "text";
	export let placeholder: string;
	export let value = "";
</script>

<input {name} {type} {placeholder} {value} class={$$props.class} />

<style>
	input {
		--at-apply: w-full h-10 px-2 rounded transition-colors duration-150 text-sm text-200;
	}

	input::placeholder {
		--at-apply: text-sm text-400;
	}

	input:focus {
		--at-apply: bg-tertiary;
	}
</style>
