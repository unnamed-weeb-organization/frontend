<script lang="ts">
	export let name: string;
	export let placeholder: string;
	export let value = "";
</script>

<textarea {name} {placeholder} {value} class={$$props.class} />

<style>
	textarea {
		--at-apply: w-full h-20 p-2 rounded transition-colors duration-150 font-head text-sm
			text-custom-200;
	}

	textarea::placeholder {
		--at-apply: font-head text-sm text-custom-400;
	}

	textarea:focus {
		--at-apply: bg-custom-tertiary;
	}
</style>
