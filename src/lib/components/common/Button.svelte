<script lang="ts">
	export let label: string | null = null;
	export let styleType: 'default' | 'none' = 'default';

	const styles = {
		default: "font-sans text-sm text-custom-300 fill-current",
		none: ""
	}
</script>

<button
	on:click|preventDefault
	class="flex justify-center items-center rounded transition-colors duration-150 gap-2 {styles[styleType]} {$$props.class}"
>
	<slot />
	{#if label}
		<span>{label}</span>
	{/if}
</button>
