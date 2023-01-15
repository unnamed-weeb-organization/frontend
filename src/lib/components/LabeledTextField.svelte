<script lang="ts">
	import { slide } from "svelte/transition";
	import TextField from "$lib/components/common/TextField.svelte";

	export let id: TextField["$$prop_def"]["name"];
	export let inputType: TextField["$$prop_def"]["type"];
	export let placeholder: TextField["$$prop_def"]["placeholder"];

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

<style lang="postcss">
	label {
		@apply flex flex-col gap-1 w-full;
	}

	.label_container {
		@apply flex flex-row gap-2 font-head;
	}

	.label_container span {
		@apply text-red-500 font-normal text-xs;
	}

	h2 {
		@apply font-head text-sm text-custom-200;
	}
</style>
