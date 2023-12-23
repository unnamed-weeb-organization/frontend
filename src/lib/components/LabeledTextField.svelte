<script lang="ts">
	import { slide } from "svelte/transition";
	import type { TextFieldType } from "$lib/typings/client/component";
	import TextField from "$lib/components/common/TextField.svelte";

	export let id: string;
	export let inputType: TextFieldType;
	export let placeholder: string;

	export let label: string;
	export let errorHint: string | undefined;
</script>

<label for={id}>
	<div class="label_container">
		<h2>{label}</h2>
		{#if errorHint}
			<span in:slide={{ duration: 150 }}>{errorHint}</span>
		{/if}
	</div>
	<TextField type={inputType} name={id} {placeholder} />
</label>

<style>
	label {
		--at-apply: flex flex-col gap-1 w-full;
	}

	.label_container {
		--at-apply: flex flex-row gap-2;
	}

	.label_container span {
		--at-apply: text-red-500 font-normal text-xs;
	}

	h2 {
		--at-apply: text-sm text-200;
	}
</style>
