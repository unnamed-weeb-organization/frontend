<script lang="ts">
	export let name: string;
	export let placeholder: string;
	export let value = "";
</script>

<textarea {name} {placeholder} {value} class={$$props.class} />

<style>
	textarea {
		--at-apply: w-full h-20 p-2 rounded transition-colors duration-150 text-sm text-200;
	}

	textarea::placeholder {
		--at-apply: text-sm text-400;
	}

	textarea:focus {
		--at-apply: bg-tertiary;
	}
</style>
